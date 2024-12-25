export interface Word {
    text: string;
    length: number;
}

export type GameState = 'waiting' | 'playing' | 'ended';