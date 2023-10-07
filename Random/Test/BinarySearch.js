const binarySearch = (array, target) => {
    if (!Array.isArray(array)) return;

    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        let mid = Math.floor((right + left) / 2);

        if (array[mid] === target) return mid;

        if (target < array[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return -1;
};
