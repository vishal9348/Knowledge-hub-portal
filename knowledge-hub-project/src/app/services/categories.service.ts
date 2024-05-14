import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private http: HttpClient) {}

  getCategories() {
    // const categories = [
    //   {
    //     id: 1,
    //     title: 'education',
    //     description: 'Good For school student',
    //   },
    //   {
    //     id: 2,
    //     title: 'Enginnering',
    //     description: 'Good For Engineering student',
    //   },
    //   {
    //     id: 3,
    //     title: 'sports',
    //     description: 'Good For Sprtsman',
    //   },
    //   {
    //     id: 4,
    //     title: 'Agriculture',
    //     description: 'Good For Agriculture Section',
    //   },
    // ];

    // return categories;

    // -----using end point-----
    const apiUrl = 'http://localhost:3000/categories';

    return this.http.get<Category[]>(apiUrl);
  }
}
