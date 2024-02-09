import LocalButton from './Button';
import Header from '../../sharedcomponent/shared/Header';
import Footer from '../../sharedcomponent/shared/Footer';
import UniqueRemoteComponent from './UniqueRemoteComponent';

const App = () => (
  <div>
    <Header />
    <UniqueRemoteComponent title="Remote App Unique Title" />
    <h1>Basic Host-Remote</h1>
    <h2>Remote</h2>
    <LocalButton />
    <Footer />
  </div>
);

export default App;
