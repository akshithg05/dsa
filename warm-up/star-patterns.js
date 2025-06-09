/*
Q1 - print the following pattern
* * * *
* * * *
* * * *
* * * *
*/
const n = 4;

console.log("#1");
for (let i = 0; i < n; i++) {
  let row = " ";
  for (let j = 0; j < n; j++) {
    row = row + "* ";
  }
  console.log(row);
}

/*
Q2 - print the following pattern
* 
* * 
* * * 
* * * *
*/

console.log("#2");
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row = row + "* ";
  }
  console.log(row);
}

/*
Q3 - print the following pattern
1
1 2 
1 2 3 
1 2 3 4
*/

console.log("#3");
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row = row + j + " ";
  }
  console.log(row);
}

/*
Q4 - print the following pattern
1
2 2
3 3 3 
4 4 4 4
*/

console.log("#4");

for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row = row + i + " ";
  }
  console.log(row);
}

/*
Q5 - print the following pattern
1 2 3 4 5
1 2 3 4
1 2 3
1 2 
1
*/
console.log("#5");
for (let i = 5; i > 0; i--) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row = row + j + " ";
  }
  console.log(row);
}

/*
Q6 - print the following pattern
* * * * *
* * * *
* * *
* *
*
*/

console.log("#6");
for (let i = 5; i > 0; i--) {
  let row = "";
  for (let j = 0; j < i; j++) {
    row = row + "* ";
  }
  console.log(row);
}

/*
Q7 - print the following pattern
        *
      * *
    * * *
  * * * *
* * * * *
*/

console.log("#7");
const m = 5;
for (let i = 1; i <= m; i++) {
  row = "";
  for (let j = 1; j <= m; j++) {
    if (i + j > m) {
      row = row + "*";
    } else {
      row = row + " ";
    }
  }
  console.log(row);
}

/*
Q8 - print the following pattern
1
1 0 
1 0 1
1 0 1 0
1 0 1 0 1
*/

console.log("#8");
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    if (j % 2 == 0) {
      row = row + "0 ";
    } else {
      row = row + "1 ";
    }
  }
  console.log(row);
}

/*
Q9 - print the following pattern
1
0 1 
0 1 0
1 0 1 0 
1 0 1 0 1
*/

console.log("#9");
let toggle = 1;
for (let i = 0; i < 6; i++) {
  let row = "";
  for (let j = 0; j < i; j++) {
    row = row + toggle + " ";

    if (toggle == 0) {
      toggle = 1;
    } else {
      toggle = 0;
    }
  }
  console.log(row);
}
