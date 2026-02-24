import React from 'react';

interface ErrorPageProps {
  statusCode?: number;
}

function ErrorPage({ statusCode }: ErrorPageProps) {
  const code = statusCode ?? 500;

  return (
    <html>
      <body>
        <main
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
            padding: '1.5rem',
            textAlign: 'center',
          }}
        >
          <h1 style={{ fontSize: '2rem', fontWeight: 600, marginBottom: '0.75rem' }}>
            {code} error
          </h1>
          <p style={{ maxWidth: '28rem', color: '#6b7280', marginBottom: '0.5rem' }}>
            Something went wrong while loading this page.
          </p>
          <p style={{ color: '#9ca3af' }}>
            You can try going back or reloading the page.
          </p>
        </main>
      </body>
    </html>
  );
}

ErrorPage.getInitialProps = ({ res, err }: any) => {
  const statusCode = res?.statusCode ?? err?.statusCode ?? 404;
  return { statusCode };
};

export default ErrorPage;

