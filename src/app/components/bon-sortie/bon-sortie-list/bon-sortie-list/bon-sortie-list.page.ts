import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-bon-sortie-list',
  templateUrl: './bon-sortie-list.page.html',
  styleUrls: ['./bon-sortie-list.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class BonSortieListPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
