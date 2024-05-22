import { render } from '@testing-library/react';

import AccountInfoProperty from './account-info-property';

describe('AccountInfoProperty', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AccountInfoProperty item={undefined} accountInfo={undefined} />);
    expect(baseElement).toBeTruthy();
  });
});
