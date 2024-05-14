import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-listcategories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listcategories.component.html',
  styleUrl: './listcategories.component.css',
})
export class ListcategoriesComponent {
  title: string = 'List of Categories';
  categories = [
    {
      id: 1,
      title: 'education',
      description: 'Good For school student',
    },
    {
      id: 2,
      title: 'Enginnering',
      description: 'Good For Engineering student',
    },
    {
      id: 3,
      title: 'sports',
      description: 'Good For Sprtsman',
    },
    {
      id: 4,
      title: 'Agriculture',
      description: 'Good For Agriculture Section',
    },
  ];
}
