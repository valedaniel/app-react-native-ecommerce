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
import userService from '../../services/userService';
import { TextInput, Button } from 'react-native';

type MyState = { login: string, password: string }

class Login extends React.Component<any, MyState> {

  constructor(props: any) {
    super(props);

    this.state = {
      login: '',
      password: '',
    }

  }

  private async authenticate(): Promise<void> {
    const { login, password } = this.state;
    console.warn(await userService.authenticate(login, password));
  }

  render(): ReactNode {
    return (
      <>
        <TextInput onChangeText={(text: string) => this.setState({ login: text })} />
        <TextInput onChangeText={(text: string) => this.setState({ password: text })} />
        <Button title="CLICK" color="" onPress={() => this.authenticate()} />
      </>
    );
  };
}

export default Login;
