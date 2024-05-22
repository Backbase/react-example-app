import { render } from '@testing-library/react';

import AccountsDetailView from './accounts-detail-view';

describe('AccountsDetailView', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AccountsDetailView />);
    expect(baseElement).toBeTruthy();
  });
});
