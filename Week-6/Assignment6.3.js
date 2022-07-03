let swap = (arr,i,j) => {

    let t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
}

function sortArray(array, n){

    let low = 0;
    let mid = 0;
    let high = n - 1;

    while(mid <= high){

        if(array[mid] == 0){
            swap(array, low, mid)
            low++;
            mid++;
        }

        if(array[mid] == 1){
            mid++;
        }

        if(array[mid] == 2){
            swap(array, mid, high)
            high--;
        }
    }
}

sortArray(array,array.length);