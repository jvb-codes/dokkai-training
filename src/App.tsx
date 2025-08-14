import "./App.css";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Textarea className="resize-none bg-amber-200" />
      <Button className="bg-amber-600">Click me</Button>
    </div>
  );
}

export default App;
