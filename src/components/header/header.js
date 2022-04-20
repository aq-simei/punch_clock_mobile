import { Image } from "react-native";
import { Container, LogoContainer, Title } from "./header.styles";
import CMLogo from "../../../assets/codeminer-logo.png";
import CogIcon from "../../../assets/icons/cog.png";

function Header() {
  return (
    <Container>
      <LogoContainer>
        <Image source={CMLogo} />
        <Title>PunchClock</Title>
      </LogoContainer>
      <Image source={CogIcon} />
    </Container>
  );
}

export default Header;
