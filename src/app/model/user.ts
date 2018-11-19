export interface User {
    _id?: string;
    username?: string;
    email?: string;
    password?: string;
    tokens?: any[];
    subjects?: any[];
    average?:number;
}