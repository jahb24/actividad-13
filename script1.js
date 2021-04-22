const todo = (tarea, duracion, callback) => {
    setTimeout(()=>{
        callback(tarea)
    }, duracion)
}

todo("Comprar casco", 1000, (tarea) => {
    console.log(tarea/*`Realizando la tarea ${tarea}`*/)
    todo("comprar guantes", 2000, (tarea) => {
        console.log(tarea/*`Realizando la tarea ${tarea}`*/)
        todo("yendo de rol", 8000, (tarea) => {
            console.log(tarea/*`Realizando la tarea ${tarea}`*/)
        })
    })
})