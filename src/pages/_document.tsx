import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="uk" className="dark text-foreground bg-background">
      <Head />
      <body className="container mx-auto">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
