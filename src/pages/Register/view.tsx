import React, { Component, ReactNode } from 'react';
import { Container, Content, Button, Text, Item, Input } from 'native-base';
import { Contract } from './contract';
import styles from './styles';
import { Actions } from 'react-native-router-flux';

export class RegisterHeader extends Component<any, any> {
    render(): ReactNode {
        return (
            <>
            </>
        );
    }
}



export class RegisterBody extends Component<{ contract: Contract }, any> {
    render(): ReactNode {
        const { contract } = this.props;
        return (

            <Container style={styles.container}>
                <Content>
                    <Item style={styles.item} rounded>
                        <Input placeholder='Nome' onChangeText={(text: string) => contract.setName(text)} />
                    </Item>
                    <Item style={styles.item} rounded>
                        <Input keyboardType="numeric" placeholder='Idade' onChangeText={(text: string) => contract.setAge(parseInt(text))} />
                    </Item>
                    <Item style={styles.item} rounded>
                        <Input placeholder='Email' onChangeText={(text: string) => contract.setEmail(text)} />
                    </Item>
                    <Item style={styles.item} rounded>
                        <Input placeholder='Endereço' onChangeText={(text: string) => contract.setAddress(text)} />
                    </Item>
                    <Item style={styles.item} rounded>
                        <Input secureTextEntry={true} placeholder='Senha' onChangeText={(text: string) => contract.setPassword(text)} />
                    </Item>
                    <Item style={styles.item} rounded>
                        <Input secureTextEntry={true} placeholder='Confirme a senha' onChangeText={(text: string) => contract.setConfirmPassword(text)} />
                    </Item>
                    <Button block style={{ ...styles.button, backgroundColor: 'green' }} onPress={() => contract.register()}>
                        <Text style={styles.text}>CONCLUIR</Text>
                    </Button>
                    <Button block style={styles.button} onPress={() => Actions.login()}>
                        <Text style={styles.text}>VOLTAR</Text>
                    </Button>
                </Content>
            </Container >
        );
    }
}