function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function mengelompokkanAngka(arr) {
    let kelompok1 = [];
    let kelompok2 = [];
    let kelompok3 = [];

    for (let num of arr) {
        if (num % 3 === 0) {
            kelompok3.push(num);
        } else if (num % 2 === 0) {
            kelompok1.push(num);
        } else if (isPrime(num)) {
            kelompok2.push(num);
        }
    }

    return [kelompok1, kelompok2, kelompok3];
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]
