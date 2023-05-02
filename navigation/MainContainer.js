import React from 'react';
import { ThemeConsumer } from '@rneui/themed';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


// Import Screens
import HomeScreen from './screens/HomeScreen';
import NotifScreen from './screens/NotifScreen';
import SettingsScreen from './screens/SettingsScreen';

const Tab = createBottomTabNavigator();


export default function MainContainer() {

    return (
        <NavigationContainer>
            <ThemeConsumer>
                {({ theme }) => (
                    <Tab.Navigator
                        initialRouteName="Home"
                        screenOptions={({ route }) => ({
                            tabBarIcon: ({ focused, color, size }) => {
                                let iconName;
                                let rn = route.name;

                                if (rn === "Home") {
                                    iconName = focused ? 'home' : 'home-outline';

                                } else if (rn === "Notifications") {
                                    iconName = focused ? 'list' : 'list-outline';

                                } else if (rn === "Settings") {
                                    iconName = focused ? 'settings' : 'settings-outline';
                                }

                                return <Ionicons name={iconName} size={size} color={color} />;
                            },
                            tabBarActiveTintColor: theme.colors.primaryDark,
                            tabBarInactiveTintColor: theme.colors.black,
                            tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
                            tabBarStyle: [{ display: "flex" }, null]
                        })}
                    >
                        <Tab.Screen name="Notifications" component={NotifScreen} />
                        <Tab.Screen name="Home" component={HomeScreen} />
                        <Tab.Screen name="Settings" component={SettingsScreen} />
                    </Tab.Navigator>
                )}
            </ThemeConsumer>
        </NavigationContainer>
    );
}