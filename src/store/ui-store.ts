import { create } from "zustand"; 
import { persist } from "zustand/middleware";

export enum Theme{
    LIGHT = "light",
    DARK = "dark"
}

interface StateStore{
    theme: Theme;
    toggleTheme: () => void;
}

export const useUiStore = create<StateStore>()(

    persist(

        (set, get) => ({
            theme: Theme.LIGHT,
    
            toggleTheme: () => {
                const {theme} = get();
                set({theme: (theme === Theme.LIGHT? Theme.DARK : Theme.LIGHT)});
            }
        })  

        ,{
            name: "ui-store"
        }
    )
)