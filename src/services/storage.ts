import { AsyncStorage } from 'react-native';

class Repository {

    public async save(key: string, item: string): Promise<void> {
        AsyncStorage.setItem(key, item);
    }

    public async get(key: string): Promise<string | null> {
        return await AsyncStorage.getItem(key);
    }

}

export default new Repository();