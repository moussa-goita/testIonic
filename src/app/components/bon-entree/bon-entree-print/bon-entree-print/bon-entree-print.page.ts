import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-bon-entree-print',
  templateUrl: './bon-entree-print.page.html',
  styleUrls: ['./bon-entree-print.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class BonEntreePrintPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
