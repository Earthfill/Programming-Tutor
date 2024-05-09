import { Outlet } from "react-router-dom"
import { Footer, Header, LearningFooter, Navbar } from "../components"
import { useShowContent } from "../customHooks/useShowContent";

const SharedLayout = () => {
  const show = useShowContent();

  return (
    <main className="bg-base-200">
      <div>
        <Header />
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        {show ? <Footer /> : <LearningFooter />}
      </div>
    </main>
  )
}

export default SharedLayout