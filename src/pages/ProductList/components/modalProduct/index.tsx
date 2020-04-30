import React, { Component, ReactNode } from 'react';
import { Modal, Text, View } from "react-native";
import styles from './styles';
import { Item, Input, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

type MyProps = {
  modalVisible: boolean,
  closeModal: Function,
  setName: Function,
  setFactory: Function,
  setAmount: Function,
  setPrice: Function,
  sendNewProduct: Function,
}

export default class ModalProduct extends Component<MyProps, any> {
  render(): ReactNode {
    const { modalVisible, closeModal, setName, setFactory, setAmount, setPrice, sendNewProduct } = this.props;
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Item style={styles.item} rounded inlineLabel >
                <Icon style={styles.icon} name='dropbox' />
                <Input
                  placeholder='Insira o nome'
                  placeholderTextColor='gray'
                  onChangeText={(text: string) => setName(text)}
                  style={styles.input}
                />
              </Item>
              <Item style={styles.item} rounded inlineLabel>
                <Icon style={styles.icon} name='industry' />
                <Input
                  placeholderTextColor='gray'
                  placeholder='Insira a fábrica'
                  onChangeText={(text: string) => setFactory(text)}
                  style={styles.input}
                />
              </Item>
              <Item style={styles.item} rounded inlineLabel>
                <Icon style={styles.icon} name='cubes' />
                <Input
                  placeholderTextColor='gray'
                  keyboardType="numeric"
                  placeholder='Insira a quantidade'
                  onChangeText={(text: string) => setAmount(Number(text))}
                  style={styles.input}
                />
              </Item>
              <Item style={styles.item} rounded inlineLabel>
                <Icon style={styles.icon} name='dollar' />
                <Input
                  placeholderTextColor='gray'
                  placeholder='Insira o preço'
                  keyboardType="numeric"
                  onChangeText={(text: string) => setPrice(Number(text))}
                  style={styles.input}
                />
              </Item>
              <Button block success onPress={() => sendNewProduct()} style={{ ...styles.button, marginTop: '10%' }} >
                <Text style={styles.text}>CADASTRAR</Text>
              </Button>
              <Button bordered light block onPress={() => closeModal()} style={styles.button} >
                <Text style={{ ...styles.text, color: 'gray' }}>FECHAR</Text>
              </Button>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}