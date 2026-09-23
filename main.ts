input.onPinPressed(TouchPin.P0, function () {
    music.play(music.tonePlayable(C, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(E, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(G, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
})

input.onPinPressed(TouchPin.P1, function () {
    music.play(music.tonePlayable(F, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(A, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(C2, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
})

input.onPinPressed(TouchPin.P2, function () {
    music.play(music.tonePlayable(G, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(B, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(D, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
})

input.onButtonPressed(Button.A, function () {
    C = C / 2
    D = D / 2
    E = E / 2
    F = F / 2
    G = G / 2
    A = A / 2
    B = B / 2
    C2 = C2 / 2
})

input.onButtonPressed(Button.B, function () {
    C = C * 2
    D = D * 2
    E = E * 2
    F = F * 2
    G = G * 2
    A = A * 2
    B = B * 2
    C2 = C2 * 2
})

let C = 262
let D = 294
let E = 330
let F = 349
let G = 392
let A = 440
let B = 494
let C2 = 523