import { render } from '@testing-library/react';

import AccountInfoContainer from './account-info-container';

describe('AccountInfoProperty', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AccountInfoContainer config={undefined} accountInfo={undefined} />);
    expect(baseElement).toBeTruthy();
  });
});
