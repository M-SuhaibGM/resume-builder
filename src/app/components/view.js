import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Cvmodel from './Cvmodel';


const ResumePreview = ({ img, cvData }) => {
    const resumeRef = useRef(); // Reference to the resume element

    // Function to download the resume as PDF
    const downloadPDF = async () => {
        const element = resumeRef.current; // The resume HTML element
        const canvas = await html2canvas(element, { scale: 2 }); // Render the HTML to canvas
        const imgData = canvas.toDataURL('image/png'); // Convert canvas to image

        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'px',
            format: [canvas.width, canvas.height], // Use canvas dimensions
        });

        pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height); // Add image to PDF
        pdf.save('resume.pdf'); // Save the PDF
    };


    return (

        <div >
            <Cvmodel img={img} cvData={cvData} resumeRef={resumeRef} downloadPDF={downloadPDF} />
        </div>
    );
};

export default ResumePreview;
