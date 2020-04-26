
export interface Contract {
    register(): Promise<void>;
    setAddress(value: string): void;
    setEmail(value: string): void;
    setAge(value: number): void;
    setName(value: string): void;
    setPassword(value: string): void;
    setConfirmPassword(value: string): void;
}
