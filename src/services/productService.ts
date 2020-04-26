import API from './api';
import { User } from 'src/entities/user';
import { AxiosResponse } from 'axios';

class ProductService {

    public async list(): Promise<AxiosResponse<any>> {
        return await API.get('/product/list');
    }

}

export default new ProductService();