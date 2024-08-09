import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonCard, IonCardContent,
  IonCardHeader, IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader, IonInfiniteScroll, IonInfiniteScrollContent, IonItem, IonLabel, IonList, IonSearchbar,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import { Produit } from '../../../../models/produit';
import {ProduitService} from "../../../../services/produit.service";
import {AuthService} from "../../../../services/auth.service";
import {Router} from "@angular/router";
import {CurrentUser} from "../../../../models/currentUser";

@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.page.html',
  styleUrls: ['./produit-list.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonList, IonInfiniteScroll, IonInfiniteScrollContent, IonItem, IonLabel, IonSearchbar]
})
export class ProduitListPage implements OnInit {

  produits: Produit[] = [];
  filteredProduits: Produit[] = [];

  produitsToDelete: number | null = null;
  produitsToEdit: number | null = null;
  errorMessage = '';
  infoMessage = '';
  currentUser: CurrentUser | null = null;

  constructor(private produitService: ProduitService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loadProduits();
  }

  loadProduits(): void {
    /*const currentUser = this.authService.currentUserValue;
    if (currentUser && currentUser.entrepot) {
      const entrepotId = currentUser.entrepot.entrepotId;
      this.produitService.getProduitsByEntrepot(entrepotId).subscribe(produits => {
        if (produits.length === 0) {
          this.infoMessage = 'Aucun produit trouvée pour cet Entrepot.';
          setTimeout(() => this.infoMessage = '', 2000);
        }else{

          this.produits = produits;
        }
      }, error => {
        console.error('Erreur lors de la récupération des produits:', error);
        this.errorMessage = 'Erreur lors de la récupération des produits.';
      });
    } else {
      this.errorMessage = 'Erreur: entrepôt utilisateur non trouvé';
    }*/
  }

  addProduit(): void {
    this.router.navigate(['/add-produit']);
  }

  editProduit(id: number): void {
    this.router.navigate(['/edit-produit', id]);
  }

  deleteProduit(id: number): void {
    this.produitService.deleteProduit(id).subscribe(() => {
      this.produits = this.produits.filter(p => p.id !== id);
      this.filteredProduits = this.filteredProduits.filter(p => p.id !== id);
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.filteredProduits = this.produits.filter(produit =>
      produit.productName.toLowerCase().includes(filterValue)
    );
  }
}
