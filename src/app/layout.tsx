import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Fernando Villasenor | Senior Frontend Developer',
  description:
    "Hi, my name is Fernando Villasenor. I'm a senior frontend engineer based in Los Angeles CA, w/9+ years experience and specializing on front end development."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Script id="google-analytics">
        {`
           (function (i, s, o, g, r, a, m) {
              i['GoogleAnalyticsObject'] = r;
              (i[r] =
                i[r] ||
                function () {
                  (i[r].q = i[r].q || []).push(arguments);
                }),
                (i[r].l = 1 * new Date());
              (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
              a.async = 1;
              a.src = g;
              m.parentNode.insertBefore(a, m);
            })(window, document, 'script', 'http://www.google-analytics.com/analytics.js', 'ga');

            ga('create', 'UA-49593330-1', 'fernvillasenor.com');
            ga('require', 'displayfeatures');
            ga('send', 'pageview');
        `}
      </Script>

      <body className={inter.className}>
        <div className="min-h-screen bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-blue-800 to-gray-900">
          {children}
        </div>
      </body>
    </html>
  );
}
