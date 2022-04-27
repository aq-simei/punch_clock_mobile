import { Image, TouchableOpacity } from "react-native";
import { Container, LogoContainer, Title } from "./header.styles";
import CMLogo from "../../../assets/codeminer-logo.png";
import CogIcon from "../../../assets/icons/cog.png";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from '@expo/vector-icons'; 

function Header() {
  const navigation = useNavigation();
  const canGoBack = navigation.canGoBack();

  return (
    <Container>
      {canGoBack && (
        <TouchableOpacity onPress={() => navigation.goBack()} testID='canGoBack-button'>
          <MaterialIcons name="arrow-back-ios" size={24} color="white" />
        </TouchableOpacity>
      )}
      <LogoContainer>
        <Image source={CMLogo} />
        <Title>PunchClock</Title>
      </LogoContainer>
      <TouchableOpacity onPress={() => navigation.navigate("SettingsScreen")}>
        <Image source={CogIcon} testID='cog-icon'/>
      </TouchableOpacity>
    </Container>
  );
}

export default Header;
