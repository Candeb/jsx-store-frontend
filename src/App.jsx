import Routes from './routes/Routes';
import { Footer } from './components/Footer/Footer';

import Layout from './components/Layout/Layout';
import { AuthProvider } from './context/authContext';

export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

function App() {
  return (
    <AuthProvider>
      <Layout>
        <Routes />
        <Footer />
      </Layout>{' '}
    </AuthProvider>
  );
}

export default App;
