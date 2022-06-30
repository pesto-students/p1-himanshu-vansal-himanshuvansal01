let nums = (nums) => {

let subArray = nums[0];

for(let i = 1; i < nums.length; i++){
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
    subArray = Math.max(subArray, nums[i]);
}

console.log(subArray);
return subArray;

}
