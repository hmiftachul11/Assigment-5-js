function perkalianUnik(arr) {
    const n = arr.length;
    const leftProducts = Array(n).fill(1);
    const rightProducts = Array(n).fill(1);
    const result = Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        leftProducts[i] = leftProducts[i - 1] * arr[i - 1];
    }

    for (let i = n - 2; i >= 0; i--) {
        rightProducts[i] = rightProducts[i + 1] * arr[i + 1];
    }

    for (let i = 0; i < n; i++) {
        result[i] = leftProducts[i] * rightProducts[i];
    }

    return result;
}

// Test cases
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]
