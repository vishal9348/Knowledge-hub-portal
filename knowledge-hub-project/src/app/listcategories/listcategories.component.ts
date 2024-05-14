import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { Category } from '../models/category';

@Component({
  selector: 'app-listcategories',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './listcategories.component.html',
  styleUrl: './listcategories.component.css',
})
export class ListcategoriesComponent implements OnInit {
  title: string = 'List of Categories';
  categories: Category[] = [];
  constructor(private service: CategoriesService) {}

  ngOnInit(): void {
    //1
    // const service = new CategoriesService();
    //2 in constructor we can inject/create object

    this.service.getCategories().subscribe((res) => {
      this.categories = res;
    });
  }
}
