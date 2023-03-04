import Layout from "../components/Layout";
import Territorios from "../components/Territorios";

export default function index() {
  return (
    <>
        <Layout>
            <div className="container">
                <Territorios />
            </div>
        </Layout>
    </>
  )
}
