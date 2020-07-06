function dwarfRollCall(dwarves){
  var countArr = []
  
  for(let i = 0; i < dwarves.length; i++){
    countArr.push(`${i+1}. ${dwarves[i]} `)
  }
  return countArr.join("")
}

function summonCaptainPlanet(planeteerCalls){
  var newArr = []
  
  for(let i = 0; i < planeteerCalls.length; i++){
    newArr.push(`${planeteerCalls[i].toUpperCase()}!`)
  }
  return newArr
}

function longPlaneteerCalls(words){
  if(words.length >= 5){
    return true
  }else{
    return false
  }
}

function findTheCheese (foods){
  for(let i = 0; i < foods.length; i++){
    if(foods[i] === 'cheddar' || foods[i] === 'gouda' || foods[i] === 'camembert'){
      return foods[i]
    }
  }
  return 'no cheese!'
}