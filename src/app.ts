import { Game } from './components/Game';

const app = () => {
    const game = new Game();
    game.startGame();

    // メインのゲームループ
    const gameLoop = () => {
        if (!game.isGameOver) {
            requestAnimationFrame(gameLoop);
            game.update();
        }
    };

    gameLoop();
};

app();