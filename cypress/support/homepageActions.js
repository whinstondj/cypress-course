class HomepageActions {
    static visitHomepage() {
        cy.visit('https://winstoncastillo.com/robot-selenium/');
    }

    static clickOnUserMenu() {
        cy.get(':nth-child(2) > .dropdown > .dropdown-toggle > .d-none').click()
        cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').should('be.visible')
        cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').click()
    }

    static clickOnSubmitButton() {
        cy.get('#form-login > .text-end > .btn').click();
    }

    static verificarMensaje(mensaje) {
        cy.get('.alert').should('be.visible')
        cy.get('.alert').invoke('text').then((text) => {
            expect(text.replace(/\u00a0/g, ' ')).to.contain(mensaje.replace(/\u00a0/g, ' '));
        });
    }
}

export default HomepageActions;