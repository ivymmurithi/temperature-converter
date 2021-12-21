import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  public unit: any; 
  public results: any;

  convert(userInput: any) {
    this.results = this.unit === "f" ? (parseFloat(userInput) * 1.8) + 32 : ( 273.15 + parseFloat(userInput));
  }
}
