import Navbar from '@/component/Navbar/Navbar';
import '../app/globals.css'
import { Provider } from 'react-redux';
import store from '../Redux/store'
import { Toaster } from 'react-hot-toast';

function _app({ Component, pageProps }) {
  return (
    <>
      <Provider store={store} >
        <Navbar />
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}


export default _app
