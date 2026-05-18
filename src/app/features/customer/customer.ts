import { Component, signal } from '@angular/core';
import { ICustomer } from './customer.interface';
import { CustomerItem } from '../customer-item/customer-item';
import { CustomerForm } from '../forms/customer-form/customer-form';

@Component({
  selector: 'app-customer',
  imports: [CustomerItem, CustomerForm],
  templateUrl: './customer.html',
  styleUrl: './customer.css',
})
export class Customer {
  customers = signal<ICustomer[]>([
    { name: 'Juan García', avatar: 'https://i.pravatar.cc/150?u=juangarcia', email: '1@test.com' },
    { name: 'María López', avatar: 'https://i.pravatar.cc/150?u=marialopez', email: '1@test.com' },
    {
      name: 'Carlos Rodríguez',
      avatar: 'https://i.pravatar.cc/150?u=carlosrodriguez',
      email: '1@test.com',
    },
    {
      name: 'Ana Martínez',
      avatar: 'https://i.pravatar.cc/150?u=anamartinez',
      email: '2@test.com',
    },
    {
      name: 'Pedro Sánchez',
      avatar: 'https://i.pravatar.cc/150?u=pedrosanchez',
      email: '3@test.com',
    },
    {
      name: 'Laura Fernández',
      avatar: 'https://i.pravatar.cc/150?u=laurafernandez',
      email: '4@test.com',
    },
    {
      name: 'Diego Moreno',
      avatar: 'https://i.pravatar.cc/150?u=diegomoreno',
      email: '5@test.com',
    },
    {
      name: 'Elena Jiménez',
      avatar: 'https://i.pravatar.cc/150?u=elenajimenez',
      email: '6@test.com',
    },
    {
      name: 'Miguel Torres',
      avatar: 'https://i.pravatar.cc/150?u=migueltorres',
      email: '7@test.com',
    },
    {
      name: 'Sofia Ruiz',
      avatar: 'https://i.pravatar.cc/150?u=sofiaruiz',
      email: '8@test.com',
    },
  ]);

  HandleDeleteCustomer(name: string) {
    this.customers.update((list) => list.filter((c) => c.name !== name));
  }
  onCustomerReceived(data: ICustomer) {
    this.customers.update((list) => [...list, data]);
  }

  addCustomer(name: string, avatar: string, email: string) {
    const customer: ICustomer = {
      name,
      avatar,
      email,
    };
    this.customers.update((list) => [...list, customer]);
  }
}
