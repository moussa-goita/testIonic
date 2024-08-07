import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-entrepot-form',
  templateUrl: './entrepot-form.page.html',
  styleUrls: ['./entrepot-form.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class EntrepotFormPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
