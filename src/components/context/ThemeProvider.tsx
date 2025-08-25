'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'dark' | 'light'

type ThemeProviderProps = {
    children: React.ReactNode
    defaultTheme?: Theme
    storageKey?: string
}

type ThemeProviderState = {
    theme: Theme
    setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
    theme: 'dark',
    setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
                                  children,
                                  defaultTheme = 'dark',
                                  storageKey = 'matrix-theme',
                                  ...props
                              }: ThemeProviderProps) {
    // 1. Initialize state with only the default theme.
    // This makes the server render and the first client render identical.
    const [theme, setTheme] = useState<Theme>(defaultTheme)

    useEffect(() => {
        // 2. This effect runs only once on the client after the component mounts.
        // It safely checks localStorage for a user's saved preference.
        const storedTheme = localStorage.getItem(storageKey) as Theme | null
        if (storedTheme) {
            setTheme(storedTheme)
        }
    }, []) // The empty array [] ensures this runs only on mount.

    useEffect(() => {
        // This separate effect handles updating the DOM when the theme changes.
        const root = window.document.documentElement
        root.classList.remove('light', 'dark')
        root.classList.add(theme)
    }, [theme])

    const value = {
        theme,
        setTheme: (newTheme: Theme) => {
            localStorage.setItem(storageKey, newTheme)
            setTheme(newTheme)
        },
    }

    return (
        <ThemeProviderContext.Provider {...props} value={value}>
            {children}
        </ThemeProviderContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeProviderContext)

    if (context === undefined)
        throw new Error('useTheme must be used within a ThemeProvider')

    return context
}