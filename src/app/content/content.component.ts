import { Component } from '@angular/core';
import { FormsModule }  from '@angular/forms';
@Component({
  selector: 'app-content',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
 
  celsius:number = 0 ; 
  celsius1:number = 0 ; 
  fahrenheit: number = 0;
  fahrenheit1:number = 0;
  convertCelciusToFahrenheit() {
    this.fahrenheit = Math.floor((this.celsius * 9/5) + 32);
    return  this.fahrenheit.toFixed(2);
  }
  convertFahrenheitToCelcius(){
    this.celsius1 = Math.floor((this.fahrenheit1-32) * 5 / 9);
    return this.celsius1.toFixed(2);
  }
}
