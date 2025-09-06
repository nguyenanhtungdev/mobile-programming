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
// function simulateTask2(time: number): Promise<string> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Task done");
//     }, time);
//   });
// }
// async function runTask() {
//   try {
//     const result = await simulateTask2(2000);
//     console.log(result);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }
// runTask();
// //13. Handle errors using try/catch with async/await.
// function riskyTask(): Promise<string> {
//   return new Promise((resolve, reject) => {
//     const num = Math.random();
//     setTimeout(() => {
//       if (num > 0.5) {
//         resolve("Task succeeded with number: " + num);
//       } else {
//         reject(new Error("Task failed, number too small: " + num));
//       }
//     }, 1000);
//   });
// }
// async function runTask1() {
//   try {
//     const result = await riskyTask();
//     console.log("Result:", result);
//   } catch (error) {
//     if (error instanceof Error) {
//       console.error("Caught error:", error.message);
//     } else {
//       console.error("Caught unknown error:", error);
//     }
//   } finally {
//     console.log("Done");
//   }
// }
// runTask1();
// //14. Write an async function that takes a number, waits 1 second, and returns the number × 3.
// async function tripleAfter1s(num: number): Promise<number> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(num * 3);
//     }, 1000);
//   });
// }
// async function run4() {
//   const result = await tripleAfter1s(5);
//   console.log(result);
// }
// run4();
// //15. Call multiple async functions sequentially using await.
// async function tripleAfter1s(num: number): Promise<number> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(num * 3);
//     }, 1000);
//   });
// }
// async function runSequential() {
//   console.log("Start...");
//   const first = await tripleAfter1s(2);
//   console.log("First result:", first);
//   const second = await tripleAfter1s(first);
//   console.log("Second result:", second);
//   const third = await tripleAfter1s(second);
//   console.log("Third result:", third);
//   console.log("Done");
// }
// runSequential();
// //16. Call multiple async functions in parallel using Promise.all().
// // Hàm async: đợi 1 giây rồi nhân 3
// async function tripleAfter1ss(num: number): Promise<number> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(num * 3);
//     }, 1000);
//   });
// }
// async function runParallel() {
//   console.log("Start...");
//   const [a, b, c] = await Promise.all([
//     tripleAfter1ss(2),
//     tripleAfter1ss(4),
//     tripleAfter1ss(6),
//   ]);
//   console.log("Results:", a, b, c);
//   console.log("Done");
// }
// runParallel();
// //17. Use for await...of to iterate over an array of Promises.
// function simulateTask(value: string, time: number): Promise<string> {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(`Task ${value} done after ${time}ms`), time);
//   });
// }
// async function run5() {
//   const tasks = [
//     simulateTask("A", 1000),
//     simulateTask("B", 500),
//     simulateTask("C", 1500),
//   ];
//   for await (const result of tasks) {
//     console.log(result);
//   }
// }
// run5();
// // 18. Write an async function fetchUser(id) that simulates an API call (resolves a user
// // object after 1 second).
// async function fetchUser(id: number): Promise<{ id: number; name: string }> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ id, name: `User_${id}` });
//     }, 1000);
//   });
// }
// async function run6() {
//   console.log("Fetching user...");
//   const user = await fetchUser(101);
//   console.log("User fetched:", user);
// }
// run6();
// //19. Create an async function fetchUsers(ids: number[]) that calls fetchUser for each ID.
// // Hàm gọi nhiều user song song
// async function fetchUsers(
//   ids: number[]
// ): Promise<{ id: number; name: string }[]> {
//   const promises = ids.map((id) => fetchUser(id));
//   return Promise.all(promises);
// }
// async function run7() {
//   console.log("Fetching users...");
//   const users = await fetchUsers([1, 2, 3, 4]);
//   console.log("Users fetched:", users);
// }
// run7();
// //20. Add a timeout: if the API call takes more than 2 seconds, throw an error.
// // Giả lập API call
// async function fetchUser1(id: number): Promise<{ id: number; name: string }> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ id, name: `User_${id}` });
//     }, 3000);
//   });
// }
// async function fetchUserWithTimeout(
//   id: number,
//   timeout: number = 2000
// ): Promise<{ id: number; name: string }> {
//   const timeoutPromise = new Promise<never>((_, reject) =>
//     setTimeout(() => reject(new Error("Request timed out")), timeout)
//   );
//   return Promise.race([fetchUser1(id), timeoutPromise]);
// }
// async function run8() {
//   try {
//     console.log("Fetching user...");
//     const user = await fetchUserWithTimeout(101);
//     console.log("User fetched:", user);
//   } catch (error) {
//     if (error instanceof Error) {
//       console.error("Error:", error.message);
//     } else {
//       console.error("Unknown error:", error);
//     }
//   }
// }
// run8();
// //21.  Use fetch to get data from a public API (e.g., https://jsonplaceholder.typicode.com/todos/1).
// async function fetchTodo() {
//   try {
//     const respone = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     if (!respone.ok) {
//       throw new Error(`Httpt error! status: ${respone.status}`);
//     }
//     const data = await respone.json();
//     console.log("Fetch data: ", data);
//   } catch (error) {
//     if (error instanceof Error) {
//       console.error("Error fetching data:", error.message);
//     } else {
//       console.error("Unknown error:", error);
//     }
//   }
// }
// fetchTodo();
// //22. Call the API multiple times and log the results.
// async function fetchTodo1(id: number) {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/todos/${id}`
//   );
//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//   }
//   return response.json();
// }
// async function run8() {
//   try {
//     const results = await Promise.all([
//       fetchTodo1(1),
//       fetchTodo1(2),
//       fetchTodo1(3),
//     ]);
//     console.log("Fetched results:");
//     results.forEach((todo, index) => {
//       console.log(`Todo ${index + 1}:`, todo);
//     });
//   } catch (error) {
//     if (error instanceof Error) {
//       console.error("Error fetching todos:", error.message);
//     } else {
//       console.error("Unknown error:", error);
//     }
//   }
// }
// run8();
// //23. Write an async function that fetches a list of todos and filters out those that are not completed.
// async function fetchCompletedTodos(): Promise<any[]> {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos");
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const todos = await response.json();
//     const completed = todos.filter((todo: any) => todo.completed === true);
//     return completed;
//   } catch (error) {
//     if (error instanceof Error) {
//       console.error("Error fetching todos:", error.message);
//     } else {
//       console.error("Unknown error:", error);
//     }
//     return [];
//   }
// }
// async function run9() {
//   const completedTodos = await fetchCompletedTodos();
//   console.log("Completed Todos:", completedTodos);
// }
// run9();
// //24. Write an async function postData() that sends a POST request to a test API.
// async function postData() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         title: "foo",
//         body: "bar",
//         userId: 1,
//       }),
//     });
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     console.log("Response data:", data);
//   } catch (error) {
//     if (error instanceof Error) {
//       console.error("Error posting data:", error.message);
//     } else {
//       console.error("Unknown error:", error);
//     }
//   }
// }
// postData();
// // 25. Create a function downloadFile that simulates downloading a file in 3 seconds and logs when done.
// function downloadFile(filename: string): Promise<void> {
//   return new Promise((resolve) => {
//     console.log(`Downloading ${filename}...`);
//     setTimeout(() => {
//       console.log(`${filename} downloaded successfully!`);
//       resolve();
//     }, 3000);
//   });
// }
// async function run10() {
//   await downloadFile("myFile.zip");
//   console.log("All tasks done.");
// }
// run10();
// //26. Use async/await with setTimeout to simulate a 5-second wait.
// function delay(ms: number): Promise<void> {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }
// async function waitFiveSeconds() {
//   console.log("Waiting 5 seconds...");
//   await delay(5000);
//   console.log("Done waiting!");
// }
// waitFiveSeconds();
// //27. Write a function fetchWithRetry(url, retries) that retries up to retries times if the API call fails.
// async function fetchWithRetry(url: string, retries: number): Promise<any> {
//   for (let attempt = 1; attempt <= retries; attempt++) {
//     try {
//       console.log(`Attempt ${attempt} to fetch ${url}...`);
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       if (attempt === retries) {
//         throw error;
//       }
//       console.warn(`Fetch failed (attempt ${attempt}), retrying...`);
//     }
//   }
// }
// (async () => {
//   try {
//     const data = await fetchWithRetry(
//       "https://jsonplaceholder.typicode.com/todos/1",
//       3
//     );
//     console.log("Fetched data:", data);
//   } catch (err) {
//     console.error("All retries failed:", err);
//   }
// })();
// 28. Write an async function batchProcess() that processes 5 async tasks at once (use Promise.all).
function simulateTask(id, time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Task ${id} done in ${time}ms`);
        }, time);
    });
}
async function batchProcess() {
    console.log("Starting batch process...");
    const tasks = [
        simulateTask(1, 1000),
        simulateTask(2, 2000),
        simulateTask(3, 1500),
        simulateTask(4, 3000),
        simulateTask(5, 2500),
    ];
    try {
        const results = await Promise.all(tasks);
        console.log("All tasks finished:");
        results.forEach((res) => console.log(res));
    }
    catch (err) {
        console.error("Error in batch process:", err);
    }
}
batchProcess();
//29. Write an async function queueProcess() that processes tasks sequentially in a queue.
// Hàm giả lập async task
function simulateTask2(id, time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Task ${id} done in ${time}ms`);
        }, time);
    });
}
async function queueProcess() {
    console.log("Starting queue process...");
    const tasks = [
        () => simulateTask2(1, 1000),
        () => simulateTask2(2, 2000),
        () => simulateTask2(3, 1500),
        () => simulateTask2(4, 500),
    ];
    for (const task of tasks) {
        try {
            const result = await task();
            console.log(result);
        }
        catch (err) {
            console.error("Error in task:", err);
        }
    }
    console.log("All tasks finished sequentially.");
}
queueProcess();
//30. Use async/await + Promise.allSettled() to handle multiple API calls and display their success/failure status.
async function fetchTodo(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
}
async function batchFetchTodos() {
    const ids = [1, 2, 9999];
    const results = await Promise.allSettled(ids.map((id) => fetchTodo(id)));
    results.forEach((result, index) => {
        if (result.status === "fulfilled") {
            console.log(`Todo ${ids[index]} success:`, result.value);
        }
        else {
            console.error(`Todo ${ids[index]} failed:`, result.reason);
        }
    });
}
batchFetchTodos();
//# sourceMappingURL=BaiTap.js.map