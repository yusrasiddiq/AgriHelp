import PptxGenJS from 'pptxgenjs';

// Create a new presentation
const pptx = new PptxGenJS();

// Set presentation properties
pptx.author = 'Yusra Siddiqui, Aman Meena, Vineet Bimal, Farah Khatoon';
pptx.title = 'Moving Vehicle Registration Plate Detection';
pptx.subject = 'Data Science Project';

// Define color scheme
const primaryColor = '1F4788';
const secondaryColor = '2E5C8A';
const accentColor = 'F39C12';
const textColor = '333333';

// Slide 1: Cover Slide
let slide1 = pptx.addSlide();
slide1.background = { color: primaryColor };
slide1.addText('Moving Vehicle Registration Plate Detection', {
  x: 0.5, y: 1.5, w: 9, h: 1.5,
  fontSize: 40, bold: true, color: 'FFFFFF', align: 'center'
});
slide1.addText('Oriental College Of Technology\nDepartment Of Data Science', {
  x: 0.5, y: 3.2, w: 9, h: 1,
  fontSize: 24, color: 'FFFFFF', align: 'center'
});
slide1.addText('Project by:', {
  x: 0.5, y: 4.5, w: 9, h: 0.4,
  fontSize: 18, color: accentColor, align: 'center', bold: true
});
slide1.addText('Yusra Siddiqui | Aman Meena | Vineet Bimal | Farah Khatoon', {
  x: 0.5, y: 5, w: 9, h: 0.5,
  fontSize: 16, color: 'FFFFFF', align: 'center'
});

// Slide 2: Introduction
let slide2 = pptx.addSlide();
slide2.addText('Introduction', {
  x: 0.5, y: 0.5, w: 9, h: 0.6,
  fontSize: 36, bold: true, color: primaryColor
});
slide2.addShape(pptx.ShapeType.rect, {
  x: 0.5, y: 1.2, w: 9, h: 0.05, fill: { color: accentColor }
});
slide2.addText([
  { text: '• ', options: { fontSize: 20, color: accentColor, bullet: false } },
  { text: 'Automatic Number Plate Recognition (ANPR) is a technology that uses optical character recognition to read vehicle registration plates\n\n', options: { fontSize: 18, color: textColor } },
  { text: '• ', options: { fontSize: 20, color: accentColor, bullet: false } },
  { text: 'This system detects and recognizes license plates from moving vehicles in real-time\n\n', options: { fontSize: 18, color: textColor } },
  { text: '• ', options: { fontSize: 20, color: accentColor, bullet: false } },
  { text: 'Applications include traffic monitoring, parking management, toll collection, and security surveillance\n\n', options: { fontSize: 18, color: textColor } },
  { text: '• ', options: { fontSize: 20, color: accentColor, bullet: false } },
  { text: 'Uses computer vision and machine learning techniques for accurate detection', options: { fontSize: 18, color: textColor } }
], {
  x: 0.8, y: 1.8, w: 8.5, h: 4,
  valign: 'top'
});

// Slide 3: Objectives
let slide3 = pptx.addSlide();
slide3.addText('Objectives', {
  x: 0.5, y: 0.5, w: 9, h: 0.6,
  fontSize: 36, bold: true, color: primaryColor
});
slide3.addShape(pptx.ShapeType.rect, {
  x: 0.5, y: 1.2, w: 9, h: 0.05, fill: { color: accentColor }
});
slide3.addText([
  { text: '1. ', options: { fontSize: 20, color: accentColor, bold: true } },
  { text: 'To develop an automated system for detecting vehicle registration plates from video streams\n\n', options: { fontSize: 18, color: textColor } },
  { text: '2. ', options: { fontSize: 20, color: accentColor, bold: true } },
  { text: 'To extract and recognize alphanumeric characters from detected license plates\n\n', options: { fontSize: 18, color: textColor } },
  { text: '3. ', options: { fontSize: 20, color: accentColor, bold: true } },
  { text: 'To achieve high accuracy in plate detection under various lighting and weather conditions\n\n', options: { fontSize: 18, color: textColor } },
  { text: '4. ', options: { fontSize: 20, color: accentColor, bold: true } },
  { text: 'To process real-time video feeds with minimal latency\n\n', options: { fontSize: 18, color: textColor } },
  { text: '5. ', options: { fontSize: 20, color: accentColor, bold: true } },
  { text: 'To create a scalable solution for traffic management and security applications', options: { fontSize: 18, color: textColor } }
], {
  x: 0.8, y: 1.8, w: 8.5, h: 4,
  valign: 'top'
});

