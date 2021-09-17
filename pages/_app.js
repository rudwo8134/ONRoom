import Layout from '../Components/Layout/Layout'
import '../styles/globals.css'


function MyApp(props) {
  const { pageProps, Component } = props;
  console.log(props)
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}





export default MyApp;