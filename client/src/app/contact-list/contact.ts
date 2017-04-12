export class Contact {

  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  streetAddress: string;
  city: string;

  constructor(id?: number, firstName?: string, lastName?: string, phoneNumber?: string, streetAddress?: string, city?: string){
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.streetAddress = streetAddress;
    this.city = city;
  }
}
