import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-form',
  imports: [],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  name = signal('');

  isValid = computed(() => this.name().length > 0);

  submit() {
    console.log({ name: this.name() });
  }
}
