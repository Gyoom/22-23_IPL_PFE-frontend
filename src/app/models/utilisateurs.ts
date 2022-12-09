export interface Utilisateur {
    id: number;
    nom: string,
    prenom: string,
    pseudo: string
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