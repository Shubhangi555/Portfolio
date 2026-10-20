import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiDownload } from "react-icons/fi";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import pdf from "../../Assets/Shubhangi.Bhosale_Resume.pdf";
import { profile } from "../../data";

// Serve the worker from our own bundle (version-locked to the installed pdfjs-dist)
// instead of a CDN, which can be blocked by networks/extensions and fail at runtime.
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

function ResumeNew() {
  const sheetRef = useRef(null);
  const [width, setWidth] = useState(800);
  const [pages, setPages] = useState(1);
  const [failed, setFailed] = useState(false);

  // Size the PDF to its container rather than guessing from window width.
  useEffect(() => {
    const el = sheetRef.current;
    if (!el) return undefined;
    const measure = () => setWidth(Math.min(el.clientWidth, 900));
    measure();
    if (!("ResizeObserver" in window)) {
      window.addEventListener("resize", measure);
      return () => window.removeEventListener("resize", measure);
    }
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const fileName = `${profile.firstName}_${profile.lastName}_Resume.pdf`;

  return (
    <section className="section resume">
      <div className="resume__head">
        <div className="resume__crumb">
          <Link to="/" className="link-u">
            <FiArrowLeft aria-hidden="true" /> Index
          </Link>
        </div>
        <h1 className="resume__title">
          Résumé <em>/ CV</em>
        </h1>
        <a className="btn btn--solid" href={pdf} download={fileName}>
          Download PDF <FiDownload aria-hidden="true" />
        </a>
      </div>

      <div className="resume__sheet" ref={sheetRef}>
        {failed ? (
          <p className="resume__fallback">
            The preview couldn't load.{" "}
            <a href={pdf} target="_blank" rel="noopener noreferrer" className="link-u">
              Open the PDF directly
            </a>
            .
          </p>
        ) : (
          <Document
            file={pdf}
            onLoadSuccess={({ numPages }) => setPages(numPages)}
            onLoadError={() => setFailed(true)}
            loading={<div className="resume__loading">Rendering pages…</div>}
          >
            {Array.from({ length: pages }, (_, i) => (
              <Page
                key={i}
                pageNumber={i + 1}
                width={width}
                renderTextLayer={false}
                className="resume__page"
              />
            ))}
          </Document>
        )}
      </div>
    </section>
  );
}

export default ResumeNew;
