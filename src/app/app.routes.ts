import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Notebook } from './notebook/notebook';
import { ArrayOne } from './array-one/array-one';
import { ArrayTwo } from './array-two/array-two';

export const routes: Routes = [
	{ path: '', component: Home },
	{ path: 'notebooks', component: Notebook },
	{ path: 'array-one', component: ArrayOne },
	{ path: 'array-two', component: ArrayTwo },
	{ path: '**', redirectTo: '' }
];
