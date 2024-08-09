import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
    IonCard,
    IonCardContent,
    IonCardHeader, IonCardTitle,
    IonContent,
    IonHeader, IonItem, IonLabel, IonList, IonSearchbar,
    IonTitle,
    IonToolbar
} from '@ionic/angular/standalone';
import {BonEntree} from "../../../../models/bon-entree";
import {BonEntreeService} from "../../../../services/bon-entree.service";
import {Router} from "@angular/router";
import {AuthService} from "../../../../services/auth.service";

@Component({
  selector: 'app-bon-entree-list',
  templateUrl: './bon-entree-list.page.html',
  styleUrls: ['./bon-entree-list.page.scss'],
  standalone: true,
    imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonItem, IonLabel, IonList, IonSearchbar]
})
export class BonEntreeListPage implements OnInit {

  bonEntrees: BonEntree[] = [];
  filteredBonEntrees: BonEntree[] = [];
  bonentreeToDelete: number | null = null;
  bonentreeToValidate: number | null = null;
  selectedBonEntree: BonEntree | null = null;

  errorMessage= '';
  infoMessage= '';


  constructor(
    private bonEntreeService: BonEntreeService,
    private router: Router,
    private authService: AuthService,  ) {}

  ngOnInit(): void {
    this.loadBonEntrees();
  }

  loadBonEntrees(): void {
    const currentUser = this.authService.currentUserValue;
    if (currentUser && currentUser.entrepot) {
      const entrepotId = currentUser.entrepot.entrepotId;
      this.bonEntreeService.getBonEntreesByEntrepots(entrepotId).subscribe(data => {
        console.log('Données reçues:', data); // Debugging
        if (data.length === 0) {
          this.infoMessage = 'Aucun Bon Entrees trouvée pour cet Entrepot.';
          setTimeout(() => this.infoMessage = '', 2000);
        } else {
          this.bonEntrees = data;
          this.filteredBonEntrees = data;
        }
      }, error => {
        console.error('Erreur lors de la récupération des Bon Entrees:', error);
        this.errorMessage = 'Erreur lors de la récupération des Bon Entrees.';
      });
    } else {
      this.errorMessage = 'Erreur: entrepôt utilisateur non trouvé';
    }
  }


  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.filteredBonEntrees = this.bonEntrees.filter(bonEntree =>
      bonEntree.statut.toLowerCase().includes(filterValue)
    );
  }

  deleteBonEntree(id: number): void {
    this.bonEntreeService.deleteBonEntree(id).subscribe(() => {
      this.bonEntrees = this.bonEntrees.filter(b => b.id !== id);
      this.filteredBonEntrees = this.filteredBonEntrees.filter(b => b.id !== id);
    });
  }

  printBonEntree(id: number): void {
    this.router.navigate(['/print-bon-entree', id]);
  }

  navigateToAddDetail(bonEntreeId: number): void {
    this.router.navigate(['/bon-entree-detail', bonEntreeId]);
  }

}
