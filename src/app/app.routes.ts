import { Routes } from '@angular/router';
import { Card } from './card/card';
import { Singlelistview } from './singlelistview/singlelistview';
import { Home } from './home/home';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'card', component: Card },
    { path: 'singlelistview/:titileid', component: Singlelistview }
];
