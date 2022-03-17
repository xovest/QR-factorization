// just creating the matrix
var c = Array(3).fill().map(()=>Array(3).fill())
c = [
  [1, 1, 4], // 00 01 02
  [1, 2, 3], // 10 11 12
  [1, 1, 6] //  20 21 22
]

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
// wait ht
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