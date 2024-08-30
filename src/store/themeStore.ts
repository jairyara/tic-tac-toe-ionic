import {create} from "zustand";

interface ThemeState {
    isDarkMode: boolean;
    setDarkMode: (isDarkMode: boolean) => void;
}

const useThemeStore = create<ThemeState>((set) => ({
    isDarkMode: false,

    setDarkMode: (value:boolean) => set({isDarkMode:value}),
}));

export default useThemeStore;