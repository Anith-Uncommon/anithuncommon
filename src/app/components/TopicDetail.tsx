import { Card } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/app/components/ui/accordion";
import { ChevronLeft, Clock, Users, FileText } from "lucide-react";

interface Topic {
  title: string;
  description: string;
  content: {
    section: string;
    text: string;
  }[];
  resources: {
    type: string;
    title: string;
    description: string;
  }[];
  difficulty: "Básico" | "Intermedio" | "Avanzado";
  estimatedTime: string;
}

interface TopicDetailProps {
  subject: string;
  topic: Topic;
  onBack: () => void;
}

export function TopicDetail({ subject, topic, onBack }: TopicDetailProps) {
  const difficultyColors = {
    "Básico": "bg-green-100 text-green-800",
    "Intermedio": "bg-yellow-100 text-yellow-800",
    "Avanzado": "bg-red-100 text-red-800"
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Button 
        variant="ghost" 
        onClick={onBack}
        className="mb-6"
      >
        <ChevronLeft className="w-4 h-4 mr-2" />
        Volver a {subject}
      </Button>

      <Card className="p-8 mb-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">{topic.title}</h1>
            <p className="text-gray-600 mb-4">{topic.description}</p>
          </div>
          <Badge className={difficultyColors[topic.difficulty]}>
            {topic.difficulty}
          </Badge>
        </div>

        <div className="flex gap-6 mb-6 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{topic.estimatedTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span>Para estudiantes</span>
          </div>
        </div>

        <div className="border-t pt-6">
          <h2 className="text-xl font-semibold mb-4">Contenido</h2>
          <Accordion type="single" collapsible className="w-full">
            {topic.content.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{item.section}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700 leading-relaxed">{item.text}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <FileText className="w-5 h-5" />
          <h2 className="text-xl font-semibold">Recursos adicionales</h2>
        </div>
        <div className="space-y-4">
          {topic.resources.map((resource, index) => (
            <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="outline">{resource.type}</Badge>
                <h3 className="font-medium">{resource.title}</h3>
              </div>
              <p className="text-sm text-gray-600">{resource.description}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

