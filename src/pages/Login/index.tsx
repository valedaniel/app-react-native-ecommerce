import React, { Component, ReactNode } from 'react';
import { Contract } from './contract';
import userService from '../../services/userService';
import { LoginBody, LoginHeader } from './view';
import storage from '../../services/storage';
import { User } from '../../entities/user';
import { Actions } from 'react-native-router-flux';
import { AxiosResponse } from 'axios';

type MyProps = {}
export type MyState = { user: User }

export default class LoginScreen extends Component<MyProps, MyState> implements Contract {
    constructor(props: any) {
        super(props);

        this.state = {
            user: new User()
        }

    }

    async componentDidMount() {
        if (await storage.get('token')) {
            Actions.productList();
        }
    }

    setLogin(value: string): void {
        const { user } = this.state;
        user.email = value;
    }
    setPassword(value: string): void {
        const { user } = this.state;
        user.password = value;
    }

    redirectToRegister(): void { Actions.register(); }

    async authenticate(): Promise<void> {
        const { user } = this.state;
        const res: AxiosResponse<any> = await userService.authenticate(user);
        if (res.status == 200) {
            await storage.save('token', res.data);
            Actions.productList();
            console.log(res.data);
        }
    }

    render(): ReactNode {
        return (
            <>
                <LoginHeader />
                <LoginBody contract={this} />
            </>
        );
    }
}

