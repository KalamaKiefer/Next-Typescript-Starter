import LoginLayout from "../layouts/LoginLayout";
import MainLayout from "../layouts/MainLayout";

interface LayoutProps {
  type: Number;
}

const Layout = ({ type }: LayoutProps) => {
  switch (type) {
    case 1:
      return <MainLayout />;
    case 2:
      return <LoginLayout />;
    default:
      return <MainLayout />;
  }
};

export default Layout;
