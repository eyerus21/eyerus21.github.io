// chai has a lot of stuff, let's make assert global

let assert = chai.assert;


/* ::::   Class Name => SavingAccount   :::: */

let savingAccount = new SavingAccount(1,14.5);
savingAccount._balance = 100; // sets the balance property of the Account object.

describe("getInterest(), SavingAccount",()=>{
    it("should fetch the interest of the saving account",()=>{
        assert.deepEqual(savingAccount.getInterest(),14.5);
    });
});

describe("setInterest(value), SavingAccount",()=>{
    it("should throw RangeError if the value passed is less than zero",()=>{
        assert.throw(() => {
            savingAccount.setInterest(-10) // interest = -10
        }, RangeError);
    });
    it("should set new value to property 'interest' if the value is greater than zero.",()=>{
        assert.deepEqual(savingAccount.setInterest(14.5),undefined); // interest = 14.5
    });
});

describe("addInterest(), SavingAccount",()=>{
    it("should return a balance after adding the interest",()=>{
        assert.deepEqual(savingAccount.addInterest(),114.5);
    });
});

describe("toString(), SavingAccount",()=>{
    it("should display the string representation of the SavingAccount",()=>{
        assert.deepEqual(savingAccount.toString(),`Balance after interest for Saving Account 1 is: 114.5`);
    });
});
describe("endOfMonth(), SavingAccount",()=>{
    it("should display Saving Account Statements at the end of a month",()=>{
        assert.deepEqual(savingAccount.endOfMonth(),`Interest added SavingAccount 1: balance: 131.1025 interest:14.5`)
    });
});


/* ::::   Class Name => CheckingAccount   :::: */
let checkAccount = new CheckingAccount(2,500);

describe("getOverDraftLimit(), CheckingAccount",()=>{
    it("should fetch the overdraft limit of the checking account",()=>{
        assert.deepEqual(checkAccount.getOverDraftLimit(),500);
    });
});

describe("setOverDraftLimit(value), CheckingAccount",()=>{
    it("should throw RangeError if the value passed is less than zero",()=>{
        assert.throw(() => {
            checkAccount.setOverDraftLimit(-500) // overdraft limit = -500
        }, RangeError);
    });
    it("should set new value to property 'overDraftLimit' if the value is greater than zero.",()=>{
        assert.deepEqual(checkAccount.setOverDraftLimit(500),undefined); // overdraft limit  = 500
    });
});

describe("withdraw(value), CheckingAccount",()=>{
    it("should throw RangeError if the value passed is less than zero",()=>{
        assert.throw(() => {
            checkAccount.withdraw(-400) // overdraft limit  = -400
        }, RangeError);
    });    
    it("should throw RangeError if the person attempts to withdraw beyond the allowed overdraft limit",()=>{
        assert.throw(() => {
            checkAccount.withdraw(-200) // overdraft limit  = -200
        }, RangeError);
    });
    it("should set new value to property 'overDraftLimit' if the value is greater than zero.",()=>{
        assert.deepEqual(checkAccount.withdraw(500),undefined); 
    });
});

describe("toString(), CheckingAccount",()=>{
    it("should display the string representation of the CheckingAccount",()=>{
        assert.deepEqual(checkAccount.toString(),`Balance of Checking Account 2 after withdrawal is: -500`);
    });
});
describe("endOfMonth(), CheckingAccount",()=>{
    it("should display Checking Account statements at the end of a month",()=>{
        assert.deepEqual(checkAccount.endOfMonth(),`Warning, low balance CheckingAccount 2: balance: -500 limit: 500`)
    });
});


/* ::::   Class Name => Bank   :::: */
let bank = new Bank();

describe("addAccount(), Bank",()=>{
    it("should create an instance of Account, add it to array property in Bank, and return nextNumber",()=>{
        assert.deepEqual(bank.addAccount(),2); // returns 2 as a nextNumber.
    });
});

describe("addSavingAccount(), Bank",()=>{
    it("should create an instance of Saving Account, add it to array property in Bank, and return nextNumber",()=>{
        assert.deepEqual(bank.addSavingAccount(14.5),3); // returns 3 as a nextNumber.
    });
});

describe("addCheckingAccount(), Bank",()=>{
    it("should create an instance of Checking Account, add it to array property in Bank, and return nextNumber",()=>{
        assert.deepEqual(bank.addCheckingAccount(500),4); // returns 4 as a nextNumber.
    });
});

describe("closeAccount(), Bank",()=>{
    it("should close an Account of any time",()=>{
        assert.deepEqual(bank.closeAccount(3),2); // returns 4 as a nextNumber.
    });
});

describe("accountReport(), Bank",()=>{
    it("should report details all accounts",()=>{
        assert.deepEqual(bank.accountReport(3),undefined); // returns undefined. It simply logs to the console.
    });
});

describe("endOfMonth(), Bank",()=>{
    it("should display statements of all Accounts at the end of a month",()=>{
        assert.deepEqual(bank.endOfMonth(),undefined);// returns undefined. It simply logs to the console.
    });
});