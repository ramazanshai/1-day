let whiteLineThickness = 4;

let gameLoop = () => {
    setInterval(update, 1000 / gameSpeed);
    setInterval(draw, 1000 / framePerSecond);
};

let deleteCompleteRows = () => {
    for (let i = 0; i < gameMap.length; i++) {
        let t = gameMap[i];
        let isComplete = true;
        for (let j = 0; j < t.length; j++) {
            if (t[j].imageX == -1) isComplete = false;
        }
        if(isComplete) {
            console.log("complete row")
        }
    }
};

let update = () => {
    if (gameOver) return;
    if (currentShape.checkBottom()) {
        currentShape.y += 1;
    } else {
        for (let k = 0; k < currentShape.template.length; k++) {
            for (let l = 0; l < currentShape.template.length; l++) {
                if (currentShape.template[k][l] == 0) continue;
                gameMap[currentShape.getTruncedPosition().y + l][currentShape.getTruncedPosition().x + k] = { imageX: currentShape.imageX, imageY: currentShape.imageY };
            }
        }
    }
}