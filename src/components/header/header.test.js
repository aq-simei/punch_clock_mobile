import { render, fireEvent } from "../../test/test-utils";
import Header from "./header";
import { useNavigation } from "@react-navigation/native";

const mockGoBack = jest.fn();

jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useNavigation: jest.fn(() => ({
    navigate: jest.fn(),
    canGoBack: () => true,
    goBack: mockGoBack,
  })),
}));

const setup = () => render(<Header />);

describe("Header", () => {
  beforeEach(() => {
    mockGoBack.mockClear();
  });

  it("renders a PunchClock title", () => {
    const { getByText } = setup();
    const headerTitle = getByText("PunchClock");

    expect(headerTitle).toBeTruthy();
  });

  describe("when canGoBack is true", () => {
    it("renders the arrow back", () => {
      const { getByTestId } = setup();
      const canGoBackButton = getByTestId("canGoBack-button");

      expect(canGoBackButton).toBeTruthy();
    });

    it("calls goBack", () => {
      const { getByTestId } = setup();
      const canGoBackButton = getByTestId("canGoBack-button");
      fireEvent.press(canGoBackButton);

      expect(mockGoBack).toHaveBeenCalledTimes(1);
    });
  });

  describe("When canGoBack is false", () => {
    it("doesn't render the arrow back", () => {
      useNavigation.mockReturnValue({
        canGoBack: () => false,
      });

      const { queryByTestId } = setup();

      expect(queryByTestId("canGoBack-button")).toBeNull();
    });
  });
});
