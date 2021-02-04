interface MVP{
  player: string;
  team: string;
  former: boolean;
  mostPoints: number;
  printHighestScore(): void;
}

const mvp: MVP = {
  player: "Kobe",
  team: "Lakers",
  former: true,
  mostPoints: 60,
  printHighestScore() {
    console.log(`Highest score is ${this.mostPoints}`);
  }
}

let mvp1 = (mvp: MVP) => {
  console.log(`Highest score is ${mvp.mostPoints}`);
}