import { Component, signal, output } from '@angular/core';
import {
  form,
  FormField,
  required,
  email,
  submit,
  debounce,
  validate,
} from '@angular/forms/signals';
import { ICustomer } from '../../customer/customer.interface';

@Component({
  selector: 'app-customer-form',
  imports: [FormField],
  templateUrl: './customer-form.html',
  styleUrl: './customer-form.css',
})
export class CustomerForm {
  formSubmitted = output<ICustomer>();
  model = signal({ name: '', email: '', avatar: '' });
  customerForm = form(this.model, (schema) => {
    //name
    required(schema.name, { message: 'Name is required' });
    debounce(schema.name, 300);
    //email
    required(schema.email, { message: 'Email is required' });
    email(schema.email, { message: 'Email is incorrect' });
    debounce(schema.email, 500);

    // avatar — валидация только если введено
    debounce(schema.avatar, 500);
    validate(schema.avatar, (value) => {
      if (!value) return null;
      try {
        new URL(value.value());
        return null; // валидный URL
      } catch {
        return { kind: 'url', message: 'Avatar URL is incorrect' };
      }
    });
  });

  async onSubmit() {
    await submit(this.customerForm, async (f) => {
      // Вызывается только если форма валидна
      const data = {
        name: f().value().name,
        email: f().value().email,
        avatar:
          f().value().avatar || `https://i.pravatar.cc/150?u=${f().value().name.replace(' ', '')}`,
      };

      // console.log('Отправляем:', data);
      this.formSubmitted.emit(data);
    });
    this.model.set({ name: '', email: '', avatar: '' });
    this.customerForm().reset();
  }
}
