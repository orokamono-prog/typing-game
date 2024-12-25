export function generateRandomWords(count: number): string[] {
    const words = [
        "apple", "banana", "cherry", "date", "elderberry",
        "fig", "grape", "honeydew", "kiwi", "lemon",
        "mango", "nectarine", "orange", "papaya", "quince",
        "raspberry", "strawberry", "tangerine", "ugli", "watermelon"
    ];

    const randomWords: string[] = [];
    for (let i = 0; i < count; i++) {
        const randomIndex = Math.floor(Math.random() * words.length);
        randomWords.push(words[randomIndex]);
    }

    return randomWords;
}