import API from './api';

class UserService {

    public async authenticate(login: string, password: string) {
        const res: any = await API.post('/user/login', { login, password });
        return res.data;
    }

}

export default new UserService();