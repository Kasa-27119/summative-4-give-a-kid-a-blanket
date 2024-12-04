import { Helmet } from "react-helmet"
// import components
import PageHeader from "../components/PageHeader"
import ProductList from "../components/ProductList"

const Store = () => {
  return (
    <>
      <Helmet>
        {/* primary tags */}
        <title>Store - Give a Kid a Blanket</title>
        <meta name="title" content="Store - Give a Kid a Blanket" />
        <meta name="description" content="Shop our products at Give a Kid a Blanket, a non-profit based in Auckland, NZ helping kids warm up." />

        {/* open graph/ fb */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href}/>
        <meta property="og:title" content="Store - Give a Kid a Blanket" />
        <meta property="og:description" content="Shop our products at Give a Kid a Blanket, a non-profit based in Auckland, NZ helping kids warm up." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1710211289299-e2a52ea8954b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

        {/* twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={window.location.href} />
        <meta property="twitter:title" content="Store - Give a Kid a Blanket" />
        <meta property="twitter:description" content="Shop our products at Give a Kid a Blanket, a non-profit based in Auckland, NZ helping kids warm up." />
        <meta property="twitter:image" content="https://images.unsplash.com/photo-1710211289299-e2a52ea8954b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </Helmet>

      {/* page header section */}
      <div className='section top-section'>
        <PageHeader className='page-header' title='Store'
          image_url='https://images.unsplash.com/photo-1710211289299-e2a52ea8954b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'>
        </PageHeader>
      </div>

      {/* <div className="store-section section">
        <h2>Contact Details</h2>
      </div> */}
      <ProductList></ProductList>
    </>
  )
}

export default Store
