import { render, fireEvent } from "../../test/test-utils";
import Header from "./header";

const mockedNavigation = jest.fn();
const mockedCanGoBack = jest.fn();
jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useNavigation: () => ({
    navigate: mockedNavigation,
    canGoBack: mockedCanGoBack,
  }),
}));

describe("Header", () => {
  it("renders a PunchClock title", () => {
    const headerComponent = render(<Header />);
    const headerTitle = headerComponent.getByText("PunchClock");
    
    expect(headerTitle).toBeTruthy();
  });
  describe("when the user navigate on the app", () => {
    beforeEach(() => {
      mockedNavigation.mockClear();
      mockedCanGoBack.mockImplementation(()=> false)
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it("renders a CanGoBack button", () => {
      mockedCanGoBack.mockImplementation(()=> true)
      const headerComponent = render(<Header />);
      const cogIcon = headerComponent.getByTestId("cog-icon");

      fireEvent.press(cogIcon);
      const canGoBackButton = headerComponent.getByTestId("canGoBack-button");

      expect(mockedNavigation).toHaveBeenCalledTimes(1);
      expect(canGoBackButton).toBeTruthy();
    });
  });
  describe('When the user is on the home page', () => {
    it("doesn't render a CanGoBack button", () => {
      mockedCanGoBack.mockImplementation(()=> false)
      
      const headerComponent = render(<Header />);

      expect(headerComponent.queryByTestId('canGoBack-button')).toBeNull();
    });
  })
});
