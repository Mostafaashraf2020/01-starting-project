import React from "react"; // Make sure to import React if you're using JSX
import { useState } from "react";
import { EXAMPLES } from "./constant/Data.js";

import CoreConcept from "./components/CoreConcept/CoreConcept";
import Header from "./components/Header/Header";
import TabComponent from "./components/TabComponent/TabComponent";
import { CORE_CONCEPTS } from "./constant/Data";

function App() {
  const [selectedTopics, setSelectedTopics] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopics(selectedButton);
    console.log(selectedButton);
  }
  const concept = CORE_CONCEPTS.map((concept, index) => (
    <CoreConcept
      key={index}
      title={concept.title}
      description={concept.description}
      image={concept.image}
    />
  ));

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core concept</h2>
          <ul>{concept}</ul>
        </section>
        <section id="examples">
          <h2>Example</h2>
          <menu>
            <TabComponent
              isSelected={selectedTopics === "components"}
              onSelect={() => handleSelect("components")}
            >
              Component
            </TabComponent>
            <TabComponent
              isSelected={selectedTopics === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabComponent>
            <TabComponent
              isSelected={selectedTopics === "props"}
              onSelect={() => handleSelect("props")}
            >
              props
            </TabComponent>
            <TabComponent
              isSelected={selectedTopics === "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabComponent>
          </menu>
          {!selectedTopics ? (
            <p>Please selected topics</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopics].title}</h3>
              <p>{EXAMPLES[selectedTopics].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopics].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
