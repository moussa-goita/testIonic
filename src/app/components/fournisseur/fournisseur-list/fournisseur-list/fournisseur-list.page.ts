import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-fournisseur-list',
  templateUrl: './fournisseur-list.page.html',
  styleUrls: ['./fournisseur-list.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class FournisseurListPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
