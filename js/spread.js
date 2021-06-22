const car = {
    color: 'red',
    year: 2020,
    ports: 4
}
const cloneCAR = car
const cloneCar = {...car}
cloneCar.marca = 'HOnda'

console.log(car == cloneCAR)

const ns = [1,33,2,2901, 21912, 222]
const nsMax = Math.max(...ns)

console.log(nsMax)