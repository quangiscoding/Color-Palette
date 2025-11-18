const generateBtn = document.getElementById("generate-btn");
const paletteContainer = document.querySelector(".palette-container");

generateBtn.addEventListener("click", generatePalette);
paletteContainer.addEventListener("click", copyColor);

function generatePalette() {
  const colors = [];
  for (let i = 0; i < 5; i++) {
    colors.push(generateRandomColor());
  }
  updatePalette(colors);
}

function updatePalette(colors) {
  const cards = paletteContainer.querySelectorAll(".color-card");
  let index = 0;
  cards.forEach((card) => {
    const colorBox = card.querySelector(".color-box");
    const hexValue = card.querySelector(".hex-value");
    const color = colors[index];

    colorBox.style.backgroundColor = color;
    hexValue.textContent = color;
    index++;
  });
}

function generateRandomColor() {
  const value = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += value[Math.floor(Math.random() * 16)];
  }
  return color;
}

function copyColor() {}
