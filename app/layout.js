import "./globals.css";


export const metadata = {
  title: {
    default: " Wealth Matrix Finserv LLP",
    template: "%s - Wealth Matrix Finserv LLP",
  },
  description: "Wealth Matrix Finserv LLP: Navigating the Path to Financial Success. A partner in your journey to wealth, offering expert guidance, cutting-edge strategies, and personalized service for a prosperous future.",
  twitter: {
    card: "summary_large_image",
    site: "@wealthmatrixfiserv", // Twitter handle of Wealth Matrix Finserv LLP
  },
  author: "Wealth Matrix Finserv LLP Team",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
       {children}
      </body>
    </html>
  );
}
