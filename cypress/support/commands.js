Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Luiz')
    cy.get('#lastName').type('Guimarães')
    cy.get('#email').type('guimaraes.luiz247@gmail.com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()
})