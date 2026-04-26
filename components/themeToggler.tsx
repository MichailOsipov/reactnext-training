'use client'
import { useState } from 'react';
import { Button } from './ui/button';

const setTheme = ({ isDark }: { isDark: boolean }) => {
  const root = document.documentElement;
  
  root.classList.remove('dark');

  if (isDark) {
    root.classList.add('dark');
  }
};

export const ThemeToggler = () => {
  const [isDark, setIsDark] = useState(false);

  const onToggleTheme = () => {
    const newIsDark = !isDark;

    setTheme({ isDark: newIsDark });
    setIsDark(newIsDark);
  };

  return (
      <Button
        type="button"
        onClick={onToggleTheme}
      >
        {isDark ? 'Dark' : 'Light'}
      </Button>
  );
};
