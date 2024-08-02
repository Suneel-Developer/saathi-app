import Head from 'next/head';  // Import Head for managing meta tags
import "./globals.css";

export const metadata = {
  title: "Saathi App",
  description: "Saathi App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Add other meta tags or links here if needed */}
      </Head>
      <body>{children}</body>
    </html>
  );
}
