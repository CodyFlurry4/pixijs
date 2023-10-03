import * as PIXI from 'pixi.js';
import outlineSVG from '/outline.svg'
import headNeckSVG from '/HeadNeck.svg'
import chestSVG from '/Chest.svg'
import rightArmSVG from '/Right Arm.svg'
import leftArmSVG from '/Left Arm.svg'
import adominSVG from '/Abdominal and Pelvic-cropped.svg'
import legsSVG from '/Legs.svg'

const app = new PIXI.Application({
    antialias: true,
    background: '#1099bb',
    resizeTo: window 
});

document.body.appendChild(app.view);

const stageHeight = app.screen.height;
const stageWidth = app.screen.width;

// Make sure stage covers the whole scene
app.stage.hitArea = app.screen;

const outlineSprites = []
//outlineSprites.push(new PIXI.Sprite(PIXI.Texture.from(outlineSVG)))
outlineSprites.push(new PIXI.Sprite(PIXI.Texture.from(headNeckSVG)))
outlineSprites.push(new PIXI.Sprite(PIXI.Texture.from(chestSVG)))
outlineSprites.push(new PIXI.Sprite(PIXI.Texture.from(rightArmSVG)))
outlineSprites.push(new PIXI.Sprite(PIXI.Texture.from(leftArmSVG)))
outlineSprites.push(new PIXI.Sprite(PIXI.Texture.from(adominSVG)))
outlineSprites.push(new PIXI.Sprite(PIXI.Texture.from(legsSVG)))



const highlightOnOver = (e) => {
    e.currentTarget.scale.set(2)
}
//when highlighted it goes back to this scaling value I am trying to figure out how to
//use the scaling value of the body part instead here.
const unhighlight = (e) => {
    e.currentTarget.scale.set(1)
}

const buttonPositions = [
    685, 240,
    685, 360,
    780, 425,
    589, 425,
    684.5, 500,
    685, 690
];

//I had to manually set the scaling values because when getting the box off the svg 
//they came out different sizes
const scale = [
    .8, 
    .84,
    1.7,
    1.7,
    1.25,
    1.9
];

//    outlineSprites[0].scale.set(1); 
//    outlineSprites[1].scale.set(.82); 
//    outlineSprites[2].scale.set(1.2); 
//    outlineSprites[3].scale.set(1.2); 
//    outlineSprites[4].scale.set(1.2); 
//    outlineSprites[5].scale.set(1.89); 
   
outlineSprites.forEach((x, i=0) => {
    x.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
    x.scale.set(scale[i]);
    x.anchor.set(0.5);
    
    x.x = buttonPositions[i * 2];
    x.y = buttonPositions[i * 2 + 1];
    i++;
    
    // Opt-in to interactivity
    x.eventMode = 'static';
    
    // Shows hand cursor
    x.cursor = 'pointer';
    
    
    x
    .on('pointerover', highlightOnOver)
    .on('pointerout', unhighlight);
    app.stage.addChild(x);
});

