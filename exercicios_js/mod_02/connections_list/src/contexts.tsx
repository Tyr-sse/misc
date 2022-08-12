import React, { createContext} from 'react';
export const ListContext = createContext({
    callback: (x: any) => console.log('rec ', x)
  });
  