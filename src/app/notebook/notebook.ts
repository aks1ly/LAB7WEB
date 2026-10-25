import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Notebook as NotebookModel } from '../Class/notebook';
import { GeneralNotebook } from '../Class/general-notebook';
import { Header } from '../header/header';

@Component({
	selector: 'app-notebook',
	imports: [FormsModule, Header],
	templateUrl: './notebook.html',
	styleUrl: './notebook.css'
})
export class Notebook {
	name: string = '';
	k: number | null = null;

	generalName: string = '';
	generalK: number | null = null;
	coverMaterial: string = '';

	regularCost: number | null = null;
	generalCost: number | null = null;
	errorMessage: string = '';
	showResults: boolean = false;

	// Перевірка даних і розрахунок вартості
	calculate(): void {
		this.errorMessage = '';
		this.showResults = false;
		this.regularCost = null;
		this.generalCost = null;

		if (!this.name.trim() || !this.generalName.trim()) {
			this.errorMessage = 'Введіть назви обох зошитів.';
			return;
		}

		if (
			this.k === null || !Number.isInteger(this.k) || this.k <= 0 ||
			this.generalK === null || !Number.isInteger(this.generalK) || this.generalK <= 0
		) {
			this.errorMessage = 'Кількість аркушів має бути додатним цілим числом.';
			return;
		}

		if (!this.coverMaterial.trim()) {
			this.errorMessage = 'Вкажіть матеріал обкладинки.';
			return;
		}

		const regular = new NotebookModel(this.name.trim(), this.k);
		const general = new GeneralNotebook(
			this.generalName.trim(),
			this.generalK,
			this.coverMaterial.trim()
		);

		this.regularCost = regular.calculateCost();
		this.generalCost = general.calculateCost();
		this.showResults = true;
	}
  
	getSheetText(count: number | null): string {
		const n = Math.abs(count ?? 0);

		if (n % 100 >= 11 && n % 100 <= 14) return `${n} аркушів`;
		if (n % 10 === 1) return `${n} аркуш`;
		if (n % 10 >= 2 && n % 10 <= 4) return `${n} аркуші`;
		return `${n} аркушів`;
	}

}
