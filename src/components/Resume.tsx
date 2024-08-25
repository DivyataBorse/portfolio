import { Document, Page, pdfjs } from "react-pdf";
import useDimensions from "../hooks/useDimensions";
import resume from "./../assets/DivyataBorse.pdf";
import Navbar from "./Navbar";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const Resume = () => {
  const { width: windowWidth } = useDimensions();
  const getWidth = (windowWidth: number) => {
    if (windowWidth < 500) {
      return windowWidth - 20;
    } else if (windowWidth > 500 && windowWidth < 700) {
      return windowWidth - 100;
    } else {
      return 600;
    }
  };
  return (
    <>
      <Navbar isResume />
      <div className="mt-20 mb-10 text-center">
        <h3 className="text-4xl font-semibold">
          <span className="text-cyan-600">Resume</span>
        </h3>
      </div>
      <div className="flex justify-center overflow-hidden bg-backround">
        <Document
          file={resume}
          className={"w-fit text-center rounded overflow-hidden"}
        >
          <Page
            pageNumber={1}
            renderAnnotationLayer={false}
            renderTextLayer={false}
            width={getWidth(windowWidth)}
          />
        </Document>
      </div>
    </>
  );
};

export default Resume;
