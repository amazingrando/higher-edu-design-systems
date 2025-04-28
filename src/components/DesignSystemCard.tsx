
import React from 'react';
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface DesignSystem {
  name: string;
  url: string;
  institution: string;
}

export const DesignSystemCard = ({ name, url, institution }: DesignSystem) => {
  return (
    <Card className="flex flex-col h-full bg-yellow-50">
      <CardHeader className="text-green-dark">
        <h3 className="text-lg leading-tight md:text-2xl font-semibold">{name}</h3>
        <p className="text-sm md:text-lg">{institution}</p>
      </CardHeader>
      <CardContent className="flex-grow">
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full bg-yellow-400 ring-yellow-500 ring-1 text-yellow-950 hover:bg-yellow-500" onClick={() => window.open(url, '_blank')}>
          View <span className="hidden md:inline">Design System</span>
          <ExternalLink className="w-4 h-4 mr-2" />
        </Button>
      </CardFooter>
    </Card>
  );
};
