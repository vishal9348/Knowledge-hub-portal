import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ListcategoriesComponent } from './listcategories/listcategories.component';
import { CreatecategoryComponent } from './createcategory/createcategory.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    ListcategoriesComponent,
    CreatecategoryComponent,
    HomeComponent,
    FooterComponent,
    NotfoundComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'knowledge-hub-project';
}
