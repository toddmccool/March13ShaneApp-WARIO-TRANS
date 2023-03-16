function parseSongChart(input) {
  const noteRegex =
    /\b[A-G](b|#)?(maj|min|m|M|\+|-|dim|aug|m7b5)?[0-9]*(sus)?[0-9]*(\/[A-G](b|#)?)?\b/g;

  const markedInput = input.replace(noteRegex, (match) => {
    return `*${match}*`;
  });

  // Pass the markedInput to the initNoteToNum function in the separate module
  return initNoteToNum(markedInput);
}
