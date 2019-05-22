describe('Test Planet end-point', function () {
    const options = {
        'method': 'GET',
        'url': '/planets/1?format=json',
    }

    const response = {
        "name": "Tatooine"
    }

    it('validate status code', function () {
        cy.request(options).then((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it('validate json structure and data', function () {
        cy.request(options).then((response) => {
            expect(response.body).to.have.property('name', 'Tatooine')
            expect(response.body).to.have.property('rotation_period', '23')
            expect(response.body).to.have.property('orbital_period', '304')
            expect(response.body).to.have.property('diameter', '10465')
            expect(response.body).to.have.property('climate', 'arid')
            expect(response.body).to.have.property('gravity', '1 standard')
            expect(response.body).to.have.property('terrain', 'desert')
            expect(response.body).to.have.property('surface_water', '1')
            expect(response.body).to.have.property('population', '200000')
        })
    })
})