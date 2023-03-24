import { Material } from "./Material";

export interface Room {
    id: number,
    number: number,
    capacity: number,
    studentAccess: boolean,
    material: Material
}