const generateBtn = document.getElementById("generate-btn");
const paletteContainer = document.querySelector(".palette-container");

generateBtn.addEventListener("click", generatePalette);
paletteContainer.addEventListener("click", copyColor);

function copyColor(event) {
  const colorCard = event.target.closest(".color-card");
  const copyBtn = colorCard.querySelector(".copy-btn");

  const hexValue = colorCard.querySelector(".hex-value").textContent;
  navigator.clipboard
    .writeText(hexValue)
    .then(() => {
      showCopySuccess(copyBtn);
    })
    .catch((error) => {
      console.log(error);
    });
}

function showCopySuccess(copyBtn) {
  copyBtn.classList.remove("far", "fa-copy");
  copyBtn.classList.add("fas", "fa-check");
  copyBtn.style.color = "#48bb78";

  setTimeout(() => {
    copyBtn.classList.remove("fas", "fa-check");
    copyBtn.classList.add("far", "fa-copy");
    copyBtn.style.color = "";
  }, 1500);
}

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
