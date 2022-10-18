class SavingAccount extends Account{
    /**
    * Constructor for creating a new Saving Credit object
    * 
    * @param {number} number the number for this account
    * @param {interest} interest amount for this account
    * 
    */
   constructor(number, interest){
       super(number);
       this._interest = interest;
   }

   /**
    * Getter for the 'interest' number field
    * 
    * @returns {interest} the interest amount
    */
   getInterest(){
       return this._interest;
   }

   /**
    * Setter for the 'interest' number field
    * 
    * @returns {value} the interest amount passed to it
    */
   setInterest(value){
       if(value <= 0){
           throw new RangeError("Value should be greater than zero");   
       }
       this._interest = value;
   }
   /**
    * Method to add interest into the Saving Account
    * 
    * @returns {number} total balance after the interest added
    */
   addInterest(){
       let addedValue = this._balance * this._interest / 100;        
       return this._balance += addedValue;
   }
   /**
    * Method to display string representation 
    * 
    * @returns {string} string representation of the account
    */
   toString(){        
       return `Balance after interest for Saving Account ${this._number} is: ${this._balance}`;
   }

    /**
    * Method to display bank statements at the end of the month
    * 
    * @returns {string} bank satatement at the end of a month
    */
   endOfMonth() {
       return `Interest added SavingAccount ${this._number}: balance: ${this.addInterest()} interest:${this._interest}`
   }
}