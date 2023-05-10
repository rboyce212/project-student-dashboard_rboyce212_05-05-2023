import Accordion from "react-bootstrap/Accordion";
// import AccordionTable from "./AccordionTable";

function AccordionContainer() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header> Show More...</Accordion.Header>
        <Accordion.Body>{/* <AccordionTable /> */}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AccordionContainer;
