
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
    <Card className="flex flex-col h-full">
      <CardHeader>
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-muted-foreground">{institution}</p>
      </CardHeader>
      <CardContent className="flex-grow">
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full" onClick={() => window.open(url, '_blank')}>
          <ExternalLink className="w-4 h-4 mr-2" />
          View Design System
        </Button>
      </CardFooter>
    </Card>
  );
};
