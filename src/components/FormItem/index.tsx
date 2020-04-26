import React, { Component, ReactNode } from 'react';
import { StyleSheet, KeyboardTypeOptions } from 'react-native';
import { ListItem, Text, Input } from 'native-base';

type Props = {
    keyboardType: KeyboardTypeOptions;
    label: string;
    onChange: any;
}

export default class FormItem extends Component<Props, any> {

    render(): ReactNode {
        const { onChange, label, keyboardType } = this.props;
        return (
            <>
                <ListItem>
                    <Text>{label}</Text>
                    <Input keyboardType={keyboardType} onChangeText={(text: string) => onChange(text)} />
                </ListItem>
            </>
        );
    }
}
