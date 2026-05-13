import { Component } from '@angular/core';
import { ICustomer } from './customer.interface';

@Component({
  selector: 'app-customer',
  imports: [],
  templateUrl: './customer.html',
  styleUrl: './customer.css',
})
export class Customer {
  costumers: ICustomer[] = [
    { name: 'Juan García', avatar: 'https://i.pravatar.cc/150?u=juangarcia' },
    { name: 'María López', avatar: 'https://i.pravatar.cc/150?u=marialopez' },
    { name: 'Carlos Rodríguez', avatar: 'https://i.pravatar.cc/150?u=carlosrodriguez' },
    { name: 'Ana Martínez', avatar: 'https://i.pravatar.cc/150?u=anamartinez' },
    { name: 'Pedro Sánchez', avatar: 'https://i.pravatar.cc/150?u=pedrosanchez' },
    { name: 'Laura Fernández', avatar: 'https://i.pravatar.cc/150?u=laurafernandez' },
    { name: 'Diego Moreno', avatar: 'https://i.pravatar.cc/150?u=diegomoreno' },
    { name: 'Elena Jiménez', avatar: 'https://i.pravatar.cc/150?u=elenajimenez' },
    { name: 'Miguel Torres', avatar: 'https://i.pravatar.cc/150?u=migueltorres' },
    { name: 'Sofia Ruiz', avatar: 'https://i.pravatar.cc/150?u=sofiaruiz' },
  ];
}
