const exampleSetxx = new Set([1, 1, 1, 2, 2]);
exampleSetxx.add(5)
console.log(exampleSetxx);

var commands = [];
commands.push("const exampleSetx = new Set([1, 1, 1, 2, 2]);")
commands.push("console.log(exampleSetxx);")
commands.push("exampleSetxx.delete(1)")
render("Set - Can be forEach or ForOf (Has true/false)", exampleSetxx.has(1), commands)


const exampleSetx = new Set([1, 1, 1, 2, 2]);
exampleSetx.add(5)
console.log(exampleSetx);

var commands = [];
commands.push("const exampleSetx = new Set([1, 1, 1, 2, 2]);")
commands.push("console.log(exampleSetx);")
commands.push("exampleSetx.delete(1)")
render("Set (Delete true/false)", exampleSetx.delete(1), commands)

const exampleSet = new Set([1, 1, 1, 2, 2]);
exampleSet.add(5)
console.log(exampleSet);

var commands = [];
commands.push("const exampleSet = new Set([1, 1, 1, 2, 2]);")
commands.push("console.log(exampleSet);")
commands.push("exampleSet.add(5)")
render("Set (Remove duplicates)", exampleSet.size, commands)


var commands = [];
commands.push("const apiUrl = \"http://numbersapi.com/43/trivia\";")
commands.push("function getAPIData() {")
commands.push("fetch(apiUrl)")
commands.push(".then((response) => r.json()) // convert into json")
commands.push(".then((json) => {")
commands.push("console.log(json[0])")
commands.push("})")
commands.push("}")

render("Async/Await(old way)", "", commands)

function addx(param1,) {
    const example = {
        name: 'Dylan',
    };
    return example;
}

var commands = [];
commands.push("function addx(param1,) {")
commands.push("const example = {")
commands.push("name: 'Dylan',")
commands.push("}'")
commands.push("return example;")
commands.push("}")
render("Trailing Commas", JSON.stringify(addx()), commands)

import { Animal, Cat } from './animal.js';
let cat = new Cat('Cat', 4);

cat = new Cat('Cat', 4);

var commands = [];
commands.push("animal.js:")
commands.push("export class Animal {")
commands.push("constructor(type, legs) {")
commands.push("this.type = type")
commands.push("this.legs = legs")
commands.push("}")
commands.push("")
commands.push("makeNoise(sound = 'Loud noise') {")
commands.push("console.log(meow)")
commands.push("}")
commands.push("get metaData() {")
commands.push("return `Type:${this.type}, Legs:${this.legs}`;")
commands.push("}")
commands.push("return 10;")
commands.push("static return10() {")
commands.push("")
commands.push("}")
commands.push("}")
commands.push("")
commands.push("export class Cat extends Animal {")
commands.push("//     constructor(type, legs, tail) {")
commands.push("//     super(type, legs)")
commands.push("//     this.tail = tail;")
commands.push("// }")
commands.push("")
commands.push("makeNoise(sound = \"meow\") {")
commands.push("console.log(sound)")
commands.push("}")
commands.push("}")

commands.push("import { Animal } from './animal.js';");
commands.push("let cat = new Animal('Cat', 4);")
commands.push("cat.legs = 3")
commands.push("cat.metaData")
render("Classes(Extends Inheritance):", cat.metaData, commands)

var commands = [];
commands.push("animal.js:")
commands.push("export class Animal {")
commands.push("constructor(type, legs) {")
commands.push("this.type = type")
commands.push("this.legs = legs")
commands.push("}")
commands.push("")
commands.push("makeNoise(sound = 'Loud noise') {")
commands.push("console.log(meow)")
commands.push("}")
commands.push("static return10() {")
commands.push("return 10;")
commands.push("}")
commands.push("}")
commands.push("")

commands.push("import { Animal } from './animal.js';");
commands.push("Animal.return10()")
render("Classes(Static Method):", Animal.return10(), commands)

cat = new Animal('Cat', 4);
var commands = [];

