// function addNumbers(x, y, callback) {
//     const result = x + y;
//     callback(result);
//   }
  
//   function logResult(result) {
//     console.log('The result is:', result);
//   }
  
//   addNumbers(2, 3, logResult);
  
function fetchData(callback) {
    // Make an asynchronous request
    setTimeout(() => {
      const data = { id: 1, name: 'John Doe' };
      callback(data);
    }, 2000);
  }
  
  fetchData(function(data) {
    console.log(data); // logs { id: 1, name: 'John Doe' }
  });