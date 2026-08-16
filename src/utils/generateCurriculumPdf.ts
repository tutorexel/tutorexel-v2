import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

interface Topic {
  name: string;
  description: string;
}

interface TermData {
  title: string;
  topics: Topic[];
}

interface SubjectData {
  pageTitle: string;
  term1: TermData;
  term2: TermData;
  term3: TermData;
  term4: TermData;
}

export function generateCurriculumPdf(
  yearLabel: string,
  subjectLabel: string,
  data: SubjectData
) {
  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
  const pageWidth = doc.internal.pageSize.getWidth();

  // Brand colours
  const orange = [255, 107, 53] as const;
  const darkBlue = [9, 29, 50] as const;

  // ── Header bar ──
  doc.setFillColor(...orange);
  doc.rect(0, 0, pageWidth, 28, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.setTextColor(255, 255, 255);
  doc.text("TutorExel", 14, 12);
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text("www.tutorexel.com", 14, 20);

  // ── Title ──
  doc.setTextColor(...darkBlue);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.text(`${yearLabel} ${subjectLabel} Curriculum`, 14, 42);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(100, 100, 100);
  doc.text("Complete curriculum overview aligned with the Australian Curriculum", 14, 50);

  let yPos = 58;

  const terms: (keyof Pick<SubjectData, "term1" | "term2" | "term3" | "term4">)[] = [
    "term1",
    "term2",
    "term3",
    "term4",
  ];
  const termLabels = ["Term 1", "Term 2", "Term 3", "Term 4"];

  terms.forEach((termKey, termIdx) => {
    const term = data[termKey];
    if (!term || !term.topics) return;

    // Check if we need a new page (if less than 40mm left)
    if (yPos > 240) {
      doc.addPage();
      yPos = 20;
    }

    // Term heading
    doc.setFillColor(...orange);
    doc.roundedRect(14, yPos, pageWidth - 28, 10, 2, 2, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.setTextColor(255, 255, 255);
    doc.text(`${termLabels[termIdx]}: ${term.title}`, 18, yPos + 7);
    yPos += 14;

    // Table of topics
    const tableData = term.topics.map((topic, i) => [
      String(termIdx * 10 + i + 1).padStart(2, "0"),
      topic.name,
      topic.description,
    ]);

    autoTable(doc, {
      startY: yPos,
      head: [["#", "Topic", "What We Cover"]],
      body: tableData,
      margin: { left: 14, right: 14 },
      styles: {
        fontSize: 8.5,
        cellPadding: 3,
        lineColor: [220, 220, 220],
        lineWidth: 0.2,
      },
      headStyles: {
        fillColor: [...darkBlue],
        textColor: [255, 255, 255],
        fontStyle: "bold",
        fontSize: 9,
      },
      columnStyles: {
        0: { cellWidth: 10, halign: "center" },
        1: { cellWidth: 45, fontStyle: "bold" },
        2: { cellWidth: "auto" },
      },
      alternateRowStyles: { fillColor: [248, 248, 248] },
      didDrawPage: () => {
        // Footer on each page
        doc.setFontSize(8);
        doc.setTextColor(150, 150, 150);
        doc.text(
          `${yearLabel} ${subjectLabel} Curriculum – TutorExel | www.tutorexel.com | +61 470-330-548`,
          pageWidth / 2,
          doc.internal.pageSize.getHeight() - 8,
          { align: "center" }
        );
      },
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    yPos = (doc as any).lastAutoTable.finalY + 10;
  });

  // ── Final CTA ──
  if (yPos > 250) {
    doc.addPage();
    yPos = 20;
  }

  doc.setFillColor(245, 245, 245);
  doc.roundedRect(14, yPos, pageWidth - 28, 24, 3, 3, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(...darkBlue);
  doc.text("Ready to get started?", 18, yPos + 9);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(100, 100, 100);
  doc.text(
    "Book a free trial at www.tutorexel.com/free-trial or call +61 470-330-548",
    18,
    yPos + 17
  );

  // Save
  const filename = `TutorExel-${yearLabel.replace(" ", "")}-${subjectLabel}-Curriculum.pdf`;
  doc.save(filename);
}
