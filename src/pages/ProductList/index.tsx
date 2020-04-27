import React, { Component, ReactNode } from 'react';
import { Contract } from './contract';
import { ProductListBody, ProductListHeader } from './view';
import storage from '../../services/storage';
import { User } from '../../entities/user';
import { Actions } from 'react-native-router-flux';
import { AxiosResponse } from 'axios';
import productService from '../../services/productService';
import SplashScreen from 'react-native-splash-screen';
import { Product } from "../../entities/product";

type MyProps = {}
export type MyState = { product: Product[], confirmPassword: string }

export default class ProductList extends Component<MyProps, MyState> implements Contract {
    constructor(props: any) {
        super(props);

        this.state = {
            product: [],
            confirmPassword: '',
        }

    }

    getProducts(): Product[] {
        const { product } = this.state;
        return product;
    }

    async logout(): Promise<void> {
        await storage.remove('token');
        Actions.login();
    }

    async componentDidMount() {
        const res: AxiosResponse<any> = await productService.list();
        SplashScreen.hide();
        this.setState({ product: res.data });
    }

    render(): ReactNode {
        return (
            <>
                <ProductListHeader contract={this} />
                <ProductListBody contract={this} />
            </>
        );
    }
}