// Slide 4: Problem Statement
let slide4 = pptx.addSlide();
slide4.addText('Problem Statement', {
  x: 0.5, y: 0.5, w: 9, h: 0.6,
  fontSize: 36, bold: true, color: primaryColor
});
slide4.addShape(pptx.ShapeType.rect, {
  x: 0.5, y: 1.2, w: 9, h: 0.05, fill: { color: accentColor }
});
slide4.addText('Challenges:', {
  x: 0.8, y: 1.8, w: 8.5, h: 0.4,
  fontSize: 22, bold: true, color: secondaryColor
});
slide4.addText([
  { text: '• ', options: { fontSize: 20, color: accentColor } },
  { text: 'Manual vehicle monitoring is time-consuming and error-prone\n\n', options: { fontSize: 18, color: textColor } },
  { text: '• ', options: { fontSize: 20, color: accentColor } },
  { text: 'Difficulty in tracking vehicles in high-traffic areas\n\n', options: { fontSize: 18, color: textColor } },
  { text: '• ', options: { fontSize: 20, color: accentColor } },
  { text: 'Varying plate formats, fonts, and sizes across different regions\n\n', options: { fontSize: 18, color: textColor } },
  { text: '• ', options: { fontSize: 20, color: accentColor } },
  { text: 'Environmental factors: lighting conditions, weather, camera angles\n\n', options: { fontSize: 18, color: textColor } },
  { text: '• ', options: { fontSize: 20, color: accentColor } },
  { text: 'Need for real-time processing with high accuracy', options: { fontSize: 18, color: textColor } }
], {
  x: 1.2, y: 2.3, w: 8, h: 3.5,
  valign: 'top'
});

// Slide 5: Technology Used
let slide5 = pptx.addSlide();
slide5.addText('Technology Used', {
  x: 0.5, y: 0.5, w: 9, h: 0.6,
  fontSize: 36, bold: true, color: primaryColor
});
slide5.addShape(pptx.ShapeType.rect, {
  x: 0.5, y: 1.2, w: 9, h: 0.05, fill: { color: accentColor }
});

// Left column
slide5.addShape(pptx.ShapeType.roundRect, {
  x: 0.8, y: 1.8, w: 4, h: 1.2,
  fill: { color: 'E8F4F8' }, line: { color: secondaryColor, width: 2 }
});
slide5.addText('Programming Language', {
  x: 0.8, y: 1.9, w: 4, h: 0.4,
  fontSize: 16, bold: true, color: secondaryColor, align: 'center'
});
slide5.addText('Python 3.x', {
  x: 0.8, y: 2.4, w: 4, h: 0.4,
  fontSize: 14, color: textColor, align: 'center'
});

slide5.addShape(pptx.ShapeType.roundRect, {
  x: 0.8, y: 3.2, w: 4, h: 1.2,
  fill: { color: 'E8F4F8' }, line: { color: secondaryColor, width: 2 }
});
slide5.addText('Computer Vision', {
  x: 0.8, y: 3.3, w: 4, h: 0.4,
  fontSize: 16, bold: true, color: secondaryColor, align: 'center'
});
slide5.addText('OpenCV, PIL', {
  x: 0.8, y: 3.8, w: 4, h: 0.4,
  fontSize: 14, color: textColor, align: 'center'
});

slide5.addShape(pptx.ShapeType.roundRect, {
  x: 0.8, y: 4.6, w: 4, h: 1.2,
  fill: { color: 'E8F4F8' }, line: { color: secondaryColor, width: 2 }
});
slide5.addText('OCR Engine', {
  x: 0.8, y: 4.7, w: 4, h: 0.4,
  fontSize: 16, bold: true, color: secondaryColor, align: 'center'
});
slide5.addText('Tesseract OCR, EasyOCR', {
  x: 0.8, y: 5.2, w: 4, h: 0.4,
  fontSize: 14, color: textColor, align: 'center'
});

