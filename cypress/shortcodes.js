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
  

//Cypress commands do not return their subjects, they yield them.

cy
  // Find the el with id 'some-link'
  .get('#some-link')

  .then(($myElement) => {
    // ...massage the subject with some arbitrary code

    // grab its href property
    const href = $myElement.prop('href')

    // strip out the 'hash' character and everything after it
    return href.replace(/(#.*)/, '')
  })
  .then((href) => {
    // href is now the new subject
    // which we can work with now
  })

cy.get('button').then(($btn) => {

  // store the button's text
  const txt = $btn.text()

  // submit a form
  cy.get('form').submit()

  // compare the two buttons' text
  // and make sure they are different
  cy.get('button').should(($btn2) => {
    expect($btn2.text()).not.to.eq(txt)
  })
})

// these commands run after all of the
// other previous commands have finished
cy.get(...).find(...).should(...)
                             
//simple cypress as it can get
describe('Post Resource', function() {
  it('Creating a New Post', function() {
    cy.visit('/posts/new')     // 1.

    cy.get('input.post-title') // 2.
      .type('My First Post')   // 3.

    cy.get('input.post-body')  // 4.
      .type('Hello, world!')   // 5.

    cy.contains('Submit')      // 6.
      .click()                 // 7.

    cy.url()                   // 8.
      .should('include', '/posts/my-first-post')

    cy.get('h1')               // 9.
      .should('contain', 'My First Post')
  })
})

//chaining using get-then - then
cy
  // Find the el with id 'some-link'
  .get('#some-link')

  .then(($myElement) => {
    // ...massage the subject with some arbitrary code

    // grab its href property
    const href = $myElement.prop('href')

    // strip out the 'hash' character and everything after it
    return href.replace(/(#.*)/, '')
  })
  .then((href) => {
    // href is now the new subject
    // which we can work with now
  })


//Each Cypress command (and chain of commands) returns immediately, having only been appended
//to a queue of commands to be executed at a later time.

//You purposefully cannot do anything useful with the return value from a command.
//Commands are enqueued and managed entirely behind the scenes.

it('changes the URL when "awesome" is clicked', function() {
  cy.visit('/my/resource/path') // Nothing happens yet

  cy.get('.awesome-selector')   // Still nothing happening
    .click()                    // Nope, nothing

  cy.url()                      // Nothing to see, yet
    .should('include', '/my/resource/path#awesomeness') // Nada.
})


//Asserting in English
cy.get('button').click().should('have.class', 'active')

//After making an HTTP request to my server, I expect the response body to equal {name: 'Jane'}
cy.request('/users/1').its('body').should('deep.eq', { name: 'Jane' })

//cy.visit() expects the page to send text/html content with a 200 status code.
//cy.request() expects the remote server to exist and provide a response.
//cy.contains() expects the element with content to eventually exist in the DOM.
//cy.get() expects the element to eventually exist in the DOM.
//.find() also expects the element to eventually exist in the DOM.
//.type() expects the element to eventually be in a typeable state.
//.click() expects the element to eventually be in an actionable state.
//.its() expects to eventually find a property on the current subject.
                             
//its syntax
cy.wrap({ width: '50' }).its('width') // Get the 'width' property
cy.window().its('sessionStorage')     // Get the 'sessionStorage' property

//cy.wait() actually uses 2 different timeouts. When waiting for a routing alias, we wait for a matching request for 5000ms, and then additionally for the server’s response for 30000ms. We expect your application to make a matching request quickly, but we expect the server’s response to potentially take much longer.
 

//Some commands are for DOM interaction
cy.get('button').click()           
cy.focused().click()              
cy.contains('Welcome').click()

cy.get('button').dblclick()
cy.focused().dblclick()
cy.contains('Welcome').dblclick()

cy.get('.menu').rightclick()  
cy.focused().rightclick()   
cy.contains('Today').rightclick() 

cy.get('input').type('Hello, World')

cy.get('[type="text"]').clear() 
cy.get('textarea').type('Hi!').clear()  
cy.focused().clear()   

cy.get('[type="checkbox"]').check() 
cy.get('[type="radio"]').first().check() 

cy.get('[type="checkbox"]').uncheck()

cy.get('select').select('user-1')

cy.get('a').trigger('mousedown')

cy.get('button').click({ force: true })



//accessing fixtures
beforeEach(function () {
  // alias the users fixtures
  cy.fixture('users.json').as('users')
})

it('utilize users in some way', function () {
  // access the users property
  const user = this.users[0]

  // make sure the header contains the first
  // user's name
  cy.get('header').should('contain', user.name)
})



//Avoiding the use of this

beforeEach(function () {
  // alias the users fixtures
  cy.fixture('users.json').as('users')
})

it('utilize users in some way', function () {
  // use the special '@' syntax to access aliases
  // which avoids the use of 'this'
  cy.get('@users').then((users) => {
    // access the users argument
    const user = users[0]

    // make sure the header contains the first
    // user's name
    cy.get('header').should('contain', user.name)
  })
})


//After aliash DOm elements, we can later reuse

cy.get('table').find('tr').as('rows')

cy.get('@rows').first().click()



//using alias to route

cy.server()
cy.route('POST', '/users', { id: 123 }).as('postUser')

cy.get('form').submit()

cy.wait('@postUser').its('requestBody').should('have.property', 'name', 'Brian')

cy.contains('Successfully created user: Brian')


// using alias to request

cy.request('https://jsonplaceholder.cypress.io/comments').as('comments')

// other test code here

cy.get('@comments').should((response) => {
  if (response.status === 200) {
      expect(response).to.have.property('duration')
    } else {
      // whatever you want to check here
    }
  })
})


//use session cookies

cy.visit('https://app.com')
cy.getCookie('campaign')
  .then((campaign) => {
    return campaigns.test(campaign)
  })



// embed data in DOM

cy.get('html')
  .should('have.attr', 'data-campaign').then((campaign) => {
    return campaigns.test(campaign)
  })


//using .debug
it('let me debug like a fiend', function() {
  cy.visit('/my/page/path')

  cy.get('.selector-in-question')
    .debug()
})


//clear cypress cache
$cypress cache clear
$npm install cypress --save-dev


