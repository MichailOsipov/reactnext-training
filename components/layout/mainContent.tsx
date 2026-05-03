import type { PropsWithChildren } from 'react';

export const MainContent = ({ children }: PropsWithChildren) => {
  return (
    <main className="flex-1 w-full p-2 md:p-3 lg:p-4">
      {children}
    </main>
  );
};
