import React from 'react';
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
        <h3 className="text-lg leading-tight md:text-2xl font-semibold">{name}</h3>
        <p className="text-sm md:text-lg">{institution}</p>
      </CardContent>
      <CardFooter className="mt-auto p-3 md:p-6">
        <Button variant="outline" className="w-full bg-yellow-400 ring-yellow-500 ring-1 text-yellow-950 hover:bg-yellow-500" onClick={() => window.open(url, '_blank')}>
          View <span className="hidden md:inline">Design System</span>
          <ExternalLink className="w-4 h-4 mr-2" />
        </Button>
      </CardFooter>
    </Card>
  );
};
