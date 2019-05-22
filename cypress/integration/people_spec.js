describe('Test People end-point', function () {
    const options = {
        'method': 'GET',
        'url': '/people/1?format=json',
    }

    it('validate status code', function () {
        cy.request(options).then((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it('validate json structure and data', function () {
        cy.request(options).then((response) => {
            expect(response.body).to.have.property('name', 'Luke Skywalker')
            expect(response.body).to.have.property('height', '172')
            expect(response.body).to.have.property('mass', '77')
            expect(response.body).to.have.property('hair_color', 'blond')
            expect(response.body).to.have.property('skin_color', 'fair')
            expect(response.body).to.have.property('eye_color', 'blue')
            expect(response.body).to.have.property('birth_year', '19BBY')
            expect(response.body).to.have.property('gender', 'male')
        })
    })
})