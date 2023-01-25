describe('empty spec', () => {
    beforeEach(() => {
        cy.visit('https://adulttime.com');
    });

    it('test login, register options exist in header', () => {
        expect(cy.get('[title="Join Now"]')).to.exist;
        expect(cy.get('[title="Sign In"]')).to.exist;
    });

    it('test header register link', () => {
        cy.get('[title="Join Now"]').click();
        cy.url().should('includes', '/en/join/');
    });

    it('test header login link', () => {
        cy.get('[title="Sign In"]').click();
        cy.url().should('includes', '/en/login');
    });

    it('test header nich menu', () => {
        expect(cy.get('#nichesWidgetBreakpointSlot').children()).to.exist;

        expect(cy.get("a[title='TRANS']")).to.exist;
        cy.get("a[title='TRANS']").click();
        cy.location().should(loc => expect(loc.pathname).to.equal('/trans'));

        expect(cy.get("a[title='LESBIAN']")).to.exist;
        cy.get("a[title='LESBIAN']").click();
        cy.location().should(loc => expect(loc.pathname).to.equal('/lesbian'));

        expect(cy.get("a[title='ANIMATION']")).to.exist;
        cy.get("a[title='ANIMATION']").click();
        cy.location().should(loc => expect(loc.pathname).to.equal('/animation'));

        expect(cy.get("a[title='GAY']")).to.exist;
        cy.get("a[title='GAY']").click();
        cy.location().should(loc => expect(loc.pathname).to.equal('/gay'));

        expect(cy.get("a[title='MILF']")).to.exist;
        cy.get("a[title='MILF']").click();
        cy.location().should(loc => expect(loc.pathname).to.equal('/milf'));

        expect(cy.get("a[title='ALL']")).to.exist;
        cy.get("a[title='ALL']").click();
        cy.location().should(loc => expect(loc.pathname).to.equal('/'));
    });

    it('test cta', () => {
        cy.contains('START WATCHING').click();
        cy.url().should('includes', '/en/join');
    });

    it('test footer', () => {
        expect(cy.get("a[title='Browse Channels']")).to.exist;
        cy.get("a[title='Browse Channels']").click();
        cy.location().should(loc => expect(loc.pathname).to.equal('/en/channels'));

        expect(cy.get("a[title='Adult Time Network']")).to.exist;
        cy.get("a[title='Adult Time Network']")
            .invoke('removeAttr', 'target')
            .click();
        cy.location().should(loc => expect(loc.pathname).to.equal('/collection/network'));

        expect(cy.get("a[title='Content Partners']")).to.exist;
        cy.get("a[title='Content Partners']")
            .invoke('removeAttr', 'target')
            .click();
        cy.location().should(loc => expect(loc.pathname).to.equal('/creator/partnership'));

        expect(cy.get("a[title='Casting']")).to.exist;
        cy.get("a[title='Casting']")
            .invoke('removeAttr', 'target')
            .click();
        cy.location().should(loc => expect(loc.pathname).to.equal('/creator/casting'));

        expect(cy.get("a[title='Affiliates']")).to.exist;
        cy.get("a[title='Affiliates']")
            .invoke('attr', 'href')
            .should('includes', 'https://www.gammastats.com/');

        expect(cy.get("a[title='Interactive Toys']")).to.exist;
        cy.get("a[title='Interactive Toys']")
            .invoke('removeAttr', 'target')
            .click();
        cy.location().should(loc => expect(loc.pathname).to.equal('/toys'));

        expect(cy.get("a[title='Blog']")).to.exist;
        cy.get("a[title='Blog']")
            .invoke('removeAttr', 'target')
            .click();
        cy.url().should('equals', 'https://blog.adulttime.com/');

        cy.visit('https://adulttime.com');
    });

    it('Login', () => {
        cy.contains('Sign In').click();
        cy.contains('Click here to login').click();
        cy.get('label[for=username]').should('contain', 'This field is required.');
        cy.get('label[for=password]').should('contain', 'This field is required.');

        cy.login();
        cy.url().should('includes', 'members');
    });
});