commands.push("import { Animal } from './animal.js';");
commands.push("let cat = new Animal('Cat', 4);")
commands.push("cat.legs = 3")
commands.push("cat.makeNoise(meow)")
render("Classes(Initialized):", cat.makeNoise("meow"), commands)


cat = new Animal('Cat', 4);
cat.legs = 3

var commands = [];

commands.push("import { Animal } from './animal.js';");
commands.push("let cat = new Animal('Cat', 4);")
commands.push("cat.legs = 3")
commands.push("console.log(cat.legs)")
render("Classes", JSON.stringify(cat.legs), commands)

cat = new Animal('Cat', 4);
var commands = [];
commands.push("import { Animal } from './animal.js';");
commands.push("let cat = new Animal('Cat', 4);")
commands.push("cat.legs = 3")
commands.push("cat.makeNoise()")
render("Classes(default):", cat.makeNoise(), commands)

cat = new Animal('Cat', 4);

var commands = [];
commands.push("import { Animal } from './animal.js';");
commands.push("let cat = new Animal('Cat', 4);")
commands.push("console.log(cat.type)")

render("Classes", JSON.stringify(cat.type), commands)

cat = new Animal('Cat', 4);

var commands = [];
commands.push("import { Animal } from './animal.js';");
commands.push("let cat = new Animal('Cat', 4);")
commands.push("console.log(cat.legs)")

render("Classes", JSON.stringify(cat.legs), commands)

cat = new Animal('Cat', 4);

var commands = [];
commands.push("import { Animal } from './animal.js';");
commands.push("let cat = new Animal('Cat', 4);")
commands.push("console.log(cat)")

render("Classes", JSON.stringify(cat), commands)

let lname = 'Shendy'
console.log(lname.padStart(10, 'a'))

var commands = [];
commands.push("let lname = 'Shendy'");
commands.push("console.log(lname.padEnd(10, 'x'))")
render("pad start/end method (adds character based on extra length)", lname.padEnd(10, 'x'), commands)


let name = 'Shendy'
console.log(name.padStart(10, 'a'))


var commands = [];
commands.push("let name = 'Shendy'");
commands.push("console.log(name.padStart(10, 'x'))")
render("pad start/end method (adds character based on extra length)", name.padStart(10, 'x'), commands)


var commands = [];
commands.push("import { datax } from './example.js';")
commands.push("example.js:")
commands.push("export const data = [1, 2, 3];")
commands.push("");
commands.push("");
commands.push("console.log(datax)");
render("import/export", "[1, 2, 3]", commands)

const sample = {};
sample.firstName = "Shendy";

var commands = [];
commands.push("const sample = {};")
commands.push("sample.firstName = \"Shendy\";")
render("let (reassignable) and const (not changing)", JSON.stringify(sample), commands)


const examplez = [];
examplez.push("1")

var commands = [];
commands.push("const examplez = [];")
commands.push("examplez.push(1)")
render("let (reassignable) and const (not changing)", examplez, commands)

var example;
if (false) {
    var example = 5;
}

var commands = [];
commands.push("var example;")
commands.push("if (false) {")
commands.push("var example = 5;")
commands.push("}")
render("let and const (variable hoisting)", example, commands)

let numArray = [1, 2, 3]
console.log(numArray.includes(0))

var commands = [];
commands.push("let numArray = [1, 2, 3]")
commands.push("console.log(numArray.includes(0))")
render("INCLUDES (.includes returns true/false)", numArray.includes(0), commands)

let numArrayz = [1, 2, 3]
console.log(numArrayz.indexOf(0))

var commands = [];
commands.push("let numArrayz = [1, 2, 3]")
commands.push("console.log(numArrayz.indexOf(0))")

render("INCLUDES (results to -1 when index0f not found...)", numArrayz.indexOf(0), commands)

function addDefault(numArray = []) {
    let total = 0;

    numArray.forEach((element) => {
        total += element;
    })

    var commands = [];
    commands.push("function add(numArray = []) {")
    commands.push("let total = 0;")
    commands.push("numArray.forEach((element) => {")
    commands.push("total += element;")
    commands.push("})")
    commands.push("addDefault([1, 2])")

    render("PARAMETERS DEFAULT(function addDefault(numArray = [])", total, commands)
}

