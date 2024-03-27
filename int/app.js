// const express=require(express);
// app=express();

//function fetchAndFilterPosts(userId) {
    userId=10
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
    //app.get()
    fetch(apiUrl, {
        method: "GET",
    })
        .then((response) => response.json())
        .then((data) => {
        //if(data.userId=userId)
            console.log(data.userId);
        });
      
      
    // Your code here
  //}

//   const userId = 1;
//   fetchAndFilterPosts(userId);
//   (async () => {
//     const response = await fetch('https://quotes.toscrape.com/random');
//     const body = await response.text();
//     console.log(body);
// })();
  
 
  