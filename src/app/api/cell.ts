export interface Cell {
    row?: number;
    column?: number;
    value?: number;
    url?: string;
    hasFlag?: boolean;
    hasBomb?: boolean;
    isOpen?: boolean;
    classCss?: string;
}