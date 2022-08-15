function stretch() {
  // Your code here
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log('Done stretching')
      res()
    }, 1000)
  })

}

function runOnTreadmill() {
  // Your code here
  // return new Promise((resolve) => {
  //   setTimeout(resolve, 500)

  // }).then(() => {
  //   console.log('Done running on treadmill')
  // })

  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Done running on treadmill')
      resolve()
    }, 500)
  })
}

function liftWeights() {
  // Your code here
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Done lifting weights')
      resolve()
    }, 2000)
  })
}

function workout() {
  // Your code here
  stretch()
    .then(()=> runOnTreadmill())
    .then(()=> liftWeights())
    .then(()=> console.log('Done working out'))
}


/* ============================ TEST YOUR CODE ============================

Run the file (`node phase-1.js`) and check your output against the expected
output.
*/


workout();
  // should print out the following:
    // done stretching
    // done running on treadmill
    // done lifting weights
    // done working out