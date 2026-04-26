import type { PropsWithChildren } from 'react';

export const MainContent = ({ children }: PropsWithChildren) => {
  return (
    <main className="flex-1 w-full">
      {children}
    </main>
  );
};
