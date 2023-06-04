/*************Task 1 – Create a counter object in all possible ways******************/

// 1.1. Using Object Literal Syntax. Cwhich allows you to create objects using curly brackets and enumerating properties and methods inside them:

const counter = {
    count: 0,
    increment() {
        this.count++;
    },
    decrement() {
        this.count--;
    },
    reset() {
        this.count = 0;
    }
};

console.log(counter.count); // 0
counter.increment();
console.log(counter.count); // 1
counter.decrement();
console.log(counter.count); // 0
counter.reset();
console.log(counter.count); // 0

// 1.2. Using Constructor Function, which allows you to create objects using the new keyword and define properties and methods inside the function.:

function Counter() {
this.count = 0;
this.increment = function () {
this.count++;
};
this.decrement = function () {
this.count--;
};
this.reset = function () {
this.count = 0;
};
}

const counter = new Counter();
console.log(counter.count); // 0
counter.increment();
console.log(counter.count); // 1
counter.decrement();
console.log(counter.count); // 0
counter.reset();
console.log(counter.count); // 0

// 1.3. Using Class Syntax (ES6), which allows you to create objects using the class keyword and define the constructor, properties and methods inside it.:
class Counter {
    constructor() {
        this.count = 0;
    }

    increment() {
        this.count++;
    }

    decrement() {
        this.count--;
    }

    reset() {
        this.count = 0;
    }
}

const counter = new Counter();
console.log(counter.count); // 0
counter.increment();
console.log(counter.count); // 1
counter.decrement();
console.log(counter.count); // 0
counter.reset();
console.log(counter.count); // 0

// 1.4. Using Object.create(), which allows you to create objects using an existing object as a prototype and add properties and methods via the second argument.:
const counterPrototype = {
    count: 0,
    increment() {
        this.count++;
    },
    decrement() {
        this.count--;
    },
    reset() {
        this.count = 0;
    }
};

const counter = Object.create(counterPrototype);
console.log(counter.count); // 0
counter.increment();
console.log(counter.count); // 1
counter.decrement();
console.log(counter.count); // 0
counter.reset();
console.log(counter.count); // 0

// 1.5. Using the factory function approach, which allows you to create objects using closures and return an object with methods to control a hidden variable:

function createCounter() {
    let value = 0;

    return {
        increment() {
            value++;
        },
        decrement() {
            value--;
        },
        getValue() {
            return value;
        }
    };
}

let counter = createCounter();
counter.increment(); // Increment the counter
console.log(counter.getValue()); // Output: 1

counter.decrement(); // Decrement the counter
console.log(counter.getValue()); // Output: 0

// 1.6. Object destructuring, an extension operator (spread) that allows you to create objects by copying all properties and methods from another object

// Creating a counter object using the object literal

const counter = {
    count: 0,
    increment() {
        this.count++;
    },
    decrement() {
        this.count--;
    },
    reset() {
        this.count = 0;
    }
};

// Creating a new counter 2 object using the extension operator (...)

const counter2 = { ...counter };

// Checking the operation of the new object in the console
console.log(counter2.count); // 0
counter2.increment();
console.log(counter2.count); // 1
counter2.decrement();
console.log(counter2.count); // 0
counter2.reset();
console.log(counter2.count); // 0

/** 1.7. creating an object using the new keyword The new keyword is used to create a new object based on the constructor function. Using the new keyword, JavaScript automatically creates a new object, sets the prototype of this object to the prototype property of the constructor function and calls the constructor method on the constructor function, passing any arguments that you provided**/

function Counter() {
    let count = 0;

    this.increment = function () {
        count++;
    };

    this.decrement = function () {
        count--;
    };

    this.getCount = function () {
        return count;
    };
}

// Create a new counter object
const counter = new Counter();

// Use the counter object
counter.increment();
console.log(counter.getCount()); // Output: 1

counter.increment();
counter.increment();
counter.decrement();
console.log(counter.getCount()); // Output: 2

// 1.8. creating an object using the keyword class. The class keyword is used to define a class that is a template for creating objects. Classes in JS are based on prototypes, but also have some syntax and semantics that are unique to classes. A class can contain a constructor, methods, getters, setters, and fields
class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  getCount() {
    return this.count;
  }
}

// Create a new counter object
const counter = new Counter();

// Use the counter object
counter.increment();
console.log(counter.getCount()); // Output: 1

