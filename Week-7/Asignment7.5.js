const nextGreater = (arr) => {
    let stack = [];
    stack.push(arr[arr.length-1]);
    let ans = [];
    ans.push(-1);
    for(let i = arr.length - 2; i >= 0; i--){
        if(arr[i] < stack[stack.length - 1]){
            ans.push(stack[stack.length - 1]);
            stack.push(arr[i]);     
        }
        else{
            while(stack[stack.length - 1] < arr[i]){
                console.log(arr[i])
                stack.pop();
            }
            if(stack.length){
                ans.push(stack[stack.length - 1]);
            }
            else{
                ans.push(-1);
            }           
            stack.push(arr[i]);   
        }  
    }
    return ans.reverse();
}

console.log('nextGreater: ', nextGreater([6, 8, 0, 1, 3])); //[ undefined, undefined, 1, 3, -1 ]