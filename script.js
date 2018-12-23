
var entries = [];
var temp = "";

var output;
// function dosomething(val) {
//   console.log("test complete");
// }
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
    document.getElementById("formula").value = "";
    document.getElementById("display").value = "";
  } else if (val === "×") {
    if (temp !== "") {
      entries.push(temp);
    }
    if (entries[entries.length -1] == "×" || entries[entries.length -1] == "+" || entries[entries.length -1] == "-" || entries[entries.length -1] == "/" ) {
      entries.pop();
      console.log(entries);
    }
    entries.push("×");
    temp = "";
    document.getElementById("formula").value = ""+entries.join("");
    document.getElementById("display").value = "×";
  } else if (val === "/") {
    if (temp !== "") {
      entries.push(temp);
    }
    if (entries[entries.length -1] == "×" || entries[entries.length -1] == "+" || entries[entries.length -1] == "-" || entries[entries.length -1] == "/" ) {
      entries.pop();
      console.log(entries);
    }
    entries.push("/");
    temp = "";
    document.getElementById("formula").value = ""+entries.join("");
    document.getElementById("display").value = "/";
  } else if (val === "+") {
    if (temp !== "") {
      entries.push(temp);
    }
     if (entries[entries.length -1] == "×" || entries[entries.length -1] == "+" || entries[entries.length -1] == "-" || entries[entries.length -1] == "/" ) {
      entries.pop();
      console.log(entries);
    }
    entries.push("+");
    temp = "";
    document.getElementById("formula").value = ""+entries.join("");
    document.getElementById("display").value = "+";
  } else if (val === "-") {
    if (temp !== "") {
      entries.push(temp);
    }
     if (entries[entries.length -1] == "×" || entries[entries.length -1] == "+" || entries[entries.length -1] == "-" || entries[entries.length -1] == "/" ) {
      entries.pop();
      console.log(entries);
    }
    entries.push("-");
    temp = "";
    document.getElementById("formula").value = ""+entries.join("");
    document.getElementById("display").value = "-";
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
