import React, { useState } from "react";
import TabComponent from "../TabComponent/TabComponent";
import { EXAMPLES } from "../../constant/Data";
import NameSection from "../NameSection/NameSection";

function Examples() {
  const [selectedTopics, setSelectedTopics] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopics(selectedButton);
    console.log(selectedButton);
  }
  return (
    <NameSection title="Examples" id="examples">
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
        <p>Please select a topic</p>
      ) : (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopics].title}</h3>
          <p>{EXAMPLES[selectedTopics].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopics].code}</code>
          </pre>
        </div>
      )}
    </NameSection>
  );
}

export default Examples;
