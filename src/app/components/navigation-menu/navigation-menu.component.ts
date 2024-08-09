import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule, FormsModule],
})
export class NavigationMenuComponent {
  public appPages = [
    { title: 'Dashboard', url: '/dashboard', icon: 'home' },
    { title: 'Produits', url: '/produit-list', icon: 'cube' },
    { title: 'Bons d\'Entrée', url: '/bon-entree-list', icon: 'enter' },
    { title: 'Bons de Sortie', url: '/bon-sortie-list', icon: 'exit' },
    { title: 'Categories', url: '/categorie-list', icon: 'pricetags' },
    { title: 'Motifs', url: '/motif-list', icon: 'key' },
    { title: 'Entrepots', url: '/entrepot-list', icon: 'business' },
    { title: 'Fournisseurs', url: '/fournisseur-list', icon: 'people' },
    { title: 'Utilisateurs', url: '/utilisateur-list', icon: 'person' },
    { title: 'Roles', url: '/role-list', icon: 'key' }
  ];
  constructor() {}
}
