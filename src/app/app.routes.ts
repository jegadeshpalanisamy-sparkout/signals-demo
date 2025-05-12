import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./component/product/product.component').then(m => m.ProductComponent)
    },
    {
        path: 'input-output-signal',
        loadComponent: () => import('./signal -input-output/search/search.component').then(m => m.SearchComponent)
    }
];
