import type { AppProps } from 'next/app';
import Head from 'next/head';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import 'idea-react/dist/index.css';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>诗杰的地盘</title>
      </Head>

      <Navbar bg="primary" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="/">首页</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link href="/component">Component</Nav.Link> */}
            <Nav.Link href="/about">关于</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="mt-5 pt-2">
        {/* @ts-ignore */}
        <Component {...pageProps} />
      </div>

      <footer className="flex-fill d-flex justify-content-center align-items-center border-top py-4">
        Powered by mythcsj
      </footer>
    </>
  );
}
