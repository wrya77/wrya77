// Select elements from the DOM
const storyElement = document.getElementById('story'); // The paragraph displaying the story
const inputElement = document.getElementById('sentence'); // The input box for new sentences
const submitButton = document.getElementById('submit'); // The "Submit" button

// Array to store the story
let story = ["Once upon a time..."];

// Function to update the story display
function updateStory() {
  storyElement.textContent = story.join(" "); // Join all sentences with spaces
}

// Event listener for the submit button
submitButton.addEventListener('click', () => {
  const newSentence = inputElement.value.trim(); // Get the input value and remove extra spaces
  if (newSentence) {
    story.push(newSentence); // Add the new sentence to the story array
    updateStory(); // Update the displayed story
    inputElement.value = ""; // Clear the input field
  }
});

// Initialize the story display
updateStory();