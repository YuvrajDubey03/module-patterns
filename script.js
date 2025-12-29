// module pattern


let Bank  = (function(){
let bankbalance = 105000;
 

function checkBalance(){
    console.log(`your balance is ${bankbalance}`);

}
function deposit(amount){
    bankbalance += amount;
    checkBalance();
}
function withdraw(amount){
    if(amount > bankbalance){
        console.log("insufficient balance");
        return;
    }
    bankbalance -= amount;
    checkBalance();
}
function setbalance(amount){
    bankbalance = amount;
    checkBalance();
}
return{
    checkBalance:checkBalance,
    deposit:deposit,
    withdraw:withdraw,
    setbalance:setbalance
}

})();

Bank.setbalance(100000);

