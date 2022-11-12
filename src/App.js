import React from 'react';
import { NavigationContainer, Stack } from './navigations'
import { CampaignDetails, CreateCampaign, CreateCampaignMedia } from './screens';
import { Provider } from 'react-redux'
import { store } from './app/store';
import { DefaultTheme } from '@react-navigation/native';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#5410BF',
    primaryLevel2: "#470da0",
    secondary: "#FF790A",
    green: "#66D072",
    yellow: "#FFFC00",
    white: "#FFFFFF",
    red: "#EA514B",
    black: "#000000",
    transparent: "#0000",
    lightGray: "#C6C6C6",
    darkGray: "#717171",
    gray: "#75647C",
    mist: "#9E93A3",
    offWhite: "#F8F8F8",
  },
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator>

          <Stack.Screen component={CreateCampaign} name="CreateCampaign" />
          <Stack.Screen component={CreateCampaignMedia} name="CreateCampaignMedia" />
          <Stack.Screen component={CampaignDetails} name="CampaignDetails" />

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
