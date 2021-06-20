const shuffle = (nums, n) => {
    let b = [];
    for(let i=0;i<n;i++){
        b.push(nums[i]);
        b.push(nums[i+n]);
    };
    return b;
};
