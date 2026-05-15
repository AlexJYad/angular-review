import { Component, signal, computed, output } from '@angular/core';

@Component({
  selector: 'app-form',
  imports: [],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  name = signal('');

  onAddCustomer = output<string>();

  isValid = computed(() => this.name().length > 0);

  submit() {
    if (!this.isValid) return;

    this.onAddCustomer.emit(this.name());

    this.name.set('');
  }
}
