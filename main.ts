function _3단계 () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.clearScreen()
}
function 자기센서보정과값표시 () {
    basic.showNumber(input.magneticForce(Dimension.Strength))
}
function _1단계 () {
    basic.showLeds(`
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.clearScreen()
}
function _2단계 () {
    basic.showLeds(`
        # # # # #
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.clearScreen()
}
function 자기장세기분류 () {
    if (input.magneticForce(Dimension.Strength) <= 50) {
        자기센서세기 = 1
    } else if (input.magneticForce(Dimension.Strength) <= 100) {
        자기센서세기 = 2
    } else if (input.magneticForce(Dimension.Strength) <= 150) {
        자기센서세기 = 3
    } else if (input.magneticForce(Dimension.Strength) <= 200) {
        자기센서세기 = 4
    } else if (input.magneticForce(Dimension.Strength) > 200) {
        자기센서세기 = 5
    }
}
function _5단계 () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(100)
    basic.clearScreen()
}
function _4단계 () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        . . . . .
        `)
    basic.pause(100)
    basic.clearScreen()
}
function 자기장세기따라LED출력 () {
    if (자기센서세기 == 1) {
        _1단계()
    } else if (자기센서세기 == 2) {
        _2단계()
    } else if (자기센서세기 == 3) {
        _3단계()
    } else if (자기센서세기 == 4) {
        _4단계()
    } else if (자기센서세기 == 5) {
        _5단계()
    }
}
let 자기센서세기 = 0
input.calibrateCompass()
basic.forever(function () {
    자기센서보정과값표시()
    자기장세기분류()
    자기장세기따라LED출력()
})
