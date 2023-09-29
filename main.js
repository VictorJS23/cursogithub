console.log("Hola Mundo desde JavaScript en linux")

const factorial = ((n) => {
    if(n === 0 || n === 1){
        return 1
    } else {
        return n * factorial(n - 1)
    }
})

let result = factorial(4)

console.log(result)

const array = [1, 2, 3, 4, 5, 6]

console.log(array)

console.log('---------------------------------------')

const arrayFilter = array.filter((n) => (n % 2 === 0)).map(function(n) {
    return factorial(n)
})

// esto devuelve los elementos que son pares del arreglo y luego se mapean
// para calcular el factorial de cada uno de ellos

console.log(arrayFilter)
