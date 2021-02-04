interface Habits{
  eat(food: string): string;
  play(game: string): string;
  watch(movie: string): string;
}

class Person implements Habits{

  eat(food: string){
    return `Eating ${food}`;
  };

  play(game: string) {
    return `Playing ${game}`;
  }

  watch(movie: string) {
    return `Watching ${movie}`;
  }
}

const person1 = new Person();

person1.eat("Chicken");
person1.play("Basketball");
person1.watch("Pokemon");
