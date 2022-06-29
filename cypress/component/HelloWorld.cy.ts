import { mount } from 'cypress/vue2'
import HelloWorld from '/src/components/HelloWorld.vue'

describe('HelloWorld.cy.ts', () => {
  it('is working', () => {
    mount(HelloWorld)
    cy.get('h1').should('contain', 'Hello Vue2 + Vite')
  })
})
