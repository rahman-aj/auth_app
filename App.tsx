import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { store } from './src/store';
import { AuthProvider } from './src/context/AuthContext';
import Loader from './src/components/Loader';

export default function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
        <Loader />
      </AuthProvider>
    </Provider>
  );
}