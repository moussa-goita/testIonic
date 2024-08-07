import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-bon-sortie-print',
  templateUrl: './bon-sortie-print.page.html',
  styleUrls: ['./bon-sortie-print.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class BonSortiePrintPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
