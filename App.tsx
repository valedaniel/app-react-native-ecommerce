/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { ReactNode } from 'react';
import { Router, Stack, Scene, Drawer, ActionConst } from 'react-native-router-flux';
import LoginScreen from './src/pages/Login';
import RegisterScreen from './src/pages/Register';
import ProductList from './src/pages/ProductList';

class App extends React.Component<any, any> {

  render(): ReactNode {
    return (
      <>
        <Router>
          <Stack key="root">
            {/* <Drawer
              key='userProfile'
              drawerPosition='left'
              type="push"
              hideNavBar
            > */}
            <Scene
              key="login"
              component={LoginScreen}
              title="Login"
              initial={true}
              hideNavBar={true}
              type="replace"
            />
            <Scene
              key="register"
              component={RegisterScreen}
              title="Register"
              hideNavBar={true}
            />
            <Scene
              key="productList"
              component={ProductList}
              title="Lista de produtos"
              hideNavBar={true}
              type="replace"
            />
            {/* </Drawer> */}
          </Stack>
        </Router >
      </>
    );
  }
}

export default App;
