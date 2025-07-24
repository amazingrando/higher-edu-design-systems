import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { useState } from "react";

interface DesignSystem {
  name: string;
  url: string;
  institution: string;
  logo?: any; // or a more specific type if you want
}

interface DesignSystemCardProps {
  designSystem: DesignSystem;
}

export const DesignSystemCard = ({ designSystem }: DesignSystemCardProps) => {
  const { name, url, institution, logo } = designSystem;
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <Card className="flex flex-col h-full bg-yellow-50 transition-shadow duration-200" role="article">
      <CardHeader className="text-green-dark p-0">
        {logo && !imageError && (
          <div className="bg-yellow-500/30 rounded p-2 md:p-8 flex items-center justify-center">
            {Array.isArray(logo.sources) && logo.img ? (
              <picture>
                {logo.sources.map((source: any) => (
                  <source key={source.type} srcSet={source.srcSet} type={source.type} />
                ))}
                <img
                  src={logo.img.src}
                  width={logo.img.width}
                  height={logo.img.height}
                  alt={`${institution} ${name} logo`}
                  className="aspect-video object-contain max-h-[100px] h-[60px] md:max-h-[180px] md:h-[100px] lg:h-[150px]"
                  onError={handleImageError}
                  loading="lazy"
                />
              </picture>
            ) : (
              // fallback for SVGs or images not processed by imagetools
              <img
                src={logo.img?.src || logo.src || logo}
                alt={`${institution} ${name} logo`}
                className="aspect-video object-contain max-h-[100px] h-[60px] md:max-h-[180px] md:h-[100px] lg:h-[150px]"
                onError={handleImageError}
                loading="lazy"
              />
            )}
          </div>
        )}
        {(!logo || imageError) && (
          <div className="bg-yellow-500/30 rounded p-2 md:p-8 flex items-center justify-center min-h-[60px] md:min-h-[100px] lg:min-h-[150px]">
            <span className="text-green-dark text-sm md:text-base font-medium">{institution}</span>
          </div>
        )}
      </CardHeader>
      <CardContent className="p-3 md:p-6 flex-grow">
        <h2 className="text-lg leading-tight md:text-2xl font-semibold text-balance mb-2">
          {name}
        </h2>
        <p className="text-sm md:text-lg text-balance text-gray-700">
          {institution}
        </p>
      </CardContent>
      <CardFooter className="p-3 md:p-6">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full bg-yellow-400 ring-yellow-500 ring-1 text-yellow-950 hover:bg-yellow-500"
          aria-label={`View ${name} design system from ${institution} (opens in new tab)`}
        >
          <span>
            View <span className="hidden md:inline">Design System</span>
          </span>
          <ExternalLink className="w-4 h-4" aria-hidden="true" />
        </a>
      </CardFooter>
    </Card>
  );
};
