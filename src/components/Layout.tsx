import Header from "./Header";
type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="w-full h-full flex flex-col items-center relative">
      <Header />
      <div className="w-3/5 h-[94%] flex flex-col items-center py-base  ">
        {children}
      </div>
    </div>
  );
};

export default Layout;
