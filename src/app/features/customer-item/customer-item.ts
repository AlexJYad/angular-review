import { Component, input, output } from '@angular/core';
import { ICustomer } from '../customer/customer.interface';
import { ButtonTrash } from '../shared/ui/button-trash/button-trash';

@Component({
  selector: 'app-customer-item',
  imports: [ButtonTrash],
  templateUrl: './customer-item.html',
  styleUrl: './customer-item.css',
})
export class CustomerItem {
  customerItem = input.required<ICustomer>();

  customerDelete = output<string>();

  deleteCustomer() {
    this.customerDelete.emit(this.customerItem().name);
  }
}
