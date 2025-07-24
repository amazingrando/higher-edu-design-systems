import { Plus } from "lucide-react"

export const AddYourDS = () => {
  return (
    <div className="text-center bg-yellow-100 rounded-lg p-8 mx-auto h-full flex flex-col justify-center">
      <h2 className="text-3xl md:text-4xl leading-tight font-semibold mb-3 text-balance text-yellow-950">Have a Design System to Share?</h2>
      <p className="mb-6 text-yellow-950/70 font-medium text-sm md:text-base">
        If your institution has a design system that's not listed here, we'd love to add it to our collection.
        Help us grow this resource for the higher education community.
      </p>
      <a href="https://github.com/amazingrando/higher-edu-design-systems/issues/new/choose" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-min mx-auto">
        <Plus className="mr-2" />
        Submit Your Design System
      </a>
    </div>
  )
}

export default AddYourDS;