import React from "react";

const PageHeader = ({ title, children, ...props }) => (
  <header className="intro" {...props}>
    <div className="container">
      <h1>{title}</h1>
      <p>{children}</p>
    </div>
  </header>
);

const SectionHeader = ({ id, title, children, ...props }) => (
  <header className="section__header" {...props}>
    <h2 className="section__title" id={id}>
      {title}
    </h2>
    {children && <p>{children}</p>}
  </header>
);

export { PageHeader, SectionHeader };
