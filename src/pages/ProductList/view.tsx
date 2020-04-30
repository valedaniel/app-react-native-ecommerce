import React, { Component, ReactNode } from 'react';
import { StatusBar } from 'react-native';
import { Contract } from './contract';
import styles from './styles';
import {
    Header,
    Right,
    Text,
    Body,
    Container,
    Button,
    Title,
    Content,
    List,
    ListItem,
    Fab,
    CheckBox
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Product } from '../../entities/product';
import ModalProduct from './components/modalProduct';

export class ProductListHeader extends Component<{ contract: Contract }, any> {
    render(): ReactNode {
        const { contract } = this.props;
        return (
            <>
                <Header style={styles.header}>
                    <Right />
                    <Body style={styles.bodyHeader}>
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
                    <List style={styles.list} dataArray={contract.getProducts()}
                        renderRow={(product: Product) =>
                            <ListItem key={product.id}>
                                <Right />
                                <Body style={styles.body}>
                                    <Text>{product.name}</Text>
                                    <Text>{product.factory.name}</Text>
                                    <Text>R$: {product.price}</Text>
                                </Body>
                                <Right>
                                    {contract.isDelete() ?
                                        <CheckBox
                                            style={styles.checkbox}
                                            color="#B22222"
                                            onPress={() => contract.changeWillDelete(product.id)}
                                            checked={product.willDelete} /> : null}
                                </Right>
                            </ListItem>
                        }>
                    </List>
                    {contract.isDelete() ?
                        <Button onPress={() => contract.deleteAllSelected()} style={styles.button} block>
                            <Text style={styles.textButton}>DELETAR</Text>
                        </Button> : null}
                    <ModalProduct
                        closeModal={() => contract.closeModal()}
                        modalVisible={contract.getModalVisibility()}
                        setName={(text: string) => contract.setName(text)}
                        setFactory={(text: string) => contract.setFactory(text)}
                        setAmount={(number: number) => contract.setAmount(number)}
                        setPrice={(number: number) => contract.setPrice(number)}
                        sendNewProduct={() => contract.sendNewProduct()}
                    />
                </Content>
                <Fab
                    active={contract.getFabActive()}
                    direction="up"
                    containerStyle={{}}
                    style={styles.fab}
                    position="bottomRight"
                    onPress={() => contract.setFabActive(!contract.getFabActive())}>
                    <Icon name="cog" />
                    <Button onPress={() => {
                        contract.openModal()
                        contract.setFabActive(!contract.getFabActive());
                    }} style={{ backgroundColor: '#5CB85C' }}>
                        <Icon style={styles.icon} name="plus" />
                    </Button>
                    <Button onPress={() => {
                        contract.changeDelete();
                        contract.setFabActive(!contract.getFabActive());
                    }} style={{ backgroundColor: '#B22222' }}>
                        <Icon style={styles.icon} name="trash" />
                    </Button>
                </Fab>
            </Container >
        );
    }
}