// Right column
slide5.addShape(pptx.ShapeType.roundRect, {
  x: 5.2, y: 1.8, w: 4, h: 1.2,
  fill: { color: 'E8F4F8' }, line: { color: secondaryColor, width: 2 }
});
slide5.addText('Deep Learning', {
  x: 5.2, y: 1.9, w: 4, h: 0.4,
  fontSize: 16, bold: true, color: secondaryColor, align: 'center'
});
slide5.addText('YOLO, TensorFlow, Keras', {
  x: 5.2, y: 2.4, w: 4, h: 0.4,
  fontSize: 14, color: textColor, align: 'center'
});

slide5.addShape(pptx.ShapeType.roundRect, {
  x: 5.2, y: 3.2, w: 4, h: 1.2,
  fill: { color: 'E8F4F8' }, line: { color: secondaryColor, width: 2 }
});
slide5.addText('Image Processing', {
  x: 5.2, y: 3.3, w: 4, h: 0.4,
  fontSize: 16, bold: true, color: secondaryColor, align: 'center'
});
slide5.addText('NumPy, Matplotlib', {
  x: 5.2, y: 3.8, w: 4, h: 0.4,
  fontSize: 14, color: textColor, align: 'center'
});

slide5.addShape(pptx.ShapeType.roundRect, {
  x: 5.2, y: 4.6, w: 4, h: 1.2,
  fill: { color: 'E8F4F8' }, line: { color: secondaryColor, width: 2 }
});
slide5.addText('Development Tools', {
  x: 5.2, y: 4.7, w: 4, h: 0.4,
  fontSize: 16, bold: true, color: secondaryColor, align: 'center'
});
slide5.addText('Jupyter Notebook, VS Code', {
  x: 5.2, y: 5.2, w: 4, h: 0.4,
  fontSize: 14, color: textColor, align: 'center'
});

// Slide 6: Proposed System
let slide6 = pptx.addSlide();
slide6.addText('Proposed System', {
  x: 0.5, y: 0.5, w: 9, h: 0.6,
  fontSize: 36, bold: true, color: primaryColor
});
slide6.addShape(pptx.ShapeType.rect, {
  x: 0.5, y: 1.2, w: 9, h: 0.05, fill: { color: accentColor }
});
slide6.addText('System Architecture:', {
  x: 0.8, y: 1.6, w: 8.5, h: 0.4,
  fontSize: 20, bold: true, color: secondaryColor
});
slide6.addText([
  { text: '1. Video Input Module\n', options: { fontSize: 16, bold: true, color: primaryColor } },
  { text: '   Captures real-time video from cameras or processes recorded footage\n\n', options: { fontSize: 14, color: textColor } },
  { text: '2. Preprocessing Module\n', options: { fontSize: 16, bold: true, color: primaryColor } },
  { text: '   Enhances image quality through noise reduction, contrast adjustment, and grayscale conversion\n\n', options: { fontSize: 14, color: textColor } },
  { text: '3. License Plate Detection Module\n', options: { fontSize: 16, bold: true, color: primaryColor } },
  { text: '   Uses YOLO/CNN to detect and localize license plates in frames\n\n', options: { fontSize: 14, color: textColor } },
  { text: '4. Character Recognition Module\n', options: { fontSize: 16, bold: true, color: primaryColor } },
  { text: '   Applies OCR to extract alphanumeric characters from detected plates\n\n', options: { fontSize: 14, color: textColor } },
  { text: '5. Output Module\n', options: { fontSize: 16, bold: true, color: primaryColor } },
  { text: '   Displays results and stores data in database for further analysis', options: { fontSize: 14, color: textColor } }
], {
  x: 1, y: 2.1, w: 8.2, h: 4,
  valign: 'top'
});

// Slide 7: Workflow Diagram
let slide7 = pptx.addSlide();
slide7.addText('Workflow Diagram', {
  x: 0.5, y: 0.5, w: 9, h: 0.6,
  fontSize: 36, bold: true, color: primaryColor
});
slide7.addShape(pptx.ShapeType.rect, {
  x: 0.5, y: 1.2, w: 9, h: 0.05, fill: { color: accentColor }
});

