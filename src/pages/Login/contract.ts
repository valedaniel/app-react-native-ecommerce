
export interface Contract {
    authenticate(): Promise<void>;
    setLogin(value: string): void;
    setPassword(value: string): void;
    redirectToRegister(): void;
    getLoading(): boolean;
}
