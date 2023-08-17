import Routes from './routes/Routes';
import { Footer } from './components/Footer/Footer';

import Layout from './components/Layout/Layout';

export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

function App() {
  return (
    <Layout>
      <Routes />
      <Footer />
    </Layout>
  );
}

export default App;
