import React, { Component, ReactNode } from 'react';
// import { Header, Body, Title, Container, Content, List, Button, Text, Card, CardItem } from 'native-base';
import { Button } from 'react-native';
import { Contract } from './contract';
import styles from './styles';

export class ProductListHeader extends Component<any, any> {
    render(): ReactNode {
        return (
            <>
            </>
        );
    }
}



export class ProductListBody extends Component<{ contract: Contract }, any> {
    render(): ReactNode {
        const { contract } = this.props;
        return (
            <>
                <Button title="LOGOUT" onPress={() => contract.logout()} />
            </>
        );
    }
}