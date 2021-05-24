import { default as DocumentHead } from 'next/head';

const Head = ({ title, children }) => {
  return (
    <DocumentHead>
      <title>Fernando Villasenor | Senior Frontend Engineer</title>
      <meta
        name="description"
        content="Hi, my name is Fernando Villasenor. I'm a senior frontend engineer based in Los Angeles CA, w/6+ years experience and specializing on front end development."
      />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {children}

      <script
        dangerouslySetInnerHTML={{
          __html: `
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
          `,
        }}
      />
    </DocumentHead>
  );
};

export default Head;
