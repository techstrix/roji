import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { QuestionInput } from '@/components/question/QuestionInput';
import { FeatureGrid } from '@/components/features/FeatureGrid';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">Get Answers Instantly</h1>
            <p className="text-lg text-muted-foreground">
              Type your question or upload an image to get started
            </p>
          </div>

          <QuestionInput />
          <FeatureGrid />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;