import {Component, OnInit} from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { homeOutline, homeSharp, cubeOutline, cubeSharp, enterOutline, enterSharp, exitOutline, exitSharp, pricetagsOutline, pricetagsSharp, keyOutline, keySharp, businessOutline, businessSharp, peopleOutline, peopleSharp, personOutline, personSharp } from 'ionicons/icons';
import { AuthService } from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    IonicModule,
    NavigationMenuComponent,
    RouterLink,
    RouterLinkActive,
    FormsModule
  ],
})
export class AppComponent implements OnInit {
  isDarkMode = false;

  ngOnInit() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.isDarkMode = localStorage.getItem('darkMode') === 'true' || prefersDark;
    console.log('Dark Mode on Init:', this.isDarkMode);
    document.body.classList.toggle('dark', this.isDarkMode);
    document.body.classList.add('dark');
  }


  public appPages = [
    { title: 'Dashboard', url: '/dashboard', icon: 'home' },
    { title: 'Produits', url: '/produit-list', icon: 'cube' },
    { title: 'Bons d\'Entrée', url: '/bon-entree-list', icon: 'enter' },
    { title: 'Bons de Sortie', url: '/bon-sortie-list', icon: 'exit' },
    { title: 'Fournisseurs', url: '/fournisseur-list', icon: 'people' },
    { title: 'Mon Profil', url: '/user-profile', icon: 'person' },
  ];

  constructor(public authService: AuthService) {
    addIcons({
      homeOutline, homeSharp,
      cubeOutline, cubeSharp,
      enterOutline, enterSharp,
      exitOutline, exitSharp,
      pricetagsOutline, pricetagsSharp,
      keyOutline, keySharp,
      businessOutline, businessSharp,
      peopleOutline, peopleSharp,
      personOutline, personSharp
    });
    document.body.classList.remove('dark');
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    console.log('Toggling Dark Mode:', this.isDarkMode);
    document.body.classList.toggle('dark', this.isDarkMode);
    localStorage.setItem('darkMode', this.isDarkMode.toString());
  }

}
