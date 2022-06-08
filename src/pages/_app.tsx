import { Provider } from "urql";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { client, ssrCache } from "../lib/urql";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  if (pageProps.urqlState) {
    ssrCache.restoreData(pageProps.urqlState); //faz uma verificação -> se eu já fiz uma query pelo lado do server side da aplicação e eu estiver usando os mesmos dados no client side ele não faz de novo.
  }

  return (
    <Provider value={client}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}

export default MyApp;
