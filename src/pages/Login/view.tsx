import React, { Component, ReactNode } from 'react';
// import { Header, Body, Title, Container, Content, List, Button, Text, Card, CardItem } from 'native-base';
import { StatusBar, TextInput, Button } from 'react-native';
import { Actions, MyState } from './actions';
import styles from './styles';

export class LoginHeader extends Component<any, any> {
    render(): ReactNode {
        return (
            <>
            </>
        );
    }
}



export class LoginBody extends Component<{ actions: Actions }, any> {
    render(): ReactNode {
        const { actions } = this.props;
        return (
            <>
                <TextInput onChangeText={(text: string) => actions.onChangeText(MyState.login, text)} />
                <TextInput onChangeText={(text: string) => actions.onChangeText(MyState.password, text)} />
                <Button title="CLICK" color="" onPress={() => actions.authenticate()} />
            </>
        );
    }
}