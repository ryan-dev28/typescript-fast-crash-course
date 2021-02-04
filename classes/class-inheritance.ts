class StreetFighter{
  protected character: string = 'Ryu';

  public showCharacter(): string{
    return `You select ${this.character}`;
  }
}

class Tekken extends StreetFighter{
  
  public showCharacter(): string{
    this.character = 'Akuma'
    return `You select ${this.character}`;
  }
}

const streetFighter = new StreetFighter;
streetFighter.showCharacter();

const tekken = new Tekken;
tekken.showCharacter();