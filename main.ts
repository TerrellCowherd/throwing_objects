namespace SpriteKind {
    export const Ball = SpriteKind.create()
}
function bg () {
    scene.setBackgroundColor(11)
}
sprites.onOverlap(SpriteKind.Ball, SpriteKind.Projectile, function (sprite, otherSprite) {
    rain2.destroy()
})
function hero () {
    hero2 = sprites.create(img`
. . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . 
. c c f f . . . f . f f c c . . . . 
. f 4 4 4 f f f 4 f 4 4 4 f . . . . 
. f 4 1 1 c 4 4 4 4 c 1 4 f . . . . 
. c 4 1 f 4 4 4 4 4 4 f 4 c . . . . 
. c 4 f 4 4 4 4 4 4 4 4 f . . . . . 
. f 4 4 4 4 d 4 4 4 d 4 4 c . . . . 
. . f 4 4 f f f 4 d f f 4 f . . . . 
. . f 4 4 d d d d d d f c . . . . . 
. f 4 4 4 4 d d d d c f . . . . . . 
. . f 4 4 f f f f f f c . . . . . . 
. . . f 1 1 f c c c f c . . . . . . 
. . . c 1 1 c c c c f c . . . . . . 
. . f 1 1 1 c c c c c 1 f . . . . . 
. f 4 4 1 1 f c c c c 1 c . . . . . 
. f 4 4 4 4 f f f f f 4 c . . . . . 
. . f c 4 f 2 f f 2 2 4 c . . . . . 
. . . f f 2 2 2 f 2 2 2 f . . . . . 
. . . . c f f f c f f f f . . . . . 
`, SpriteKind.Player)
    hero2.setPosition(16, 99)
}
function cloud () {
    cloud2 = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . c f f f f f f f f f f c . . . . 
. . . . . . . . . . . . . . . f f b b b b b b b b b c f f . . . 
. . . . c f f f f f f f c . f c b b b b b b b c c b b b c f . . 
. . . f f c b b b b b c f f c c b b b b b b b b b c b b b c f . 
. . f c b b c c b b b b b c f c b b b b b b b b b b b b b b f . 
. f c b b c b b b b b b b b c f b b b b b b b b b b b b b b f . 
. f c b b b b b b b b b b b b f b b b b b c c c b b b b b b b f 
. f c b b b b b b c c b b b b c b b b b c b b b c b b b b b b f 
f c c b b b b b c b b c b b b c b b b b b b b b b b b b b b b f 
f c c c b b b b b b b b b b b c c b b b b b b b b b b b b b b f 
f c c c c c b b b b b b b b c c c c c b b b b b b b b b b b c f 
f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f 
c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, 50, 0)
    cloud2.setPosition(-9, 16)
}
function score () {
    info.changeScoreBy(1)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    hero2.setImage(img`
. . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . 
. c c f f . . . f . f f c c . . . . 
. f 4 4 4 f f f 4 f 4 4 4 f c f . . 
. f 4 1 1 c 4 4 4 4 c 1 4 f 4 c f . 
. c 4 1 f 4 4 4 4 4 4 f 4 c 4 f c f 
. c 4 f 4 4 4 4 4 4 4 4 f 1 4 f f f 
. f 4 4 4 4 d 4 4 4 d f 4 c 4 4 f f 
. . f 4 4 f f f 4 d f f 4 f 1 4 4 c 
. . f 4 4 d d d d d d f c 1 1 f f . 
. f 4 4 4 4 d d d d c f c f c . . . 
. . f 4 4 f f f f f f c f . . . . . 
. . . f 1 1 f c c c f c f . . . . . 
. . . c 1 1 c c c c f f . . . . . . 
. . f 1 1 1 c c c c c f . . . . . . 
. f 4 4 1 1 f c c c c f . . . . . . 
. f 4 4 4 4 f f f f f f . . . . . . 
. . f c 4 f 2 f f 2 2 f . . . . . . 
. . . f f 2 2 2 f 2 2 2 f . . . . . 
. . . . c 2 2 2 c f 2 2 f . . . . . 
. . . . . f f f f f f f c . . . . . 
`)
    ball()
})
function rain () {
    rain2 = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . f . . . . . . . . 
. . . . . . 6 f 6 . . . . . . . 
. . . . . . f 9 f . . . . . . . 
. . . . . 6 f 9 f . . . . . . . 
. . . . . f 6 9 f . . . . . . . 
. . . . . f 9 9 f 6 . . . . . . 
. . . . . f 9 9 1 f . . . . . . 
. . . . . f 9 9 9 f . . . . . . 
. . . . . f 6 9 9 f . . . . . . 
. . . . . 6 f 6 6 f . . . . . . 
. . . . . . 6 f f 6 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, cloud2, 50, 100)
}
function ball () {
    ball2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . f 2 2 2 2 f . . . . . 
. . . . f 2 2 2 2 2 2 f . . . . 
. . . . f 2 2 2 2 2 2 f . . . . 
. . . . f 2 2 2 2 2 2 f . . . . 
. . . . f 2 2 2 2 2 2 f . . . . 
. . . . . f 2 2 2 2 f . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Ball)
    ball2.setPosition(26, 93)
    ball2.setVelocity(100, -100)
    ball2.ay += 150
    if (ball2.vy < -100) {
        ball2.destroy()
    }
}
let ball2: Sprite = null
let cloud2: Sprite = null
let hero2: Sprite = null
let rain2: Sprite = null
bg()
hero()
game.onUpdateInterval(2000, function () {
    cloud()
})
game.onUpdateInterval(Math.randomRange(100, 1000), function () {
    rain()
})
game.onUpdateInterval(1000, function () {
    score()
})
