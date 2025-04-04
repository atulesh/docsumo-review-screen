import DocumentSection from "../components/DocumentSection"
import RightSidebar from "../components/RightSidebar"
import TopNavbar from "../components/TopNavbar"

const ReviewLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <TopNavbar />
      <div className="flex flex-1 overflow-hidden">
        <section className="w-3/4 h-full overflow-auto">
          <DocumentSection />
        </section>
        <aside className="w-1/4 h-full border-1 border-gray-200 dark:border-gray-700 overflow-auto">
          <RightSidebar />
        </aside>
      </div>
    </div>
  )
}

export default ReviewLayout