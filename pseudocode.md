Pseudocode reversed from simple calculator @ https://codepen.io/freeCodeCamp/pen/EPNZYW

Have 'entries' array to hold user input (math equation)

Have 'total' variable to hold previous answer and allow for consecutive calculations

Have a 'temp' variable to hold numerical input as the user inputs their number

Check if the user input is part of a number - appends it to the temp variable

Check if the user input is 'AC' - reset entries to a blank array, temp to a blank string,  total to 0 and reset display

Else Checks if user input is 'CE' - reset temp to a blank string, reset display

Else Checks if user input is an operator - adds temp number to entries array, adds pressed operator to entries array, resets temp to a blank string

Else Checks if user input is '=' - adds temp number to entries array, runs through entries array left to right evaluating, displays answer, resets temp to a blank string and entries to a blank array