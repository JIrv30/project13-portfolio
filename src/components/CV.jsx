import { useEffect, useState, Suspense, React } from "react";
import { Container, Row } from "react-bootstrap";
import Ratio from 'react-bootstrap/Ratio'
import Button from "react-bootstrap/Button";
import Particle from "./Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs} from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

import pdf from '../assets/Resume.pdf'



export default function CV () {
  const [width, setWidth] = useState(1200)
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  
  useEffect(()=>{
    setWidth(window.innerWidth)
  },[])
  
  function onDocumentLoadSuccess ({ numPages }) {
    setNumPages(numPages)
    setPageNumber(1)
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset)
  }

  function previousPage () {
    changePage (-1)
  }

  function nextPage () {
    changePage(1)
  }

  return (
    <div>
    <Container fluid className="resume-section">
      <Particle />
      <Row style={{ justifyContent: "center", position: "relative" }}>
        <Button
          variant="primary"
          href={pdf}
          target="_blank"
          style={{ maxWidth: "250px" }}
        >
          <AiOutlineDownload />
          &nbsp;Download CV
        </Button>
      </Row>

      <Row className="resume" style={{justifyContent: 'ceter', position: 'relative'}}>
        <Ratio>
          <iframe src={pdf} />
        </Ratio>
      </Row>



      <Row style={{justifyContent: 'center', position: 'relative'}}>
        <Button
          variant="primary"
          href={pdf}
          target="_blank"
          style={{ maxWidth: "250px" }}
        >
          <AiOutlineDownload />
          &nbsp;Download CV
        </Button>
      </Row>
    </Container>
  </div>
  )
}
