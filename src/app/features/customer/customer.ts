import { Component, signal } from '@angular/core';
import { ICustomer } from './customer.interface';
import { CustomerItem } from '../customer-item/customer-item';
import { Form } from '../form/form';

@Component({
  selector: 'app-customer',
  imports: [CustomerItem, Form],
  templateUrl: './customer.html',
  styleUrl: './customer.css',
})
export class Customer {
  customers = signal<ICustomer[]>([
    {
      name: 'Juan García',
      email: '',
      phone: '',
      avatar: 'https://i.pravatar.cc/150?u=juangarcia'
    },
    {
      name: 'María López',
      email: '',
      phone: '',
      avatar: 'https://i.pravatar.cc/150?u=marialopez'
    },
    {
      name: 'Carlos Rodríguez',
      email: '',
      phone: '',
      avatar: 'https://i.pravatar.cc/150?u=carlosrodriguez'
    },
    {
      name: 'Ana Martínez',
      email: '',
      phone: '',
      avatar: 'https://i.pravatar.cc/150?u=anamartinez'
    },
    {
      name: 'Pedro Sánchez',
      email: '',
      phone: '',
      avatar: 'https://i.pravatar.cc/150?u=pedrosanchez'
    },
    {
      name: 'Laura Fernández',
      email: '',
      phone: '',
      avatar: 'https://i.pravatar.cc/150?u=laurafernandez'
    },
    {
      name: 'Diego Moreno',
      email: '',
      phone: '',
      avatar: 'https://i.pravatar.cc/150?u=diegomoreno'
    },
    {
      name: 'Elena Jiménez',
      email: '',
      phone: '',
      avatar: 'https://i.pravatar.cc/150?u=elenajimenez'
    },
    {
      name: 'Miguel Torres',
      email: '',
      phone: '',
      avatar: 'https://i.pravatar.cc/150?u=migueltorres'
    },
    {
      name: 'Sofia Ruiz',
      email: '',
      phone: '',
      avatar: 'https://i.pravatar.cc/150?u=sofiaruiz'
    },
  ]);

  HandleDeleteCustomer(name: string) {
    this.customers.update((list) => list.filter((c) => c.name !== name));
  }

  addCustomer(formCustomer: Omit<ICustomer, 'avatar'>) {
    const customer: ICustomer = {
      ...formCustomer,
      avatar: `https://i.pravatar.cc/150?u=${formCustomer.name.replace(' ', '')}`,
    };
  
    this.customers.update((list) => [...list, customer]);
  }
}