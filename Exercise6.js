function insertDashes(number)
{
    let str = number.toString();

    let arr = str.split('').map((val)=>parseInt(val));
    let returnStr = "";
    for(index in arr)
    {
        if(index - 1 < 0)
        {
            returnStr+=arr[index];
            continue;
        }
        let val = arr[index - 1];
        if(val % 2 === 0 && arr[index] % 2 === 0)
        {
            // insert a dash
            returnStr+='-';
        }
        returnStr+=arr[index];
    }
    return returnStr;
}

console.log(insertDashes("025468"));