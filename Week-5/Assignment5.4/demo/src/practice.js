const promise = new Promise((resolve, reject) => {

    reject(20);

}).then((val) =>{
    console.log(`val---${val}`)
}).catch((error) =>{
    console.log(`error----${error}`)
}).finally(
    console.log("code executed")
)


