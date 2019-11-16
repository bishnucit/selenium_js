describe('The Login Page', function () {
  beforeEach(function () {
    // reset and seed the database prior to every test
    cy.exec('npm run db:reset && npm run db:seed')

   // this function can set and get cookies automatically, this can be used to bypass UI when testing to set session explicitly
    cy.request('POST', '/test/seed/user', { username: 'jane.lane' })
      .its('body')
      .as('currentUser')
   })
  
  it('successfully loads', function() {
  cy.visit('/')
  })
})


usernmae ="dicso"
password = "pass"
//searches for username and pass textboxes and enters username and password
cy.get('input[name=username]').type(username)
cy.get('input[name=password]').type(`${password}{enter}`)

// check url has user
cy.url().should('include', '/user')

//verifies auth cookie exists
cy.getCookie('your-session-cookie').should('exist')

//verifies logged in user name
cy.get('h1').should('contain', 'dicso')

//verify a button exist and then lcick
cy.contains('Submit')
  .click()

//verify url structure
cy.url()
  .should('include', '/posts/my-first-post')
  

// two ways to handle time wait - 1 . wait till found  2. timeout is reached
cy
  // cy.get() looks for '#element', repeating the query until...
  .get('#element')

  // ...it finds the element!
  // You can now work with it by using .then
  .then(($myElement) => {
    doSomething($myElement)
  })
  
cy
  // cy.get() looks for '#element-does-not-exist', repeating the query until...
  // ...it doesn't find the element before its timeout.
  // Cypress halts and fails the test.
  .get('#element-does-not-exist')

  // ...this code is never run...
  .then(($myElement) => {
    doSomething($myElement)
  })
  
// Find an element within '.main' containing the text 'New Post'
cy.get('.main').contains('New Post')

//default timeout is 4s else you can set ur own timeout
cy.get('.my-slow-selector', { timeout: 10000 })


//chain of commands - manages promise chain with each command yielding a subject to next command.
cy.get('textarea.post-body')
  .type('This is an excellent post.')
  
//blur 
cy.get('[type="email"]').type('me@email.com').blur() // Blur email input
cy.get('[tabindex="1"]').focus().blur()              // Blur el with tabindex

//focus
cy.get('input').first().focus() // Focus on the first input

//clear
cy.get('[type="text"]').clear()        // Clear text input
cy.get('textarea').type('Hi!').clear() // Clear textarea
cy.focused().clear()                   // Clear focused input/textarea

//check
cy.get('[type="checkbox"]').check()       // Check checkbox element
cy.get('[type="radio"]').first().check()  // Check first radio element

//uncheck
cy.get('[type="checkbox"]').uncheck()   // Unchecks checkbox element

//select
cy.get('select').select('user-1') // Select the 'user-1' option

//dblclick
cy.get('button').dblclick()          // Double click on button
cy.focused().dblclick()              // Double click on el with focus
cy.contains('Welcome').dblclick()    // Double click on first el containing 'Welcome'

//righclick
cy.get('.menu').rightclick()       // Right click on .menu
cy.focused().rightclick()          // Right click on el with focus
cy.contains('Today').rightclick()  // Right click on first el containing 'Today'

//assert
cy.get(':checkbox').should('be.disabled')
cy.get('form').should('have.class', 'form-horizontal')
cy.get('input').should('not.have.value', 'US')


//Some methods yield null and thus cannot be chained, such as cy.clearCookies()

//From cy only, meaning they do not operate on a subject: cy.clearCookies().
//From commands yielding particular kinds of subjects (like DOM elements): .type().
//From both cy or from a subject-yielding command: cy.contains().


cy.clearCookies()         // Done: 'null' was yielded, no chaining possible

cy.get('.main-container') // Yields an array of matching DOM elements
  .contains('Headlines')  // Yields the first DOM element containing content
  .click()                // Yields same DOM element from previous command
  






 
