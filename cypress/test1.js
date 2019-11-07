describe('My first test', function (){
    it('Visit page', function(){
        cy.visit('https://example.cypress.io')
    })
})

describe('My second test', function (){
    it('Finds an element', function(){
        cy.contains('type')
    })
})

describe('My third test', function (){
    it('clicks an element', function(){
        cy.contains('type').click()
    })
})

describe('My fourth test', function (){
    it('Makes an assert', function(){
        cy.contains('type').click()

        cy.url()
            .should('include', '/commands/type')
    })
})
