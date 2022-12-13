export interface UserInterface {
    id: number;
    nom: string;
    prenom: string;
    pseudo: string;
}

export class User implements UserInterface {
    public id: number;
    public nom: string;
    public prenom: string;
    public pseudo: string;

    constructor (
        id: number,
        nom: string,
        prenom: string,
        pseudo: string
    ){
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.pseudo = pseudo;
    }

}

export const utilisateurs = [
    {
        id: 1,
        nom: 'nomDeFamille',
        prenom: 'Kevin',
        pseudo: 'xx-jeanKevin-xx'
    },

    {
        id: 2,
        nom: 'Etchebest',
        prenom: 'Philippe',
        pseudo: 'Philou ejtebez'
    }
];
