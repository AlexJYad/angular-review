import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Customer } from './features/customer/customer';
import { Form } from './features/form/form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Customer, Form],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-review');
}
