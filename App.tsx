import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { TextInput, View, Text } from 'react-native';
import PagerView from 'react-native-pager-view';

// const Tab = createMaterialBottomTabNavigator();

const Tab = createMaterialTopTabNavigator();

function Screen() {
  const [msg, setMsg] = React.useState('');
  const inputRef = React.useRef<TextInput>(null);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home Screen</Text>
      <TextInput
        placeholder='text'
        multiline
        value={msg}
        onChangeText={setMsg}
        style={{borderWidth: 1, width: 100}}
        ref={inputRef}
        onFocus={()=>console.log("focus")}
      />
    </View>
  );
}

export default function App() {
  return (
    <PagerView style={{flex: 1}} keyboardDismissMode="none">
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Screen1' component={Screen} />
        <Tab.Screen name='Screen2' component={Screen} />
        <Tab.Screen name='Screen3' component={Screen} />
        <Tab.Screen name='Screen4' component={Screen} />
      </Tab.Navigator>
    </NavigationContainer>
    </PagerView>
  );
}