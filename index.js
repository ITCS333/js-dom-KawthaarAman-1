function changeHeadingText() {
  const heading = document.getElementById('main-heading');
  heading.textContent = 'DOM Manipulation Challenge';
}


function changeBoxColor() {
  const box = document.getElementById('box-to-modify');
  box.style.backgroundColor = 'lightblue';
}


function addNewItem() {
  const ul = document.getElementById('item-list');
  const newItem = document.createElement('li');
  newItem.textContent = 'New Item';
  newItem.classList.add('item');
  ul.appendChild(newItem);
}


function highlightParagraph() {
  const para = document.querySelector('.content-para');
  para.classList.add('highlight');
}


function removeElement() {
  const element = document.getElementById('to-be-removed');
  if (element) {
    element.remove();
  }
}

// Do not edit the lines below.
// These lines are for testing purposes.
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        changeHeadingText,
        changeBoxColor,
        addNewItem,
        highlightParagraph,
        removeElement
    };
}
