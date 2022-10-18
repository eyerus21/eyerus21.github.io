class Bank{
    /**
     * Constructor for creating new Bank object
     * 
     */
    constructor(){
        this._accounts = []; // initializes an empty array to hold several Account objects
    }
    /**
     * static property to count the next account number for accounts to be created.
     * 
     */
    static nextNumber = 1;

    /**
     * Method that adds account to the array
     * 
     * @returns {number} next account number
     */
    addAccount(){
        let acc = new Account(Bank.nextNumber);
        acc._balance = 50;
        this._accounts.push(acc);
        Bank.nextNumber += 1;
        return  Bank.nextNumber;
    }
     /**
     * Method that adds Saving Account to the array
     * 
     * @returns {number} next account number
     */
    addSavingAccount(interest){
        let savingAcc = new SavingAccount(Bank.nextNumber,interest);
        savingAcc._balance = 50;
        this._accounts.push(savingAcc);       
        Bank.nextNumber += 1;
        return  Bank.nextNumber;
    }

    /**
     * Method that adds Checking Account to the array
     * 
     * @returns {number} next account number
     */
    addCheckingAccount(overDraft){
        let checkingAcc = new CheckingAccount(Bank.nextNumber, overDraft);
        checkingAcc._balance = 50;
        this._accounts.push(checkingAcc);
        Bank.nextNumber += 1;
        return  Bank.nextNumber;
    }

    /**
     * Method that closes Account by removing fromt the array
     * 
     * @returns {array} the accounts in the new array (after filtering)
     */
    closeAccount(accNumber){
        return (this._accounts.filter((e) => e._number !== accNumber)).length;
    }

    /**
     * Method that reports the status of all the accounts in the array
     * 
     * @returns {undefined} 
     */
    accountReport(){
        this._accounts.forEach((account) =>{
            console.log(account.toString());
        });
    }

    /**
     * Method that reports statements of each account at the end of the year.
     * 
     * @returns {undefined} 
     */
    endOfMonth() {
        this._accounts.forEach((account) =>{
            console.log(account.endOfMonth());
        }); 
    }
}