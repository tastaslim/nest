import { Bank } from './Bank';
export class AXIS extends Bank {
  loanCriteria(): number {
    console.log(`AXIS bank loan criteria`);
    return 5000;
  }
}
