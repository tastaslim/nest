import { Bank } from './Bank';
export class HDFC extends Bank {
  loanCriteria(): number {
    console.log(`HDFC bank loan criteria`);
    return 9000;
  }
}
