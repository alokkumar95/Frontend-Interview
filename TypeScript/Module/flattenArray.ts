// type NestedArray<T> = Array<T> | Array<NestedArray<T>>;

// function flattenArray<T>(myArray:NestedArray<T>,newArray:T[]){

//     for(let i=0;i<myArray.length;i++){
//         if(Array.isArray(myArray[i])){
//              flattenArray(myArray[i] as NestedArray<T>,newArray)
//         }else{
//             newArray.push(myArray[i] as T);
//         }
//     }

// }
// const arr:number[] = []
// flattenArray([1,[2,3],4],arr);
// console.log(arr)

type NestedArray<T> = T | NestedArray<T>[];

function flattenArray<T>(myArray: NestedArray<T>, newArray: T[]): void {
    if (Array.isArray(myArray)) {
        for (let i = 0; i < myArray.length; i++) {
            flattenArray(myArray[i], newArray);
        }
    } else {
        newArray.push(myArray);
    }
}

const arr: number[] = [];
flattenArray([1, [2, 3], 4], arr);
console.log(arr);
