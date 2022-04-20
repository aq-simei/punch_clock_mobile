import { render } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";
import theme from "../styles/theme";

const customRender = (ui, options) => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>, options);
};

export * from "@testing-library/react-native";
export { customRender as render };
