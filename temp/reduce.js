const array1 = [1,2,3,4]
const initialValue = 0
const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
)
console.log(sumWithInitial) //10

const productWithInitial = array1.reduce(
    (pre, cur) => pre * cur,
    2
)
console.log(productWithInitial)//48

const productWithoutInitial = array1.reduce(
    (pre, cur) => pre * cur
)
console.log(productWithoutInitial)//24