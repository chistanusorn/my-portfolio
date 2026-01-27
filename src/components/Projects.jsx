import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// ลบ import ReactPlayer ออกไปเลยค่ะ เราไม่ใช้แล้ว

const Projects = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  // =========================================================
  // 1. ข้อมูล Software Showcase (Video Lists)
  // =========================================================
  const softwareProjects = [
    {
      id: 1,
      title: "The Quil",
      tech: ['OCR', 'Google Clound API'],
      desc: "แอพพลิเคชั่นสำหรับแปลภาษาบนหน้าจอคอมพิวเตอร์แบบเรียลไทม์ โดยใช้เทคโนโลยี OCR (Optical Character Recognition) เพื่อดึงข้อความจากภาพหน้าจอและแปลเป็นภาษาที่ผู้ใช้ต้องการ",
      videoUrl: "https://www.youtube.com/embed/uAOwynOiWSQ", 
    },
    {
      id: 2,
      title: "ตรวจสอบสอบไวยากรด้วย AI and NLP",
      tech: ['NLP', 'AI'],
      desc: "แอพพลิเคชั่นตรวจสอบไวยากรณ์ภาษาไทยโดยใช้เทคโนโลยีปัญญาประดิษฐ์ (AI) และการประมวลผลภาษาธรรมชาติ (NLP) เพื่อช่วยให้ผู้ใช้สามารถเขียนข้อความที่ถูกต้องตามหลักไวยากรณ์",
      videoUrl: "https://www.youtube.com/embed/jkhVQjdpJR0", 
    },
  ];

  // =========================================================
  // 2. ข้อมูล Certificates 
  // =========================================================
  const certificateList = [
    {
      id: 1,
      title: "5 Game Changing Programme", 
      issuer: "Møller Institute, University of Cambridge", 
      date: "March 2023", 
      desc: "เข้าร่วมอบรมออนไลน์ในหัวข้อการประยุกต์ใช้ 5 เทคโนโลยีเปลี่ยนโลก (Game Changing Technologies) และได้รับใบรับรองจาก Churchill College", 
      image: "/images/moller-cert.jpg"
    },
    {
      id: 2,
      title: "5 Game Changing", 
      issuer: "Bitkub World Tech", 
      date: "February 2023", 
      desc: "เข้าร่วมโครงการ 5 Game Changing ของ Bitkub World Tech เพื่อเรียนรู้เกี่ยวกับเทคโนโลยีและนวัตกรรมที่จะเข้ามาเปลี่ยนแปลงโลกอนาคต",
      image: "/images/bitkubworldtech-certificate.png"
    },
    {
      id: 3,
      title: "Microcontroller Programming Competition",
      issuer: "Association of Future Thai Professionals", 
      date: "February 2022", 
      desc: "รางวัลเหรียญทองแดง ทักษะการเขียนโปรแกรมควบคุมอุปกรณ์ (Microcontroller) ระดับ ปวช. การประชุมวิชาการองค์การนักวิชาชีพในอนาคตแห่งประเทศไทย",
      image: "/images/Microcontroller Programming.jpg"
    },
    {
      id: 4,
      title: "National ABU Robot Contest", 
      issuer: "Office of the Vocational Education Commission", 
      date: "September 2021", 
      desc: "ได้รับรางวัลระดับเหรียญทองแดง ในการคัดเลือกหุ่นยนต์ ABU อาชีวศึกษา (งานสุดยอดนวัตกรรมหุ่นยนต์อาชีวศึกษา ระดับชาติ) ในนามทีมลูกพระเจ้าตาก วิทยาลัยเทคนิคตาก",
      image: "/images/abu.jpg"
    },
  ];

  // =========================================================
  // 3. ข้อมูล Academic Records
  // =========================================================
  const academicRecords = [
    { code: "CS111", subject: "Fundamental programming", grade: "B+" },
    { code: "CS112", subject: "Information and communication technology", grade: "B+" },
    { code: "CS114", subject: "Computer organization and architecture", grade: "B" },
    { code: "CS212", subject: "Programmer and problem solving", grade: "A" },
    { code: "CS141", subject: "Introduction to computer network", grade: "A" },
    { code: "CS221", subject: "Object oriented analysis and design", grade: "B+" },
    { code: "CS222", subject: "Data structure and algorithm", grade: "B+" },
    { code: "CS223", subject: "Structure relational database ", grade: "B" },
    { code: "CS224", subject: "Unstructured database", grade: "B+" },
    { code: "CS225", subject: "Software engineer", grade: "B+" },
    { code: "CS231", subject: "Web programming", grade: "A" },
    { code: "CS232", subject: "Server-side system development", grade: "A" },
    { code: "CS233", subject: "Software development for mobile device", grade: "B+" },
    { code: "CS314", subject: "Principles of object oriented programming", grade: "A" },
    { code: "CS341", subject: "Cryptography and network security", grade: "A" },
    { code: "CS385", subject: "Management information system", grade: "A" },
  ];

  // ข้อมูลหัวข้อหลัก
  const items = [
    {
      id: 1,
      type: 'project',
      title: 'Software Showcase',
      desc: 'รวมผลงานการพัฒนาโปรแกรม (Video Demo)',
      image: 'https://placehold.co/600x400/3b82f6/ffffff?text=Software+Demo',
      color: 'blue'
    },
    {
      id: 2,
      type: 'certificate',
      title: 'Professional Certificates',
      desc: 'ใบประกาศนียบัตร',
      image: 'https://placehold.co/600x400/10b981/ffffff?text=Certificates',
      color: 'green'
    },
    {
      id: 3,
      type: 'academic',
      title: 'Academic Achievements',
      desc: 'ผลการเรียน',
      image: 'https://placehold.co/600x400/8b5cf6/ffffff?text=Transcript',
      color: 'purple'
    }
  ];

  // ฟังก์ชันแสดงรายละเอียด
  const renderDetail = (item) => {
    return (
      <motion.div 
        key="detail"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.5 }}
        className="w-full"
      >
        <button 
          onClick={() => setSelectedItem(null)}
          className="mb-8 flex items-center text-slate-500 hover:text-blue-600 transition group"
        >
          <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          กลับไปหน้ารวม (Back to Gallery)
        </button>

        {/* --- TYPE 1: PROJECTS (ปรับ UI แล้ว) --- */}
        {item.type === 'project' && (
          <div className="space-y-12">
             <div className="text-center mb-10">
                <h3 className="text-3xl font-bold text-slate-800">Software Showcase</h3>
             </div>
             {softwareProjects.map((project) => (
               <div key={project.id} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
                  
                  {/* ส่วนตัวเล่นวิดีโอ (YouTube Embed) - ดีไซน์ใหม่ Modern Clean */}
                  <div className="bg-slate-50 w-full py-10 px-4 flex justify-center">
                    <div className="w-full max-w-3xl aspect-video shadow-2xl rounded-xl overflow-hidden bg-black relative ring-1 ring-slate-900/5">
                        <iframe 
                            className="w-full h-full"
                            src={project.videoUrl} 
                            title={project.title}
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowFullScreen
                        ></iframe>
                    </div>
                  </div>

                  <div className="p-8 text-center">
                      <h3 className="text-2xl font-bold text-slate-800 mb-3">{project.title}</h3>
                      <p className="text-slate-600 leading-relaxed text-lg mb-4 max-w-2xl mx-auto">
                          {project.desc}
                      </p>
                      <div className="flex justify-center gap-2 flex-wrap">
                          {project.tech.map(tag => (
                              <span key={tag} className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-semibold">
                                {tag}
                              </span>
                          ))}
                      </div>
                  </div>
               </div>
             ))}
          </div>
        )}

        {/* --- TYPE 2: CERTIFICATES (เหมือนเดิม) --- */}
        {item.type === 'certificate' && (
          <div className="space-y-8">
             <div className="text-center mb-10">
                <h3 className="text-3xl font-bold text-slate-800">Professional Certificates</h3>
             </div>
             {certificateList.map((cert) => (
                <div key={cert.id} className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden flex flex-col md:flex-row hover:shadow-xl transition">
                    <div className="md:w-2/5 bg-slate-50 p-6 flex items-center justify-center">
                        <img 
                            src={cert.image} 
                            alt={cert.title} 
                            onClick={() => setPreviewImage(cert.image)} 
                            className="w-full h-full max-h-[500px] object-contain mx-auto rounded shadow-sm hover:scale-105 transition duration-500 cursor-zoom-in"
                        />
                    </div>
                    <div className="md:w-3/5 p-8 flex flex-col justify-center">
                        <h4 className="text-2xl font-bold text-slate-800 mb-2">{cert.title}</h4>
                        <p className="text-green-600 font-medium mb-2">{cert.issuer} | {cert.date}</p>
                        <p className="text-slate-600">{cert.desc}</p>
                    </div>
                </div>
             ))}
          </div>
        )}

        {/* --- TYPE 3: ACADEMIC (เหมือนเดิม) --- */}
        {item.type === 'academic' && (
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
             <div className="p-6 bg-indigo-600 text-white">
                <h3 className="text-2xl font-bold">Academic Achievements</h3>
             </div>
             <div className="p-6 overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="border-b">
                        <tr>
                            <th className="p-4 text-slate-500">Code</th>
                            <th className="p-4 text-slate-800 w-full">Subject</th>
                            <th className="p-4 text-center">Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {academicRecords.map((record, idx) => (
                            <tr key={idx} className="border-b last:border-0 hover:bg-slate-50">
                                <td className="p-4 text-slate-500 font-mono">{record.code}</td>
                                <td className="p-4 font-medium">{record.subject}</td>
                                <td className="p-4 text-center">
                                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                                        record.grade === 'A' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                                    }`}>
                                        {record.grade}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
             </div>
          </div>
        )}
      </motion.div>
    );
  };

  return (
    <section id="projects" className="py-24 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">ผลงานและความสำเร็จ</h2>
          <p className="text-slate-500 max-w-xl mx-auto">คลิกที่หัวข้อเพื่อดูรายละเอียด</p>
        </motion.div>

        {/* Main Content Area */}
        <AnimatePresence mode="wait">
            {!selectedItem ? (
              // GRID VIEW
              <motion.div 
                key="gallery"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="grid md:grid-cols-3 gap-8"
              >
                {items.map((item) => (
                  <motion.div 
                    key={item.id}
                    onClick={() => setSelectedItem(item)}
                    whileHover={{ y: -10 }} 
                    className="group bg-white rounded-2xl p-6 shadow-md border border-slate-100 cursor-pointer"
                  >
                    <div className={`h-48 rounded-xl overflow-hidden mb-6 relative bg-${item.color}-50`}>
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="text-white border border-white px-4 py-2 rounded-full text-sm">ดูรายละเอียด</span>
                        </div>
                    </div>
                    <div>
                        <span className={`text-xs font-bold uppercase tracking-wider text-${item.color}-600`}>
                            {item.type === 'project' ? 'Video Demo' : item.type}
                        </span>
                        <h3 className="text-xl font-bold text-slate-800 mt-2 mb-2 group-hover:text-blue-600 transition">
                            {item.title}
                        </h3>
                        <p className="text-slate-500 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              // DETAIL VIEW
              renderDetail(selectedItem)
            )}
        </AnimatePresence>

        {/* LIGHTBOX */}
        <AnimatePresence>
            {previewImage && (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setPreviewImage(null)}
                className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4 cursor-zoom-out backdrop-blur-sm"
            >
                <motion.img 
                src={previewImage} 
                alt="Full Preview"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()} 
                />
                
                <button 
                onClick={() => setPreviewImage(null)}
                className="absolute top-6 right-6 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full p-2 transition"
                >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
            </motion.div>
            )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Projects;