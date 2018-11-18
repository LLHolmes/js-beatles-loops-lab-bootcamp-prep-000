function theBeatlesPlay(musicians, instruments) {
  var plays = []
  for (var i = 0; i < musicians.length; i++) {
    plays.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return plays
}

function johnLennonFacts(facts) {
  var x = 0
  var excitedFacts = []
  while (x < facts.length) {
    excitedFacts.push(`${facts[x]}!!!`)
    x++
  }
  return excitedFacts
}
