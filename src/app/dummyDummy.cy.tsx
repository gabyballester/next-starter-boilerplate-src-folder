import React from 'react';
import Dummy from './dummy';

describe('<Dummy />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Dummy />);
  });
});
