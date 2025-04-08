// Test for responsive design: Ensure all flex items have the same height on smaller screens
async function testResponsiveFlexItemHeights() {
  // Simulate resizing to a smaller screen width
  const resized = new Promise((resolve) => {
    const resizeHandler = () => {
      window.removeEventListener('resize', resizeHandler);
      resolve();
    };
    window.addEventListener('resize', resizeHandler);

    // Trigger a resize event manually for the test
    const resizeEvent = new Event('resize');
    window.dispatchEvent(resizeEvent);
  });

  // Wait for a simulated layout change
  await resized;
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for transitions to finish

  // Check the heights of all flex items
  const flexItems = document.querySelectorAll('.flex-item');
  if (flexItems.length === 0) {
    console.log('No .flex-item elements found in the document.');
    return {
      ok: true,
      passed: false,
      feedback: 'Make sure your .flex-item elements are present in the DOM.',
    };
  }

  const firstItemHeight = window.getComputedStyle(flexItems[0]).getPropertyValue('height');
  const allSameHeight = Array.from(flexItems).every(
    (item) => window.getComputedStyle(item).getPropertyValue('height') === firstItemHeight
  );

  if (allSameHeight) {
    console.log({
      ok: true,
      passed: true,
      score: 10,
      feedback: 'Great job! All of the flex items have the same height.',
    });
    return {
      ok: true,
      passed: true,
      score: 10,
      feedback: 'Great job! All of the flex items have the same height.',
    };
  } else {
    console.log({
      ok: true,
      passed: false,
      feedback: 'Make sure all of the flex items have the same height.',
    });
    return {
      ok: true,
      passed: false,
      feedback: 'Make sure all of the flex items have the same height.',
    };
  }
}

// Call the function
testResponsiveFlexItemHeights();
