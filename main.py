flecha_derecha = images.create_image("""
    . . # . .
    . . . # .
    # # # # #
    . . . # .
    . . # . .
    """)
flecha_izquierda = images.create_image("""
    . . # . .
    . # . . .
    # # # # #
    . # . . .
    . . # . .
    """)

def on_forever():
    # Bucle que alterna entre las dos flechas
    flecha_derecha.show_image(0)
    basic.pause(500)
    flecha_izquierda.show_image(0)
    basic.pause(500)
basic.forever(on_forever)
