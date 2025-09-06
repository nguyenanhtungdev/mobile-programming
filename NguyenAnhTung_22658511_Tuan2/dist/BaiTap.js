"use strict";
// //1. Create a Promise that returns the string "Hello Async" after 2 seconds.
// function sayHelloAsync(): Promise<string> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Hello Async");
//     }, 2000);
//   });
// }
Object.defineProperty(exports, "__esModule", { value: true });
// async function run() {
//   const message = await sayHelloAsync();
//   console.log(message);
// }
// run();
// //2.Write a function that returns a Promise resolving with the number 10 after 1 second.
// function getNumberAsync(): Promise<number> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(10);
//     }, 1000);
//   });
// }
// async function run1() {
//   const result = await getNumberAsync();
//   console.log(result);
// }
// run1();
// //3. Write a function that rejects a Promise with the error "Something went wrong" after 1
// function getErorrAsync(): Promise<string> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Something went wrong");
//     }, 1000);
//   });
// }
// async function run2() {
//   const result = await getErorrAsync();
//   console.log(result);
// }
// run2();
// //4. Use .then() and .catch() to handle a Promise that returns a random number.
// function getRandomNumber(): Promise<number> {
//   return new Promise((resolve, reject) => {
//     const num = Math.random();
//     setTimeout(() => {
//       if (num > 0.3) {
//         resolve(num);
//       } else {
//         reject(new Error("Random number too small!"));
//       }
//     }, 1000);
//   });
// }
// getRandomNumber()
//   .then((value) => {
//     console.log("Resolved with:", value);
//   })
//   .catch((error) => {
//     console.error("Rejected with:", error.message);
//   });
// //5. Create a function simulateTask(time) that returns a Promise resolving with "Task done" after time ms.
// function simulateTask(time: number): Promise<string> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Task done");
//     }, time);
//   });
// }
// simulateTask(2000).then((message) => {
//   console.log(message);
// });
// //6. Use Promise.all() to run 3 simulated Promises in parallel and print the result.
// function simulateTask1(time: number): Promise<string> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`Task done in ${time} ms`);
//     }, time);
//   });
// }
// // Chạy 3 Promise song song
// Promise.all([simulateTask1(1000), simulateTask1(2000), simulateTask1(1500)])
//   .then((results) => {
//     console.log("All tasks completed:");
//     console.log(results);
//   })
//   .catch((error) => {
//     console.error("One of the tasks failed:", error);
//   });
// //7. Use Promise.race() to return whichever Promise resolves first.
// Promise.race([simulateTask1(1000), simulateTask1(2000), simulateTask1(1500)])
//   .then((results) => {
//     console.log("All tasks completed:");
//     console.log(results);
//   })
//   .catch((error) => {
//     console.error("One of the tasks failed:", error);
//   });
// //  8. Create a Promise chain: square the number 2, then double it, then add 5.
// Promise.resolve(2)
//   .then((num) => {
//     const squared = num * num;
//     console.log("Squared:", squared);
//     return squared;
//   })
//   .then((num) => {
//     const doubled = num * 2;
//     console.log("Doubled:", doubled);
//     return doubled;
//   })
//   .then((num) => {
//     const result = num + 5;
//     console.log("Final result:", result);
//     return result;
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });
// //9. Write a Promise that reads an array after 1 second and filters even numbers.
// function getEvenNumbers(arr: number[]): Promise<number[]> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const evens = arr.filter((num) => num % 2 === 0);
//       resolve(evens);
//     }, 1000);
//   });
// }
// getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9])
//   .then((evens) => {
//     console.log("Even numbers:", evens);
//   })
//   .catch((err) => {
//     console.error("Error:", err);
//   });
// //10.Use .finally() to log "Done" when a Promise finishes (success or failure).
// function randomTask(): Promise<string> {
//   return new Promise((resolve, reject) => {
//     const num = Math.random();
//     setTimeout(() => {
//       if (num > 0.5) {
//         resolve("Success! Number: " + num);
//       } else {
//         reject(new Error("Failed! Number too small: " + num));
//       }
//     }, 1000);
//   });
// }
// randomTask()
//   .then((result) => {
//     console.log("Result:", result);
//   })
//   .catch((error) => {
//     console.error("Error:", error.message);
//   })
//   .finally(() => {
//     console.log("Done");
//   });
// //11. Convert Exercise 1 into async/await.
// function sayHelloAsync1(): Promise<string> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Hello Async");
//     }, 2000);
//   });
// }
// async function run3() {
//   try {
//     const message = await sayHelloAsync1();
//     console.log(message);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }
// run3();
// //12. Write an async function that calls simulateTask(2000) and logs the result.
// function simulateTask(time: number): Promise<string> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Task done");
//     }, time);
//   });
// }
// async function runTask() {
//   try {
//     const result = await simulateTask(2000);
//     console.log(result);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }
// runTask();
//13. Handle errors using try/catch with async/await.
function riskyTask() {
    return new Promise((resolve, reject) => {
        const num = Math.random();
        setTimeout(() => {
            if (num > 0.5) {
                resolve("Task succeeded with number: " + num);
            }
            else {
                reject(new Error("Task failed, number too small: " + num));
            }
        }, 1000);
    });
}
async function runTask1() {
    try {
        const result = await riskyTask();
        console.log("Result:", result);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("Caught error:", error.message);
        }
        else {
            console.error("Caught unknown error:", error);
        }
    }
    finally {
        console.log("Done");
    }
}
runTask1();
//14. Write an async function that takes a number, waits 1 second, and returns the number × 3.
async function tripleAfter1s(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num * 3);
        }, 1000);
    });
}
async function run() {
    const result = await tripleAfter1s(5);
    console.log(result);
}
run();
//# sourceMappingURL=BaiTap.js.map