import '../styles/globals.css'
import { wrapper, store } from "../store/store";
import { Provider } from "react-redux";

import { UserProvider } from '@auth0/nextjs-auth0';

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </UserProvider>
  )
}

export default wrapper.withRedux(MyApp);
