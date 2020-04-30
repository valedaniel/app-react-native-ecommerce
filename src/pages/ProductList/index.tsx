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
        await this.refreshProducts();
        SplashScreen.hide();
    }

    async refreshProducts() {
        const res: AxiosResponse<any> = await productService.list();
        res.data.forEach((product: Product) => {
            product.willDelete = false;
        });
        this.setState({ products: res.data });
    }

    async sendNewProduct(): Promise<void> {
        const { product } = this.state;
        const res: AxiosResponse<any> = await productService.add(product);
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

    changeWillDelete(productId: number): void {
        const { products } = this.state;
        products.forEach((product: Product) => {
            if (product.id === productId) {
                product.willDelete = !product.willDelete;
            }
        })
        this.setState({ products });
    }

    async deleteAllSelected(): Promise<void> {
        const { products } = this.state;
        products.forEach(async (product: Product) => {
            if (product.willDelete) {
                await productService.delete(product.id);
            }
        })
        this.setState({ fabActive: false, isDelete: false });
        await this.refreshProducts();
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

