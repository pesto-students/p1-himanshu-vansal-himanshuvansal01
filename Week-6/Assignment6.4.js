let max = [5,2,6,1,4];

let profit = (array) =>{

    let first = array[0];
    let max = 0;


    for(let i = 0; i < array.length; i++){
        first = Math.min(first, array[i]);
        let profit = array[i] - first;
        max = Math.max(max, profit);
    }
    return max;
}

profit(max);