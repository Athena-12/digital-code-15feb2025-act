let NUMBERS = 0
input.onGesture(Gesture.Shake, function () {
    NUMBERS = randint(1, 3)
    if (NUMBERS == 1) {
        basic.showIcon(IconNames.Scissors)
        music.play(music.tonePlayable(330, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    } else if (NUMBERS == 2) {
        basic.showIcon(IconNames.SmallSquare)
        music.play(music.tonePlayable(233, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    } else if (NUMBERS == 3) {
        basic.showIcon(IconNames.Square)
        music.play(music.tonePlayable(165, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
})
