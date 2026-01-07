import { memo } from "react";

const DividerQuote = memo(function DividerQuote({ text }) {
  return (
    <div className="divider-wrapper">
      <div className="container">
        <p className="divider-quote">{text}</p>
      </div>
    </div>
  );
});

export default DividerQuote;
