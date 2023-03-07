let weeklyExpenses = 0 //start
let monthlyExpenses = 0 //start
let annualExpenses = 0 //start

for(let x = 0; x < weeklyExpenseQuestions.length; x++){

    let stringAnswer = window.prompt(weeklyExpenseQuestions[x]) //returns users answer
    let numberAnswer = parseFloat(stringAnswer) //makes it a mathmatical number
    // Could also write this in one sentence: let answer = parseFloat(window.promp(weeklyExpenseQuestion[0]))
  
    
    weeklyExpenses = weeklyExpenses + numberAnswer; //adding to total
}
for(let y = 0; y < monthlyExpenseQuestions.length; y++ ){
    let stringAnswer2 = window.prompt(monthlyExpenseQuestions[y]) //returns users answer
    let numberAnswer2 = parseFloat(stringAnswer2)

    monthlyExpenses = monthlyExpenses + numberAnswer2

}

for(let z = 0; z < annualExpenseQuestions.length; z++ ){
    let stringAnswer3 = window.prompt(annualExpenseQuestions[z]) //returns users answer
    let numberAnswer3 = parseFloat(stringAnswer3)

    annualExpenses = annualExpenses + numberAnswer3

}


console.log(numberAnswer) //prints mathmatical number
