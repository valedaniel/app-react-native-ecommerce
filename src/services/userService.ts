import API from './api';
import { User } from 'src/entities/user';
import { AxiosResponse } from 'axios';

class UserService {

    public async authenticate(user: User): Promise<AxiosResponse<any>> {
        return await API.post('/user/login', { login: user.email, password: user.password });
    }

    public async register(user: User): Promise<AxiosResponse<any>> {
        return await API.post('/user/customer/add', {
            address: user.address,
            age: user.age,
            email: user.email,
            name: user.name,
            userPassword: user.password
        });
    }

}

export default new UserService();