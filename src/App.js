import Header from './components/Header';

function App() {
  return (
    <div className="container">
      {/* PropType doesn't match so it still gonna render but occur an error on console */}
      <Header title={1} />
    </div>
  );
}

export default App;
