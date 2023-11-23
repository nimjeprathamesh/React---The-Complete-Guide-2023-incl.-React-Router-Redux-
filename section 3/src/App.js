import { useState } from 'react';
import './App.css';
import CoreConcept from './components/CoreConcepts.js';
import Header from './components/Header/Header.js';
import TabButton from './components/TabButton.js';
import { CORE_CONCEPTS } from './data-with-examples.js';
import { EXAMPLES } from './tab_content.js';

function App() {
  const [selectedTopic, setselectedTopic]= useState();

  function handleClick(selectedButton) {
    setselectedTopic(selectedButton);
  }

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic && EXAMPLES[selectedTopic.toLowerCase()]) {
    const topic = EXAMPLES[selectedTopic.toLowerCase()];
    tabContent = (<div id = "tab-content">
      <h3>{topic.title}</h3>
      <p>{topic.description}</p>
      <pre>
        <code>
          {topic.code}
        </code>
      </pre>
    </div>
  );
}

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title} {...conceptItem} />)}
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected = {selectedTopic === 'Components'} onSelect = {() => handleClick('Components')}>Components</TabButton>
            <TabButton isSelected = {selectedTopic === 'JSX'} onSelect = {() => handleClick('JSX') }>JSX</TabButton>
            <TabButton isSelected = {selectedTopic === 'Props'} onSelect = {() => handleClick('Props')}>Props</TabButton>
            <TabButton isSelected = {selectedTopic === 'State'} onSelect = {() => handleClick('State')}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;