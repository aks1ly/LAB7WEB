import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'app-array-one',
	imports: [FormsModule],
	templateUrl: './array-one.html',
	styleUrl: './array-one.css'
})
export class ArrayOne {
	surnames: string[] = ['', '', '', '', ''];
	result: string[] = [];
	error = '';
	isCalculated = false;

	isValidSurname(value: string): boolean {
		return /^[А-Яа-яІіЇїЄєҐґ'’ʼ-]+(?: [А-Яа-яІіЇїЄєҐґ'’ʼ-]+)*$/.test(value.trim())
			&& /[А-Яа-яІіЇїЄєҐґ]/.test(value);
	}

	onSurnameChange(index: number, value: string): void {
		this.surnames[index] = value;
		this.result = [];
		this.error = '';
		this.isCalculated = false;
	}

	calculate(): void {
		const values = this.surnames.map(name => name.trim());

		if (values.some(name => !this.isValidSurname(name))) {
			this.error = 'Введіть п’ять коректних прізвищ українськими літерами.';
			this.result = [];
			this.isCalculated = false;
			return;
		}

		this.result = [...values].reverse();
		this.error = '';
		this.isCalculated = true;
	}

	clear(): void {
		this.surnames = ['', '', '', '', ''];
		this.result = [];
		this.error = '';
		this.isCalculated = false;
	}
}
