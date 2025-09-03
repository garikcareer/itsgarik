import React, { createContext, useContext, useState, useLayoutEffect, useMemo, useCallback } from 'react';

type Theme = 'dark' | 'light';

type ThemeProviderProps = {
    children: React.ReactNode;
    defaultTheme?: Theme;
    storageKey?: string;
};

type ThemeProviderState = {
    theme: Theme;
    // We can now define a more specific type for the setter function
    setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
    theme: 'dark',
    setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
    children,
    defaultTheme = 'dark',
    storageKey = 'matrix-theme',
    ...props
}: ThemeProviderProps) {
    const [theme, setThemeState] = useState<Theme>(() => {
        try {
            const storedTheme = localStorage.getItem(storageKey);
            // **Type-safe check**: Ensure the stored value is a valid theme
            if (storedTheme === 'light' || storedTheme === 'dark') {
                return storedTheme;
            }
            return defaultTheme;
        } catch (error) {
            console.warn('localStorage is not accessible, using default theme:', error);
            return defaultTheme;
        }
    });

    // This effect is still needed to apply theme changes made *after* the initial load
    useLayoutEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove('light', 'dark');
        root.classList.add(theme);
    }, [theme]);

    // **Memoize the setTheme function** with useCallback to ensure it has a stable reference
    const setTheme = useCallback((newTheme: Theme) => {
        try {
            localStorage.setItem(storageKey, newTheme);
            setThemeState(newTheme);
        } catch (error) {
            console.warn('Could not set theme in localStorage:', error);
        }
    }, [storageKey]);

    // **Memoize the context value** with useMemo to prevent unnecessary re-renders of consumers
    const value = useMemo(() => ({
        theme,
        setTheme,
    }), [theme, setTheme]);

    return (
        <ThemeProviderContext.Provider {...props} value={value}>
            {children}
        </ThemeProviderContext.Provider>
    );
}

export const useTheme = () => {
    const context = useContext(ThemeProviderContext);

    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }

    return context;
};