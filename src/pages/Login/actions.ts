
export interface Actions {
    authenticate(): Promise<void>;
    onChangeText(field: string, value: string): void;
}

export class MyState {
    public static login: string = 'login';
    public static password: string = 'password';
}
