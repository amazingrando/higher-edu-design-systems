import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button";

export const AddYourDS = () => {
  return (
    <div className="text-center bg-yellow-100 rounded-lg p-8 mx-auto">
      <h2 className="text-3xl md:text-4xl leading-tight font-semibold mb-3 text-balance text-yellow-950">Have a Design System to Share?</h2>
      <p className="mb-6 text-yellow-950/70 font-medium text-sm md:text-base">
        If your institution has a design system that's not listed here, we'd love to add it to our collection.
        Help us grow this resource for the higher education community.
      </p>
      <Button onClick={() => window.open('https://github.com/amazingrando/higher-edu-design-systems/issues/new', '_blank')}>
        <Plus className="mr-2" />
        Submit Your Design System
      </Button>
    </div>
  )
}

export default AddYourDS;