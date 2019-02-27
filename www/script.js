
// ref
// https://labs.phaser.io/edit.html?src=src\game%20objects\tilemap\collision\tile%20callbacks.js
// https://medium.com/@michaelwesthadley/modular-game-worlds-in-phaser-3-tilemaps-1-958fc7e6bbd6
// https://gamedevacademy.org/how-to-make-a-mario-style-platformer-with-phaser-3/
// http://www.html5gamedevs.com/topic/37978-overlapping-on-a-tilemap-object-layer/


// phaser game settings
let config = {
  type: Phaser.AUTO,
  width: 24 * 48,
  height: 18 * 48,
  physics: {
    default: 'arcade',
    arcade: {
        gravity: { y: 0 }
    }
},
  scene: {
      preload: preload,
      create: create,
      update: update
  }
};


let coinLayer;

//let player;
let score = 0;
let gameOver = false;

// New game instance based on config
let game = new Phaser.Game(config);


// Preload assets
function preload ()
{

  // load grid tiles in spritesheet 


  // load coin image/ spritesheet

  
  // load Player


  // load map (made with Tiled) in JSON format
 

}

// Build the game - add assets, etc.
function create ()
{
    // load the map 

    // tiles for the ground layer

    // coin image  as tileset


    // create the  layers


    // the player will collide with walls
    // The method setCollisionByExclusion makes all tiles except the ones sent available for collision detection.
    // Sending -1 in our case makes all tiles on this layer collidable.


    // set the boundaries of our game world


    // create the player sprite    
 

    //  Our player animations, turning, walking left and walking right.

    //  Input Events

    // collider
 

    // coin overlap callback

    // when the player overlaps with tile with index of the coin, collectCoin 
    // will be called    

}

// remove coin and increment score
function collectCoin(sprite, tile) {

}

function update() {

    // Horizontal movement


    // Vertical movement
      

    // Update the animation last and give left/right animations precedence over up/down animations
   


}