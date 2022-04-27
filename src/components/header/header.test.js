import { render, fireEvent } from "../../test/test-utils";
import Header from './header'

const mockedNavigation = jest.fn();
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    navigate: mockedNavigation,
    canGoBack: () => true,
  })
}));

describe('Header', () => {
  it('renders a PunchClock title', () => {
    const headerComponent = render(<Header />)
    const headerTitle = headerComponent.getByText('PunchClock')
    expect(headerTitle).toBeTruthy()
  });
  describe('when the user can navigate on the app', () => {
    beforeEach(() => {
      mockedNavigation.mockClear();
    })
    it('renders a can go back button', () => {
      const headerComponent = render(<Header />)
      const cogIcon = headerComponent.getByTestId('cog-icon')
      fireEvent.press(cogIcon);
      const canGoBackButton = headerComponent.getByTestId('canGoBack-button')
      expect(canGoBackButton).toBeTruthy()
    })
  })
})
