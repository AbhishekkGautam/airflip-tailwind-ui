'use client';

import { AppProvider } from '@/context/app-context';

const Providers = ({ children }) => {
  return <AppProvider>{children}</AppProvider>;
};

export default Providers;
