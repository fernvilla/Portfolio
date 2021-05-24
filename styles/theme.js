import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    primary: '#1a7ad0',
  },
  fonts: {
    heading: "'Source Code Pro', monospace",
    body: "'Source Code Pro', monospace",
  },
  styles: {
    global: {
      body: {
        bgColor: 'gray.100',
        fontSize: 'sm',
      },
      a: {
        cursor: 'pointer',
      },
    },
  },
});

export default theme;
