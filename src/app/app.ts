import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Customer } from './features/customer/customer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Customer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-review');
}
