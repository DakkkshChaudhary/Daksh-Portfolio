import React from 'react';
import SkillTabs from './SkillTabs';

export default function Skills() {
  return (
    <section id="skills" className="bg-light py-5">
      <div className="container">
        <h2 className="text-center display-4 fw-bold mb-4">🧠 Skills</h2>
        <SkillTabs />
      </div>
    </section>
  );
}