// Create workflow boxes
const boxWidth = 3.5;
const boxHeight = 0.8;
const boxX = 3.25;

// Box 1
slide7.addShape(pptx.ShapeType.roundRect, {
  x: boxX, y: 1.6, w: boxWidth, h: boxHeight,
  fill: { color: primaryColor }, line: { color: '000000', width: 1 }
});
slide7.addText('Video Input', {
  x: boxX, y: 1.8, w: boxWidth, h: 0.4,
  fontSize: 16, bold: true, color: 'FFFFFF', align: 'center'
});

// Arrow 1
slide7.addShape(pptx.ShapeType.downArrow, {
  x: 4.75, y: 2.5, w: 0.5, h: 0.4,
  fill: { color: accentColor }
});

// Box 2
slide7.addShape(pptx.ShapeType.roundRect, {
  x: boxX, y: 3, w: boxWidth, h: boxHeight,
  fill: { color: secondaryColor }, line: { color: '000000', width: 1 }
});
slide7.addText('Image Preprocessing', {
  x: boxX, y: 3.2, w: boxWidth, h: 0.4,
  fontSize: 16, bold: true, color: 'FFFFFF', align: 'center'
});

// Arrow 2
slide7.addShape(pptx.ShapeType.downArrow, {
  x: 4.75, y: 3.9, w: 0.5, h: 0.4,
  fill: { color: accentColor }
});

// Box 3
slide7.addShape(pptx.ShapeType.roundRect, {
  x: boxX, y: 4.4, w: boxWidth, h: boxHeight,
  fill: { color: primaryColor }, line: { color: '000000', width: 1 }
});
slide7.addText('Plate Detection (YOLO)', {
  x: boxX, y: 4.6, w: boxWidth, h: 0.4,
  fontSize: 16, bold: true, color: 'FFFFFF', align: 'center'
});

// Arrow 3
slide7.addShape(pptx.ShapeType.downArrow, {
  x: 4.75, y: 5.3, w: 0.5, h: 0.4,
  fill: { color: accentColor }
});

// Box 4
slide7.addShape(pptx.ShapeType.roundRect, {
  x: 1.5, y: 5.8, w: 3, h: boxHeight,
  fill: { color: secondaryColor }, line: { color: '000000', width: 1 }
});
slide7.addText('OCR Processing', {
  x: 1.5, y: 6, w: 3, h: 0.4,
  fontSize: 14, bold: true, color: 'FFFFFF', align: 'center'
});

// Box 5
slide7.addShape(pptx.ShapeType.roundRect, {
  x: 5.5, y: 5.8, w: 3, h: boxHeight,
  fill: { color: secondaryColor }, line: { color: '000000', width: 1 }
});
slide7.addText('Data Storage', {
  x: 5.5, y: 6, w: 3, h: 0.4,
  fontSize: 14, bold: true, color: 'FFFFFF', align: 'center'
});

// Slide 8: Results and Output
let slide8 = pptx.addSlide();
slide8.addText('Results and Output', {
  x: 0.5, y: 0.5, w: 9, h: 0.6,
  fontSize: 36, bold: true, color: primaryColor
});
slide8.addShape(pptx.ShapeType.rect, {
  x: 0.5, y: 1.2, w: 9, h: 0.05, fill: { color: accentColor }
});
slide8.addText('Key Performance Metrics:', {
  x: 0.8, y: 1.6, w: 8.5, h: 0.4,
  fontSize: 20, bold: true, color: secondaryColor
});

// Metrics boxes
slide8.addShape(pptx.ShapeType.roundRect, {
  x: 1, y: 2.2, w: 3.5, h: 1,
  fill: { color: 'E8F8E8' }, line: { color: '10b981', width: 2 }
});
slide8.addText('Detection Accuracy', {
  x: 1, y: 2.3, w: 3.5, h: 0.3,
  fontSize: 14, bold: true, color: textColor, align: 'center'
});
slide8.addText('95-98%', {
  x: 1, y: 2.7, w: 3.5, h: 0.4,
  fontSize: 24, bold: true, color: '10b981', align: 'center'
});

