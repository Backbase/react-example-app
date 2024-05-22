import { render } from '@testing-library/react';

import RetailLayout from './retail-layout';

describe('RetailLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RetailLayout />);
    expect(baseElement).toBeTruthy();
  });
});
