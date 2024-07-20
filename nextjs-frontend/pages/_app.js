//import type { AppProps } from 'next/app'
//Component, pageProps }: AppProps) {
import Footer from 'components/Footer' 
import Header from 'components/Header' 
import {ThemeProvider} from '@emotion/react'
import GlobalStyles from 'components/GlobalStyles/GlobalStyles'
import returnUserJwt from 'components/returnUserJwt'
import returnUserData from '/components/returnUserData'
import {useState, useEffect} from 'react'


const theme = {
  colors: {
    primary: '#efefef'
  }
}

const userJwt = returnUserJwt()
export default function MyApp({ Component, pageProps}) {
  const [userData, setUserData] = useState(null);
  const [usersData, setUsersData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
        await returnUserData(userJwt, setUsersData, null,"/?populate=postImagem");
        if (userJwt !== " ") {
        await returnUserData(userJwt, setUserData, setLoading, "/me/");
        }
    };
    if (userJwt) {
      fetchData();
    }
  }, [userJwt]);
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <Header/>
        <Component {...pageProps} userJwt={userJwt} userData={userData} usersData={usersData}/>
        <Footer/>
      </ThemeProvider>
    </>
  )
}

