import { useContext } from 'react';
import { themeContext } from '@contexts/ThemeContext';

export const useTheme = () => {
  return useContext(themeContext);
};
