// Get all required elements from document and declare initial values
const colorPicker = document.querySelector("#box-bg-color")
const rainbowBtn = document.querySelector(".rainbowBtn")
const eraserBtn = document.querySelector(".eraserBtn")
const resetDefaultBtn = document.querySelector(".resetDefault")
const boxSizeInput = document.querySelector("#box-size")
const boxesContainer = document.querySelector(".boxesContainer")
const colorInput = document.querySelector("#box-bg-color")
const boxSizeLabel = document.querySelector(".boxSizeLabel")

const defaultBoxSize = 16
let boxSize = defaultBoxSize;

const defaultBoxColor = "#e68e8e"
let boxColor = defaultBoxColor;

let box = document.createElement('div');
box.setAttribute('id',"box")

//DOM Manipulation functions

boxSizeInput.addEventListener('input', setGridColumnRow);
colorPicker.addEventListener('input', setBoxColor)
eraserBtn.addEventListener('click', setEraserMode)
resetDefaultBtn.addEventListener('click', resetDefault)

document.body.addEventListener('hover', function(e){
  if (e.target.id == 'box' ){
    e.target.style.backgroundColor = boxColor
  }
});

function formatGrid (value){
  boxesContainer.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
  boxesContainer.style.gridTemplateRows = `repeat(${value}, 1fr)`;
}

function appendBoxes(parentNode, number){
  const fragment = new DocumentFragment()
  for (let i = 0; i < number; i++){
    fragment.appendChild(box.cloneNode(true));
  }
  parentNode.appendChild(fragment)
}

function setGridColumnRow (e) {
  boxSize = e.target.value;
  boxSizeLabel.textContent = `Set your pen size! ${boxSize} x ${boxSize}`
  formatGrid(boxSize);
  const numberOfBoxesToAppend = boxSize * boxSize;
  removeAllBoxes()
  appendBoxes(boxesContainer, numberOfBoxesToAppend);
};

function fillColor(color){
  box.style.backgroundColor = `${color}`
}

function removeAllBoxes (){
  boxesContainer.innerHTML = '';
}

function setBoxColor (e) {
  boxColor = e.target.value
}

function setRainbowMode () {

}

function setEraserMode () {
  boxColor = "#FFFFFF"
  colorInput.value = boxColor;
};

function resetDefault () {
  boxSize = defaultBoxSize;
  boxSizeLabel.textContent = `Set your pen size! ${boxSize} x ${boxSize}`
  boxSizeInput.value = boxSize;
  formatGrid(boxSize);
  const numberOfBoxesToAppend = boxSize * boxSize;
  removeAllBoxes()
  appendBoxes(boxesContainer, numberOfBoxesToAppend);
}
resetDefault()
// Start initial box size