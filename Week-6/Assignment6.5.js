let array = [2,4,5,6,1,10];

let y = 0;

let difference = (array,b) => {

    array.sort();

    for(let i=0; i < array.length; i++){


        y = b + array[i];

        if(array.includes(y)){

            return 1;
        }
    }

    return 0;

}


difference(array, 2);