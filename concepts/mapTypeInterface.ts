interface ICar {
  name: string;
  tires: number;
  engine?: string;
}

type ReadonlyCar = { +readonly [K in keyof ICar]-?: ICar[K] };

const car: ICar = { name: "Audi", tires: 4 };
const readonlyCar: ReadonlyCar = { name: "Audi", tires: 4, engine: "Diesel" };

// Not Allowed
// readonlyCar.tires = 3;
