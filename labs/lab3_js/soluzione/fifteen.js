"use strict";

// 15 real tiles
// 1 empy tile in the lower right corner
//
//     0   100  200  300               0   100  200  300    
//   0 +----+----+----+----+         0 +----+----+----+----+
//     | 0,0| 0,1| 0,2| 0,3|           | 0,0| 0,1| 0,2| 0,3|
// 100 +----+----+----+----+       100 +----+----+----+----+ 
//     | 1,0| 1,1| 1,2| 1,3|           | 1,0| 1,1| 1,2| 1,3|
// 200 +----+----+----+----+       200 +----+----+----+----+
//     | 2,0| 2,1| 2,2| 2,3|           | 2,0| 2,1| 2,2|empty
// 300 +----+----+----+----+       300 +----+----+----+----+
//     | 3,0| 3,1| 3,2|empty           | 3,0| 3,1| 3,2| 3,3|
//     +----+----+----+                +----+----+----+----+

// -----------------
// --- CONSTANTS ---
// -----------------

const TILE_DIM = 100; // dimension of a tile

const EMPTY_TILE_START_POS_X = 3; // starting x position of the empty tile
const EMPTY_TILE_START_POS_Y = 3; // starting y position of the empty tile
const EMPTY_TILE_START_ID = "tile_3_3"; // starting id of the empty tile

// ------------------------
// --- GLOBAL VARIABLES ---
// ------------------------

var puzzleTiles = []; // puzzle with all tiles
var emptyTile = {   // emptyTile while playing
    id: EMPTY_TILE_START_ID,
    x: EMPTY_TILE_START_POS_X ,
    y: EMPTY_TILE_START_POS_Y
};


// --------------
// --- ONLOAD ---
// --------------

window.onload = function() {
    // create the puzzle	
	createPuzzle();
	
    // add click observer of the suffle botton
	document.getElementById("shufflebutton").onclick = shuffleClick;
}

// -----------------------
// --- EVENT FUNCTIONS ---
// -----------------------

function shuffleClick() {
    // random number of moves (between 20 and 200)
    const randomMoves = Math.floor((Math.random() * 200) + 20);

    Array.from({ length: randomMoves }).forEach(() => {
        const movableTiles = [];
      
        if (emptyTile.x !== 0) {
          movableTiles.push(`tile_${emptyTile.x - 1}_${emptyTile.y}`);
        }
      
        if (emptyTile.y !== 0) {
          movableTiles.push(`tile_${emptyTile.x}_${emptyTile.y - 1}`);
        }
      
        if (emptyTile.x !== 3) {
          movableTiles.push(`tile_${emptyTile.x + 1}_${emptyTile.y}`);
        }
      
        if (emptyTile.y !== 3) {
          movableTiles.push(`tile_${emptyTile.x}_${emptyTile.y + 1}`);
        }

        // move a tile at random among the ones that can be moved
        const rndTileId = movableTiles[Math.floor(Math.random() * movableTiles.length)];
        moveTile(document.getElementById(rndTileId));
      });
     
}

function tileClick() {
	// move the tile
    if(moveTile(this)) {
        // if the puzzle is completed, show a message
        if(checkPuzzle()) {
            alert("CONGRATS! You solved the puzzle!");
        }   
    }
}

function tileMouseOver() {
    // get tile's indexes
    const {x, y} = getTileIndexes(this);

    // highlight the tile if the tile can be moved
    if(checkCloseEmptyTile(x, y) && !this.classList.contains("tile_ok")){  
        this.classList.add("tile_ok")
    } 
}

function tileMouseLeave() {
	// de-highlight the tile if the tile is already highlighted
    if(this.classList.contains("tile_ok")) {
		this.classList.remove("tile_ok");
    }
}

// -----------------
// --- FUNCTIONS ---
// -----------------

function createPuzzle() {
   // let y = 0;
   // let offset = 3;
    
    // get the div tiles
	puzzleTiles = document.querySelectorAll('#puzzlearea div');
	
    // create and position the tiles
    for (const [i,tile] of puzzleTiles.entries()) {
		// get the position in the grid
        const x = Math.floor(i / 4);
        const y = i % 4;
        
        // add all attributes
        tile.className ="tile";

        tile.style.top = `${TILE_DIM * x}px`;
        tile.style.left = `${TILE_DIM * y}px`;

        tile.style.backgroundPosition = `${-y * TILE_DIM}px ${x * -TILE_DIM}px`;

        tile.onclick = tileClick;
        tile.onmouseover = tileMouseOver;
        tile.onmouseleave = tileMouseLeave;
        
        tile.id = `tile_${x}_${y}`;
    }
}	

function moveTile(tile) {
   // get tile's indexes
   const {x, y} = getTileIndexes(tile);

    // if the tile can be moved
	if(checkCloseEmptyTile(x, y)) {
        // switch the position and the id with the empty tile
        tile.style.top = `${emptyTile.x*100}px`;
        tile.style.left = `${emptyTile.y*100}px`;
        
        const tileId = tile.id;
        tile.id = emptyTile.id;
	       
        emptyTile.x= x;
        emptyTile.y = y;
        emptyTile.id = tileId;
        
        return(true);
	}
    return(false);
}

function checkCloseEmptyTile(x, y) {
    	
    // if the current tile has close the empty tile, then return true
	if(Math.abs(emptyTile.y - y) == 1 && emptyTile.x - x == 0
      || Math.abs(emptyTile.x - x) == 1 && emptyTile.y- y == 0) {
        return(true);
    }
    // return false otherwise
    return(false);
}

function checkPuzzle() {
    // check if the empty tile is at the starting position
    if(emptyTile.id != EMPTY_TILE_START_ID) {
        return(false);
    }
    
    // iterate all tiles
    for (const [i,tile] of puzzleTiles.entries()) {
    	// get the position in the grid
        const x = Math.floor(i / 4);
        const y = i % 4;
        
        // return false if it is in the wrong position
        if(tile.id!=`tile_${x}_${y}`) {
		    return(false);
        }
	};

    // return true if all tiles are in the correct position
    return(true);
}	

function getTileIndexes(tile) {
       // get the tile's positions to return its grid's indexes
       const x = parseInt(tile.style.top)/100;
       const y = parseInt(tile.style.left)/100;

       // this function returns two values
       return {x,y};
}