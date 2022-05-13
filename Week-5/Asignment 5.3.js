function hasDuplicate(array){
    let newSet  = new Set(array);
    if(newSet.size != array.length){
        return true;
    }

    return false;


}

hasDuplicate([1,2,2,3]); //output true