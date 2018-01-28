export class PhoneVersions {

  selected: boolean;
  color: string;
  image: string;

  constructor(data: any) {
    this.selected = data.selected;
    this.color = data.color;
    this.image = data.image;
  }

}
