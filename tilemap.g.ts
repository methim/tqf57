// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1a001100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000606060606060606060606060606060606060606060606060606080505050505050505050505050505050505050505050505050a080505050505050505050505050505050505050505050505050a080505050505050505050505050505050505050505050505050a080507070705050505050505050505050505050505050505050a080a04040408050505050505050505050505050505050505050a090b04040409070707070707070707070707070707070707070b04040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040201040402010404020104040402010402010404040201040404010104040101040401010404040101040101040404010104040404040404040404040404040404040404040404040404040404030304040404040404040404040404040404040404040404040d0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0e`, img`
.............2............
.............2............
.............2............
.............2............
.............2............
.............2............
.............2............
.............2............
.............2............
.............2............
.............2............
.............2............
.............2............
.............2............
.............2............
.............2............
22222222222222222222222222
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile4,sprites.builtin.brick,myTiles.tile6,myTiles.tile3,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,sprites.builtin.forestTiles2,sprites.builtin.forestTiles1,sprites.builtin.forestTiles3], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile5":
            case "tile7":return tile7;
            case "myTile6":
            case "tile8":return tile8;
            case "myTile7":
            case "tile9":return tile9;
            case "myTile8":
            case "tile10":return tile10;
            case "myTile9":
            case "tile11":return tile11;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
