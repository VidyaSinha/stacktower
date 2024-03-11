let blockDropped = false;

function dropBlock() {
    if (!blockDropped) {
        blockDropped = true;
        moveBlock();
    }
}

function moveBlock() {
    const block = document.getElementById('block');
    const tower = document.getElementById('tower');

    let currentPosition = 0;
    const moveInterval = setInterval(() => {
        currentPosition += 5;
        block.style.bottom = currentPosition + 'px';

        if (currentPosition >= tower.clientHeight) {
            clearInterval(moveInterval);
            blockDropped = false;
            resetBlockPosition();
        }
    }, 10);
}

function resetBlockPosition() {
    const block = document.getElementById('block');
    block.style.bottom = '0';
}
