import React, { useEffect } from 'react';
import {KeyboardAvoidingView, Platform, SafeAreaView, View} from 'react-native';
import Navigation from './src/navigation';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, [])
  
  return (
    <View style={{flex: 1}}>
      <Provider store={store}>
        {Platform.OS === 'ios' ? (
          <SafeAreaView style={{flex: 1}}>
            <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
              <Navigation />
            </KeyboardAvoidingView>
          </SafeAreaView>
        ) : (
          <Navigation />
        )}
      </Provider>
    </View>
  );
}

export default App;
