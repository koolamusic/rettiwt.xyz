import {
  HTMLChakraProps,
  chakra,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import * as React from 'react';

export function RetweetIcon(props: HTMLChakraProps<'svg'>) {
  return (
    <chakra.svg
      viewBox="0 0 24 24"
      w={4}
      fill="muted"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5a4 4 0 01-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5a4 4 0 014 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" />
    </chakra.svg>
  );
}
