export interface Evenements {
    id: number;
    nom: string,
    type: string
}

export const evenements = [
    {
        id: 1,
        nom: 'fete de la musique',
        type: 'festival'
    },

    {
        id: 2,
        nom: 'le tant attendu (ou pas) concert de Jul',
        type: 'concert'
    },

    {
        id: 3,
        nom: 'marche des vegan extremistes relous',
        type: 'marche'
    }
];