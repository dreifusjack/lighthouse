import { Bricolage_Grotesque, Gasoek_One } from 'next/font/google';

export const gasoekOne = Gasoek_One({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-header',
  display: 'swap',
});

export const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-text',
  display: 'swap',
});