export class Tag {
    id: string;
    libelle: string;

    constructor(id : string, libelle: string) {
        this.id = id;
        this.libelle = libelle;
    }

    list(){
return ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
    }
  }
