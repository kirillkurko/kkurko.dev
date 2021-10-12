import { createStyles, makeStyles } from '@mui/styles';
import { ThemeInterface } from '@theme/theme';

export const useStyles = makeStyles((theme: ThemeInterface) =>
  createStyles({
    appbar: {
      background: theme.colors.white,
      color: theme.colors.text,
      boxShadow: 'none',
      fontFamily: theme.fontFamilies.primary,
    },
    toolbar: {
      display: 'flex',
      justifyContent: 'flex-end',
      padding: '20px',
    },
  }),
);
