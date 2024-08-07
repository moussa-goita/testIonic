import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-bon-entree-form',
  templateUrl: './bon-entree-form.page.html',
  styleUrls: ['./bon-entree-form.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class BonEntreeFormPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
