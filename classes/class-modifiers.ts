
interface StudentType{
  getId(): string;
}
  
class Student implements StudentType{
  protected id: string;

  constructor(id: string) {
    this.id = id;
  }

  public getId() {
    return `This is your ID ${this.id}`;
  }
}

const student1 = new Student('20140582-C');