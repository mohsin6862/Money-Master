function getValueById (inputId){
    const input = document.getElementById(inputId);
    const inputString = input.value;
    const totalaInputValue = parseInt(inputString);
    return totalaInputValue;
}

function getRemainingBalance(){

    const income = getValueById('income');
    
    const food = getValueById('food');
    const rent = getValueById('rent');
    const clothes =getValueById('clothes');

    const totalCost = food + rent + clothes;
    const remainingBalance = income - totalCost;
    return remainingBalance;
    
}

function getTotalExpense(){
    const food = getValueById('food');
    const rent = getValueById('rent');
    const clothes =getValueById('clothes');
    const totalCost = food + rent + clothes;
    return totalCost;

}

// function calPercnt(remainingBalance, percentageNum){
//     const remainingBalance = document.getElementById('balance');
//     remainingBalance.innerText = getRemainingBalance();
//     const percentage = document.getElementById('save');
//     const percentageString = percentage.value;
//     const percentageNum=parseInt(percentageString);
    

//     const result = remainingBalance * (percentageNum / 100);
//     return parseFloat(result.toFixed(2));
//   }
//   const percntVal = calPercnt(500, 20);
//   console.log(percntVal);