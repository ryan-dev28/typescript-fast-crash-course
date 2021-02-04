function testGeneric<T>(generic: T): T{
  let otherGeneric: T;
  return generic;
}

const getIt = testGeneric('Test');