addDefault([1, 2])


function add4(...nums) {

    let total = nums.reduce((x, y) => x + y)

    var commands = [];
    commands.push("function add2(...nums) {")
    commands.push("let total = nums.reduce((x, y) =>  x + y)")
    commands.push("add4(10, 20, 30)")
    render("ARROW FUNCTION (ES6)", total, commands)
}
add4(10, 20, 30)

function add3(...nums) {

    let total = nums.reduce(function (x, y) {
        return x + y;
    })

    var commands = [];
    commands.push("function add2(...nums) {")
    commands.push(" let total = nums.reduce(function (x, y) {")
    commands.push("return x + y;")
    commands.push("})")
    commands.push("add3(10,20,30)")
    render("ARROW FUNCTION (OLD WAY)", total, commands)
}

add3(10, 20, 30)


function add2(...nums) {
    console.log(nums);

    var commands = [];
    commands.push("function add2(...nums) {")
    commands.push("console.log(nums);")
    commands.push("}")
    commands.push("add2(10, 20, 30)")
    render("REST OPERATOR:", nums, commands)
}

add2(10, 20, 30)

function add1(nums) {
    console.log(arguments);

    var commands = [];
    commands.push("function add1(nums) {")
    commands.push("console.log(arguments);")
    commands.push("}")
    commands.push("add1(10, 20, 30)")
    render("REST OPERATOR:", JSON.stringify(arguments), commands)
}

add1(10, 20, 30)

function add(nums) {
    console.log(arguments);

    var commands = [];
    commands.push("function add(nums) {")
    commands.push("console.log(nums);")
    commands.push("}")
    commands.push("add(10, 20, 30)")
    render("REST OPERATOR:", nums, commands)
}

add(10, 20, 30)


let example3 = [1, 2, 3, 4, 5];
let example4 = [...example3];
example4.push(true)

var commands = [];
commands.push("let example1 = [1, 2, 3, 4, 5];")
commands.push("let example2 = [...example1];")
commands.push("example4.push(true)")
commands.push("console.log(example2)")

render("SPREAD OPERATOR:", example4, commands)


let example1 = [1, 2, 3, 4, 5];
let example2 = [...example1];

commands = ["let example1 = [1, 2, 3, 4, 5];", "let example2 = [...example1];", "console.log(example2)"]
render("SPREAD OPERATOR:", example2, commands)


let incomes = [5000, 3000, 1000];
let total = 0;

for (const income of incomes) {
    total += income
}

commands = ["let incomes = [5000, 3000, 1000];", "let total = 0;", "", "for (const income of incomes) {", "total += income", "}", "console.log(total)"]
render("FOR LOOPS:", total, commands)


function addressMaker2(address) {
    const { city, state } = address;

    const newAddress = {
        city,
        state,
        country: 'United States'
    };

    commands = ["function addressMaker(address) {", " const { city, state } = address;", "", "const newAddress = {", "city,", "state,", "country: 'United States'", "};", "console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`)", "}", "addressMaker2({ city: 'Austin', state: 'Texas' });"]
    render("OBJECT LITERALS:", `${newAddress.city}, ${newAddress.state}, ${newAddress.country}`, commands)
}
addressMaker2({ city: 'Austin', state: 'Texas' });

function addressMaker1(city, state) {
    const newAddress = { city: city, state: state }

    commands = ["function addressMaker(city, state) {", "const newAddress = { city, state }", "}", "addressMaker('Austin', 'Texas')"]
    render("OBJECT LITERALS:", JSON.stringify(newAddress), commands)
}

addressMaker1('Austin', 'Texas');


function addressMaker(city, state) {
    const newAddress = { city: city, state: state }

    commands = ["function addressMaker(city, state) {", "const newAddress = { city: city, state: state }", "}", "addressMaker('Austin', 'Texas')"]
    render("OBJECT LITERALS:", JSON.stringify(newAddress), commands)
}

addressMaker('Austin', 'Texas');

