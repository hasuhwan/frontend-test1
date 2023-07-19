import Header from "./Header";
import ScrollToTop from "./ScrollToTop";
type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="w-full h-full flex flex-col items-center relative ">
      <Header />
      <div className="w-3/5  flex flex-col items-center py-base pb-base  ">
        {children}
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Layout;
