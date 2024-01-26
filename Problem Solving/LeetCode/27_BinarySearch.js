
function searchInsert(nums, target) {
    let left = 0, right = nums.length - 1, result = nums.length
    while (left <= right) {
        let middle = Math.floor(left + (right - left) / 2)

        if (nums[middle] == target) {
            return middle
        } else if (nums[middle] < target) {
            left = middle + 1
        } else {
            ans = middle
            right = middle - 1
        }
    }

    return result
}


function SearchInsertPosition() {
    const nums = [1, 3, 5, 6], target = 2
    const output = searchInsert(nums, target)
    console.log(output)
}


// Call the function
SearchInsertPosition();
