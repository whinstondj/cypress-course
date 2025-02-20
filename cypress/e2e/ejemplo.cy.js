import { login } from '../support/commands'
import HomepageActions from '../support/homepageActions'

describe('Pruebas en Winston Castillo.com', () => {
  it('Hacer click sobre item "Desktop"', () => {
    HomepageActions.visitHomepage()
    cy.get('.nav > :nth-child(1) > .dropdown-toggle').should('be.visible')
    cy.get('.nav > :nth-child(1) > .dropdown-toggle').click()
  })

  it('Hacer login en el menu y mostrar mensaje de exito', () => {
    HomepageActions.visitHomepage()
    HomepageActions.clickOnUserMenu()
    cy.login('winston@winstoncastillo.com', 'pyz4tnz*xdc0HUM-afj')
    HomepageActions.clickOnSubmitButton()
    cy.url().should('include', 'index.php?route=account/account')
  })


  it('Hacer login en el menu y mostrar mensaje de error', () => {
    HomepageActions.visitHomepage()
    HomepageActions.clickOnUserMenu()
    cy.login('Winston Castillo', '12345')
    HomepageActions.clickOnSubmitButton()
    HomepageActions.verificarMensaje('Warning: No match for E-Mail Address and/or Password.')
  })
})
