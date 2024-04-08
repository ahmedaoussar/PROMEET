import {create} from 'zustand'

export const updateProfileStore = create(
    (set) => ({
        lists: {
            domaine: [],
            sous_domaine: [],
            profession: [],
            entreprise: [],
            competences: [],
        },
        setLists: (lists) => set((state) => ({lists: {...state.lists, ...lists}})),
    }),
)
