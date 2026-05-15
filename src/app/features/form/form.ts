import { Component, output, signal } from '@angular/core';
import { FormField, email, form, required } from '@angular/forms/signals';

interface CustomerForm {
  name: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'app-form',
  imports: [FormField],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  onAddCustomer = output<CustomerForm>();

  customer = signal<CustomerForm>({
    name: '',
    email: '',
    phone: '',
  });

  customerForm = form(this.customer, (customer) => {
    required(customer.name);
    required(customer.email);
    email(customer.email);
  });

  submit() {
    if (this.customerForm().invalid()) {
      return;
    }

    this.onAddCustomer.emit(this.customerForm().value());

    this.customerForm().reset({
      name: '',
      email: '',
      phone: '',
    });
  }
}