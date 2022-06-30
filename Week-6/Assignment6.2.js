let spiralMatrix = (matrix) => {

let top = 0;
let left = 0;
let bottom = matrix.length - 1;
let right = matrix[0].length -1;
const size = matrix.length * matrix[0].length;

let result = [];

for(let i = top; i <= right && result.length < size; i++){
    result.push(matrix[top][i]);

}

top++;

for(let j = top; j <= bottom && result.length < size; j++){
    result.push(matrix[j][right]);
}

right--;

for(let j = right; j >= left && result.length < size; j++){
    result.push(matrix[bottom][j]);
}

bottom--;

for(let j = bottom; j >= top && result.length < size; j++){
    result.push(matrix[j][left]);
}

left++;




}