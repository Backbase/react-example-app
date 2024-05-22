import { render } from '@testing-library/react';

import AccountInfo from './account-info';

describe('AccountInfo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AccountInfo />);
    expect(baseElement).toBeTruthy();
  });
});
