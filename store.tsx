import { create } from 'zustand';

interface StoreType {
    visible: boolean;
    text: string;

    modalOn: (text: string) => void;
}

export const useModal = create<StoreType>((set) => ({
    visible: false,
    text: '',

    modalOn: (text) => {
        set((state) => ({
            text: text,
            visible: true,
        }));
    },
    modalClose: (text) => {
        set((state) => ({
            text: text,
            visible: false,
        }));
    },
}));
