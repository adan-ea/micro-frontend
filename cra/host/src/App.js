import React from 'react';
import Header from '../../sharedcomponent/shared/Header';
import Footer from '../../sharedcomponent/shared/Footer';
import UniqueHostComponent from './UniqueHostComponent';

const RemoteButton = React.lazy(() => import('remote/Button'));

const App = () => (
  <div>
    <Header />
    <UniqueHostComponent title="Host App Unique Title" />
    <h1>Basic Host-Remote</h1>
    <h2>Host</h2>
    <React.Suspense fallback="Loading Button">
      <RemoteButton />
    </React.Suspense>
    <Footer />
  </div>
);

export default App;
