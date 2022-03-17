// just creating the matrix
var c = Array(3).fill().map(()=>Array(3).fill())

const el = document.querySelector("body > div.inputmat > button")
el.addEventListener("click", function() {
  let x = 1
  for (let i = 0; i < 3; ++i) {
    for (let j = 0; j < 3; ++j) {
      let x1 = document.querySelector(`body > div.inputmat > div > input[type=number]:nth-child(${x})`).value
      c[i][j] = x1
      x++
    }
  }
  var f = Array(3).fill().map(()=>Array(3).fill())
  
  for (let i = 0; i < 3; ++i) {
    for (let j = 0; j < 3; ++j) {
      f[j][i] = c[j][i];
      f[j][i] -= frct(c, i, f, j, i)
    }
  }
  
  var q = Array(3).fill().map(()=>Array(3).fill())
  for (let i = 0; i < 3; ++i) {
    for (let j = 0; j < 3; ++j) {
      q[j][i] = 1 / norm(f, i) * f[j][i]
    }
  }
  
  var r = Array(3).fill().map(()=>Array(3).fill())
  for (let i = 0; i < 3; ++i) {
    for (let j = 0; j < 3; ++j) {
      r[i][j] = prod(q, i, c, j)
    }
  }

  console.log(r);
});

function frct(c, cind, f, find, times) {
  sum = 0
  for (let i = 0; i < times; ++i) {
    sum += (prod(c, cind, f, i) / (norm(f, i) * norm(f, i))) * f[find][i]
  }
  return sum
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