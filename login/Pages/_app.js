import Navbar from '@/component/Navbar/Navbar';
import '../app/globals.css'
import { Provider } from 'react-redux';
import store from '../Redux/store'

function _app({ Component, pageProps }) {
  return (
    <>
      <Provider store={store} >
        <Navbar />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}


export default _app
