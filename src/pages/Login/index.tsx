import React, { Component, ReactNode } from 'react';
import { Contract } from './contract';
import userService from '../../services/userService';
import { LoginBody, LoginHeader } from './view';
import storage from '../../services/storage';
import { User } from '../../entities/user';
import { Actions } from 'react-native-router-flux';
import { AxiosResponse } from 'axios';
import SplashScreen from 'react-native-splash-screen'
import { Root, Toast } from 'native-base';

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
        } else {
            SplashScreen.hide();
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
        if (this.validateUser(user)) {
            const res: AxiosResponse<any> = await userService.authenticate(user);
            if (res.status == 200) {
                await storage.save('token', res.data);
                Actions.productList();
            }
        }
    }

    private validateUser(user: User): boolean {
        if (!user.email || !user.password) {
            this.showToast('Preencha todos os campos', 'Ok', 'warning');
            return false;
        }
        return true;
    }

    private showToast(message: string, buttonText: string, type?: any, ): void {
        Toast.show({
            text: message,
            buttonText: buttonText,
            type: type,
            duration: 9999,
            position: 'bottom',
        })
    }

    render(): ReactNode {
        return (
            <Root>
                <LoginHeader />
                <LoginBody contract={this} />
            </Root>
        );
    }
}

