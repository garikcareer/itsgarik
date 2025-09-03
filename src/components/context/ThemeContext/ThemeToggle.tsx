import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from '../../ui/button';
import { useTheme } from './ThemeProvider';

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="matrix-button-hover border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
    >
      {theme === 'dark' ? (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeToggle;
