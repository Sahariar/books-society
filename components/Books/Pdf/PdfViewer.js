import { useState } from "react";
import { Document, Page ,pdfjs } from "react-pdf";
// import default react-pdf entry
// import pdf worker as a url, see `next.config.js` and `pdf-worker.js`

pdfjs.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js';;


const PdfViewer = ({pdfLink}) => {
  const [numPages, setNumPages] = useState(null);
  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }
  return (
    <div>
      <div>
        <Document file={pdfLink} onLoadSuccess={onDocumentLoadSuccess} onLoadError={console.error}>
          {Array.from({ length: numPages }, (_, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              renderAnnotationLayer={false}
              renderTextLayer={false}
            />
          ))}
        </Document>
      </div>
    </div>
  );
};

export default PdfViewer;