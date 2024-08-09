export class BrandModel {
  id: number;
  title: string;
  hexColor: string;
  path: JSX.Element;

  constructor({ id, title, hexColor, path }: BrandModel) {
    this.id = id;
    this.title = title;
    this.hexColor = hexColor;
    this.path = path;
  }
}
