import { Bank } from './Bank';
export class ICIC extends Bank {
  loanCriteria(): number {
    console.log(`ICIC bank loan criteria`);
    return 6000;
  }
}
