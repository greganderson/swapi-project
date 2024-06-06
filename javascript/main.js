"use strict";

document.getElementById("fetch-btn").addEventListener("click", async () => {
  const audio = document.getElementById('audio');
  audio.play();

  const swapiData = await getAllSwapiCharacters();
  console.log(swapiData);
  displayCharacters(swapiData);
});

const getSwapiCharacters = async () => {
  const response = await fetch("https://swapi.dev/api/people/");
  const data = await response.json();
  return data.results;
};

const getAllSwapiCharacters = async () => {
  let allCharacters = [];
  let nextPage = "https://swapi.dev/api/people/";

  // Fetch all pages until there are no more pages left
  while (nextPage) {
    const response = await fetch(nextPage);
    const data = await response.json();
    allCharacters = [...allCharacters, ...data.results];
    nextPage = data.next; // The URL of the next page, or null if no more pages
  }

  return allCharacters;
};

const displayCharacters = (characters) => {
  const outputBox = document.getElementById('output');
  outputBox.innerHTML = ''; // Clear previous content

  characters.forEach(character => {
    const characterElement = document.createElement('div');
    characterElement.classList.add('character');
    characterElement.innerHTML = `
            <h2>${character.name}</h2>
            <p>Height: ${character.height}</p>
            <p>Mass: ${character.mass}</p>
            <p>Hair Color: ${character.hair_color}</p>
            <p>Skin Color: ${character.skin_color}</p>
            <p>Eye Color: ${character.eye_color}</p>
            <p>Birth Year: ${character.birth_year}</p>
            <p>Gender: ${character.gender}</p>
        `;
    outputBox.appendChild(characterElement);
  });
};
