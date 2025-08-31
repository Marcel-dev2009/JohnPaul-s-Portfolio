import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
export const metadata: Metadata = {
  title: "John Paul Nwanganga - NollyWood Movie Director",
  description: "The official portfolio of John Paul Nwanganga, a NollyWood movie director.",
  verification :{
    google : "xlwM-qGHkTCuDIkG-Zfap1Rih1r0XEeYoAAZIRZW3uk"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      
      <body className="duration-300 overflow-x-hidden">
        <ThemeProvider enableSystem={true} attribute="class" defaultTheme="system">
        {children} 
        </ThemeProvider>
      </body>
  
    </html>
  );
}