slide8.addShape(pptx.ShapeType.roundRect, {
  x: 5.5, y: 2.2, w: 3.5, h: 1,
  fill: { color: 'E8F8E8' }, line: { color: '10b981', width: 2 }
});
slide8.addText('Recognition Accuracy', {
  x: 5.5, y: 2.3, w: 3.5, h: 0.3,
  fontSize: 14, bold: true, color: textColor, align: 'center'
});
slide8.addText('92-96%', {
  x: 5.5, y: 2.7, w: 3.5, h: 0.4,
  fontSize: 24, bold: true, color: '10b981', align: 'center'
});

slide8.addShape(pptx.ShapeType.roundRect, {
  x: 1, y: 3.5, w: 3.5, h: 1,
  fill: { color: 'FFF4E8' }, line: { color: accentColor, width: 2 }
});
slide8.addText('Processing Speed', {
  x: 1, y: 3.6, w: 3.5, h: 0.3,
  fontSize: 14, bold: true, color: textColor, align: 'center'
});
slide8.addText('25-30 FPS', {
  x: 1, y: 4, w: 3.5, h: 0.4,
  fontSize: 24, bold: true, color: accentColor, align: 'center'
});

slide8.addShape(pptx.ShapeType.roundRect, {
  x: 5.5, y: 3.5, w: 3.5, h: 1,
  fill: { color: 'FFF4E8' }, line: { color: accentColor, width: 2 }
});
slide8.addText('Response Time', {
  x: 5.5, y: 3.6, w: 3.5, h: 0.3,
  fontSize: 14, bold: true, color: textColor, align: 'center'
});
slide8.addText('< 100ms', {
  x: 5.5, y: 4, w: 3.5, h: 0.4,
  fontSize: 24, bold: true, color: accentColor, align: 'center'
});

slide8.addText('Output Features:', {
  x: 0.8, y: 4.8, w: 8.5, h: 0.3,
  fontSize: 18, bold: true, color: secondaryColor
});
slide8.addText([
  { text: '✓ ', options: { fontSize: 16, color: '10b981' } },
  { text: 'Real-time plate detection with bounding boxes\n', options: { fontSize: 14, color: textColor } },
  { text: '✓ ', options: { fontSize: 16, color: '10b981' } },
  { text: 'Extracted text with confidence scores\n', options: { fontSize: 14, color: textColor } },
  { text: '✓ ', options: { fontSize: 16, color: '10b981' } },
  { text: 'Timestamp and location data logging\n', options: { fontSize: 14, color: textColor } },
  { text: '✓ ', options: { fontSize: 16, color: '10b981' } },
  { text: 'Database integration for vehicle tracking', options: { fontSize: 14, color: textColor } }
], {
  x: 1.2, y: 5.2, w: 8, h: 1,
  valign: 'top'
});

// Slide 9: Applications & Future Scope
let slide9 = pptx.addSlide();
slide9.addText('Applications & Future Scope', {
  x: 0.5, y: 0.5, w: 9, h: 0.6,
  fontSize: 36, bold: true, color: primaryColor
});
slide9.addShape(pptx.ShapeType.rect, {
  x: 0.5, y: 1.2, w: 9, h: 0.05, fill: { color: accentColor }
});

// Applications section
slide9.addText('Current Applications:', {
  x: 0.8, y: 1.6, w: 4, h: 0.4,
  fontSize: 20, bold: true, color: secondaryColor
});
slide9.addText([
  { text: '• Traffic Management\n', options: { fontSize: 14, color: textColor } },
  { text: '• Parking Systems\n', options: { fontSize: 14, color: textColor } },
  { text: '• Toll Collection\n', options: { fontSize: 14, color: textColor } },
  { text: '• Security & Surveillance\n', options: { fontSize: 14, color: textColor } },
  { text: '• Law Enforcement\n', options: { fontSize: 14, color: textColor } },
  { text: '• Access Control\n', options: { fontSize: 14, color: textColor } },
  { text: '• Vehicle Tracking', options: { fontSize: 14, color: textColor } }
], {
  x: 1, y: 2.1, w: 4, h: 2.5,
  valign: 'top'
});

