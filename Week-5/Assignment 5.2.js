function isVowel(char){
    return "aeiou".includes(char);
}

function vowelCount(str){
    let vowelMap = new Map();

    for(let char of str){

        let strInLowerCase = char.toLowerCase();
        if(isVowel(strInLowerCase)){
            if(vowelMap.has(strInLowerCase)){
                console.log("vowels:" + strInLowerCase)
                vowelMap.set(strInLowerCase, vowelMap.get(strInLowerCase) + 1);
            }
            else{
                vowelMap.set(strInLowerCase, 1);
            }

        }



    }
    return vowelMap

}
