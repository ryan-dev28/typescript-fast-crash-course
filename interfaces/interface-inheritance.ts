interface Interface1{
  prop1?: string;
  prop2?: number;
  prop3?: boolean;
}

interface Interface2 extends Interface1{
  prop1: string;
}

const letsImp: Interface2 = {
  prop1: "Really?"
}