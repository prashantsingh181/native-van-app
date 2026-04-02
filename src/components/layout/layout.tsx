import { Footer } from "./footer";

export const Layout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};
