import { useState } from 'react';
import './App.css';
import NestedComments from './components/nested-comments';
import commentsData from './data/comment.json';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Nested Comment System</h1>
      <NestedComments
        comments={commentsData}
        onSubmit={() => {}}
        onEdit={() => {}}
        onDelete={() => {}}
      />
    </div>
  );
}

export default App;
