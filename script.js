
var entries = [];
var temp = "";
var output;

function formulaInput(input) {
  if (Array.isArray(input)) {
    document.getElementById("formula").value = input.join("");
  } else {
    document.getElementById("display").value = input;
  }
}

function displayInput(input) {
  document.getElementById("display").value = input;
}

function getVal(val) {
  if (!isNaN(val) || val === '.') {
    if (temp.includes(".") && val == ".") {
    } else {
      temp += val;
    }
  // This statement is supposed to check for multiple zeros, still in work
  // if (temp == "0" && !isNaN(parseInt(val, 10))) {
  //   console.log("test");
  //   console.log("val " + val);
  //   temp = val;
  //   console.log(temp);
  // }
  } else if (val === "C") {
    entries = [];
    temp = "";
    formulaInput("");
    displayInput("");
  } else if (val === "×" || val === "/" || val === "+" || val === "-") {
    // console.log("operator");
    if (temp !== "") {
      entries.push(temp);
      temp = "";
    }
    var lastEntry = entries[entries.length -1];
    // console.log(lastEntry);
    if (lastEntry === "×" || lastEntry === "/" || lastEntry === "+" || lastEntry === "-") {
      entries.pop();
    }
    entries.push(val);
    formulaInput(entries);
    displayInput(val);
  } else if (val === "=") {
    entries.push(temp);
    temp = "";
    var count = Number(entries[0]);
    for (var i = 1; i < entries.length; i++) {
      var nextNum = Number(entries[i+1]);
      var symbol = entries[i];
      if (symbol === "+") {
        count += nextNum;
      } else if (symbol === "-") {
        count -= nextNum;
      } else if (symbol === "×") {
        count *= nextNum;
      } else if (symbol === "/") {
        count /= nextNum;
      }
      i++;
    }
    // console.log(count);
    output = count;
    displayInput(output);
    entries = [];
  }
  document.getElementById("formula").value = "" + entries.join("") + temp;
  // console.log(temp);
  // console.log(entries);

  if(temp !== "") {
    displayInput(temp);
   }
  // console.log(output);
}
