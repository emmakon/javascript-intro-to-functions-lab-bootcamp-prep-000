function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
 if(string.toLowerCase() === string) {
   var string = 'i love you!'
   return `I can't hear you!`
 }
 else if(string.toUpperCase() === string) {
   var string = 'I LOVE YOU!'
   return `YES INDEED!`
 }
 else if(string.mixedCase() === stringt)
 var string = 'I love you, Grandma.'
 return `I love you, too.`
}
