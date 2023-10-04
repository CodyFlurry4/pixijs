import * as PIXI from 'pixi.js';
import outlineSVG from '/outline.svg'
import headNeckSVG from '/HeadNeck.svg'
import chestSVG from '/Chest.svg'
import rightArmSVG from '/Right Arm.svg'
import leftArmSVG from '/Left Arm.svg'
import abdomenSVG from '/Abdominal and Pelvic-cropped.svg'
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


//outlineSprites.push(new PIXI.Sprite(PIXI.Texture.from(outlineSVG)))
// headNeck = outlineSprites.push(new PIXI.Sprite(PIXI.Texture.from(headNeckSVG)))
// chest = outlineSprites.push(new PIXI.Sprite(PIXI.Texture.from(chestSVG)))
// rightArm = outlineSprites.push(new PIXI.Sprite(PIXI.Texture.from(rightArmSVG)))
// leftArm = outlineSprites.push(new PIXI.Sprite(PIXI.Texture.from(leftArmSVG)))
// abdomen = outlineSprites.push(new PIXI.Sprite(PIXI.Texture.from(abdomenSVG)))
// legs = outlineSprites.push(new PIXI.Sprite(PIXI.Texture.from(legsSVG)))

const outlineSprites = [
    {
        name: 'headNeck',
        svg:  new PIXI.Sprite(PIXI.Texture.from(headNeckSVG)),
        positionX: 685,
        positionY: 240,
        scale:.8
    },
    {
        name: 'chest',
        svg:  new PIXI.Sprite(PIXI.Texture.from(chestSVG)),
        positionX: 685,
        positionY: 360,
        scale:.84
    },  
    {
        name: 'rightArm',
        svg:  new PIXI.Sprite(PIXI.Texture.from(rightArmSVG)),
        positionX: 780,
        positionY: 425,
        scale:1.7
    },
    {
        name: 'leftArm',
        svg:  new PIXI.Sprite(PIXI.Texture.from(leftArmSVG)),
        positionX: 589,
        positionY: 425,
        scale:1.7
    },
    {
        name: 'abdomen',
        svg:  new PIXI.Sprite(PIXI.Texture.from(abdomenSVG)),
        positionX: 684.5,
        positionY: 500,
        scale:1.25
    },
    {
        name: 'legs',
        svg:  new PIXI.Sprite(PIXI.Texture.from(legsSVG)),
        positionX: 685,
        positionY: 690,
        scale:1.9
    },
];





const highlightOnOver = (e) => {
   e.sprite.scale.set(1.2*e.initialScale)
}
//when highlighted it goes back to this scaling value I am trying to figure out how to
//use the scaling value of the body part instead here.
const unhighlight = (e) => {
    e.sprite.scale.set(e.initialScale)
}
  
outlineSprites.forEach((x) => {
    const button = x.svg
    button.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
    button.scale.set(x.scale);
    button.anchor.set(0.5);
    
    button.x = x.positionX;
    button.y = x.positionY;

    
    // Opt-in to interactivity
    button.eventMode = 'static';
    
    // Shows hand cursor
    button.cursor = 'pointer';
    
    
    button
    .on('pointerover', () => highlightOnOver({sprite: button, initialScale: x.scale}))
    .on('pointerout', () => unhighlight({sprite: button, initialScale: x.scale}));
    app.stage.addChild(button);
});