commands = [JSON.stringify(addressMaker), "addressMaker('Austin', 'Texas')"]
render("OBJECT LITERALS:", JSON.stringify(addressMaker), commands)


let [firstName2, middleName2, lastName2] = ['Dylan', 'Coding God', 'Israel']
lastName2 = 'Clements'
var commands = ["let [firstName2, middleName2, lastName2] = ['Dylan', 'Coding God', 'Israel']", "lastName2 = 'Clements'", "console.log(`${firstName2} ${middleName2} ${lastName2}`)"]
render("DESTRUCTURING ARRAY:", `${firstName2}, ${middleName2}, ${lastName2}`, commands)


let [firstName1, middleName1, lastName1] = ['Dylan', 'Coding God', 'Israel']

var commands = ["let [firstName1, middleName1, lastName1] = ['Dylan', 'Coding God', 'Israel']", "console.log(`${firstName1} ${middleName1} ${lastName1}`)"]
render("DESTRUCTURING ARRAY:", `${firstName1}, ${middleName1}, ${lastName1}`, commands)


const personalInformation = {
    firstName: 'Shendy',
    lastName: 'Avila',
    city: 'Taguig',
    state: 'Metro Manila',
    zipCode: 1632
}

const { firstName: fn, lastName: ln } = personalInformation

var commands = [];
commands.push("const personalInformation = {")
commands.push("firstName: 'Shendy',")
commands.push("lastName: 'Avila',")
commands.push("city: 'Taguig',")
commands.push("state: 'Metro Manila',")
commands.push("zipCode: 1632")
commands.push("}")

commands.push("")
commands.push("const {firstName:fn, lastName:ln} = personalInformation")
commands.push("console.log(`${fn} ${ln}`)")
render("DESTRUCTURING OBJECTS:", `${fn} ${ln}`, commands)


const { firstName, lastName } = personalInformation
var commands = [];
commands.push("const personalInformation = {")
commands.push("firstName: 'Shendy',")
commands.push("lastName: 'Avila',")
commands.push("city: 'Taguig',")
commands.push("state: 'Metro Manila',")
commands.push("zipCode: 1632")
commands.push("}")
commands.push("")
commands.push("const { firstName, lastName } = personalInformation")
commands.push("console.log(`${firstname} ${lastName}`)")
render("DESTRUCTURING OBJECTS:", `${firstName} ${lastName}`, commands)

let word1 = 'Dylan';
let word2 = 'Israel'
const fullname = `${word1} ${word2}`;

var commands = ["let word1 = 'Dylan';", "let word2 = 'Israel';", "const fullname = `${word1} ${word2}`;"];
render("TEMPLATE_LITERALS:", fullname, commands)

let num1 = 1;
let num2 = 2;
const result = `${fullname}:${num1 + num2}`

var commands = ["let num1 = 1;", "let num2 = 2;", "const fullname = `${word1} ${word2}`;", "const result = `${fullname}:${num1 + num2};"];
render("TEMPLATE_LITERALS:", result, commands)


function render(x, y, z) {
    var main = document.getElementById("main")
    var parent = document.createElement('div')
    parent.id = 'box'

    var topic = document.createElement("div");
    var output = document.createElement("div");

    output.id = 'output'

    var topic_p = document.createElement("h4");
    var output_p = document.createElement("p");

    var topic_o = document.createTextNode(x)
    var output_o = document.createTextNode("Output:" + y)

    topic_p.appendChild(topic_o)
    output_p.appendChild(output_o);
    topic.appendChild(topic_p)
    output.appendChild(output_p);

    parent.appendChild(topic)


    z.forEach((element) => {
        var a = document.createElement("div")
        var b = document.createElement("p")
        var c = document.createTextNode(element)
        b.appendChild(c)
        a.appendChild(b)
        parent.appendChild(a)
    })

    // for (const x of z) {
    //     var a = document.createElement("div")
    //     var b = document.createElement("p")
    //     var c = document.createTextNode(x)
    //     b.appendChild(c)
    //     a.appendChild(b)
    //     parent.appendChild(a)
    // }

    parent.appendChild(output)
    main.appendChild(parent)
}