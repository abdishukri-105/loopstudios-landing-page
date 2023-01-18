
import './App.css';

function App() {
  return (
    <div className="App bg-sky-600">
      <h1 className="text-3xl font-bold underline bg-teal">
        Hello world!
    </h1>
    <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
  <div class="shrink-0">
    <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo"/>
  </div>
  <div>
    <div class="text-xl font-medium text-black">ChitChat</div>
    <p class="text-slate-500">You have a new message!</p>
  </div>
</div>



    </div>
  );
}

export default App;
