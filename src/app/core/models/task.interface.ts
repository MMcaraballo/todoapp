import { UserInterface } from "./user.interface";

export interface TaskInterface {
    id:string | number; // deja asignar texto o numeros
    title:string;
    tags:string[];
    user:UserInterface;
    status: 'in-progress' | 'completed' | 'wait';
}