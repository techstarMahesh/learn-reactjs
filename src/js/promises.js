let myPromise = new Promise(function (myResolve, myReject) {
  let x = 2

  if (x == 0) {
    myResolve('OK')
  } else {
    myReject('Error')
  }
})

myPromise.then(
  function (value) {
    console.log(value)
  },
  function (error) {
    console.log(error)
  }
)
