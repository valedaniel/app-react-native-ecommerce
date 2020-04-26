import { AsyncStorage } from 'react-native';

class Repository {

    // public async save(pagador: Pagador): Promise<void> {
    //     AsyncStorage.setItem('pagadores', JSON.stringify(pagador));

    //     // this.getAll().then((list: Pagador[]) => {
    //     //     list.push(pagador);
    //     // });
    // }

    // public async getAll(): Promise<Pagador[]> {
    //     const jsonText = await AsyncStorage.getItem('pagadores');
    //     if (!jsonText) return new Array<any>();
    //     return JSON.parse(jsonText!);
    // }

}

export default new Repository();