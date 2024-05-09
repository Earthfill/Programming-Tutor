import ScrollableImage from "./ScrollableImage"

const Preview = () => {
  return (
    <div className="md:grid bg-primary text-base-100 text-center">
      <div className="grid gap-4 align-element pt-12 md:pt-20 2xl:pt-10">
        <div className="text-3xl font-medium">Here's a preview of our Talent Profile</div>
        <div className="md:mx-48">
          Our profiles include the most essential information to help you decide whether to make contact.
          Review projects, skills, work experience, GitHub, and LinkedIn to help you get a clear picture of
          each candidiate upfront.
        </div>
      </div>
      <div className="relative top-20 2xl:top-72">
        <ScrollableImage />
      </div>
    </div>
  )
}

export default Preview