export abstract class Bank {
  protected currentAmount = 1000;
  abstract loanCriteria(): number;
  creditMoney(amount): number {
    return this.currentAmount + amount;
  }
  debitMoney(amount): number {
    return this.currentAmount - amount;
  }
}
