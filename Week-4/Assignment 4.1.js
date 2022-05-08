
const p = new Promise(function(resolve,reject) {
  resolve(getNumber(10));
  reject(getNumber(10));


} )

p.then((value)=> {

  if(value % 5 != 0){
    console.log(value)
  }

})

p.catch((value) =>{

  if(value % 5 == 0){
    console.log("rejected")
    console.log(value)
  }

})

function getNumber(max){
  return Math.floor(Math.random() * max) + 1;
}