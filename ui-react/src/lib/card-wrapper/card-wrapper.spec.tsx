import { render } from '@testing-library/react';

import CardWrapper from './card-wrapper';

describe('CardWrapper', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CardWrapper />);
    expect(baseElement).toBeTruthy();
  });
});
