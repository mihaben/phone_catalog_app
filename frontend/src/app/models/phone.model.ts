import {PhoneVersions} from './phone-versions.model';

export class Phone {

  id: number;
  model: string;
  price: number;
  description: string[];
  versions: PhoneVersions[];

  constructor(data: any) {
    this.id = data.id;
    this.model = data.model;
    this.price = data.price;
    this.description = data.description;
    this.versions = data.versions;
  }

}
