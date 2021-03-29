let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 5 5 5 5 5 5 5 5 . . 
    . . . . . 5 5 5 5 5 5 5 5 5 . . 
    . . . . 5 5 5 5 5 5 5 5 5 5 . . 
    . . . . 5 5 d 5 5 d d 5 5 . . . 
    . . . . d 1 f d d f 1 d . . . . 
    . . . . d 1 f d d f 1 d . . . . 
    . . . . . d d d d d d . . . . . 
    . . . . . d f f f f d . . . . . 
    . . . 8 8 8 8 8 8 8 8 8 8 . . . 
    . . . 8 8 8 8 8 8 8 8 8 8 . . . 
    . . . d d 8 8 8 8 8 8 d d . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
scene.setBackgroundColor(9)
tiles.setTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite, 100, 0)
forever(function () {
    mySprite.ay = 500
})
