import Creates from "../../components/creates"
import { fetchAPI } from "../../lib/api"
import Layout from "../../components/layout"

const Create = ({ categories }) => {
  return (
    <Layout categories={categories.data}>
      <div className="uk-section">
        <Creates categories={categories.data} />
      </div>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const categoriesRes = await fetchAPI("/categories")

  return {
    props: { categories: categoriesRes },
    revalidate: 1,
  }
}

export default Create
