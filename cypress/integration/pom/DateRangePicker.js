class DateRangePicker
{
    visit()
        {
            cy.visit('https://mui.com/x/react-date-pickers/date-range-picker/');
        }
    Basic_usage()
        {
            cy.get('[placeholder="MM/DD/YYYY"]').eq(0).click();
            cy.get('[data-timestamp="1685471400000"]').should('be.visible').click();
            cy.get('[placeholder="MM/DD/YYYY"]').eq(1).click();
            cy.get('[data-timestamp="1688063400000"]').should('be.visible').click();
        }
    Add_shortcuts()
        {
            cy.contains('span','This Week').should('be.visible').click();
            cy.contains('span','Last Week').should('be.visible').click();
            cy.contains('span','Last 7 Days').should('be.visible').click();
            cy.contains('span','Current Month').should('be.visible').click();
            cy.contains('span','Next Month').should('be.visible').click();
            cy.contains('span','Reset').should('be.visible').click();
        }
    Single_inputfield()
        {
            cy.get('[placeholder="MM/DD/YYYY – MM/DD/YYYY"]').eq(0).click();
            cy.get('[data-timestamp="1685471400000"]').should('be.visible').click();
            cy.get('[data-timestamp="1688063400000"]').should('be.visible').click();
        }
}
export const DRP = new DateRangePicker
 
