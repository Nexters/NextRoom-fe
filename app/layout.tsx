import { Inter } from "next/font/google";
import StyledJsxRegistry from "@/lib/registry";
import Recoil from "@/lib/recoil";
import ReactQueryProvider from "@/lib/reactQueryProvider";
import MuiProvider from "./lib/muiProvider";
import StyledProvider from "./lib/themeProvider";
import RequireAuth from "./lib/requireAuth";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NEXT ROOM",
  description: "NEXT ROOM Admin",
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
            <StyledProvider>
              <StyledJsxRegistry>
                <MuiProvider>
                  <RequireAuth>{children}</RequireAuth>
                </MuiProvider>
              </StyledJsxRegistry>
            </StyledProvider>
          </ReactQueryProvider>
        </Recoil>
      </body>
    </html>
  );
}