counter.increment();
counter.increment();
counter.decrement();
console.log(counter.getCount()); // Output: 2

// 1.9. Using Object.assign():
/***Advantages:
 * Allows you to create a new object by copying properties and methods from another object.
 * Provides a shallow copy of the object, meaning the properties are copied by value rather than reference.
 * Allows you to extend or modify the copied object without affecting the original object.
 * 
 *  Disadvantages:
 * It performs a shallow copy, so if the original object contains nested objects or arrays, they will still be shared between the original and copied objects.
 * If the original object has non - enumerable properties or methods, they will not be copied. **/

// Creating a counter object using the object literal syntax

const counter = {
    count: 7,
    increment() {
        this.count++;
    },
    decrement() {
        this.count--;
    },
    reset() {
        this.count = 0;
    }
};

// Creating a new counter 2 object using Object.assign ()

const counter2 = Object.assign({}, counter);

// Checking the operation of a new object in the console

console.log(counter2.count); // 7
counter2.increment();
console.log(counter2.count); // 8
counter2.decrement();
console.log(counter2.count); // 7
counter2.reset();
console.log(counter2.count); // 0

// 1.10. Using class syntax (ES6) with inheritance:
/**Advantages:
 * Provides a cleaner syntax for defining classes and creating objects.
 * Supports inheritance, allowing you to create subclasses that inherit properties and methods from a base class.
 * Encapsulates data and behavior within the class, promoting code organization and reusability.
 * Provides a clear separation between the constructor and methods.**/
/** Disadvantages:
 * The use of classes introduces the concept of prototypes, which may be unfamiliar to developers new to JavaScript.
 * The class syntax is not supported in older versions of JavaScript engines, so it may not be usable in all environments without transpiling.
 * The class syntax can lead to potential pitfalls when dealing with the this context, especially when using methods as callbacks or event handlers.*/   

// Shape - base class
class Shape {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    move(dx, dy) {
        this.x += dx;
        this.y += dy;
        console.info("Shape moved.");
    }
}

