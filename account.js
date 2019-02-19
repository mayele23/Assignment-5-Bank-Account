function accountInfo() {
    const accountBalance = 1000 // bank account balance
    let q = false // quits the program

    // loop of 4 actions for user to perform
    while (q === false) {
        let accountRequest = prompt("Enter W to widthdraw, Enter D to Deposit, Enter B to view Balance, Enter Q to Quit");
        if (accountRequest.toLowerCase() === "q") {
            q = true;

        // condition to widthdraw
        // the letter d is used to make a deposit
        } else if (accountRequest.toLowerCase() === "w") {
            // user prompted by a message to withdrawl
            let wAmount = prompt("How much would you like to widthdraw?");

            // condition notifying user of ecessive withdrawl amount
            if (wAmount >= accountBalance)
                alert("Unable to make ecessive withdrawals");

            // user notified of withdrawl amount
            else {
                alert('You widthdrew' + ' ' + (wAmount) + ',' + ' ' + 'your available balance is' + ' ' + (accountBalance - wAmount));
            }

          // the letter d is used to make a deposit
        } else if (accountRequest.toLowerCase() === "d") {

            // user is prompted by a message to make a deposit
            let dAmount = prompt("How much would you like to deposit?");

            // codition setting to cap on depsit amount
            if (dAmount > 2000)
                alert("Unable to deposit more than 2000")

            // user is notified of deposit amount
            else {
                alert('You have deposited' + ' ' + (dAmount) + ',' + ' ' + 'Your total balance is' + ' ' + (parseInt(dAmount) + accountBalance));
            }

        // the letter b is used to check account balance
        } else if (accountRequest.toLowerCase() === "b") {
        // user is notified of balance amount
            alert('your available blance is' + ' ' + (accountBalance));
        }
    }
}
accountInfo();
