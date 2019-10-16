import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import TopFix from '../components/ecosys/TopFix'

const EcosystomPage = () => {
  return (
    <Layout>
      <SEO title={{zh: '生态', en: 'Ecosystom'}} />
      <TopFix/> 
    </Layout>
  )
}
export default EcosystomPage;