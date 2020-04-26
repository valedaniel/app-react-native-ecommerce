import React, { Component, ReactNode } from 'react';
import { Actions } from './actions';
import userService from '../../services/userService';
import { LoginBody, LoginHeader } from './view';

type MyProps = {}
export type MyState = { login: string, password: string }

export default class LoginScreen extends Component<MyProps, MyState> implements Actions {
    constructor(props: any) {
        super(props);

        this.state = {
            login: '',
            password: '',
        }

    }

    onChangeText(field: string, value: string): void {
        this.setState({ ...this.state, [field]: value });
    }

    async authenticate(): Promise<void> {
        const { login, password } = this.state;
        console.warn(await userService.authenticate(login, password));
    }

    render(): ReactNode {
        return (
            <>
                <LoginHeader />
                <LoginBody actions={this} />
            </>
        );
    }
}

