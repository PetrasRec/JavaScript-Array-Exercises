function mostFrequent(arr)
{
    let m = new Map();

    for(value of arr)
    {
        if(m.get(value)===undefined)
            m.set(value, 1);
        else
            m.set(value, m.get(value)+1);
    }
    return Array.from(m.keys()).reduce((a, b)=> a === undefined ? b : (m.get(a) < m.get(b) ? b : a));
}

console.log(mostFrequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));