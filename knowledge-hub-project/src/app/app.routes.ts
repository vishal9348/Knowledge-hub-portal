import { Routes } from '@angular/router';
import { ListcategoriesComponent } from './listcategories/listcategories.component';
import { CreatecategoryComponent } from './createcategory/createcategory.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
  {
    path: 'category/list',
    component: ListcategoriesComponent,
    title: 'Knowledge Hub Portal - Category List',
  },
  {
    path: 'category/create',
    component: CreatecategoryComponent,
    title: 'Knowledge Hub Portal - Create Category',
  },
  {
    path: '',
    component: HomeComponent,
    title: 'Knowledge Hub Portal - Home',
  },
  {
    path: '**',
    component: NotfoundComponent,
    title: 'Knowledge Hub Portal - Error',
  },
];
