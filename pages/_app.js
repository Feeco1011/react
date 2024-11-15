// import '@/styles/globals.css'

import { AuthProvider } from '@/hooks/use-auth'
import DefaultLayout from '@/components/layout/default-layout'



export default function MyApp({ Component, pageProps }) {
  // 使用自訂在頁面層級的版面(layout)
  const getLayout =
  Component.getLayout || ((page) => <DefaultLayout>{page}</DefaultLayout>)

<<<<<<< HEAD
  return getLayout(<Component {...pageProps} />)

=======
//   return getLayout(<Component {...pageProps} />)
// }

return (<AuthProvider>
  {getLayout(<Component {...pageProps} />)}</AuthProvider>
  ) 
>>>>>>> main
}

