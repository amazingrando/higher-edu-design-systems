import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

interface DesignSystem {
  name: string;
  url: string;
  institution: string;
  logo?: string;
}

export const DesignSystemCard = ({ name, url, institution, logo }: DesignSystem) => {
  return (
    <Card className="flex flex-col h-full bg-yellow-50">
      <CardHeader className="text-green-dark p-0">
        {logo && 
          (
          <div className=" bg-yellow-500/30 rounded p-2 md:p-8 flex items-center justify-center">
            <img src={logo} alt={name} className="aspect-video object-contain max-h-[100px] h-[60px] md:max-h-[180px] md:h-[100px] lg:h-[150px]" />
          </div>
          )}
      </CardHeader>
      <CardContent className="p-3 md:p-6">
        <h2 className="text-lg leading-tight md:text-2xl font-semibold text-balance">{name}</h2>
        <p className="text-sm md:text-lg text-balance">{institution}</p>
      </CardContent>
      <CardFooter className="mt-auto p-3 md:p-6 flex flex-col gap-2">
        <a href={url} className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full bg-yellow-400 ring-yellow-500 ring-1 text-yellow-950 hover:bg-yellow-500" onClick={() => window.open(url, '_blank')}>
          <span>
            View <span className="hidden md:inline">Design System</span>
          </span>
          <ExternalLink className="w-4 h-4 mr-2" />
        </a>
      </CardFooter>
    </Card>
  );
};
