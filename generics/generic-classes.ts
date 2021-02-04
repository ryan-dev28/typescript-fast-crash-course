let arrayType: number[] = [1, 2, 3, 4, 5];
let arrayGeneric: Array<number> = [1, 2, 3, 4, 5];

// Generic Constraints
class GenericsClass<T1, T2 extends number>{
  constructor(public type1: T1, public type2: T2) {
      
  }

  public printType1(): T1{
    return this.type1;
  }

  public printType2(): T2{
    return this.type2;
  }
}

const genericsClass = new GenericsClass("Test", 1212);
// Specific Type
const genericsClass2 = new GenericsClass<number, number>(1234, 234);