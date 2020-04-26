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
import { Router, Stack, Scene } from 'react-native-router-flux';
import Login from './src/pages/Login';

class App extends React.Component<any, any> {

  render(): ReactNode {
    return (
      <>
        <Router>
          <Stack key="root">
            <Scene
              key="login"
              component={Login}
              title="Login"
              initial={true}
              hideNavBar={true}
            />
            {/* <Scene key="register" component={} title="Register" />
          <Scene key="list" component={} title="List"/> */}
          </Stack>
        </Router >
      </>
    );
  }
}

export default App;
