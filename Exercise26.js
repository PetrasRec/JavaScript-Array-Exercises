function findSumTarget(arr, target)
{
    let mp = new Map();
    for(let i = 0; i < arr.length; i++)
    {
        let needs = target - arr[i];

        if(mp.get(needs) !== undefined)
        {
            return [mp.get(needs), i];
        }
        if(mp.get(arr[i]) === undefined)
            mp.set(arr[i], i);

            /*
        for(let j = i + 1; j < arr.length; j++)
        {
            if(arr[i] + arr[j] === target)
                return [i,j];
        }*/
    }
}

console.log(findSumTarget( [10,20,10,40,50,60,70], 50));