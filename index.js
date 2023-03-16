import { initNoteToNum } from "./noteToNum.js";

const form = document.getElementById("song-chart-form");
const outputContainer = document.getElementById("song-chart-output-container");
const input = document.getElementById("song-chart-input");
const output = document.getElementById("song-chart-output");

function hide(element) {
  element.classList.add("hidden");
}

function show(element) {
  element.classList.remove("hidden");
}

function initNoteToNum(input) {
  const noteMap = {
    C: "1",
    "C#": "2",
    Db: "2",
    D: "3",
    "D#": "4",
    Eb: "4",
    E: "5",
    F: "6",
    "F#": "7",
    Gb: "7",
    G: "8",
    "G#": "9",
    Ab: "9",
    A: "10",
    "A#": "11",
    Bb: "11",
    B: "12",
  };
  const numInput = input
    .split("\n")
    .map((line) =>
      line.includes("-")
        ? line.replace(
            /([A-G](b|#)?)(\d)?/g,
            (match, note, accidental, octave) => {
              const noteNum = parseInt(noteMap[note]);
              const accidentalNum =
                accidental === "#" ? 1 : accidental === "b" ? -1 : 0;
              const octaveNum = octave ? parseInt(octave) * 12 : 0;
              return `*${noteNum + accidentalNum + octaveNum}*`;
            }
          )
        : line
    )
    .join("\n");
  return numInput;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  hide(form);
  show(outputContainer);

  const inputText = input.value;
  const outputText = initNoteToNum(inputText);

  output.innerText = outputText;
});

outputContainer.addEventListener("submit", function (event) {
  event.preventDefault();
  hide(outputContainer);
  show(form);
});
