import API from './api';
import { AxiosResponse } from 'axios';
import storage from './storage';
import { Product } from 'src/entities/product';

class ProductService {

    public async add(product: Product): Promise<AxiosResponse<any>> {
        return await API.post('/product/add', {
            token: await storage.get('token'),
            amount: product.amount,
            factory: { name: product.factory.name },
            name: product.name,
            price: product.price
        });
    }

    public async list(): Promise<AxiosResponse<any>> {
        return await API.get('/product/list');
    }

    public async delete(idProduct: number): Promise<AxiosResponse<any>> {
        return await API.delete(`/product/${idProduct}/remove`);
    }

}

export default new ProductService();