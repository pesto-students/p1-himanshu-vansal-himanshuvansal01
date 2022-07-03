
function* generateRandomNumbers(){

    for(let i=0; i < 10; i++){

        yield new Promise((resolve) => {

            setTimeout(() => {
                resolve(i);
              }, 1000);


        });
    }

}




async function asyncFunction(){

    let randomNumbers = generateRandomNumbers();

    for(const el of randomNumbers){
        console.log(await el)
    }

}

asyncFunction();