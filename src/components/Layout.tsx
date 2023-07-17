type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return <div className="w-3/4 h-full flex flex-col ">{children}</div>;
};

export default Layout;
