abstract class Mammal{

  eat(): string {
    return 'Eating';
  }
}

class Platypus extends Mammal{}

const platyPus = new Platypus;
platyPus.eat();