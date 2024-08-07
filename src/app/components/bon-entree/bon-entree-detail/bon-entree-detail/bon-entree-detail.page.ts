import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-bon-entree-detail',
  templateUrl: './bon-entree-detail.page.html',
  styleUrls: ['./bon-entree-detail.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class BonEntreeDetailPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
