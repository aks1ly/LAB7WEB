export class Notebook {
    name: string;
    k: number;

    constructor(name: string, k: number) {
        this.name = name;
        this.k = k;
    }

    // Розрахунок вартості звичайного зошита
    calculateCost(): number {
        return 15 * this.k;
    }
}
