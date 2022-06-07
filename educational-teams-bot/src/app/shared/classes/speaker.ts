import { Tag } from "./tag";

export class Speaker {
    id: string;
    name: string;
    mail: string;
    status:string;
    tagList: Tag[];

    constructor(id : string, name: string, mail:string,status:string,tagList:Tag[]) {
        this.id = id;
        this.name = name;
        this.mail = mail;
        this.status = status;
        this.tagList = tagList;
    }
}