let input = document.getElementById("input");
let result = document.getElementById("result");

let inputType = document.getElementById("inputType");
let resultType = document.getElementById("resultType");
let inputTypeValue, resultTypeValue;

input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);

inputTypeValue = inputType.value;
resultTypeValue = resultType.value;

function myResult() {
  inputTypeValue = inputType.value;
  resultTypeValue = resultType.value;
  if (inputTypeValue === "euro" && resultTypeValue === "denar") {
    result.value = Number(input.value) * 61.62;
  } else if (inputTypeValue === "euro" && resultTypeValue === "lev") {
    result.value = Number(input.value) * 1.96;
  } else if (inputTypeValue === "euro" && resultTypeValue === "usd") {
    result.value = Number(input.value) * 1.07;
  } else if (inputTypeValue === "euro" && resultTypeValue === "euro") {
    result.value = input.value;
  }

  if (inputTypeValue === "denar" && resultTypeValue === "euro") {
    result.value = Number(input.value) * 0.016;
  } else if (inputTypeValue === "denar" && resultTypeValue === "lev") {
    result.value = Number(input.value) * 0.031;
  } else if (inputTypeValue === "denar" && resultTypeValue === "usd") {
    result.value = Number(input.value) * 0.017;
  } else if (inputTypeValue === "denar" && resultTypeValue === "denar") {
    result.value = input.value;
  }

  if (inputTypeValue === "lev" && resultTypeValue === "euro") {
    result.value = Number(input.value) * 0.51;
  } else if (inputTypeValue === "lev" && resultTypeValue === "denar") {
    result.value = Number(input.value) * 31.96;
  } else if (inputTypeValue === "lev" && resultTypeValue === "usd") {
    result.value = Number(input.value) * 0.54;
  } else if (inputTypeValue === "lev" && resultTypeValue === "lev") {
    result.value = input.value;
  }

  if (inputTypeValue === "usd" && resultTypeValue === "euro") {
    result.value = Number(input.value) * 0.94;
  } else if (inputTypeValue === "usd" && resultTypeValue === "denar") {
    result.value = Number(input.value) * 58.76;
  } else if (inputTypeValue === "usd" && resultTypeValue === "lev") {
    result.value = Number(input.value) * 1.84;
  } else if (inputTypeValue === "usd" && resultTypeValue === "usd") {
    result.value = input.value;
  }
}
