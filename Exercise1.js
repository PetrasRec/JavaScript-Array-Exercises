
function is_array(l)
{
    return (typeof l).toString() === 'object';
}

console.log(is_array([1,2,5,6]));