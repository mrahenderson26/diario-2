import { useState } from "react";

export default function Accordion({ items = [], defaultOpen, flush = false }) {
  const [openId, setOpenId] = useState(defaultOpen ?? null);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const accordionClasses = ["accordion", flush && "accordion-flush"]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={accordionClasses}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div className="accordion-item" key={item.id}>
            <h2 className="accordion-header">
              <button
                className={`accordion-button${isOpen ? "" : " collapsed"}`}
                type="button"
                onClick={() => toggle(item.id)}
                aria-expanded={isOpen}
              >
                {item.title}
              </button>
            </h2>
            <div
              className={`accordion-collapse collapse${isOpen ? " show" : ""}`}
            >
              <div className="accordion-body">{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
