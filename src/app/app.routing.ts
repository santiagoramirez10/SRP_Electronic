import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Component } from '@angular/core';

const appRoutes = [
    { path: "", component: HomeComponent },
    { path: "home", component: HomeComponent },
    { path: "products", component: ProductsComponent },
    { path: '**', component: PageNotFoundComponent }
];
export const routing = RouterModule.forRoot(appRoutes);
