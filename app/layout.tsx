import { Inter } from "next/font/google";
import StyledJsxRegistry from "@/lib/registry";
import Recoil from "@/lib/recoil";
import ReactQueryProvider from "@/lib/reactQueryProvider";
import M3 from "./theme/M3/M3";

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
          <ReactQueryProvider>
            <StyledJsxRegistry>
              {children}
              {/* <M3>{children}</M3> */}
            </StyledJsxRegistry>
          </ReactQueryProvider>
        </Recoil>
      </body>
    </html>
  );
}
