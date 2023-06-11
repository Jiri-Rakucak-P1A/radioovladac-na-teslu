radio.setGroup(1)
input.onButtonPressed(Button.A, function() {
    basic.clearScreen()
    radio.sendString("left")
    basic.showLeds(`
    . . # . .
    . . . # .
    # # # # #
    . . . # .
    . . # . .
    `)
    
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    radio.sendString("right")
    basic.showLeds(`
    . . # . .
    . # . . .
    # # # # #
    . # . . .
    . . # . .
    `)
    
})
basic.clearScreen()
input.onButtonPressed(Button.AB, function () {
    radio.sendString("forward")
    basic.showLeds(`
    . . # . .
    . # # # .
    # . # . #
    . . # . .
    . . # . .
    `)

})

input.onPinPressed(TouchPin.P2, function() {

    basic.clearScreen()
})