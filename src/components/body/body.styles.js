import { moderateScale, verticalScale } from "react-native-size-matters";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
  border-top-right-radius: ${moderateScale(10)}px;
  border-top-left-radius: ${moderateScale(10)}px;
  margin-top: -${verticalScale(10)}px;
`;
