import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface UserStore {
  userID: string;
  setUserID: (newUserId: string) => void;
}

export const UserStore = create<UserStore>()(

  persist(
    ( set ) => ({
      userID: "",
      setUserID: (newUserId) => set({ 
        userID: newUserId 
      }),
    }),
    {
      name: 'app',
    },
  ),
)