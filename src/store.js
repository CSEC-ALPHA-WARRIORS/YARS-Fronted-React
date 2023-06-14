import create from "zustand";
import { persist } from "zustand/middleware";

const useStudentStore = create(
    persist(
        (set) => {
            return {
                student: null,
                registration_id: null,
                token: null,

                setStudent: (newStudent) => set((state) => ({ ...state, student: newStudent })),
                setId: (newId) => set((state) => ({ ...state, registration_id: newId })),
                setToken: (newToken) => set((state) => ({ ...state, token:newToken })),
                logout: () => set((state) => ({ ...state,student : null, token: null }))
            }
        },
        {
            name: "student-info"
        }
    )
)

export { useStudentStore }