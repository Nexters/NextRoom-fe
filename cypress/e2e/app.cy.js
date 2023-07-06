describe('ChangeNumber', () => {
    it('첫페이지에서 숫자를 클릭한다.', () => {
        // Start from the index page
        cy.visit('http://localhost:3000/')

        // Check change value when click hint number.
        cy.get('.hint').click().wait(1000).invoke('text').then((text) => text === '2');

    })
})