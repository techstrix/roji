import { FileUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';

export function QuestionInput() {
  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div className="relative">
          <Label htmlFor="question" className="sr-only">
            Your Question
          </Label>
          <Input
            id="question"
            placeholder="Type your question here..."
            className="min-h-[120px] resize-none py-4 pr-12"
          />
          <div className="absolute right-3 top-3 flex items-center space-x-2">
            <Label htmlFor="file-upload" className="cursor-pointer">
              <FileUp className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              <input
                id="file-upload"
                type="file"
                className="hidden"
                accept="image/*,.pdf,.doc,.docx"
              />
            </Label>
          </div>
        </div>
        <Button className="w-full" size="lg">
          Get Answer
        </Button>
      </div>
    </Card>
  );
}