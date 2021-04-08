// бинарный поиск
const arr = [1,2,3,4,5,6,7,8];

function binar(arr, el) {
    let left = -1; // Граница левой стороны массива
    let right = arr.length; // Граница правой стороны массива

    while (right - left > 1) { // условие при котором поиск прекращается
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === el) {
            return mid;
        }
        if (arr[mid] > el) {
            right = mid;    
        } else {
            left = mid;
        }
    }
    return -1;
}

console.log(binar(arr, -2));