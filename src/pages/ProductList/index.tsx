import React, { Component, ReactNode } from 'react';
import { Contract } from './contract';
import userService from '../../services/userService';
import { ProductListBody, ProductListHeader } from './view';
import storage from '../../services/storage';
import { User } from '../../entities/user';
import { Actions } from 'react-native-router-flux';
import { AxiosResponse } from 'axios';
import productService from '../../services/productService';

type MyProps = {}
export type MyState = { user: User, confirmPassword: string }

export default class ProductList extends Component<MyProps, MyState> implements Contract {
    constructor(props: any) {
        super(props);

        this.state = {
            user: new User(),
            confirmPassword: '',
        }

    }

    async logout(): Promise<void> {
        await storage.remove('token');
        Actions.login();
    }

    async componentDidMount() {
        const res: AxiosResponse<any> = await productService.list();
        console.log(res.data);
    }

    render(): ReactNode {
        return (
            <>
                <ProductListHeader />
                <ProductListBody contract={this} />
            </>
        );
    }
}

