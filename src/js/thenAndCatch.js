// // Full filled the requarment
// fetch('https://jsonplaceholder.typicode.com/posts')  
//   .then((response) => {
//     response.json()
//   })
//   .then((data) => {
//     console.log(data)
//   })
//   .catch((error) => {
//     console.error(error)
//   })

// get reseceted
fetch('https://jsonplaceholder.typicode.com/invalid-url')
  .then((response) => {
    response.json()
  })
  .then((data) => {
    console.log(data)
  })
  .catch((error) => {
    console.error(error)
  })
