input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    let p = 0
    basic.showLeds(`
        . # . . .
        . # . . .
        . # # # .
        . # . # .
        . # . # .
        `)
    datalogger.log(datalogger.createCV("Plastico", p))
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # # .
        . # # # .
        . # # # .
        . # # # .
        . # # # .
        `)
    datalogger.log(datalogger.createCV("Papel", 1))
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Skull)
    datalogger.deleteLog()
    datalogger.setColumnTitles(
    "Papel",
    "Vidrio",
    "Plastico"
    )
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    datalogger.log(datalogger.createCV("Vidrio", 1))
    basic.clearScreen()
})
datalogger.setColumnTitles(
"Papel",
"Vidrio",
"Plastico"
)
basic.showIcon(IconNames.Yes)
