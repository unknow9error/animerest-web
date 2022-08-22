export interface LoginVm {
    login: string;
    password: string;
}

export interface RegisterVm {
    email: string;
    firstName: string;
    lastName: string;
    middleName?: string;
    password: string
    confirmPassword: string;
}
