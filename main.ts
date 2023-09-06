let MANO = 0
input.onGesture(Gesture.Shake, function () {
    MANO = randint(1, 3)
    if (MANO == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        music.play(music.createSoundExpression(WaveShape.Noise, 5000, 1, 150, 0, 779, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    } else if (MANO == 2) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        music.play(music.createSoundExpression(WaveShape.Sine, 31, 4, 223, 223, 238, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
        music.play(music.createSoundExpression(WaveShape.Noise, 54, 54, 255, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    }
})
