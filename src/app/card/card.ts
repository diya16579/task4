import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Apiservice } from '../apiservice';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-card',
  imports: [CommonModule, RouterLink],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  // repeat=Array.from({length:6});
  products: any[] = [];
  constructor(private apiservice: Apiservice, private cdr: ChangeDetectorRef) { }
  ngOnInit() {
    this.apiservice.getProduct().subscribe((data: any) => {
      this.products = data.products;
      this.cdr.detectChanges();
    });
  }
}
