import { Poppins } from "next/font/google";
import Header from "./_components/Header";
import '@/app/_styles/globals.css';
import { ModalProvider } from "./_utils/ModalContext";
import Footer from "./_components/Footer";

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata = {
  title: {
    template: '%s | ALLIN1 Media',
    default: 'ALLIN1 Media'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-gray-500 min-h-screen flex flex-col antialiased`}>
        <Header />
        <div className='flex-1 px-4 md:px-8 py-6 md:py-12'>
          <main className='max-w-7xl mx-auto w-full'>
            <ModalProvider>
              {children}
            </ModalProvider>
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
