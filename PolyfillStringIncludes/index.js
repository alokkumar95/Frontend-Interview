const s = "babcde";
const pattern = "ab";

// comment below line to test the code
if (!String.prototype.includes) {
  String.prototype.includes = function (search, start) {
    //introduced in ECMAScript 5, and it enforces stricter parsing and
    // error handling rules in the code
    //prevents certain types of errors from occurring, 
    //such as accidentally creating global variables
    //in strict mode, attempting to assign a value
    // to a read-only property will result in a TypeError being thrown
    "use strict";

    console.log("-----")

    if (search instanceof RegExp) throw TypeError("search string is a RegExp");

    if (typeof start !== "number") start = 0;

    if (start + search.length > this.length) return false;

    return this.indexOf(search, start) !== -1;
  };
}

console.log(s.includes(pattern, 3));
