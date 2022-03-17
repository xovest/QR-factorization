// just creating the matrix
var c = Array(3).fill().map(()=>Array(3).fill())
c = [
  [1, 1, 4], // 00 01 02
  [1, 2, 3], // 10 11 12
  [1, 1, 6] //  20 21 22
]

var f = Array(3).fill().map(()=>Array(3).fill())

function frct(c, cind, f, find, times) {
  for (let i = 0; i < times; ++i) {
    
  }
}

function prod(a, aind, b, bind) {
  sum = 0
  for (let i = 0; i < 3; ++i) {
    sum += a[i][aind] * b[i][bind]
  }
  return sum
}

function norm(a, ind) {
  sum = 0
  for (let i = 0; i < 3; ++i) {
    sum += a[i][ind] * a[i][ind]
  }
  sum = Math.sqrt(sum)
  return sum
}

// get the f's then

// then we normalize or get the q's

// create the Q

// and then create the R