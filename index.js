// code your solution here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function (commute = "go to the office") {
   return `This Monday, I will ${commute}.`;
}

function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
    }
} 
wrapAdjective()()