let tal = 0
input.onGesture(Gesture.Shake, function () {
    tal += 1
    basic.showNumber(tal)
})
