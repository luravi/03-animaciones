let flecha_derecha = images.createImage(`
    . . # . .
    . . . # .
    # # # # #
    . . . # .
    . . # . .
    `)
let flecha_izquierda = images.createImage(`
    . . # . .
    . # . . .
    # # # # #
    . # . . .
    . . # . .
    `)
basic.forever(function on_forever() {
    //  Bucle que alterna entre las dos flechas
    flecha_derecha.showImage(0)
    basic.pause(500)
    flecha_izquierda.showImage(0)
    basic.pause(500)
})
