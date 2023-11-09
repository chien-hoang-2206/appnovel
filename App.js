import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import Signup from "./screens/Signup";
import Welcome from "./screens/Welcome";
import Home from "./screens/HomeScreen/Home";
import Login from "./screens/Login";
import { closeConfig, config, HomeTransition, ProfileTransition, WelcomTransition } from "./components/Animation";
const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <>
      <Stack.Navigator screenOptions={{ ...HomeTransition, headerShown: false }}>
        <Stack.Screen name="Welcome" component={Welcome} options={{ ...WelcomTransition }} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </>
  );
};
const App = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default App;


















  {/* <Stack.Screen name="Home" component={Home} options={{ ...HomeTransition }} /> */}
        {/* <Stack.Screen name="Verify" component={Verify} options={{ ...ProfileTransition }} />
        <Stack.Screen name="ScanQR" component={ScanQR} options={{ ...HomeTransition }} />
        <Stack.Screen name="RentalRing" component={RentalRing} options={{ ...ProfileTransition }} />
        <Stack.Screen name="Notification" component={NofiticationSC} options={{ ...HomeTransition }} />
        <Stack.Screen name="Profile" component={Profile} options={{ ...HomeTransition }} />
        <Stack.Screen name="ReportPage" component={ReportPage} />
        <Stack.Screen name="Confirm" component={Confirm} options={{ ...ProfileTransition }} /> */}
