const projectNumberIndexPage = document.getElementsByClassName(
  "stdes__num-of-projects"
)[0];

const DOMParserFunction = (text) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(text, "text/html");
  return doc.body;
};
fetch("./details.html")
  .then((response) => response.text())
  .then((text) => {
    const documentParsed = DOMParserFunction(text);
    const ATagFetched = documentParsed.getElementsByClassName("details--links");
    projectNumberIndexPage.innerHTML = ATagFetched.length + " ";
  });
