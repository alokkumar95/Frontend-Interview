// type NestedArray<T> = Array<T> | Array<NestedArray<T>>;
function flattenArray(myArray, newArray) {
    if (Array.isArray(myArray)) {
        for (var i = 0; i < myArray.length; i++) {
            flattenArray(myArray[i], newArray);
        }
    }
    else {
        newArray.push(myArray);
    }
}
var arr = [];
flattenArray(["hello", [2, 3], 4], arr);
console.log(arr);
