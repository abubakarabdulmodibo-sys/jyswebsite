

// Get arrow elements
const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right');
const arrowUp = document.getElementById('arrow-up');
const arrowDown = document.getElementById('arrow-down');

// Function to reset all arrow rotation classes
function resetArrows() {
  [arrowLeft, arrowRight, arrowUp, arrowDown].forEach((arrow) => {
    arrow.classList.remove('arrow-left-rotated', 'arrow-right-rotated', 'arrow-up-rotated', 'arrow-down-rotated');
  });
}

// Function to setup event listeners for each arrow
function setupArrowListener(arrow, keyToSet, keyToUnset) {
  function activate() {
    keys[keyToSet] = true;
    keys[keyToUnset] = false;
    resetArrows();
    arrow.classList.add(`arrow-${keyToSet}-rotated`);
  }

  arrow.addEventListener('touchstart', (e) => {
    e.preventDefault();
    activate();
  });

  arrow.addEventListener('mousedown', (e) => {
    e.preventDefault();
    activate();
  });

  arrow.addEventListener('touchend', (e) => {
    e.preventDefault();
    keys[keyToSet] = false;
    arrow.classList.remove(`arrow-${keyToSet}-rotated`);
  });

  arrow.addEventListener('mouseup', (e) => {
    e.preventDefault();
    keys[keyToSet] = false;
    arrow.classList.remove(`arrow-${keyToSet}-rotated`);
  });

  arrow.addEventListener('mouseleave', (e) => {
    keys[keyToSet] = false;
    arrow.classList.remove(`arrow-${keyToSet}-rotated`);
  });
}

// Set up listeners on all arrows
setupArrowListener(arrowLeft, 'a', 'd');
setupArrowListener(arrowRight, 'd', 'a');
setupArrowListener(arrowUp, 'w', 's');
setupArrowListener(arrowDown, 's', 'w');
