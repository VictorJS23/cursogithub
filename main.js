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

const array = []

for (let i = 0; i < 20; i++) {
    array[i] = Math.floor(Math.random()*100)
}

const arrayFilter = array.filter((n) => (n % 2 === 0))

// esto devuelve los elementos que son pares del arreglo

console.log(arrayFilter)