// Future scope section
slide9.addText('Future Enhancements:', {
  x: 5.2, y: 1.6, w: 4, h: 0.4,
  fontSize: 20, bold: true, color: secondaryColor
});
slide9.addText([
  { text: '• Multi-country plate recognition\n', options: { fontSize: 14, color: textColor } },
  { text: '• Night vision capabilities\n', options: { fontSize: 14, color: textColor } },
  { text: '• Mobile app integration\n', options: { fontSize: 14, color: textColor } },
  { text: '• Cloud-based processing\n', options: { fontSize: 14, color: textColor } },
  { text: '• AI-powered analytics\n', options: { fontSize: 14, color: textColor } },
  { text: '• Edge computing deployment\n', options: { fontSize: 14, color: textColor } },
  { text: '• Integration with IoT devices', options: { fontSize: 14, color: textColor } }
], {
  x: 5.4, y: 2.1, w: 4, h: 2.5,
  valign: 'top'
});

// Benefits section
slide9.addShape(pptx.ShapeType.rect, {
  x: 0.8, y: 4.8, w: 8.4, h: 0.05, fill: { color: accentColor }
});
slide9.addText('Benefits:', {
  x: 0.8, y: 5, w: 8.5, h: 0.3,
  fontSize: 18, bold: true, color: secondaryColor
});
slide9.addText('Automated monitoring • Reduced manual effort • Improved security • Cost-effective • Scalable solution', {
  x: 0.8, y: 5.4, w: 8.5, h: 0.5,
  fontSize: 14, color: textColor, align: 'center'
});

// Slide 10: Conclusion & Acknowledgement
let slide10 = pptx.addSlide();
slide10.addText('Conclusion & Acknowledgement', {
  x: 0.5, y: 0.5, w: 9, h: 0.6,
  fontSize: 36, bold: true, color: primaryColor
});
slide10.addShape(pptx.ShapeType.rect, {
  x: 0.5, y: 1.2, w: 9, h: 0.05, fill: { color: accentColor }
});

// Conclusion
slide10.addText('Conclusion:', {
  x: 0.8, y: 1.6, w: 8.5, h: 0.4,
  fontSize: 22, bold: true, color: secondaryColor
});
slide10.addText([
  { text: '• Successfully developed an automated vehicle registration plate detection system\n\n', options: { fontSize: 16, color: textColor } },
  { text: '• Achieved high accuracy in real-time plate detection and character recognition\n\n', options: { fontSize: 16, color: textColor } },
  { text: '• System demonstrates practical applicability in traffic management and security\n\n', options: { fontSize: 16, color: textColor } },
  { text: '• Scalable architecture allows for future enhancements and integrations', options: { fontSize: 16, color: textColor } }
], {
  x: 1, y: 2.1, w: 8.2, h: 2.2,
  valign: 'top'
});

// Acknowledgement
slide10.addShape(pptx.ShapeType.rect, {
  x: 0.8, y: 4.5, w: 8.4, h: 0.05, fill: { color: accentColor }
});
slide10.addText('Acknowledgement:', {
  x: 0.8, y: 4.7, w: 8.5, h: 0.4,
  fontSize: 22, bold: true, color: secondaryColor
});
slide10.addText('We would like to express our sincere gratitude to Oriental College of Technology and the Department of Data Science for providing us with the opportunity and resources to work on this project. Special thanks to our faculty advisors and mentors for their valuable guidance and support throughout the development process.', {
  x: 1, y: 5.2, w: 8.2, h: 1.2,
  fontSize: 15, color: textColor, align: 'justify'
});

// Thank you note
slide10.addShape(pptx.ShapeType.roundRect, {
  x: 3, y: 6.5, w: 4, h: 0.6,
  fill: { color: primaryColor }
});
slide10.addText('Thank You!', {
  x: 3, y: 6.6, w: 4, h: 0.4,
  fontSize: 24, bold: true, color: 'FFFFFF', align: 'center'
});

// Save the presentation
pptx.writeFile({ fileName: 'Moving_Vehicle_Registration_Plate_Detection.pptx' })
  .then(() => {
    console.log('✓ Presentation created successfully!');
    console.log('✓ File: Moving_Vehicle_Registration_Plate_Detection.pptx');
  })
  .catch((err) => {
    console.error('Error creating presentation:', err);
  });
