import { GlobalStyle } from './GlobalStyle'
import Layout from './Layout'
import Balance from './components/Balance'
import Header from './components/Header'

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Header />
        <Balance title='Your Balance' balance={200} />
      </Layout>
    </>
  )
}
