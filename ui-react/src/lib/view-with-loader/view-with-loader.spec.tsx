import { render } from '@testing-library/react';
import ViewWithLoader from './view-with-loader';


describe('CardWrapper', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ViewWithLoader children={undefined} isLoading={false} />);
    expect(baseElement).toBeTruthy();
  });
});
