// class Animal {
//     name: any;
//     color: any;
//     constructor(name, color) {
//         this.name = name
//         this.color = color
//     }
//     protected run() {
//         console.log(this.name + " is running!");
//     }
//     public shout() {
//         console.log(this.name + " is shouting!");
//     }
//     private pri_shout() {
//         console.log(this.name + " is shouting!");
//     }
// }

// class Monkey extends Animal {
//     eatBanana() {
//         console.log(this.name + " is eating Banana");
//     }

// }

// let animal = new Animal("Qasim", "White");
// let monkey = new Monkey("Sandhu", "Black");


// animal.shout();
// monkey.shout();

// // console.log(Qasim, "Qasim", Sandhu, "Sandhu");


// class firstClass {
//     add() {
//         console.log("First Method")
//     }
// }
// class secondClass extends firstClass {
//     add() {
//         console.log(30 + 40);
//     }
// }
// class thirdClass extends secondClass {
//     add() {
//         console.log("Last Method")
//     }
// }
// let ob = new firstClass();
// let ob2 = new secondClass();
// let ob3 = new thirdClass();
// ob.add();
// ob2.add();
// ob3.add();


class A {
	area(x, y) {
		console.log(x * y, "x*y");
	}
}
class B extends A {
	area(a, b) {
		super.area(a, b);
		console.log('Class B')
	}
}
let ob = new B();
let output = ob.area(100, 200);
