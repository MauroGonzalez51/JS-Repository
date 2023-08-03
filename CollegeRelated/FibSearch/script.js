const NUMBER_TO_SEARCH = 45;

const fibonacciSearch = (arr, x) => {
    const { length } = arr;

    // Inicializar los números de Fibonacci
    let fibMMm2 = 0;
    let fibMMm1 = 1;
    let fibM = fibMMm2 + fibMMm1;

    // Encuentra el número de Fibonacci más pequeño que o igual a length
    while (fibM < length) {
        fibMMm2 = fibMMm1;
        fibMMm1 = fibM;
        fibM = fibMMm2 + fibMMm1;
    }

    let offset = -1;

    while (fibM > 1) {
        // Chequear si fibMMm2 es una posición válida
        const i = Math.min(offset + fibMMm2, length - 1);

        if (arr[i] < x) {
            // Si x es mayor que el valor en la posición fibMMm2, corta el subarreglo después de i+1
            fibM = fibMMm1;
            fibMMm1 = fibMMm2;
            fibMMm2 = fibM - fibMMm1;
            offset = i;
        } else if (arr[i] > x) {
            // Si x es menor que el valor en la posición fibMMm2, corta el subarreglo antes de i
            fibM = fibMMm2;
            fibMMm1 = fibMMm1 - fibMMm2;
            fibMMm2 = fibM - fibMMm1;
        } else {
            // Elemento encontrado
            return i;
        }
    }

    // Comparar el último elemento con x
    if (fibMMm1 === 1 && arr[offset + 1] === x) {
        return offset + 1;
    }

    // Elemento no encontrado
    return -1;
};

const generateRandomNumbers = ({ amount }) => {
    return Array.from({ length: amount }).map(
        (value) => (value = Math.floor(Math.random() * 255))
    );
};

const bubbleSort = (array) => {
    if (!Array.isArray(array)) return;

    const { length } = array;

    let swapped;

    do {
        swapped = false;

        for (let i = 0; i < length - 1; i++) {
            if (array[i] > array[i + 1]) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]];
                swapped = true;
            }
        }
    } while (swapped);

    return array;
};

/**
 * :P
 * 
 */

const sortUsingSort = (array) => {
    return !Array.isArray(array) ? array : array.sort((a, b) => a - b);
};

const randomArray = generateRandomNumbers({ amount: 100 });

console.log(`%cRandomArray: ${randomArray}`, "color: #3440eb");

const sortedArray = bubbleSort(randomArray);

console.log(`%cSortedArray: ${sortedArray}`, "color: #1bd12d");

const index = fibonacciSearch(sortedArray, NUMBER_TO_SEARCH);

console.log(
    `Element: ${NUMBER_TO_SEARCH} | Index: ${index} of { ${
        sortedArray.length
    } } ${index < 0 ? "[NOT FOUND]" : "[FOUND]"}`
);
