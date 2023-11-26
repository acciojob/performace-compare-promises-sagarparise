// Array of API URLs to fetch data from
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];

// You can write your code here


        async function fetchData(url) {
            const startTime = Date.now();
            const response = await fetch(url);
            const endTime = Date.now();
            const timeTaken = endTime - startTime;
            return { url, timeTaken };
        }

        async function fetchDataWithPromiseAll(urls) {
            const promises = urls.map(url => fetchData(url));
            const results = await Promise.all(promises);
            return results;
        }

        async function fetchDataWithPromiseAny(urls) {
            const promises = urls.map(url => fetchData(url));
            const result = await Promise.any(promises);
            return result;
        }

        async function displayResults() {
            try {
                // Measure time taken for Promise.all
                const promiseAllStartTime = Date.now();
                const allResults = await fetchDataWithPromiseAll(apiUrls);
                const promiseAllEndTime = Date.now();
                const promiseAllTimeTaken = promiseAllEndTime - promiseAllStartTime;

                // Display results for Promise.all
                document.getElementById('output-all').innerText = `${promiseAllTimeTaken} ms`;

                // Measure time taken for Promise.any
                const promiseAnyStartTime = Date.now();
                const anyResult = await fetchDataWithPromiseAny(apiUrls);
                const promiseAnyEndTime = Date.now();
                const promiseAnyTimeTaken = promiseAnyEndTime - promiseAnyStartTime;

                // Display results for Promise.any
                document.getElementById('output-any').innerText = `${promiseAnyTimeTaken} ms`;
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        // Call the function to start the process
        displayResults();
