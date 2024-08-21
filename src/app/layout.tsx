import type { Metadata } from "next";
import { Inria_Serif } from "next/font/google";
import "./globals.css";
import { ThemeWrapper } from "./theme-wrapper";
import StyledComponentsRegistry from "./lib/registry";


const inria = Inria_Serif({ weight: ['300', '400', '700'], style: ['italic', 'normal'], subsets: ['latin'] });


export const metadata: Metadata = {
  title: "I Miss My Taiwan",
  description: "Sounds of Taiwan and Asia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, intial-scale=1.0" />
      <body className={inria.className}>
        <StyledComponentsRegistry>
          <ThemeWrapper>
          {children}
          </ThemeWrapper>
          </StyledComponentsRegistry>
        </body>
    </html>
  );
}
