function removeSymbols() {
  let input = document.getElementById("inputSequence").value;

  let cleanedInput = input.replace(/[.,/\-_]/g, "");

  document.getElementById("result").innerText = cleanedInput;
}
