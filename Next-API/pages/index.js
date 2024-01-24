import Head from "next/head";
import Navigation from "../pages/components/Navigation";
import Nav from "./components/Nav";
import Footer from "./components/Footer";


export default function Home() {
  
  return (
    <div>
      <Head>
        <title>Herberth Amorim</title>
        <meta name="description" content="Minha API-AWS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section>
          <div>
          <Navigation></Navigation>
            <Nav></Nav>
              <Footer></Footer>
          </div>
        </section>
      </main>
    </div>
  );
}

