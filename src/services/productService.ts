import API from './api';
import { AxiosResponse } from 'axios';
import storage from './storage';
import { Product } from 'src/entities/product';

class ProductService {

    public async list(): Promise<AxiosResponse<any>> {
        return await API.get('/product/list');
    }

    public async add(data: Product): Promise<AxiosResponse<any>> {
        return await API.post('/product/add', { token: await storage.get('token'), product: { ...data } });
    }

}

export default new ProductService();