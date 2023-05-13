class DateRangePicker  // creating a class for multiple methods in daterangepicker
{
    visit()
        {
            cy.visit('http://localhost:3000/'); // to go to the website
        }
    start_date()
        {
            cy.get('[placeholder="mm/dd/yyyy"]').eq(0).should('be.visible').click(); // asserting and clicking inside the start date
        }
    end_date()
        {
            cy.get('[placeholder="mm/dd/yyyy"]').eq(1).should('be.visible').click(); // asserting and clicking inside the end date
        }
    left_arrow()
        {
            cy.get('[data-testid="ArrowLeftIcon"]').eq(0).should('be.visible').click(); // asserting and clicking the left arrow to go previous page in calendar
        }
    right_arrow()
           {
                cy.get('[data-testid="ArrowRightIcon"]').eq(1).should('be.visible').click(); // asserting and clicking the right arrow to go next page in calendar
           }
    date_on_march()
           {
                cy.get('[aria-label="Mar 31, 2023"]').should('be.visible').click(); // to select the march month particular date
           }
    date_on_april()
           {
                cy.get('[aria-label="Apr 30, 2023"]').should('be.visible').click(); // to select the april month particular date
           }
    date_on_may()
        {
            cy.get('[aria-label="May 31, 2023"]').should('be.visible').click(); // to select the may month particular date
        }
    date_on_june()
       {
            cy.get('[aria-label="Jun 30, 2023"]').should('be.visible').click(); // to select the june month particular date
       }
}
export const DRP = new DateRangePicker // exporting the file for the code reusability
 
