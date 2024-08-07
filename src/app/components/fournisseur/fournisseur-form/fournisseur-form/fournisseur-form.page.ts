import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-fournisseur-form',
  templateUrl: './fournisseur-form.page.html',
  styleUrls: ['./fournisseur-form.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class FournisseurFormPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
