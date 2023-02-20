import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import MyApp from './src/navigation';
import { ThemeProvider } from '@rneui/themed';
import { Provider } from 'react-redux'
import { store } from './store'
export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <PaperProvider>
          <NavigationContainer>
            <MyApp />
          </NavigationContainer>
        </PaperProvider>
      </ThemeProvider>
    </Provider>
  );
}

