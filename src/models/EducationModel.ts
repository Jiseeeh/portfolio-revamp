export class EducationModel {
  id: number;
  schoolName: string;
  date: string;
  description: string;
  imageFileName: string;
  imageAlt: string;
  imageSource: string;

  constructor({
    id,
    schoolName,
    date,
    description,
    imageFileName,
    imageAlt,
    imageSource,
  }: EducationModel) {
    this.id = id;
    this.schoolName = schoolName;
    this.date = date;
    this.description = description;
    this.imageFileName = imageFileName;
    this.imageAlt = imageAlt;
    this.imageSource = imageSource;
  }
}
