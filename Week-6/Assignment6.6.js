function threeSum(nums, target){

    nums.sort()

    let start = 0;

    let end = 0;


    let closestSum = nums[0] + nums[1] + nums[nums.length - 1];


    for(let i=0; i < nums.length - 2; i++){
        start = i + 1;
        end = nums.length - 1;

        while(start < end){

            let currentSum = nums[i] + nums[start] + nums[end];

            if(currentSum > target){
                end--;
            }
            else{
                start++;
            }

            if(Math.abs(currentSum - target) < Math.abs(closestSum - target)){
                closestSum =currentSum;
            }
        }
    }
    return closestSum;
}