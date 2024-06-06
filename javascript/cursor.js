document.addEventListener("DOMContentLoaded", () => {
  // Create custom cursor elements
  const customCursor = document.createElement("div");
  customCursor.id = "custom-cursor";
  document.body.appendChild(customCursor);
  const blade = document.createElement("div");
  blade.id = "blade";
  customCursor.appendChild(blade);
  let rotationSpeed = 1; // Default rotation speed (degrees per frame)
  let isRotating = false;
  let rotationAngleX = 0;
  let rotationAngleY = 0;
  let rotationAngleZ = 0;
  // Update cursor position
  document.addEventListener("mousemove", (e) => {
    customCursor.style.left = `${e.clientX}px`;
    customCursor.style.top = `${e.clientY}px`;
  });
  // Handle mouse down event to extend the lightsaber blade
  document.addEventListener("mousedown", () => {
    blade.style.height = "100px"; // Extend blade
  });
  // Handle mouse up event to retract the lightsaber blade
  document.addEventListener("mouseup", () => {
    blade.style.height = "0"; // Retract blade
  });
  // Handle key down event to start/stop rotation
  document.addEventListener("keydown", (e) => {
    if (e.key === "r") {
      isRotating = !isRotating;
      if (isRotating) {
        requestAnimationFrame(rotateCursor);
      }
    }
  });
  // Function to rotate the cursor
  const rotateCursor = () => {
    if (isRotating) {
      rotationAngleX = (rotationAngleX + rotationSpeed) % 360;
      rotationAngleY = (rotationAngleY + rotationSpeed) % 360;
      rotationAngleZ = (rotationAngleZ + rotationSpeed) % 360;
      customCursor.style.transform = `rotateX(${rotationAngleX}deg) rotateY(${rotationAngleY}deg) rotateZ(${rotationAngleZ}deg)`;
      requestAnimationFrame(rotateCursor);
    }
  };
  // Function to change rotation speed
  const setRotationSpeed = (speed) => {
    rotationSpeed = speed;
  };
  // Example: change rotation speed (you can call this function with different values)
  setRotationSpeed(5); // Change this value to set a different rotation speed
});
