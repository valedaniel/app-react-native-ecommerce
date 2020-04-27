import React, { Component, ReactNode } from 'react';
import { StatusBar } from 'react-native';
import { Contract } from './contract';
import styles from './styles';
import { Header, Right, Text, Body, Container, Button, Title, Content, List, ListItem } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Product } from '../../entities/product';

export class ProductListHeader extends Component<{ contract: Contract }, any> {
    render(): ReactNode {
        const { contract } = this.props;
        return (
            <>
                <Header style={styles.header}>
                    <Right />
                    <Body style={styles.body}>
                        <Title>Lista de produtos</Title>
                    </Body>
                    <Right>
                        <Button onPress={() => contract.logout()} transparent>
                            <Icon size={25} color='white' name='sign-out' />
                        </Button>
                    </Right>
                </Header>
                <StatusBar backgroundColor='#0070C0' animated={true} />
            </>
        );
    }
}



export class ProductListBody extends Component<{ contract: Contract }, any> {
    render(): ReactNode {
        const { contract } = this.props;
        return (
            <Container>
                <Content>
                    <List dataArray={contract.getProducts()}
                        renderRow={(product: Product) =>
                            <ListItem key={product.id} style={styles.listItem}>
                                <Text>{product.name}</Text>
                                <Text>{product.factory.name}</Text>
                                <Text>R$: {product.price}</Text>
                            </ListItem>
                        }>
                    </List>
                </Content>
            </Container>
        );
    }
}