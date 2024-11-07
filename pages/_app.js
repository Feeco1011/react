// import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';


import { AuthProvider } from '@/hooks/use-auth'


export default function MyApp({ Component, pageProps }) {
  // 使用自訂在頁面層級的版面(layout)
  const getLayout = Component.getLayout || ((page) => page)

//   return getLayout(<Component {...pageProps} />)
// }

return (<AuthProvider>
  {getLayout(<Component {...pageProps} />)}</AuthProvider>
  ) 
}

