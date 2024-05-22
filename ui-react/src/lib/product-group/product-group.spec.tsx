import { render } from '@testing-library/react';

import ProductGroup from './product-group';

describe('ProductGroup', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProductGroup />);
    expect(baseElement).toBeTruthy();
  });
});
