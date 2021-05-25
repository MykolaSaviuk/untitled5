interface Animal {
    action: string

    get(): string;
}

class Bird implements Animal {
    action: string

    constructor(action: string) {
        this.action = action;

    }

    get(): string {
        return this.action
    }
}

class Cat implements Animal {
    action: string

    constructor(action: string) {
        this.action = action;

    }

    get(): string {
        return this.action
    }
}

class Fish implements Animal {
    action: string

    constructor(action: string) {
        this.action = action;

    }

    get(): string {
        return this.action
    }
}

let fish = new Fish('swim');
console.log(fish.get());

let bird = new Bird('fly');
console.log(bird.get());

let cat = new Cat('scratch');
console.log(cat.get());


abstract class Shape {
    abstract perimeter()

    abstract area()
}

class Triangle extends Shape {
    public a: number
    public b: number
    public c: number

    perimeter() {
   return this.a + this.b +this.c

    }
   area() {
       const p = (this.a + this.b + this.c) / 2;
       return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

   }

    constructor(a: number, b: number, c: number) {
        super();
       this.a = a;
       this.b = b;
       this.c = c;

    }
}






class Rectangle extends Shape {
    public a: number
    public b: number

    constructor(a: number, b: number) {
        super();
        this.a = a;
        this.b = b;
    }
    perimeter() {
        return this.a + this.b
    }
    area() {
        return this.a * this.b
    }
}



let triangle = new Triangle(3,4,5)
let triangle1 = new Triangle(4,5,6)
let triangle2 = new Triangle(7,8,9)

const arr = [triangle,triangle1,triangle2, new Rectangle(1,2)];

for (let shape of arr) {
    console.log(shape.area());
    console.log(shape.perimeter());
}