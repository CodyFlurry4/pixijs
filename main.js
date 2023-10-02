import * as PIXI from 'pixi.js';
import outlineSVG from '/outline.svg'
import headNeckSVG from '/HeadNeck.svg'
import chestSVG from '/Chest.svg'
import rightArmSVG from '/Right Arm.svg'
import leftArmSVG from '/Left Arm.svg'
import adominSVG from '/Abdominal and Pelvic.svg'
import legsSVG from '/Legs.svg'

const app = new PIXI.Application({
    antialias: true,
    background: '#1099bb',
});

document.body.appendChild(app.view);

const stageHeight = app.screen.height;
const stageWidth = app.screen.width;

// Make sure stage covers the whole scene
app.stage.hitArea = app.screen;

const outlineSprites = []
outlineSprites.push(new PIXI.Sprite(PIXI.Texture.from(outlineSVG)))
outlineSprites.push(new PIXI.Sprite(PIXI.Texture.from(headNeckSVG)))
outlineSprites.push(new PIXI.Sprite(PIXI.Texture.from(chestSVG)))
outlineSprites.push(new PIXI.Sprite(PIXI.Texture.from(rightArmSVG)))
outlineSprites.push(new PIXI.Sprite(PIXI.Texture.from(leftArmSVG)))
outlineSprites.push(new PIXI.Sprite(PIXI.Texture.from(adominSVG)))
outlineSprites.push(new PIXI.Sprite(PIXI.Texture.from(legsSVG)))

const highlightOnOver = (e) => {
    e.currentTarget.scale.set(2)
}

const unhighlight = (e) => {
    e.currentTarget.scale.set(1)
}

outlineSprites.forEach((x, index) => {
    x.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
    x.scale.set(1);
    x.anchor.set(0.5);
    x.x = stageWidth / 2;
    x.y = stageHeight / 2;
    
    // Opt-in to interactivity
    x.eventMode = 'static';
    
    // Shows hand cursor
    x.cursor = 'pointer';
    
    
    x
    .on('pointerover', highlightOnOver)
    .on('pointerout', unhighlight);
    app.stage.addChild(x);
});


