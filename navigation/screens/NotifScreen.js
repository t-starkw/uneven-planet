import React from 'react';
import { View, Text } from 'react-native';

export default function NotifScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => alert('This is the "Home" screen.')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Notifications Screen</Text>
        </View>
    );
}