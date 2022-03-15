var a = Array(3).fill().map(()=>Array(3).fill())
let no = 1
for (let i = 0; i < 3; ++i) {
  for (let j = 0; j < 3; ++j) {
    a[i][j] = no++
  }
}

var c = Array(3).fill().map(()=>Array(3).fill())
for (let i = 0; i < 3; ++i) {
  let caux = []
  for (let j = 0; j < 3; ++j) {
    caux.push(a[j][i])
  }

  for (let j = 0; j < 3; ++j) {
    c[i][j] = caux[j]
  }
}

// get the f's then

// then we normalize or get the q's

// create the Q

// and then create the R