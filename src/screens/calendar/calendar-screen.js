import React from 'react';
import { Text, View } from 'react-native';
import Template from '../../components/template/template';

const SettingsScreen = () => {
  return (
    <Template>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Calendar Screen</Text>
      </View>
    </Template>
  );
};

export default SettingsScreen;
