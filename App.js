import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider, createTheme } from '@rneui/themed';
import MainContainer from './navigation/MainContainer';

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <MainContainer />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

const theme = createTheme({
  colors: {
    primary: '#E6DFF1',
    primaryDark: '#5A3D8A',
    secondary: '#C1DEDC',
    secondaryDark: '#72B5B0',
    tertiary: '#F1EEE7',
    tertiaryDark: '#D9D1BE',
    white: '#FDFCFC',
    black: '#030000',
  },

});

