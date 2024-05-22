import { render } from '@testing-library/react';

import EachTransactionListItemView from './each-transaction-list-item-view';

describe('EachTransactionListItemView', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EachTransactionListItemView />);
    expect(baseElement).toBeTruthy();
  });
});
