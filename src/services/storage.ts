import AsyncStorage from '@react-native-community/async-storage';

class Storage {

    public async save(key: string, item: string): Promise<void> {
        await AsyncStorage.setItem(key, item);
    }

    public async get(key: string): Promise<string | null> {
        return await AsyncStorage.getItem(key);
    }

    public async remove(key: string): Promise<void> {
        await AsyncStorage.removeItem(key);
    }

}

export default new Storage();