import { render } from '@testing-library/react';
import ErrorView  from './error-view';


describe('CardWrapper', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ErrorView error={undefined}/>);
    expect(baseElement).toBeTruthy();
  });
});
