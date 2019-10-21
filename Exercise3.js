
function returnElement(arr, n)
{
    return new Array(n===undefined ? 1 : n).fill().map((value, index)=>arr[index]);
}

console.log(returnElement([1,'string?',3,4,5], 3));