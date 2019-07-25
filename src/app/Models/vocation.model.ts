import Month from "./month.model";
export default class Vocation {
  constructor(
    public dateFrom: Date,
    public countDay?: number,
    public dateFromWork?: Date
  ) {
    this.countDay = countDay || 0;
  }
}
