const comprarCasco = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Comprar casco"/*{
            precio: 1234,
            lugar: "moteros",
            distancia: "lejeson"
        }*/)
        reject("ta muy lejos la tienda")
    }, 1000)
})
const comprarGuantes = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Comprar guantes"/*{
            precio: 500,
            lugar: "moteros",
            distancia: "lejeson"
        }*/)
        reject("ta muy lejos la tienda")
    }, 2000)
})
const Paseo = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("yendo de rol")
        reject("ando cansado")
    }, 8000)
})

const andarEnBici = () => {
    comprarCasco.then(info => {
        console.log(info)
        return comprarGuantes;
    })
    .then(info1 => {
        console.log(info1)
        return Paseo;
    })
    .then(info2 => {
        console.log(info2)
    })
    .catch(error => {
        console.log(error)
    })
}

andarEnBici()