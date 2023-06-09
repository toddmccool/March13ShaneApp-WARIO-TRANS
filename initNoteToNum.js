export function initNoteToNum(input) {
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
  const numArr = [];
  const numInput = input.replace(
    /\*([A-G](b|#)?)(\d)?\*?/g,
    (match, note, accidental, octave) => {
      const noteNum = parseInt(noteMap[note]);
      const accidentalNum =
        accidental === "#" ? 1 : accidental === "b" ? -1 : 0;
      const octaveNum = octave ? parseInt(octave) * 12 : 0;
      const convertedNum = noteNum + accidentalNum + octaveNum;
      numArr.push(convertedNum);
      return `${convertedNum}*`;
    }
  );
  console.log(numInput);
  console.log(numArr);
  return { numInput, numArr };
}

initNoteToNum("*C4* *D5* *E#2*");
