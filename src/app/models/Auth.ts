export enum Roles {
    Amdin,
    Student,
    Teacher
}

export interface Auth {
    token: string,
    refreshToken: string,
    userName: string,
    roles: Roles[]
}