import { TouchableOpacity } from "react-native";
import {
  Container,
  LogoContainer,
  Title,
  Logo,
  SettingsIcon,
} from "./header.styles";
import CMLogo from "../../../assets/codeminer-logo.png";
import CogIcon from "../../../assets/icons/cog.png";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { moderateScale } from "react-native-size-matters";

function Header() {
  const navigation = useNavigation();
  const canGoBack = navigation.canGoBack();

  return (
    <Container>
      {canGoBack && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons
            name="arrow-back-ios"
            size={moderateScale(24)}
            color="white"
          />
        </TouchableOpacity>
      )}
      <LogoContainer>
        <Logo source={CMLogo} />
        <Title>PunchClock</Title>
      </LogoContainer>
      <TouchableOpacity onPress={() => navigation.navigate("SettingsScreen")}>
        <SettingsIcon source={CogIcon} />
      </TouchableOpacity>
    </Container>
  );
}

export default Header;
