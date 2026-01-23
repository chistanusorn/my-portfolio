import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center">
        
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left space-y-6 z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold tracking-wide">
            นักศึกษาวิทยาการคอมพิวเตอร์
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-slate-900">
            Every line is a responsibility every work is an honor <br />
            {/* ส่วนที่เป็น Animation พิมพ์ข้อความ */}
            <span className="text-blue-600">
              <TypeAnimation
                sequence={[
                  'Flawless results begin with unwavering intent', 1000,
                  'Aim for the goal with elegance', 1000,
                  'Turn limits into possibilities', 1000,
                  'Casting magic to build a new world with code', 2000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                cursor={true}
              />
            </span>
          </h1>
          <p className="text-lg text-slate-600 md:w-3/4 leading-relaxed">
            สวัสดีครับผม คริสตนุสรณ์ มหาวีระตระกูล เป็นนักศึกษาในสาขาวิชาวิทยาการคอมพิวเตอร์มีความสนใจในการเรียนรู้ทักษะหลากหลาย เพื่อพัฒนาตัวเองให้สามารถทำงานได้หลายรูปแบบ
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="#projects" className="px-8 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              ดูผลงาน
            </a>
            <a href="#contact" className="px-8 py-3 rounded-full border border-slate-300 text-slate-700 font-semibold hover:bg-white hover:border-slate-400 transition-all">
              ติดต่อฉัน
            </a>
          </div>
        </div>

        {/* Image / Graphic */}
        <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center relative">
          {/* พื้นหลังแสงฟุ้งๆ */}
          <div className="absolute w-64 h-64 md:w-96 md:h-96 bg-gradient-to-tr from-blue-400 to-indigo-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          
          {/* รูปภาพที่มี Animation ลอยตัว (animate-float) */}
          <img 
            src="https://scontent-bkk1-1.xx.fbcdn.net/v/t39.30808-6/487925231_3855496798021860_3958984304276536089_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHV0agd0w_70KVe420FsNd9fksWl5Y99Ol-SxaXlj306SiGmsUKCU3gac2kjRBzrc_ouY7FYw1fgasqmuu-cih8&_nc_ohc=qZNfAWhuxCUQ7kNvwGvYiMM&_nc_oc=Adk7Ui6cy0BbySgxDLpz85e8mHV0yQN6MJ6jgEXHaBuRTa1AF_8Hnqhc7GMIOkcbfuM&_nc_zt=23&_nc_ht=scontent-bkk1-1.xx&_nc_gid=aVoJT39D_jD7oSNtAAsRfw&oh=00_AfoQb-C078uQ4D9-2QKxn4GTNKbP8GBfey4C2wEsWQJaKw&oe=6978F5FA" 
            alt="Profile" 
            className="relative rounded-2xl shadow-2xl border-4 border-white rotate-3 hover:rotate-0 transition duration-500 w-64 md:w-80 animate-float"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;