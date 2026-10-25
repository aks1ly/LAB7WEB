import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface NegativeElement {
	row: number;
	column: number;
	value: number;
}

@Component({
	selector: 'app-array-two',
	imports: [FormsModule],
	templateUrl: './array-two.html',
	styleUrl: './array-two.css'
})
export class ArrayTwo {
	matrix: string[][] = Array.from(
		{ length: 5 },
		() => Array(3).fill('')
	);

	negativeElements: NegativeElement[] = [];
	error = '';
	isCalculated = false;

	isValidNumber(value: string): boolean {
		const text = value.trim();

		return /^[+-]?(?:\d+(?:[.,]\d+)?|[.,]\d+)$/.test(text)
			&& Number.isFinite(Number(text.replace(',', '.')));
	}

	onCellChange(row: number, column: number, value: string): void {
		this.matrix[row][column] = value;
		this.negativeElements = [];
		this.error = '';
		this.isCalculated = false;
	}

	calculate(): void {
		this.negativeElements = [];
		this.isCalculated = false;

		for (let i = 0; i < 5; i++) {
			for (let j = 0; j < 3; j++) {
				if (!this.isValidNumber(this.matrix[i][j])) {
					this.error = `Некоректне значення в клітинці A[${i + 1}, ${j + 1}].`;
					return;
				}
			}
		}

		for (let i = 0; i < 5; i++) {
			for (let j = 0; j < 3; j++) {
				const value = Number(this.matrix[i][j].trim().replace(',', '.'));

				if (value < 0) {
					this.negativeElements.push({
						row: i + 1,
						column: j + 1,
						value
					});
				}
			}
		}

		this.error = '';
		this.isCalculated = true;
	}

	clear(): void {
		this.matrix = Array.from(
			{ length: 5 },
			() => Array(3).fill('')
		);
		this.negativeElements = [];
		this.error = '';
		this.isCalculated = false;
	}

	isNegative(row: number, column: number): boolean {
		return this.isCalculated && this.negativeElements.some(
			element => element.row === row + 1 && element.column === column + 1
		);
	}
}
