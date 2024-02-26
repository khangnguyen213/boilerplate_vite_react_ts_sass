import { useEffect } from 'react';
import './home.scss';

export default function Home() {
  console.log('Render Home');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Homepage';
  }, []);
  return <div>Homepage</div>;
}
