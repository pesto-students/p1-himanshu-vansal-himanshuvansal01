let obj = {

    [Symbol.iterator]: function(){
        let a = 0;
        let b = 1;
        let temp = 0;
        let n = 5;

        return{
            next(){
                if(b++ <= n){
                    [a,temp] = [temp, (a + temp) || 1]
                    return {value: a, done: false};

                }
                return { done: true};

            }
        }
    }
}




for(let itr of obj){
    console.log(itr);

}