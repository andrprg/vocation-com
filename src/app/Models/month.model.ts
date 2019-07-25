export default class Month {
  constructor(
    public month: Date,
    public summ?: number,
    public excludeCountDay?: number
  ) {
    this.summ = summ || 0;
    this.excludeCountDay = excludeCountDay || 0;
  }
}
