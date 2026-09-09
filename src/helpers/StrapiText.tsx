import React from "react";

const StrapiRichText = ({ content = [] }) => {
  const renderText = (children = []) => {
    return children.map((child, index) => {
      let text = child.text || "";

      if (child.bold) {
        text = <strong>{text}</strong>;
      }

      if (child.italic) {
        text = <em>{text}</em>;
      }

      if (child.underline) {
        text = <u>{text}</u>;
      }

      if (child.strikethrough) {
        text = <s>{text}</s>;
      }

      return (
        <React.Fragment key={index}>
          {text}
        </React.Fragment>
      );
    });
  };

  return (
    <>
      {content.map((block, index) => {
        if (block.type === "paragraph") {
          const text = block.children
            ?.map((child) => child.text || "")
            .join("");

          // Empty paragraph = line break
          if (!text.trim()) {
            return <br key={index} />;
          }

          return (
            <p key={index}>
              {renderText(block.children)}
            </p>
          );
        }

        if (block.type === "heading") {
          return (
            <h2 key={index}>
              {renderText(block.children)}
            </h2>
          );
        }

        if (block.type === "quote") {
          return (
            <blockquote key={index}>
              {renderText(block.children)}
            </blockquote>
          );
        }

        return null;
      })}
    </>
  );
};

export default StrapiRichText;