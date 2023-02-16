document.getElementById('calculate-btn').addEventListener('click',function(){

    // const income = document.getElementById('income');
    // const incomeString = income.value;
    // const totalIncome = parseInt(incomeString);
    // console.log(totalIncome)
    const remainingBalance = document.getElementById('balance');
    remainingBalance.innerText = getRemainingBalance();

    const totalExpense = document.getElementById('total-expense');
    totalExpense.innerText = getTotalExpense();

})


// document.getElementById('total-save').addEventListener('click',function(){

//     const remainingBalance = document.getElementById('balance');
//     remainingBalance.innerText = getRemainingBalance();
//     const percentage = document.getElementById('save');
//     const percentageString = percentage.value;
//     const percentageNum=parseInt(percentageString);
    

//     const result = remainingBalance * (percentageNum / 100);
//     return parseFloat(result.toFixed(2));
// })