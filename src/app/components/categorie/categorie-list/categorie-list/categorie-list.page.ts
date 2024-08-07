import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-categorie-list',
  templateUrl: './categorie-list.page.html',
  styleUrls: ['./categorie-list.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CategorieListPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
