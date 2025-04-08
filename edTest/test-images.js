// Function to test if a class has a background image
function testBackgroundImage(className) {
  const element = document.querySelector(`.${className}`);
  if (!element) {
    console.log(`The element with the class "${className}" does not exist.`);
    return;
  }

  const style = window.getComputedStyle(element);
  const backgroundImage = style.getPropertyValue('background-image');

  if (backgroundImage !== 'none') {
    console.log({
      className: className,
      ok: true,
      passed: true,
      score: 2,
      feedback: `Great job! The "${className}" class has a background image.`,
    });
  } else {
    console.log({
      className: className,
      ok: true,
      passed: false,
      feedback: `Make sure the "${className}" class has a background image.`,
    });
  }
}

// Run the tests for each class
const classesToTest = [
  'run-buddy',
  'led-wall',
  'react-calc',
  'pastel-puzzles',
  'surf-report',
];

classesToTest.forEach((className) => testBackgroundImage(className));
