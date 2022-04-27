import styled from "styled-components/native";
import { verticalScale, scale } from "react-native-size-matters";

export const Container = styled.View`
  height: ${verticalScale(130)}px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.m}px;
`;

export const LogoContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.heading}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  margin-left: ${scale(10)}px;
`;
