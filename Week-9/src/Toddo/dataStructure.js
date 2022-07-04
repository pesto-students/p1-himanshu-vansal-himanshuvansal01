
var merge = function(nums1, m, nums2, n) {
 
    //nums1 -> [1,2,3,0,0,0]   nums2 -> [2,3,5]
    let first = m -1; 

    let second = n -1; 

    let i = m + n - 1;

   while(second > 0){

       let firstValue = nums1[first]; // 0

       let secondValue = nums2[second]; // 5

       if(firstValue > secondValue){
           nums1[i] = firstValue;
           first--;
           i--;
       }else{
        nums1[i] = secondValue;
        second--;
        i--;
       }
       
     
   }




};

merge([1,2,3,0,0,0],3,[2,5,6],3)