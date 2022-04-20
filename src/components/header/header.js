import { Image } from "react-native";
import { Container, LogoContainer, Title } from "./header.styles";
import CMLogo from "../../../assets/codeminer-logo.png";
import CogIcon from "../../../assets/icons/cog.png";

function Header() {
  return (
    <Container testID='header-container'>
      <LogoContainer>
        <Image source={CMLogo} testID='header-logo-img'/>
        <Title testID='header-title'>PunchClock</Title>
      </LogoContainer>
      <Image source={CogIcon} testID='header-cog-img'/>
    </Container>
  );
}

export default Header;
