import { render } from '@testing-library/react';

import TransactionslistView from './transactions-list-view';

describe('TransactionsDetailsView', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TransactionslistView />);
    expect(baseElement).toBeTruthy();
  });
});
