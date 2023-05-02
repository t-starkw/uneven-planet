import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider, createTheme } from '@rneui/themed';
import { Button } from '@rneui/base';

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <View style={styles.container}>
          <Text style={{ color: theme.colors.black}}>My App</Text>
          <Button title="Hello" />
          <StatusBar style="auto" />
        </View>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

const theme = createTheme({
  colors: {
    primary: '#E6DFF1',
    secondary: '#C1DEDC',
    white: '#FDFCFC',
    black: '#030000',
    greyOutline: '#F1EEE7'
  },

});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
