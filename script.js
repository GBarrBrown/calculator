
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
    console.log("operator");
    if (temp !== "") {
      entries.push(temp);
      temp = "";
    }
    var lastEntry = entries[entries.length -1];
    console.log(lastEntry);
    if (lastEntry === "×" || lastEntry === "/" || lastEntry === "+" || lastEntry === "-") {
      entries.pop();
    }
    entries.push(val);
    formulaInput(entries);
    displayInput(val);
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // (val === "×") {
  //   if (temp !== "") {
  //     entries.push(temp);
  //   }
  //   if (entries[entries.length -1] == "×" || entries[entries.length -1] == "+" || entries[entries.length -1] == "-" || entries[entries.length -1] == "/" ) {
  //     entries.pop();
  //     console.log(entries);
  //   }
  //   entries.push("×");
  //   temp = "";
  //   document.getElementById("formula").value = ""+entries.join("");
  //   document.getElementById("display").value = "×";
  // } else if (val === "/") {
  //   if (temp !== "") {
  //     entries.push(temp);
  //   }
  //   if (entries[entries.length -1] == "×" || entries[entries.length -1] == "+" || entries[entries.length -1] == "-" || entries[entries.length -1] == "/" ) {
  //     entries.pop();
  //     console.log(entries);
  //   }
  //   entries.push("/");
  //   temp = "";
  //   document.getElementById("formula").value = ""+entries.join("");
  //   document.getElementById("display").value = "/";
  // } else if (val === "+") {
  //   if (temp !== "") {
  //     entries.push(temp);
  //   }
  //    if (entries[entries.length -1] == "×" || entries[entries.length -1] == "+" || entries[entries.length -1] == "-" || entries[entries.length -1] == "/" ) {
  //     entries.pop();
  //     console.log(entries);
  //   }
  //   entries.push("+");
  //   temp = "";
  //   document.getElementById("formula").value = ""+entries.join("");
  //   document.getElementById("display").value = "+";
  // } else if (val === "-") {
  //   if (temp !== "") {
  //     entries.push(temp);
  //   }
  //    if (entries[entries.length -1] == "×" || entries[entries.length -1] == "+" || entries[entries.length -1] == "-" || entries[entries.length -1] == "/" ) {
  //     entries.pop();
  //     console.log(entries);
  //   }
  //   entries.push("-");
  //   temp = "";
  //   document.getElementById("formula").value = ""+entries.join("");
  //   document.getElementById("display").value = "-";
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
    console.log(count);
    output = count;
    document.getElementById("display").value = output;
    entries = [];
  }
  document.getElementById("formula").value = "" + entries.join("") + temp;
  console.log(temp);
  console.log(entries);

  if(temp != "") {
    document.getElementById("display").value = temp;
   } // else {
  //   document.getElementById("display").value = "";
  // }
  console.log(output);
}
