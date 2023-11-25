import Provider from "@/redux/Provider";
import RequireAuth from "@/components/RequireAuth";

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
      <body>
        <Provider>
          <RequireAuth>{children}</RequireAuth>
        </Provider>
      </body>
    </html>
  );
}
