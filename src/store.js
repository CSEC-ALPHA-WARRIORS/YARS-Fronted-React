import create from "zustand";
import { persist } from "zustand/middleware";

const useUser = create(
    persist(
        (set) => {
            return {
                student: null,
                registration_id: null,
                token: null,

                setStudent: (newStudent) => set((state) => ({ ...state, student: newStudent })),
                setRegistrationId: (newId) => set((state) => ({ ...state, registration_id: newId })),
                setToken: (newToken) => set((state) => ({ ...state, token:newToken })),
                logout: () => set((state) => ({ ...state,user : null, token: null }))
            }
        },
        {
            name: "user-info"
        }
    )
)

export { useUser }