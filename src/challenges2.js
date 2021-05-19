// Desafio 10
function techList(tech, name) {
  return tech.reduce((acc, cur) => {
    acc = [...acc, { tech: cur, name: name }];
    return acc;
  }, []).sort((a, b) => a.tech > b.tech);
}

// Desafio 11
function verifyTriangle(N1, N2, N3) {
  return (N1 < Math.abs(N2 + N3)) && 
  (N1 > Math.abs(N2 - N3)) ? 
  true : false;
}

function triangleCheck(lineA, lineB, lineC) {
  const verifyA = verifyTriangle(lineA, lineB, lineC);
  const verifyB = verifyTriangle(lineB, lineC, lineA);
  const verifyC = verifyTriangle(lineC, lineA, lineB);
  if (verifyA && verifyB && verifyC) return true;
  else return false;
}

console.log(triangleCheck(10, 10, 10));




// Desafio 12
function hydrate(drinks) {
  let sum = 0;
  drinks = (drinks.match(/\d/g));
  for (let index = 0; index < drinks.length; index += 1) {
    const newLocal = drinks[index];
    sum += parseInt(newLocal, 10);
  }
  if (sum === 1) {
    return `${sum} copo de água`;
  }
  return `${sum} copos de água`;
}


module.exports = {
  techList,
  hydrate,
  triangleCheck,
};