// Rectangle - subclass Shape
class Rectangle extends Shape {
    constructor(x, y, width, height) {
        super(x, y); // calling the base class constructor
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}

const rect = new Rectangle(10, 20, 50, 60);
console.log(rect.x); // 10
console.log(rect.y); // 20
console.log(rect.area()); // 3000
rect.move(5, 10);
console.log(rect.x); // 15
console.log(rect.y); // 30

// 1.11.  Using a constructor function with a prototype:

/**Advantages: 
 * Helps avoid code duplication by defining methods in the prototype of the constructor function
Provides a way to extend the functionality of objects by adding new methods to the prototype after the constructor function has been defined.
 * Allows for efficient memory usage as the methods are stored in a single shared prototype object rather than being duplicated for each instance.**/

/** Disadvantages: 
 * The syntax for defining methods using the prototype can be less intuitive and less visually appealing compared to using class syntax or object literal syntax. 
 * Access to instance-specific variables (properties) from prototype methods can be more cumbersome, as the prototype methods do not have direct access to instance variables and require using the this keyword to access them. 
 * Can lead to potential confusion or errors if the prototype methods are modified dynamically, as the changes will affect all instances of the object. **/
function Counter() {
    this.count = 0;
}

Counter.prototype.increment = function () {
    this.count++;
};

Counter.prototype.decrement = function () {
    this.count--;
};

Counter.prototype.reset = function () {
    this.count = 0;
};

// Creating a new counter object
const counter = new Counter();

// Using the counter object
counter.increment();
console.log(counter.count); // 1

counter.increment();
counter.increment();
counter.decrement();
console.log(counter.count); // 2


/*************Task 2 – Copy the counter object in all possible ways***************/

// Creating the source object
const counter = {
    value: 2023
};

// 2.1. Object.assign():
const counterCopy1 = Object.assign({}, counter);
console.log(counterCopy1); // { value: 2023 }

// 2.2. Spread Operator:
const counterCopy2 = { ...counter };
console.log(counterCopy2); // { value: 2023}

// 2.3. JSON.parse() and JSON.stringify():
const counterCopy3 = JSON.parse(JSON.stringify(counter));
console.log(counterCopy3); // { value: 2023 }

// 2.4. Object.create():
const counterCopy4 = Object.create(Object.getPrototypeOf(counter), Object.getOwnPropertyDescriptors(counter));
console.log(counterCopy4); // { value: 2023 }

// 2.5. Manual Iteration:
const counterCopy5 = {};
for (let key in counter) {
    if (counter.hasOwnProperty(key)) {
        counterCopy5[key] = counter[key];
    }
}
console.log(counterCopy5); // { value: 2023 }

// 2.6. Object.fromEntries(), which converts an array of key-value pairs into an object:
const counterCopy6 = Object.fromEntries(Object.entries(counter));
console.log(counterCopy6); // { value: 2023}


/** 2.7. To compare objects (not deep), you can use the comparison operator (===), which checks the equality of references to objects, or the method Object.is (), which checks the equality of the values of objects, taking into account some features (for example, NaN is equal to itself). **/

console.log(counter === counterCopy1); // false
console.log(Object.is(counter, counterCopy1)); // false

// 2.8. Using slice() method:

/** The slice() method creates a shallow copy of an array by specifying no arguments.It returns a new array containing all the elements of the original array.**/

// Creating a source array
const arr = [1, 2, 3];

// Creating a copy of an array using the method slice ()
const arrCopy = arr.slice();
console.log(arrCopy); // [1, 2, 3]

// Changing the source array
arr.push(4);
console.log(arr); // [1, 2, 3, 4]
console.log(arrCopy); // [1, 2, 3]

// 2.9. Using concat() method:

/**The concat() method creates a shallow copy of an array by concatenating it with an empty array.It returns a new array containing all the elements of the original array.**/

// Creating a source array
const arr = [1, 2, 3];

// Creating a copy of an array using the method concat ()
const arrCopy = arr.concat([]);
console.log(arrCopy); // [1, 2, 3]

// Changing the source array
arr.push(4);
console.log(arr); // [1, 2, 3, 4]
console.log(arrCopy); // [1, 2, 3]

// 2.10. Using Array.from() method:

/***The Array.from() method creates a shallow copy of an array or any other iterable object by passing the original array as an argument.It returns a new array containing all the elements of the original array.**/

//  Creating a source array
const arr = [1, 2, 3];

// Creating a copy of an array using the method from ()
const arrCopy = Array.from(arr);
console.log(arrCopy); // [1, 2, 3]

// Changing the source array
arr.push(4);
console.log(arr); // [1, 2, 3, 4]
console.log(arrCopy); // [1, 2, 3]

// 2.11. Using map() method:

/***The map() method creates a shallow copy of an array by iterating over each element and returning a new array with the same elements.It can be used to return each element without any changes.******/

// Creating a source array
const arr = [1, 2, 3];

// Creating a copy of an array using the method map ()
const arrCopy = arr.map(x => x);
console.log(arrCopy); // [1, 2, 3]

// Changing the source array
arr.push(4);
console.log(arr); // [1, 2, 3, 4]
console.log(arrCopy); // [1, 2, 3]


/** Each of these methods creates a surface copy of the counter object, which means that the properties of the object are copied, but any nested objects or arrays will still be references to the original object.**/


/*********Task 3 – Create the makeCounter function in all the described and possible ways**********/

// 3.1. Declared function (function declaration):
function makeCounter() {
    let count = 0;

    function increment() {
        return count++;
    }

    function decrement() {
        return count--;
    }

    function getCount() {
        return count;
    }

    return {
        increment,
        decrement,
        getCount
    };
}

// 3.2. Functional expression:
const makeCounter = function () {
    let count = 0;

    const increment = function () {
        return count++;
    };

    const decrement = function () {
        return count--;
    };

    const getCount = function () {
        return count;
    };

    return {
        increment,
        decrement,
        getCount
    };
};

// 3.3. Arrow function (ES6):
const makeCounter = () => {
    let count = 0;

    const increment = () => {
        return count++;
    };

    const decrement = () => {
        return count--;
    };

    const getCount = () => {
        return count;
    };

    return {
        increment,
        decrement,
        getCount
    };
};

// 3.4. Named function expression (NFE):
const makeCounter = function counter() {
    let count = 0;

    const increment = function () {
        return count++;
    };

    const decrement = function () {
        return count--;
    };

    const getCount = function () {
        return count;
    };

    return {
        increment,
        decrement,
        getCount
    };
};

/** 3.5. Using a closure: In this approach, make Counter returns an internal function that has access to the count variable due to closure. Every time an internal function is called, it increments count and returns its value. */

function makeCounter() {
    let count = 0;

    return function () {
        return count++;
    };
}

/** 3.6. Using a generator function: makeCounter is a generator function defined with function*. 
/*The yield statement is used to generate the next value of the counter, and the function can be iteratedfor...of loop or by manually calling the next() method on the generator object.*/

function* makeCounter() {
    let count = 0;

    while (true) {
        yield count++;
    }
}

// 3.7. Using an object with methods:
function makeCounter() {
    let count = 0;

    return {
        increment() {
            return count++;
        },
        decrement() {
            return count--;
        },
        getCount() {
            return count;
        }
    };
}

// 3.8. use class (ES6):
class makeCounter {
    constructor() {
        this.count = 0;
    }

