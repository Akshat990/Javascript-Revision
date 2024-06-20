/*Fetch using text file
fetch('file.txt')
.then(response =>
    {
     return response.text();
})
.then(data => console.log(data)); */

//fetch using jsaon

fetch('https://jsonplaceholder.typicode.com/posts')
.then(response =>
    {
        if(!response.ok){
            throw new Error('Network is not resp')
        }
     return response.json();
})
.then(data => console.log(data))
.catch(error => console.error(error));



