import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import MyApp from './src/navigation';
import { ThemeProvider } from '@rneui/themed';
export default function App() {
  return (
    <ThemeProvider>
      <PaperProvider>
        <NavigationContainer>
          <MyApp />
        </NavigationContainer>
      </PaperProvider>
    </ThemeProvider>
  );
}

