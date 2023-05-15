import{DRP} from "../src/daterange";
describe('DateRangePicker', () => {
    beforeEach('Update Later',()=>
    {
        DRP.visit()
    })
it('Testcase 1: Check whether only Start Date is selected on selecting the date in Start Date, 31/5/23 ', () => 
    {
        DRP.start_date();
        DRP.date_on_may();
    });
it('Testcase 2: Check whether only End Date is selected on selecting the date in End Date, 30/6/23', () => 
    {
        DRP.end_date();
        DRP.date_on_june();
    });
it('Testcase 3: Check whether able to select a past date as Start Date, 30/4/23', () => 
    {
        DRP.start_date();
        DRP.left_arrow();
        DRP.date_on_april();
    });
it('Testcase 4: Check whether able to select Start Date as a past(30/4/23) and End Date as future date(30/6/23)', () => 
    {
        DRP.start_date();
        DRP.left_arrow();
        DRP.date_on_april();
        DRP.right_arrow();
        DRP.date_on_june();
    });
it('Testcase 5: Check whether able to select Start Date as a Present(31/5/23) and End Date as future date(30/6/23)', () => 
    {
        DRP.start_date();
        DRP.date_on_may();
        DRP.date_on_june();
    });
it('Testcase 6: Check whether able to select Start Date as a Past(30/4/23) and End Date as past date(31/3/23)', () => 
    {
        DRP.start_date();
        DRP.left_arrow();
        DRP.date_on_april();
        DRP.left_arrow();
        DRP.date_on_march();
        DRP.date_on_april();
    });
});