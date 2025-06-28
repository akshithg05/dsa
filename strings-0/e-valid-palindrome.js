// Time - O(n), space - O(1)
var isPalindrome = function (s) {
  let i = 0;
  let j = s.length - 1;

  let setSpcl = new Set([
    " ",
    "!",
    '"',
    "#",
    "$",
    "%",
    "&",
    "'",
    "(",
    ")",
    "*",
    "+",
    ",",
    "-",
    ".",
    "/",
    ":",
    ";",
    "<",
    "=",
    ">",
    "?",
    "@",
    "[",
    "\\",
    "]",
    "^",
    "_",
    "`",
    "{",
    "|",
    "}",
    "~",
    "\t",
    "\n",
  ]);

  while (i <= j) {
    if (setSpcl.has(s[i])) {
      i++;
    } else if (setSpcl.has(s[j])) {
      j--;
    } else if (s[i].toLowerCase() === s[j].toLowerCase()) {
      i++;
      j--;
    } else {
      return false;
    }
  }

  return true;
};

// Better way of writing using regex to eliminate special chars

var isPalindrome = function (s) {
  // Remove all non-alphanumeric chars
  s = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  console.log(s);
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    if (s[i] !== s[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};
