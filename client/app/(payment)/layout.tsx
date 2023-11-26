import { Nunito_Sans } from "next/font/google";
import Provider from "@/redux/Provider";
import RequireAuth from "@/components/RequireAuth";
import "../globals.css";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunitoSans.className}>
        <Provider>
          <RequireAuth>{children}</RequireAuth>
        </Provider>
      </body>
    </html>
  );
}
