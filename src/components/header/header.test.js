import { render } from "../../test/test-utils";
import Header from './header'


describe('Header', () => {
  it('renders a PunchClock title', () => {
    const headerComponent = render(<Header />)
    expect(headerComponent.getByText('PunchClock')).toBeTruthy()
  });
})
