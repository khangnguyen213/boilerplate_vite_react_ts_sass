import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './mainLayout.scss';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div className="main_layout">
      <Header />
      <div className="main_layout_body">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
