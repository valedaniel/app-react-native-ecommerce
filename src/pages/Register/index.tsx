import React, { Component, ReactNode } from 'react';
import { Contract } from './contract';
import userService from '../../services/userService';
import { RegisterBody, RegisterHeader } from './view';
import storage from '../../services/storage';
import { User } from '../../entities/user';
import { Actions } from 'react-native-router-flux';
import { AxiosResponse } from 'axios';
import { Toast, Root } from 'native-base';

type MyProps = {}
export type MyState = { user: User, confirmPassword: string }

export default class RegisterScreen extends Component<MyProps, MyState> implements Contract {
    constructor(props: any) {
        super(props);

        this.state = {
            user: new User(),
            confirmPassword: '',
        }

    }

    setAddress(value: string): void {
        const { user } = this.state;
        user.address = value;
    }

    setEmail(value: string): void {
        const { user } = this.state;
        user.email = value;
    }

    setAge(value: number): void {
        const { user } = this.state;
        user.age = value;
    }

    setName(value: string): void {
        const { user } = this.state;
        user.name = value;
    }

    setPassword(value: string): void {
        const { user } = this.state;
        user.password = value;
    }

    setConfirmPassword(value: string): void { this.setState({ confirmPassword: value }); }


    async register(): Promise<void> {
        const { user } = this.state;
        if (this.validateUser(user)) {
            const res: AxiosResponse<any> = await userService.register(user);
            if (res.status === 201) {
                await storage.save('token', res.data);
                Actions.productList();
            }
        }
    }

    private validateUser(user: User): boolean {
        const { confirmPassword } = this.state;
        if (!user.age ||
            !user.address ||
            !user.email ||
            !user.name ||
            !user.password ||
            !confirmPassword) {
            this.showToast('Preencha todos os campos', 'Ok', 'warning');
            return false;
        }

        if (user.age < 18) {
            this.showToast('O usuário deve ser maior de idade', 'Ok', 'warning');
            return false;
        }

        if (user.password !== confirmPassword) {
            this.showToast('As senhas não coincidem', 'Ok', 'warning',);
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
            position: 'top',
            style: { marginHorizontal: '5%' }
        })
    }

    render(): ReactNode {
        return (
            <Root>
                <RegisterHeader />
                <RegisterBody contract={this} />
            </Root>
        );
    }
}

