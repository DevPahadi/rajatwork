import React, { createContext, useContext, useEffect, useState } from 'react';

export type ThemeName = 'cyber-dark' | 'light-tech' | 'midnight-purple';

export const THEME_OPTIONS: { name: ThemeName; label: string }[] = [
  { name: 'cyber-dark', label: 'Cyber Dark' },
  { name: 'light-tech', label: 'Light Tech' },
  { name: 'midnight-purple', label: 'Midnight Purple' },
];

const STORAGE_KEY = 'portfolio-theme';

type ThemeContextValue = { theme: ThemeName; setTheme: (t: ThemeName) => void };

const ThemeContext = createContext<ThemeContextValue>({ theme: 'cyber-dark', setTheme: () => {} });

const isThemeName = (v: string | null): v is ThemeName =>
  v === 'cyber-dark' || v === 'light-tech' || v === 'midnight-purple';

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setThemeState] = useState<ThemeName>(() => {
    if (typeof window === 'undefined') return 'cyber-dark';
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return isThemeName(stored) ? stored : 'cyber-dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const setTheme = (t: ThemeName) => setThemeState(t);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
