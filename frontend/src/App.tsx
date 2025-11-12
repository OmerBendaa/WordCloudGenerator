import "./App.css";
import { WordsCloud } from "./components/WordsCloud";
import { useWordsFrequency } from "./hooks/useWordsFrequency";

function App() {
  const { data: wordsFrequency, isLoading, error } = useWordsFrequency();

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="app">
      {isLoading ? (
        <div>Loading ... 🚀</div>
      ) : (
        <WordsCloud wordsFrequency={wordsFrequency ?? {}} />
      )}
    </div>
  );
}

export default App;
