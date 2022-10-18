class CheckingAccount extends Account{
    /**
    * Constructor for creating a new Checking Credit object
    * 
    * @param {number} number the number for this account
    * @param {overDraftLimit} overdraft limit amount for this account
    * 
    */
   constructor(number,overDraftLimit){
       super(number);
       this._overDraftLimit = overDraftLimit;// the amount indicates how much a person can teporarily withdraw beyond what they have.
   }

   /**
    * Getter for the 'overDraftLimit' number field
    * 
    * @returns {overDraftLimit} the overDraftLimit amount
    */
   getOverDraftLimit(){
       return this._overDraftLimit;
   }

   /**
    * Setter for the 'overDraftLimit' number field
    * 
    * @returns {undefined} 
    * @throws {RangeError} when overdraft limit shouldn't be less than zero
    */
   setOverDraftLimit(amount){
       if(amount <= 0)
           throw new RangeError(`Overdraft limit shouldn't be less than zero`);
       this._overDraftLimit = amount;
   }

   /**
    * Method to take money out of the account
    * 
    * @param {number} amount money to be taken out of the account
    * @returns {undefined}
    * @throws {RangeError} When amount should be greater than zero
    * @throws {Error} when trying to withdraw beyond the allowed overdraft limit
    */
   withdraw(amount){
       if(amount <= 0)
           throw new RangeError(`Amount should be greater than zero`);
       if(Math.abs(this._balance - amount) > this._overDraftLimit) // if the person tries to withdraw beyond the overdraft limit allowed
           throw new RangeError(`You are not allowed to withdraw beyond the allowed overdraft limit`);
       this._balance -= amount;
   }
   /**
    * Method to display string representation 
    * 
    * @returns {string} string representation of the account
    */
   toString(){
       return `Balance of Checking Account ${this._number} after withdrawal is: ${this._balance}`;
   }
    /**
    * Method to display bank statements at the end of the month
    * @returns {string} Warning when low balance CheckingAccount happened
    * @returns {string} bank satatement at the end of a month
    */
   endOfMonth() {
       if(this._balance < 0)
           return `Warning, low balance CheckingAccount ${this._number}: balance: ${this._balance} limit: ${this._overDraftLimit}`;
       else
           return `Balance of CheckingAccount ${this._number}: balance: ${this._balance} limit: ${this._overDraftLimit}`;
   }
}