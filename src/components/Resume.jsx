import { useEffect, useState, Suspense, React } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "./Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs} from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

import pdf from '../assets/Resume - Google Docs.pdf'

const PDFComponent = React.lazy(()=>import('../assets/Resume - Google Docs.pdf'))

export default function Resume () {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <PDFComponent />
      </Suspense>
    </div>
  )
}