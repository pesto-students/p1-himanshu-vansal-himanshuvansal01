var isValid = function(s) {

    let stack = [];
    let paranthesis = '() [] {}';
    let i = 0;

    while(i < s.length){
        stack.push(s[i]);
        i++;
        let open = stack[stack.length - 2];
        let closed = stack[stack.length - 1];

        let fullParan = open + closed;

        if(paranthesis.includes(fullParan)){
            stack.pop();
            stack.pop();

        }

    }

    return stack.length == 0;
};