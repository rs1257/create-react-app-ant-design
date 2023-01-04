import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routes from '../../config/routes';
import ErrorBoundary from '../ErrorBoundary';
import Layout from '../Layout';
import { Suspense, useState } from 'react';
import Loader from '../Loader';
import Navbar from '../Navbar';
import PageFooter from '../Footer';
import { ConfigProvider } from 'antd';
import { ColourPalette } from '../../types/styles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Sidebar from '../Sidebar';

const client = new QueryClient();

const App = (): JSX.Element => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: ColourPalette.ngtMidBlue,
          colorBgTextHover: ColourPalette.ngtLightBlue,
          colorBgTextActive: ColourPalette.ngtLightBlue,
        },
      }}
    >
      <Suspense fallback={<Loader />}>
        <ErrorBoundary>
          <QueryClientProvider client={client}>
            <Router>
              <Routes>
                {routes.map(({ element, path, hideHeader, hideFooter, hideSidebar }, index) => (
                  <Route
                    key={index}
                    element={
                      <Layout
                        page={element}
                        header={!hideHeader ? <Navbar /> : undefined}
                        footer={!hideFooter ? <PageFooter /> : undefined}
                        sidebar={
                          !hideSidebar ? (
                            <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
                          ) : undefined
                        }
                        collapsed={collapsed}
                      />
                    }
                    path={path}
                  />
                ))}
              </Routes>
            </Router>
            <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
          </QueryClientProvider>
        </ErrorBoundary>
      </Suspense>
    </ConfigProvider>
  );
};

export default App;
