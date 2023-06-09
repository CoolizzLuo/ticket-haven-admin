'use client';

import Providers from '../providers';
import Header from './Header';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

type Props = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body>
        <Header />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
