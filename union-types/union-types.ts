// Other Types
type tuple = [string, number];

let test: tuple = ["test", 12];

enum Marvel {
  Spiderman,
  Cyclops
};

let heroes: Marvel = Marvel.Spiderman;

// Union Types | <- Pipe symbol
let primitiveTypes: string | number;
let strongTypes: tuple | Marvel;
