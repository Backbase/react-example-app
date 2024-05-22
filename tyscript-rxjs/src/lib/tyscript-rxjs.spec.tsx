import { render } from '@testing-library/react';

import TyscriptRxjs from './tyscript-rxjs';

describe('TyscriptRxjs', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TyscriptRxjs />);
    expect(baseElement).toBeTruthy();
  });
});
