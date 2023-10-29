import React from "react";
import CoreConcept from "../CoreConcept/CoreConcept";
import { CORE_CONCEPTS } from "../../constant/Data";

function CoreConcepts() {
  const concept = CORE_CONCEPTS.map((concept, index) => (
    <CoreConcept
      key={index}
      title={concept.title}
      description={concept.description}
      image={concept.image}
    />
  ));
  CoreConcepts;
  return (
    <section id="core-concepts">
      <h2>Core concept</h2>
      <ul>{concept}</ul>
    </section>
  );
}

export default CoreConcepts;
