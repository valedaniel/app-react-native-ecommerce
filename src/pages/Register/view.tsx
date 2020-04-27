import React, { Component, ReactNode } from 'react';
import { Container, Content, Button, Text, Item, Input } from 'native-base';
import { Contract } from './contract';
import styles from './styles';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StatusBar, ActivityIndicator } from 'react-native';

export class RegisterHeader extends Component<any, any> {
    render(): ReactNode {
        return (
            <>
                <StatusBar translucent backgroundColor="transparent" />
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
                    {contract.getLoading() ? <ActivityIndicator style={styles.activity} size="large" color="white" /> : null}
                    <Item style={styles.item} rounded inlineLabel>
                        <Icon style={styles.icon} name='address-card' />
                        <Input
                            placeholder='Insira o nome'
                            placeholderTextColor='white'
                            onChangeText={(text: string) => contract.setName(text)}
                            style={styles.input}
                        />
                    </Item>
                    <Item style={styles.item} rounded inlineLabel>
                        <Icon style={styles.icon} name='child' />
                        <Input
                            keyboardType="numeric"
                            placeholder='Insira a idade'
                            placeholderTextColor='white'
                            onChangeText={(text: string) => contract.setAge(parseInt(text))}
                            style={styles.input}
                        />
                    </Item>
                    <Item style={styles.item} rounded inlineLabel>
                        <Icon style={styles.icon} name='at' />
                        <Input
                            placeholder='Insira o email'
                            placeholderTextColor='white'
                            onChangeText={(text: string) => contract.setEmail(text)}
                            style={styles.input}
                        />
                    </Item>
                    <Item style={styles.item} rounded inlineLabel>
                        <Icon style={styles.icon} name='map' />
                        <Input
                            placeholder='Insira o seu endereço'
                            placeholderTextColor='white'
                            onChangeText={(text: string) => contract.setAddress(text)}
                            style={styles.input}
                        />
                    </Item>
                    <Item style={styles.item} rounded inlineLabel>
                        <Icon style={styles.icon} name='lock' />
                        <Input
                            secureTextEntry={true}
                            placeholder='Insira a senha'
                            placeholderTextColor='white'
                            onChangeText={(text: string) => contract.setPassword(text)}
                            style={styles.input}
                        />
                    </Item>
                    <Item style={styles.item} rounded inlineLabel>
                        <Icon style={styles.icon} name='lock' />
                        <Input
                            secureTextEntry={true}
                            placeholder='Confirme a senha'
                            placeholderTextColor='white'
                            onChangeText={(text: string) => contract.setConfirmPassword(text)}
                            style={styles.input}
                        />
                    </Item>
                    <Button block success style={styles.button} onPress={() => contract.register()}>
                        <Text style={styles.text}>CONCLUIR</Text>
                    </Button>
                    <Button bordered light block style={styles.button} onPress={() => Actions.login()}>
                        <Text style={styles.text}>JÁ SOU CADASTRADO</Text>
                    </Button>
                </Content>
            </Container >
        );
    }
}