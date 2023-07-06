import { Inter } from "next/font/google";
import StyledJsxRegistry from "./lib/registry";
import Recoil from "./lib/recoil";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Escape Room",
  description: "Escape Room Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Recoil>
          <StyledJsxRegistry>{children}</StyledJsxRegistry>
        </Recoil>
      </body>
    </html>
  );
}
