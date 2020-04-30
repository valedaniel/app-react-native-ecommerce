import React, { Component, ReactNode } from 'react';
import { Contract } from './contract';
import { ProductListBody, ProductListHeader } from './view';
import storage from '../../services/storage';
import { Actions } from 'react-native-router-flux';
import { AxiosResponse } from 'axios';
import productService from '../../services/productService';
import SplashScreen from 'react-native-splash-screen';
import { Product } from "../../entities/product";

type MyProps = {}
export type MyState = {
    products: Product[],
    confirmPassword: string,
    fabActive: boolean,
    modalOpen: boolean,
    product: Product,
    isDelete: boolean,
}

export default class ProductList extends Component<MyProps, MyState> implements Contract {
    constructor(props: any) {
        super(props);

        this.state = {
            products: [],
            product: new Product(),
            confirmPassword: '',
            fabActive: false,
            modalOpen: false,
            isDelete: false,
        }

    }

    async componentDidMount() {
        const res: AxiosResponse<any> = await productService.list();
        SplashScreen.hide();
        this.setState({ products: res.data });
    }

    async sendNewProduct(): Promise<void> {
        const { product } = this.state;
        const res: AxiosResponse<any> = await productService.add(product);
        console.log(res.status);
    }

    async logout(): Promise<void> {
        await storage.remove('token');
        Actions.login();
    }


    isDelete(): boolean {
        const { isDelete } = this.state;
        return isDelete;
    }

    changeDelete(): void {
        const { isDelete } = this.state;
        this.setState({ isDelete: !isDelete });
    }


    getProducts(): Product[] {
        const { products } = this.state;
        return products;
    }

    getModalVisibility(): boolean {
        const { modalOpen } = this.state;
        return modalOpen;
    }

    getFabActive(): boolean {
        const { fabActive } = this.state;
        return fabActive;
    }

    setName(text: string): void {
        this.setState({ product: { ...this.state.product, name: text } });
    }

    setFactory(text: string): void {
        this.setState({ product: { ...this.state.product, factory: { name: text } } });
    }

    setAmount(number: number): void {
        this.setState({ product: { ...this.state.product, amount: number } });
    }

    setPrice(number: number): void {
        this.setState({ product: { ...this.state.product, price: number } });
    }

    openModal(): void { this.setState({ modalOpen: true }); }
    closeModal(): void { this.setState({ modalOpen: false }); }

    setFabActive(fabActive: boolean): void {
        this.setState({ fabActive })
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

