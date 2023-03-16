const inputBox = document.getElementById("input-box");
const outputBox = document.getElementById("output-box");

inputBox.addEventListener("input", () => {
  const text = inputBox.value;
  const regex =
    /([A-G](?:(?:#|b)?(?:m7|m9|mi7|mi9|mi11|m7b5|mi7b5|dim|△|7|9|11|13)|(?=\s{2})))\s+/g;
  const newText = text.replace(regex, "$1* ");
  outputBox.value = newText;
});
