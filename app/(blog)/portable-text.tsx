/**
 * This component uses Portable Text to render a post body.
 *
 * You can learn more about Portable Text on:
 * https://www.sanity.io/docs/block-content
 * https://github.com/portabletext/react-portabletext
 * https://portabletext.org/
 *
 */

import {
  PortableText,
  type PortableTextComponents,
  type PortableTextBlock,
} from "next-sanity";

export default function CustomPortableText({
  className,
  value,
}: {
  className?: string;
  value: PortableTextBlock[];
}) {
  const components: PortableTextComponents = {
    block: {
      h1: ({ children }) => (
        <h1 className="mb-4 text-4xl text-white font-semibold">{children}</h1>
      ),
      h2: ({ children }) => (
        <h2 className="mb-3 mt-3 text-3xl font-semibold">{children}</h2>
      ),
      h3: ({ children }) => (
        <h3 className="mb-2 mt-2 text-xl font-semibold">{children}</h3>
      ),
      h4: ({ children }) => (
        <h4 className="mb-2 mt-2 text-lg font-semibold">{children}</h4>
      ),
      h5: ({ children }) => (
        <h5 className="mb-2 text-sm font-semibold">{children}</h5>
      ),
      h6: ({ children }) => (
        <h6 className="mb-1 text-xs font-semibold">{children}</h6>
      ),
      blockquote: ({ children }) => (
        <blockquote className="border-l-4 border-solid border-white pl-4"><p>{children}</p></blockquote>
      ),
    },
    marks: {
      link: ({ children, value }) => {
        return (
          <a href={value?.href} rel="noreferrer noopener">
            {children}
          </a>
        );
      },
    },
  };

  return (
    <div className={["prose", className].filter(Boolean).join(" ")}>
      <PortableText components={components} value={value} />
    </div>
  );
}
