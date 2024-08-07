import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-utilisateur-form',
  templateUrl: './utilisateur-form.page.html',
  styleUrls: ['./utilisateur-form.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class UtilisateurFormPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
