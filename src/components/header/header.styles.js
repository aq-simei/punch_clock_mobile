import styled from "styled-components/native";
import { verticalScale, scale, moderateScale } from "react-native-size-matters";
import { Platform } from "react-native";

export const Container = styled.View`
  height: ${Platform.OS === "web" ? verticalScale(90) : verticalScale(130)}px;
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

export const Logo = styled.Image`
  width: ${moderateScale(50)}px;
  height: ${moderateScale(45)}px;
`;

export const SettingsIcon = styled.Image`
  width: ${moderateScale(25)}px;
  height: ${moderateScale(27)}px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.heading}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  margin-left: ${scale(10)}px;
`;
