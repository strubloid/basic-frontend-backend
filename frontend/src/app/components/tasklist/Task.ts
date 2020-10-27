export class Task {
  id: string;
  title: string;
  status: boolean;
  date: Date;

  constructor(title) {
    this.title = title;

    // default values
    this.status = false;
    this.date = new Date();
    this.id = 'anything';
  }
}
