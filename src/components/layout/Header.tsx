import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Search className="h-6 w-6 text-primary" />
          <span className="text-2xl font-bold">roji</span>
        </div>
        <Button variant="outline">Sign In</Button>
      </div>
    </header>
  );
}