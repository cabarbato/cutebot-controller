joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P14, joystickbit.ButtonType.down, function () {
    radio.sendValue("emote", 2)
    basic.showIcon(IconNames.Angry)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P15, joystickbit.ButtonType.down, function () {
    radio.sendValue("emote", 3)
    basic.showIcon(IconNames.Asleep)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P13, joystickbit.ButtonType.down, function () {
    radio.sendValue("emote", 1)
    basic.showIcon(IconNames.Sad)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.down, function () {
    radio.sendValue("emote", 0)
    basic.showIcon(IconNames.Heart)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . # . #
        . # . # .
        `)
})
let y = 0
let x = 0
joystickbit.initJoystickBit()
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . # . #
    . # . # .
    `)
joystickbit.Vibration_Motor(100)
music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.InBackground)
radio.setGroup(1)
basic.forever(function () {
    x = Math.map(joystickbit.getRockerValue(joystickbit.rockerType.X), 1023, 0, -100, 100)
    y = Math.map(joystickbit.getRockerValue(joystickbit.rockerType.Y), 1023, 0, -100, 100)
    radio.sendValue("x", x)
    radio.sendValue("y", y)
})
