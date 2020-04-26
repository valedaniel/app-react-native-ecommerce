import React, { Component, ReactNode } from 'react';
import { Contract } from './contract';
import userService from '../../services/userService';
import { RegisterBody, RegisterHeader } from './view';
import storage from '../../services/storage';
import { User } from '../../entities/user';
import { Actions } from 'react-native-router-flux';
import { AxiosResponse } from 'axios';

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
        const { user, confirmPassword } = this.state;
        if (user.password === confirmPassword) {
            const res: AxiosResponse<any> = await userService.register(user);
            if (res.status === 201) {
                await storage.save('token', res.data);
                console.log(res.data);
                Actions.productList();
            }
        }
    }

    render(): ReactNode {
        return (
            <>
                <RegisterHeader />
                <RegisterBody contract={this} />
            </>
        );
    }
}

