// Define the regular expression to match musical chords
const chordRegex =
  /[A-G](b|#)?(maj|min|m|M|\+|-|dim|aug)?[0-9]*(sus)?[0-9]*(\/[A-G](b|#)?)?/g;

// Get the input and output elements from the HTML document
const input = document.getElementById("song-chart-input");
const output = document.getElementById("song-chart-output");

// Attach an event listener to the form submit event
const form = document.getElementById("song-chart-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get the input value
  const inputValue = input.value;

  // Use the regular expression to match musical chords in the input value
  const outputValue = inputValue.replace(chordRegex, (match) => {
    // Format the matched chord
    const formattedChord = `<span class="chord">${match}</span>`;
    return formattedChord;
  });

  // Set the formatted output value
  output.innerHTML = outputValue;
});
