import "./globals.css";


export const metadata = {
  title: "Saathi App",
  description: "Saathi App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
