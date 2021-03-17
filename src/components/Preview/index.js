import { Document, Page, pdfjs } from 'react-pdf';
import './styles.css'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Preview = ({ certificate, isLoading }) => {

  return (
    <div className="pdf">
      {!certificate && (
        <div className="loader">
          {isLoading ? 'Making...' : 'Make one and see!'}
        </div>
      )}
      {certificate && (
        <Document
          file={certificate}
          loading="Loading..."
        >
          <Page pageNumber={1} />
        </Document>
      )}
    </div>
  )
}

export default Preview
