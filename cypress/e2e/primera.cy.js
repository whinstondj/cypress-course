describe('Busqueda en DuckDuckGo', () => {
  it('Debe buscar "Cypress Testing"', () => {
    cy.visit('https://duckduckgo.com/')
    cy.log ('DuckDuckGo cargado')

    cy.get('#searchbox_input').type('Cypress Testing{enter}')
    cy.get('.results--main').should('be.visible')
    cy.log ('Resultados cargados')

    //Seleccionar el primer resultado
    cy.get('.result__a').first().click()

    //Validar que la nueva pagina contiene la palabra "Cypress"
    cy.url().should('include', 'cypress')
    cy.log ('Pagina de resultados cargada')
  })
})



//Diferentes formas de selectores en Cypress
/* cy.get('button').click() // selecciona un elemento <button>
cy.get('#spacing_hidden_wrapper').click() // selecciona un elemento con id="spacing_hidden_wrapper"
cy.get('.wLL07_0Xnd1QZpzpfR4W').click() // selecciona un elemento con class="wLL07_0Xnd1QZpzpfR4W"
cy.get('[data-testid="mainline"]').click() // selecciona un elemento con data-testid="mainline"
cy.get('[href="/pricing"]').click() // selecciona un elemento con href="/pricing"
cy.contains('Sign in').click() // selecciona un elemento que contiene el texto "Sign in"

// Esperas implicitas y explicitas en Cypress
cy.get('#username').should('be.visible') // espera implicita
cy.get('#username').type('admin')

cy.get('#username', { timeout: 100000 }).should('be.visible') // espera explicita
cy.wait(1000) // espera explicita de 1 segundo 


cy.get('#menu').trigger('mouseover') // Dispara un evento mouseover en el elemento con id="menu"
cy.get('#menu').trigger('mousedown') // Dispara un evento mousedown en el elemento con id="menu"
cy.get('#menu').trigger('mouseup') // Dispara un evento mouseup en el elemento con id="menu"
cy.get('#menu').trigger('mousemove') // Dispara un evento mousemove en el elemento con id="menu"
cy.get('#username').type('admin{enter}') // Dispara un evento keypress en el elemento con id="username" */