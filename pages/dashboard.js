import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import Head from 'next/head'

// components
import DashboardIndex from  '../components/views/dashboard/DashboardIndex';

export default function Dashboard() {
  return (
    <div className="h-screen w-full overflow-x-hidden">
      <Head>
        <title>Blance</title>
        <meta name="description" content="Black Freelancers Community" />
        <link rel="icon" href="/favicon.ico" />

        {/* Icons */}
        <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" 
        integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" 
        crossOrigin="anonymous" 
        referrerPolicy="no-referrer" />
        {/* Line */}
        <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/line-awesome/1.3.0/line-awesome/css/line-awesome.min.css" 
        integrity="sha512-vebUliqxrVkBy3gucMhClmyQP9On/HAWQdKDXRaAlb/FKuTbxkjPKUyqVOxAcGwFDka79eTF+YXwfke1h3/wfg==" 
        crossOrigin="anonymous" 
        referrerPolicy="no-referrer" />
      </Head>

      <main className="h-auto w-full">
        <DashboardIndex />
      </main>
    </div>
  )
}

export const getServerSideProps = withPageAuthRequired();