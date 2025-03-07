import { create } from 'zustand';

import { api } from '../config/api';

interface CardsState {
    cards: ICard[];
    createdCard: ICard | null;
    cleanCreatedCard: () => void;
    getCards: () => Promise<boolean>;
    createCard: (card: DTOCreateCard) => Promise<boolean>;
}
export interface ICard {
    id: string;
    number: string;
    cvv: string;
    name: string;
    expirationDate: string;
}
interface DTOCreateCard {
    number: string;
    cvv: string;
    name: string;
    expirationDate: string;
}
const useCardsStore = create<CardsState>((set, get) => ({
    cards: [],
    createdCard: null,
    cleanCreatedCard: () => {
        set({ createdCard: null });
    },

    getCards: async () => {
        try {
            const response = await api.get(`/cards`);
            const data = response.data;
            console.log('get cards', data);
            set({ cards: data });
            return !!data;
        } catch (error) {
            console.error('Failed to fetch items:', error);
            return false;
        }
    },
    createCard: async (card) => {
        try {
            const response = await api.post(`/cards`, card);
            const data = response.data;
            if (data.id) set({ createdCard: data });

            return !!data.id;
        } catch (error) {
            console.error('Failed to fetch items:', error);
            return false;
        }
    },
}));

export default useCardsStore;
