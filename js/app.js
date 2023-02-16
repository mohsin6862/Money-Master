document.getElementById('calculate-btn').addEventListener('click',function(){

    
    const remainingBalance = document.getElementById('balance');
    remainingBalance.innerText = getRemainingBalance();

    const totalExpense = document.getElementById('total-expense');
    totalExpense.innerText = getTotalExpense();

})


document.getElementById('total-save').addEventListener('click',function(){

    SetSavingsAmount ();

   
})