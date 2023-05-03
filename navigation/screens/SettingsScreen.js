import React from 'react';
import { View, Text } from 'react-native';

export default function SettingsScreen({ navigation }) {
    return (
// top 1/2 of page = box with background, user icon, and user name
// bottom 1/2 = clickable ListItems
        // username settings
        // phone number settings
        // notification settings
        // privacy settings


        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => alert('This is the "Home" screen.')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Settings Screen</Text>
        </View>
    );
}