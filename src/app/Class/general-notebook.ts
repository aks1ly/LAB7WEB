import { Notebook } from './notebook';

export class GeneralNotebook extends Notebook {
    coverMaterial: string;

    constructor(name: string, k: number, coverMaterial: string) {
        super(name, k);
        this.coverMaterial = coverMaterial;
    }

    // Перевизначення методу з урахуванням надбавки
    override calculateCost(): number {
        return super.calculateCost() + 50;
    }
}
