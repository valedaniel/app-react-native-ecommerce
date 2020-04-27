import React, { Component, ReactNode } from 'react';
import { Content, Button, Text, Item, Input } from 'native-base';
import { Contract } from './contract';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ImageBackground, View, StatusBar, ActivityIndicator } from 'react-native';

const background = require('../../assets/background.png');

export class LoginHeader extends Component<any, any> {
    render(): ReactNode {
        return (
            <>
                <StatusBar backgroundColor='#0070C0' animated={true} />
            </>
        );
    }
}

export class LoginBody extends Component<{ contract: Contract }, any> {
    render(): ReactNode {
        const { contract } = this.props;
        return (
            <View style={styles.view}>
                <ImageBackground source={background} style={styles.image}>
                    {contract.getLoading() ? <ActivityIndicator style={styles.activity} size="large" color="white" /> : null}
                    <Content style={styles.content}>
                        <Item style={styles.item} rounded inlineLabel >
                            <Icon style={styles.icon} name='user' />
                            <Input
                                placeholder='Insira o email'
                                placeholderTextColor='white'
                                onChangeText={(text: string) => contract.setLogin(text)}
                                style={styles.input}
                            />
                        </Item>
                        <Item style={styles.item} rounded inlineLabel>
                            <Icon style={styles.icon} name='lock' />
                            <Input
                                secureTextEntry={true}
                                placeholderTextColor='white'
                                placeholder='Insira a senha'
                                onChangeText={(text: string) => contract.setPassword(text)}
                                style={styles.input}
                            />
                        </Item>
                        <Button block success style={{ ...styles.button, marginTop: '15%' }} onPress={() => contract.authenticate()}>
                            <Text style={styles.text}>Entrar</Text>
                        </Button>
                        <Button bordered light block style={styles.button} onPress={() => contract.redirectToRegister()}>
                            <Text style={styles.text}>Ainda não tenho cadastro</Text>
                        </Button>
                    </Content>
                </ImageBackground>
            </View>
        );
    }
}