function countSmaller(arr)
{
    const result=[];
    for(let i=0;i<arr.length;i++)
    {
        let count=0;
        for(let j=i+1;j<arr.length;j++)
        {
            if(arr[j]<arr[i])
            {
                count++;
            }
        }
        result.push(count);
    }
    return result;
}
console.log(countSmaller([12, 1, 2, 3, 0, 11, 4]));
console.log(countSmaller( [1, 2, 3, 4, 5]));
console.log(countSmaller([5, 2, 6, 1]));