import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees = [
    {
      firstName: "Jerry",
      lastName: "Wright",
      position: "Sales",
      phoneNumber: "770-543-2333",
      address1: "324 Wyles Rd.",
      city: 'Atlanta',
      state: 'Ga',
      zip: '30314'
    },
    {
      firstName: "Amy",
      lastName: "Jones",
      position: "Manager",
      phoneNumber: "770-983-1462",
      address1: "6555 Lincoln Rd.",
      city: 'Atlanta',
      state: 'Ga',
      zip: '30303'
    },
    {
      firstName: "James",
      lastName: "Smith",
      position: "Engineer",
      phoneNumber: "404-524-1122",
      address1: "623 Washington Dr.",
      city: 'Atlanta',
      state: 'Ga',
      zip: '30317'
    },
    {
      firstName: "Shannon",
      lastName: "Phillips",
      position: "Marketing",
      phoneNumber: "678-231-9924",
      address1: "1112 Wade Rd.",
      city: 'Atlanta',
      state: 'Ga',
      zip: '30314'
    },
  ]

  constructor() { }

}
