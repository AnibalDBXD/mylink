export interface ILoginButton {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: any;
    handleLogin: () => null | void;
    onDark?: boolean;
    id?: number;
}