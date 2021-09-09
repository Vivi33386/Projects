'use strict';

const lineCount = 8;

// Írj egy programot, ami egy ilyen "sakktáblát" rajzol ki:
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//

let lines = 0;

for (lines = 0; lines < 8; lines++) {
    if (lines % 2 == 0) {
        console.log("% % % %");
    }
    else { console.log(" % % % %  "); }
}

