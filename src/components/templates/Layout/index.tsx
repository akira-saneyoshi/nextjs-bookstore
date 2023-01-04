import Header from 'components/organismas/Header'
import Footer from 'components/organismas/Footer'
import Box from 'components/layout/Box'
import Separator from 'components/atoms/Separator'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Separator />
      <Box padding={3}>
        <Footer />
      </Box>
    </>
  )
}

export default Layout
