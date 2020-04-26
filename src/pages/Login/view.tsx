import React, { Component, ReactNode } from 'react';
import { Container, Content, Button, Text, Item, Input } from 'native-base';
import { Contract } from './contract';
import styles from './styles';

export class LoginHeader extends Component<any, any> {
    render(): ReactNode {
        return (
            <>
            </>
        );
    }
}



export class LoginBody extends Component<{ contract: Contract }, any> {
    render(): ReactNode {
        const { contract } = this.props;
        return (
            <Container style={styles.container}>
                <Content>
                    <Item style={styles.item} rounded>
                        <Input placeholder='Login' onChangeText={(text: string) => contract.setLogin(text)} />
                    </Item>
                    <Item style={styles.item} rounded>
                        <Input secureTextEntry={true} placeholder='Senha' onChangeText={(text: string) => contract.setPassword(text)} />
                    </Item>
                    <Button block style={{ ...styles.button, backgroundColor: 'green' }} onPress={() => contract.authenticate()}>
                        <Text style={styles.text}>ENTRAR</Text>
                    </Button>
                    <Button block style={styles.button} onPress={() => contract.redirectToRegister()}>
                        <Text style={styles.text}>REGISTRAR</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}