    increment() {
        return this.count++;
    }

    decrement() {
        return this.count--;
    }

    getCount() {
        return this.count;
    }
}

// This method allows you to create counter instances using the new operator:

const counter1 = new makeCounter();
const counter2 = new makeCounter();
console.log(counter1.increment()); // 0
console.log(counter1.increment()); // 1
console.log(counter2.decrement()); // 0
console.log(counter2.decrement()); // -1

/** 3.9. Asynchronous Function makeCounter is an asynchronous function that performs some asynchronous operationsomeAsyncOperation) and returns an incremented count. The function uses the async keyword to mark it as asynchronous and the await keyword to wait for the completion of the asynchronous operation.**/

async function performAsyncOperation () {
    // Simulating an asynchronous operation
    return new Promise((resolve) => setTimeout(() => resolve(), 1000));
}

async function makeCounter () {
    try {
        let count = 0;
        await performAsyncOperation();

        return ++count;
    } catch (error) {
        console.error('Error:', error);
    }
}

makeCounter()
    .then(count => {
        console.log('Count:', count);
    })
    .catch(error => {
        console.error('Error:', error);
    });

/** 3.10. Asynchronous Generator Function makeCounter is an asynchronous generator function that continuously generates incremented counts with a delay of 1 second (simulated by delay). The function uses the async function keywords to declare it as an asynchronous generator function. It uses the yield keyword to yield the counts and pause the execution until the next iteration.**/

async function delay (ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function* makeCounter () {
    try {
        let count = 0;

        while (true) {
            await delay(1000); // Simulating an asynchronous delay
            yield count++;
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

const counterGenerator = makeCounter();

counterGenerator.next().then(result => {
    console.log('Count:', result.value);
});

// 3.11. Function expression with a name:

/**This method uses a function expression with a name(counter) to give the function a name that is only available inside the function body. It can be useful for recursive calls or debugging purposes.**/

const makeCounter = function counter() {
let count = 0;

return function () {
    return count++;
};
};

// Using the function name for a recursive call
const makeCounter2 = function counter(n) {
    if (n <= 0) {
        return;
    }
    console.log(n);
    counter(n - 1);
};

makeCounter2(3); // 3 2 1

// 3.12. Function expression with an arrow function (ES6):

/**This approach uses an arrow function expression to create a more concise and concise syntax for the makeCounter function. However, note that arrow functions do not have their own this, arguments, and super context, so they are not suitable for defining object methods or constructors.**/

const makeCounter = () => {
    let count = 7;

    return () => {
        return count++;
    };
};

const counter = makeCounter();
console.log(counter()); // 7
console.log(counter()); // 8
console.log(counter()); // 9

// 3.13. Function declaration (function declaration):

/***Function declarations allow you to define a function without assigning it to a variable.This enables the function to be used before its definition due to hoisting.It's a common and widely used way to define functions.**/
// Calling the function before its definition

// Function declaration
function makeCounter() {
    let count = 0;

    return function () {
        return count++;
    };
}

// Calling the function after its definition
const counter = makeCounter();
console.log(counter()); // Output: 0
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3



/*****Bonus
Task 1 –********************************************
Write a deep comparison function of two objects*****/

/** 1.1. JavaScript the first method: The function recursively compares nested objects and performs a strict equality comparison for non-object values.
 *  JavaScript method using recursion and strict equality comparison: The implementation recursively compares nested objects and performs a strict equality comparison for non - object values.
 * This approach can be effective for shallow objects with simple data types.However, it does not handle complex scenarios, such as circular references or objects with prototype chains. **/

const deepEqual = (obj1, obj2) => {
    // Check if both objects are of type 'object'
    if (typeof obj1 === 'object' && typeof obj2 === 'object') {
        // Check if the number of keys in both objects is the same
        const obj1Keys = Object.keys(obj1);
        const obj2Keys = Object.keys(obj2);
        if (obj1Keys.length !== obj2Keys.length) {
            return false;
        }

        // Iterate over each key in obj1
        for (let key of obj1Keys) {
            // Recursively compare nested objects
            if (!deepEqual(obj1[key], obj2[key])) {
                return false;
            }
        }

        return true;
    }

    // Perform strict equality comparison for non-object values
    return obj1 === obj2;
};
const obj1 = { here: { is: "on", other: "3" }, object: "Y" };
const obj2 = { here: { is: "on", other: "2" }, object: "Y" };

console.log(deepEqual(obj1, obj2)); // false


 // 1.1.1. If you replace the string Y with a function, then you need to set a comparison condition specifically for the function

/**the deep comparison function deepEqual is designed to perform a deep comparison between two objects. It checks if both objects are of type 'object' using typeof, and if so, it compares the number of keys in both objects. If the number of keys is different, it returns false immediately, indicating that the objects are not equal.
 * Next, it iterates over each key in obj1 using a for...of loop and recursively calls the deepEqual function to compare the corresponding nested objects. If any nested objects are found to be unequal during the recursive comparisonfalse.
 * If all keys and nested objects are found to be equal, the function returns true. For non-object values, 
 * it performs a strict equality comparison using the === operator. the objects obj1 and obj2 have the same structure, with both having the same keys and nested objects.
 * However, the values assigned to the object properties are functions. 
 * When comparing functions using the strict equality operator ===, they will not be considered equal unless they refer to the exact same function object in memory.
 * In the case of obj1 and obj2, the functions assigned to the object properties are separate function objects, even though their function bodies may be identical. As a result, when the deepEqual function compares these properties using strict equality, it returns false, indicating that the objects are not equal. */

// And in order to get a true result it is necessary to set a condition for comparing functions 

const deepEqual = (obj1, obj2) => {
    if (typeof obj1 === 'object' && typeof obj2 === 'object') {
        const obj1Keys = Object.keys(obj1);
        const obj2Keys = Object.keys(obj2);
        if (obj1Keys.length !== obj2Keys.length) {
            return false;
        }

        for (let key of obj1Keys) {
            if (!deepEqual(obj1[key], obj2[key])) {
                return false;
            }
        }

        return true;
    }

    // Compare functions based on their behavior or output
    if (typeof obj1 === 'function' && typeof obj2 === 'function') {
        const output1 = obj1();
        const output2 = obj2();
        return deepEqual(output1, output2);
    }

    return obj1 === obj2;
};

const obj1 = { here: { is: "on", other: "3" }, object: () => "Y" };
const obj2 = { here: { is: "on", other: "3" }, object: () => "Y" };

console.log(deepEqual(obj1, obj2)); // true

/** 1.1.2. if the functions as properties will be different. In this updated version, the deepEqual function compares the functions obj1 and obj2 by comparing their string representations using the toString() method. This approach compares the actual functions rather than their outputs, resulting in the expected behavior.Now, when comparing obj1 and obj2, the function correctly identifies that the functions in the object property are different, and the comparison returns false. **/

const deepEqual = (obj1, obj2) => {
    if (typeof obj1 === 'object' && typeof obj2 === 'object') {
        const obj1Keys = Object.keys(obj1);
        const obj2Keys = Object.keys(obj2);
        if (obj1Keys.length !== obj2Keys.length) {
            return false;
        }

        for (let key of obj1Keys) {
            if (!deepEqual(obj1[key], obj2[key])) {
                return false;
            }
        }

        return true;
    }

    // Compare functions based on their behavior or output
    if (typeof obj1 === 'function' && typeof obj2 === 'function') {
        return obj1.toString() === obj2.toString();
    }

    return obj1 === obj2;
};

const obj1 = {
    here: { is: "on", other: "3" }, object: () => {
        let count = 7;
        count += 5;
        console.log(count);
        return "Y"
    }
};
const obj2 = { here: { is: "on", other: "2" }, object: () => "Y" };

console.log(deepEqual(obj1, obj2)); // false

// 1.1.3. Creating a deep comparison function of two objects, taking into account the processing of cyclic references
/** Checking the object types: The code checks if obj1 and obj2 are of the same type using the typeof operator. If they are not of the same type, it immediately returns false, indicating that the objects are not equal.
 * Handling null and primitive types: The code checks if either obj1 or obj2 is null or not an object. If so, it compares them directly using the strict equality operator (===). This comparison will return true only if both objects are null or have the same primitive value. Otherwise, it returns false.
 * Handling circular references: The code includes a helper function hasCircularReference to detect circular references in the objects. It uses a stack to keep track of visited objects and checks if an object is already in the stack before traversing its properties. If a circular reference is detected, it throws an Error with the message "Circular reference detected."
 * Comparing keys: The code retrieves the keys of obj1 and obj2 using Object.keys() and compares their lengths. If the lengths are different, it immediately returns false, indicating that the objects are not equal.
 * Comparing values: The code uses a loop to iterate over the keys of obj1. It checks if the corresponding key exists in obj2 using obj2Keys.includes(key). If the key is missing in obj2, or the values of the keys are not deeply equal (recursively calling deepEqual), it returns false. If all keys and their values pass the comparison, it returns true at the end.*/

const deepEqual = (obj1, obj2) => {
    // Check if the objects are of the same type
    if (typeof obj1 !== typeof obj2) {
        return false;
    }

    // Check if the objects are null or primitive types
    if (obj1 === null || typeof obj1 !== 'object') {
        return obj1 === obj2;
    }

    // Check for circular references
    const hasCircularReference = (object, stack = []) => {
        if (stack.includes(object)) {
            return true;
        }
        for (const key in object) {
            const value = object[key];
            if (typeof value === 'object' && value !== null) {
                if (hasCircularReference(value, [...stack, object])) {
                    return true;
                }
            }
        }
        return false;
    };

    if (hasCircularReference(obj1) || hasCircularReference(obj2)) {
        throw new Error('Circular reference detected');
    }

    // Compare the keys of the objects
    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);

    if (obj1Keys.length !== obj2Keys.length) {
        return false;
    }

    // Check if all keys and their values are equal
    for (const key of obj1Keys) {
        if (!obj2Keys.includes(key) || !deepEqual(obj1[key], obj2[key])) {
            return false;
        }
    }

    return true;
};

// Example usage
const obj1 = {
    here: { is: 'on', other: '3' },
    object: 'Y',
};

const obj2 = {
    here: { is: 'on', other: '2' },
    object: 'Y',
};

console.log(deepEqual(obj1, obj2)); // Output: false


// 1.2. JavaScript the second method: Object.entries() is used instead of Object.keys() to get an array of key-value pairs. 
/**This will avoid repeated access to the properties of objects by keys. JavaScript method using Object.entries(): This implementation is similar to the previous one, but it uses Object.entries() instead of Object.keys() to avoid repeated access to object properties by keys.It provides a more concise way to iterate over the object entries.However, it shares the same limitations as the previous method.**/

const deepEqual = (obj1, obj2) => {
    // Check if both objects are of type 'object'
    if (typeof obj1 === 'object' && typeof obj2 === 'object') {
        // Check if the number of entries in both objects is the same
        const entries1 = Object.entries(obj1);
        const entries2 = Object.entries(obj2);
        if (entries1.length !== entries2.length) {
            return false;
        }

        // Iterate over each entry in obj1
        for (let [key, value] of entries1) {
            // Recursively compare nested objects
            if (!deepEqual(value, obj2[key])) {
                return false;
            }
        }

        return true;
    }

    // Compare functions based on their behavior or output
    if (typeof obj1 === 'function' && typeof obj2 === 'function') {
        const output1 = obj1();
        const output2 = obj2();
        return output1 === output2;
    }

    // Perform strict equality comparison for non-object values
    return obj1 === obj2;
};

const obj1 = {
    here: { is: "on", other: "3" }, object: () => {
        let count = 7;
        count += 5;
        console.log(count);
        return "Y"
    }
};
const obj2 = { here: { is: "on", other: "3" }, object: "Y" };

console.log(deepEqual(obj1, obj2)); // false


// 1.3. deep comparison function using JSON.stringify and JSON.parse:

/***This implementation uses JSON.stringify to convert each object into a JSON string representation, and then JSON.parse parses the JSON strings back into objects. By comparing the string versions of the objects, we can determine if they have the same structure and values. The function takes two objects obj1 and obj2 as input to deepEqual.  First, we use JSON.stringify to convert obj1 and obj2 into JSON string representations.This converts the objects and their nested properties into strings. Then we use JSON.strings to parse the JSON strings back into objects.This allows us to create separate instances of objects from the JSON strings. And at the end we compare the string versions of the objects (stringifiedObj1 and stringifiedObj2) to see if they are equal. We also compare the parsed versions of the objects(parsedObj1 and parsedObj2) to make sure they are completely identical.***/

const deepEqual = (obj1, obj2) => {
    const stringifiedObj1 = JSON.stringify(obj1);
    const stringifiedObj2 = JSON.stringify(obj2);

    const parsedObj1 = JSON.parse(stringifiedObj1);
    const parsedObj2 = JSON.parse(stringifiedObj2);

    return stringifiedObj1 === stringifiedObj2 && parsedObj1 === parsedObj2;
};
const obj1 = { here: { is: "on", other: "3" }, object: "Y" };
const obj2 = { here: { is: "on", other: "2" }, object: "Y" };

console.log(deepEqual(obj1, obj2)); // false

/** the JSON serialization method to compare objects and get true deepEqual function compares the stringified representations of obj1 and obj2 using stringifiedObj1 === stringifiedObj2. Since the properties and values in both objects are the same, the true **/

const deepEqual = (obj1, obj2) => {
    const stringifiedObj1 = JSON.stringify(obj1);
    const stringifiedObj2 = JSON.stringify(obj2);

    return stringifiedObj1 === stringifiedObj2;
};

const obj1 = { here: { is: "on", other: "3" }, object: "Y" };
const obj2 = { here: { is: "on", other: "3" }, object: "Y" };

console.log(deepEqual(obj1, obj2)); // true

// 1.4. React implementation using Lodash's isEqual():
/*This example demonstrates the usage of Lodash's isEqual() function, which provides a robust and reliable deep comparison of two objects.
 *  This library handles complex scenarios and supports various data types. It is a recommended approach for deep object comparison in React applications. */

import React from 'react';
import isEqual from 'lodash/isEqual';

const obj1 = { here: { is: "on", other: "3" }, object: "Y" };
const obj2 = { here: { is: "on", other: "2" }, object: "Y" };

const App = () => {
    const isEqual = isEqual(obj1, obj2);
    console.log(isEqual); // false

    return (
        <div>
            <h1>React App</h1>
        </div>
    );
};

export default App;

// In order to verify that this function is run via Node.js the code is modified 

const React = require('react');
const { isEqual } = require('lodash');

const obj1 = { here: { is: "on", other: "3" }, object: "Y" };
const obj2 = { here: { is: "on", other: "2" }, object: "Y" };

const App = () => {
    const isEqualObjects = isEqual(obj1, obj2);
    console.log(isEqualObjects); // false

    return (
        React.createElement('div', null,
            React.createElement('h1', null, 'React App')
        )
    );
};

module.exports = App;

// 1.5. Angular implementation using Lodash's isEqual(): 
/**Similar to the React implementation, this example shows the usage of Lodash's isEqual() function in an Angular application. It provides a reliable and comprehensive deep comparison of objects */

import { Component } from '@angular/core';
import isEqual from 'lodash/isEqual';

const obj1 = { here: { is: "on", other: "3" }, object: "Y" };
const obj2 = { here: { is: "on", other: "2" }, object: "Y" };

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Angular App';

    constructor() {
        const isEqual = isEqual(obj1, obj2);
        console.log(isEqual); // false
    }
}

// 1.6. Ember.js implementation, the eq helper is used to compare two values and determine if they are equal. 
/***The eq helper is included in the template using the { { eq } } syntax.
 * Inside the template, the eq helper is invoked with two arguments: this.obj1 and this.obj2.These represent the two objects to be compared.
 * The eq helper evaluates the equality between the two arguments and returns a boolean value indicating whether they are equal or not. The isEqual computed property in the ApplicationController class compares this.obj1 and this.obj2 using strict equality (===).
 * In the template, the eq helper is used to compare this.obj1 and this.obj2 by invoking it with the arguments this.obj1 and this.obj2.
 * Since the values of this.obj1 and this.obj2 are different, the eq helper will return false.
The result of the eq helper is rendered in the template as "Is equal? false" inside the <p> element.*/


{ { !app / templates / application.hbs } }
<h1>Ember.js App</h1>

{ { !app / controllers / application.js } }
import Controller from '@ember/controller';

export default class ApplicationController extends Controller {
    obj1 = { here: { is: "on", other: "3" }, object: "Y" };
    obj2 = { here: { is: "on", other: "2" }, object: "Y" };

    get isEqual() {
        return this.obj1 === this.obj2;
    }
}

{ { !app / templates / application.hbs } }

<h1>Ember.js App</h1>

<p>Is equal? {{eq this.obj1 this.obj2}}</p>

//1.7. Node.js implementation using util.isDeepStrictEqual():
/**In Node.js, the util.isDeepStrictEqual() method can be used to perform a deep comparison of objects. It compares the objects by value, including their properties and nested objects. It provides a reliable and comprehensive deep comparison. **/

const util = require('util');

const obj1 = { here: { is: "on", other: "3" }, object: "Y" };
const obj2 = { here: { is: "on", other: "2" }, object: "Y" };

// Compare by reference
const isEqualByRef = obj1 === obj2;
console.log(isEqualByRef); // false

// Compare by content
const isEqualByContent = util.isDeepStrictEqual(obj1, obj2);
console.log(isEqualByContent); // false

// 1.8. implementation of the prototype design pattern for classes
/**This implementation uses a recursive approach to compare nested objects and performs a strict equality comparison for non-object values. It checks if both objects are of type 'object', compares the number of keys in both objects, and then recursively compares each key's values. Finally, it returns true if the objects are deep equal or false otherwise. But need to pay attention that this implementation assumes that the objects being compared do not contain cyclic references. */

function deepEqual(obj1, obj2) {
    // Check if both objects are of type 'object'
    if (typeof obj1 === 'object' && typeof obj2 === 'object') {
        // Check if the number of keys in both objects is the same
        const obj1Keys = Object.keys(obj1);
        const obj2Keys = Object.keys(obj2);
        if (obj1Keys.length !== obj2Keys.length) {
            return false;
        }

        // Iterate over each key in obj1
        for (let key of obj1Keys) {
            // Recursively compare nested objects
            if (!deepEqual(obj1[key], obj2[key])) {
                return false;
            }
        }

        return true;
    }

    // Perform strict equality comparison for non-object values
    return obj1 === obj2;
}

const obj1 = { here: { is: "on", other: "3" }, object: "Y" };
const obj2 = { here: { is: "on", other: "2" }, object: "Y" };

console.log(deepEqual(obj1, obj2)); // false


/****Bonus Task 2 –**************************
Expand the string in the opposite direction using array methods***********************/

// 2.1. Using split, reverse, and`join

function reverseStr(str) {
    // Convert the string to an array, reverse it, and join the elements back into a string
    return str.split('').reverse().join('');
}

const str = "Hello, World!";
const reversedStr = reverseStr(str);
console.log(reversedStr); // Output: "!dlroW ,olleH"

/** 2.2. Using split, reduceRight, and join: The second method is an alternative to the reverse() method. In which you use the reduceRight() method, which applies a function to each element of the array from right to left and returns a single value. **/

function reverseStr(str) {
    return str.split('').reduceRight((acc, char) => acc + char, '');
}

const str = "Hello, World!";
const reversedStr = reverseStr(str);
console.log(reversedStr); // Output: "!dlroW ,olleH"


// 2.3. Using Array.from and reverse:

function reverseStr(str) {
    return Array.from(str).reverse().join('');
}

const str = "Hello, World!";
const reversedStr = reverseStr(str);
console.log(reversedStr); // Output: "!dlroW ,olleH"

/** 2.4. Using Array.from and reduceRight: The fourth method is a combination of the second and third methods. Which uses Array.from() and reduceRight() instead of split(") and reverse().
This method also works, but it is the most complicated and confusing of all.**/

function reverseStr(str) {
    return Array.from(str).reduceRight((acc, char) => acc + char, '');
}
const str = "Hello, World!";
const reversedStr = reverseStr(str);
console.log(reversedStr); // Output: "!dlroW ,olleH"

/************************** In the course of doing homework, 
 * I wanted to create a synopsis on a variety of methods, so that later I would not waste time searching for a method, and be able to simply choose the right one to use. 
 * There are probably too many comments in this homework assignment, but it was important for me to understand the questions posed (the information was collected from a large number of sources) in order to return to this question after a while and quickly remember everything thanks to the written comments. Please don't judge me harshly) ***********************************/
