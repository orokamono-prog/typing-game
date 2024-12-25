class Game {
    private words: string[];
    private currentWordIndex: number;
    private score: number;
    private isGameActive: boolean;

    constructor() {
        this.words = [];
        this.currentWordIndex = 0;
        this.score = 0;
        this.isGameActive = false;
    }

    startGame(words: string[]) {
        this.words = words;
        this.currentWordIndex = 0;
        this.score = 0;
        this.isGameActive = true;
        this.nextWord();
    }

    endGame() {
        this.isGameActive = false;
        console.log(`ゲーム終了！あなたのスコアは ${this.score} です。`);
    }

    checkInput(input: string) {
        if (!this.isGameActive) return;

        if (input === this.words[this.currentWordIndex]) {
            this.score++;
            this.currentWordIndex++;
            this.nextWord();
        } else {
            console.log("間違った単語です。再試行してください。");
        }
    }

    private nextWord() {
        if (this.currentWordIndex < this.words.length) {
            console.log(`次の単語: ${this.words[this.currentWordIndex]}`);
        } else {
            this.endGame();
        }
    }
}

export default Game;