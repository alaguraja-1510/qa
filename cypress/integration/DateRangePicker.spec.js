import{DRP} from "./pom/DateRangePicker";
describe('DateRangePicker', () => {
    beforeEach('Update Later',()=>
    {
        DRP.visit()
    })
it('Testcase 1: Checkin and checkout date selection, 31/5/23 and 30/6/23', () => 
    {
        DRP.Basic_usage()
    });
it('Testcase 2: Checkin and checkout date selection (Weekly,Monthly date picking)', () => 
    {
        DRP.Add_shortcuts()
    });
it('Testcase 3: Checkin and checkout date selection in single input', () => 
    {
        DRP.Single_inputfield()
    });
});