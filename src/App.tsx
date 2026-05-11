import { useState, useEffect, useRef, MouseEvent, TouchEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Wind, 
  Droplets, 
  Trees, 
  ThermometerSun, 
  AlertTriangle,
  Globe,
  Leaf,
  ArrowRightLeft,
  Quote
} from 'lucide-react';

// --- Types ---
interface SlideProps {
  isActive: boolean;
}

// --- Components ---

const SandParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-orange-200/20 rounded-full"
          initial={{ 
            x: Math.random() * 100 + '%', 
            y: Math.random() * 100 + '%',
            scale: Math.random() * 0.5 + 0.2,
            opacity: Math.random() * 0.5
          }}
          animate={{ 
            x: ['-10%', '110%'],
            y: ['0%', (Math.random() - 0.5) * 100 + '%']
          }}
          transition={{ 
            duration: Math.random() * 10 + 10, 
            repeat: Infinity, 
            ease: "linear",
            delay: -Math.random() * 20
          }}
          style={{ width: '4px', height: '4px' }}
        />
      ))}
    </div>
  );
};

const TitleSlide = ({ isActive }: SlideProps) => (
  <div className="flex flex-col items-center justify-center h-full text-center px-4 relative">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isActive ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
      className="z-10"
    >
      <h1 className="text-8xl md:text-[12rem] font-bold text-[#D2691E] tracking-tighter mb-4 uppercase drop-shadow-2xl">
        Цөлжилт
      </h1>
      <motion.div 
        initial={{ opacity: 0, width: 0 }}
        animate={isActive ? { opacity: 1, width: "100%" } : {}}
        transition={{ delay: 0.5, duration: 1 }}
        className="h-1 bg-[#D2691E] mb-6"
      />
      <p className="text-2xl md:text-4xl text-[#F5DEB3] font-light tracking-widest uppercase">
        Газрын доройтлын өсөн нэмэгдэж буй хямрал
      </p>
    </motion.div>
    
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1547234935-80c7145ec969?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30 grayscale contrast-125" />
    <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F05] via-transparent to-transparent" />
  </div>
);

const DefinitionSlide = ({ isActive }: SlideProps) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full max-w-6xl mx-auto px-6">
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={isActive ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-5xl font-bold text-[#F4A460] mb-8 border-l-8 border-[#D2691E] pl-6">
        Цөлжилт гэж юу вэ?
      </h2>
      <p className="text-xl text-[#F5DEB3] leading-relaxed mb-8">
        Цөлжилт гэдэг нь хуурай, хагас хуурай, чийг багатай бүс нутагт уур амьсгалын өөрчлөлт болон хүний ​​үйл ажиллагаа зэрэг янз бүрийн хүчин зүйлийн нөлөөгөөр 
        <b> газрын доройтох</b> процессыг хэлнэ. 
      </p>
      <p className="text-xl text-[#F5DEB3] leading-relaxed">
        Энэ нь зөвхөн элсэн цөл тэлэх тухай биш, харин үржил шимтэй экосистем амьдрах боломжгүй хуурай газар болон хувирах үйл явц юм.
      </p>
    </motion.div>
    
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isActive ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 1, delay: 0.2 }}
      className="relative group"
    >
      <div className="absolute -inset-4 bg-[#D2691E]/20 blur-xl rounded-full" />
      <img 
        src="https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?auto=format&fit=crop&q=80" 
        className="rounded-2xl shadow-2xl relative border-2 border-[#D2691E]/30"
        alt="Dry Land"
      />
      <div className="grid grid-cols-2 gap-4 mt-8">
        <div className="bg-[#4E342E] p-4 rounded-lg border-t-2 border-[#D2691E]">
          <h3 className="text-orange-400 font-bold mb-1">Шалтгаан</h3>
          <p className="text-sm text-wheat/80">Ой мод огтлолт, хэт бэлчээрлэлт</p>
        </div>
        <div className="bg-[#4E342E] p-4 rounded-lg border-t-2 border-[#D2691E]">
          <h3 className="text-orange-400 font-bold mb-1">Үр дагавар</h3>
          <p className="text-sm text-wheat/80">Үржил шимгүй хөрс, ган гачиг</p>
        </div>
      </div>
    </motion.div>
  </div>
);

const CausesSlide = ({ isActive }: SlideProps) => {
  const causes = [
    { icon: <ThermometerSun size={32} />, title: "Уур амьсгал", desc: "Дэлхийн дулаарал, температурын өсөлт" },
    { icon: <Trees size={32} />, title: "Ой мод огтлолт", desc: "Моддыг ихээр устгаж хөрсийг хамгаалалтгүй болгох" },
    { icon: <Wind size={32} />, title: "Хэт бэлчээрлэлт", desc: "Малын тоо толгой бэлчээрийн даацаас хэтрэх" },
    { icon: <Droplets size={32} />, title: "Усны буруу хэрэглээ", desc: "Усны нөөцийг зохисгүй ашиглах" },
    { icon: <AlertTriangle size={32} />, title: "Буруу тариалан", desc: "Хөрсийг ядрааж, үржил шимгүй болгох" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        className="text-5xl font-bold text-[#F4A460] mb-12 text-center"
      >
        Цөлжилтийн гол шалтгаанууд
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {causes.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="bg-[#3E2723]/60 backdrop-blur-md p-8 rounded-2xl border border-[#D2691E]/20 hover:border-[#D2691E]/60 transition-all group"
          >
            <div className="text-[#D2691E] mb-6 p-4 bg-[#D2691E]/10 rounded-full w-fit group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <h3 className="text-2xl font-bold text-[#F5DEB3] mb-4">{item.title}</h3>
            <p className="text-sm text-[#D2B48C]">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const NatureEffectsSlide = ({ isActive }: SlideProps) => (
  <div className="h-full flex flex-col justify-center items-center px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl w-full">
      <div className="space-y-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isActive ? { opacity: 1, x: -0 } : {}}
          className="relative overflow-hidden rounded-3xl h-64 border-2 border-red-900/30"
        >
          <img src="https://images.pexels.com/photos/36315088/pexels-photo-36315088.jpeg" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h3 className="text-3xl font-bold text-white uppercase tracking-widest">Хөрсний элэгдэл</h3>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-2 gap-8 text-center">
          <div className="p-6 border-b-4 border-red-800">
            <span className="text-4xl font-bold text-red-500">24Т</span>
            <p className="text-sm text-wheat uppercase mt-2">Тонн хөрс жил бүр алдагддаг</p>
          </div>
          <div className="p-6 border-b-4 border-red-800">
            <span className="text-4xl font-bold text-red-500">52%</span>
            <p className="text-sm text-wheat uppercase mt-2">ХАА-н газар доройтсон</p>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col justify-center">
        <h2 className="text-5xl font-bold text-[#F4A460] mb-8">Байгальд үзүүлэх нөлөө</h2>
        <ul className="space-y-6">
          {[
            "Ургамал бүрхэвч устах",
            "Хөрсний шим тэжээл алдагдах",
            "Ган гачиг болон усны хомсдол",
            "Зэрлэг амьтдын амьдрах орчин үгүй болох",
            "Шороон шуурганы давтамж ихсэх"
          ].map((text, i) => (
            <motion.li 
              key={i}
              initial={{ opacity: 0, x: 20 }}
              animate={isActive ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="flex items-center text-xl text-[#F5DEB3]"
            >
              <div className="w-2 h-2 bg-red-600 rounded-full mr-4" />
              {text}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const HumanEffectsSlide = ({ isActive }: SlideProps) => (
  <div className="bg-[#2D1B0F] h-full p-12 flex flex-col">
    <motion.h2 
      initial={{ opacity: 0 }} 
      animate={isActive ? { opacity: 1 } : {}}
      className="text-5xl font-bold text-[#F4A460] mb-12 text-center"
    >
      Хүнд үзүүлэх нөлөө
    </motion.h2>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex-1">
      {[
        { title: "Хүнсний аюулгүй байдал", count: "1.5Б", sub: "хүн нөлөөнд өртөж байна", img: "https://images.pexels.com/photos/3806764/pexels-photo-3806764.jpeg" },
        { title: "Эдийн засгийн хохирол", count: "$490Т", sub: "жил бүрийн алдагдал", img: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80" },
        { title: "Шилжилт хөдөлгөөн", count: "135М", sub: "хүн орон гэрээ орхино", img: "https://images.pexels.com/photos/33438019/pexels-photo-33438019.jpeg" }
      ].map((card, i) => (
        <motion.div
           key={i}
           initial={{ opacity: 0, y: 30 }}
           animate={isActive ? { opacity: 1, y: 0 } : {}}
           transition={{ delay: i * 0.2 }}
           className="relative group rounded-3xl overflow-hidden"
        >
          <img src={card.img} className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-110 transition-transform duration-700" />
          <div className="relative p-8 h-full flex flex-col justify-end bg-gradient-to-t from-black via-transparent">
            <span className="text-5xl font-black text-[#D2691E] mb-2">{card.count}</span>
            <h3 className="text-2xl font-bold text-white mb-2">{card.title}</h3>
            <p className="text-[#D2B48C]">{card.sub}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

const CountriesSlide = ({ isActive }: SlideProps) => (
  <div className="h-full flex flex-col items-center justify-center px-6 text-center">
    <h2 className="text-5xl font-bold text-[#F4A460] mb-6">Хамгийн их өртсөн улс орнууд</h2>
    <p className="text-[#F5DEB3] mb-12 max-w-2xl text-xl">
      Дэлхийн хуурай газрын 40 гаруй хувь нь цөлжилтөд өртөх эрсдэлтэй бөгөөд дараах бүс нутгуудад хамгийн хүнд байна.
    </p>
    
    <div className="relative flex justify-center items-center w-full max-w-4xl h-[400px]">
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isActive ? { opacity: 1, scale: 1 } : {}}
        className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-contain bg-center opacity-10 bg-no-repeat invert"
      />
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 z-10">
        {[
          { name: "Африк (Сахел)", val: "Хамгийн хүнд" },
          { name: "Монгол 🇲🇳", val: "77% газар нутаг" },
          { name: "Хятад", val: "Говь цөлийн тэлэлт" },
          { name: "Ойрхи Дорнод", val: "Усны хэт хомсдол" }
        ].map((loc, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.15 }}
            className="bg-[#D2691E]/20 p-6 rounded-2xl border border-[#D2691E]/40 backdrop-blur-sm"
          >
            <Globe className="mx-auto mb-4 text-[#D2691E]" size={40} />
            <h4 className="text-xl font-bold text-white">{loc.name}</h4>
            <p className="text-orange-300 font-medium">{loc.val}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

const SolutionsSlide = ({ isActive }: SlideProps) => (
  <div className="h-full flex flex-col justify-center px-6">
    <h2 className="text-5xl font-bold text-[#4CAF50] mb-12 text-center">Шийдлүүд: Бид юу хийж чадах вэ?</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {[
        { title: "Ойжуулалт", desc: "Мод тарьж хөрсийг бэхжүүлэх, салхинаас хамгаалах", icon: <Leaf /> },
        { title: "Тогтвортой ХАА", desc: "Бэлчээрийн менежмент болон ухаалаг тариалан", icon: <ArrowRightLeft /> },
        { title: "Усны хэмнэлт", desc: "Усалгааны дэвшилтэт систем ашиглах", icon: <Droplets /> },
        { title: "Мэдлэг олгох", desc: "Иргэдэд байгаль хамгаалах мэдлэг олгох", icon: <Globe /> },
        { title: "Хууль эрх зүй", desc: "Засгийн газрын бодлого, хяналтыг чангатгах", icon: <AlertTriangle /> },
        { title: "Нөхөн сэргээлт", desc: "Доройтсон газрыг байгалийн аргаар сэргээх", icon: <Wind /> }
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isActive ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: i * 0.1 }}
          className="flex gap-4 bg-white/5 p-6 rounded-2xl border-l-4 border-[#4CAF50] hover:bg-white/10 transition-colors"
        >
          <div className="bg-[#4CAF50]/20 p-3 rounded-lg h-fit text-[#4CAF50]">
            {item.icon}
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
            <p className="text-sm text-[#F5DEB3]/70">{item.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

const ComparisonSlide = ({ isActive }: SlideProps) => {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent | TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in e ? (e as TouchEvent).touches[0].clientX : (e as MouseEvent).clientX;
    const newPos = ((x - rect.left) / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, newPos)));
  };

  return (
    <div className="h-full flex flex-col items-center justify-center p-8">
      <h2 className="text-4xl font-bold text-[#F4A460] mb-8 uppercase tracking-widest">Өмнө ба Дараа</h2>
      
      <div 
        ref={containerRef}
        className="relative w-full max-w-5xl h-[500px] overflow-hidden rounded-3xl cursor-col-resize select-none border-4 border-[#3E2723]"
        onMouseMove={handleMouseMove}
        onTouchMove={handleMouseMove}
      >
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1509316975850-ff995eb042ad?auto=format&fit=crop&q=80" className="w-full h-full object-cover" />
          <div className="absolute bottom-10 right-10 bg-black/60 px-6 py-2 rounded-full text-white font-bold">ОДООГИЙН БАЙДАЛ</div>
        </div>
        
        <div 
          className="absolute inset-0 border-r-4 border-white z-10"
          style={{ width: `${position}%` }}
        >
          <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80" className="w-full h-full object-cover max-w-none" style={{ width: '1000px' }} />
          <div className="absolute bottom-10 left-10 bg-[#4CAF50]/60 px-6 py-2 rounded-full text-white font-bold whitespace-nowrap">БОЛОМЖИТ ИРЭЭДҮЙ</div>
        </div>
      </div>
      
      <p className="mt-6 text-[#F5DEB3] text-lg">Хэрэв бид одооноос ажиллаж эхэлбэл байгалийг эргүүлэн авчирч чадна.</p>
    </div>
  );
};

const WarningSlide = ({ isActive }: SlideProps) => (
  <div className="h-full bg-black flex flex-col items-center justify-center text-center px-6">
    <div className="max-w-4xl relative">
      <motion.div
        initial={{ opacity: 0, scale: 2 }}
        animate={isActive ? { opacity: 0.1, scale: 1 } : {}}
        transition={{ duration: 2 }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <AlertTriangle size={400} className="text-red-900" />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.5, duration: 1 }}
        className="z-10 relative"
      >
        <Quote className="text-[#D2691E] mx-auto mb-8" size={60} />
        <h2 className="text-4xl md:text-6xl font-black text-red-700 mb-8 uppercase">Ирээдүйн Анхааруулга</h2>
        <p className="text-2xl md:text-3xl text-gray-300 italic mb-12 leading-relaxed">
          "Хөрс бол амьдралын үндэс. Хөрс үгүй бол хүн төрөлхтөн үгүй."
        </p>
        <div className="bg-red-900/20 border-2 border-red-900 p-8 rounded-2xl">
          <p className="text-xl text-red-500 font-bold mb-4 uppercase tracking-tighter">Сэрэмжлүүлэг</p>
          <p className="text-[#F5DEB3]">
            2050 он гэхэд дэлхийн хүн амын 75% нь хуурайшилт, цөлжилттэй нүүр тулна. Одоо л арга хэмжээ авах цаг.
          </p>
        </div>
      </motion.div>
    </div>
  </div>
);

const ConclusionSlide = ({ isActive }: SlideProps) => (
  <div className="h-full flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80')] bg-cover bg-center brightness-[0.3]" />
    
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isActive ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 1 }}
      className="z-10 max-w-4xl"
    >
      <Leaf className="text-[#4CAF50] mx-auto mb-8" size={80} />
      <h2 className="text-6xl font-bold text-white mb-6 uppercase">Бид хамтдаа чадна</h2>
      <p className="text-3xl text-[#F5DEB3] mb-12 font-light">Байгалиа хайрлаж, ирээдүй хойчдоо өвлүүлэн үлдээцгээе.</p>
      
      <div className="text-4xl font-black text-[#4CAF50] tracking-widest bg-white/5 py-4 px-12 rounded-full border-2 border-[#4CAF50]/30 backdrop-blur-md">
        БИДНИЙ ИРЭЭДҮЙ БИДНИЙ ГАРТ
      </div>
      
      <p className="mt-20 text-[#D2B48C] font-semibold text-lg">© 2026 Цөлжилттэй тэмцэх аян</p>
    </motion.div>
  </div>
);

// --- Main Presentation Shell ---

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    <TitleSlide isActive={true} />,
    <DefinitionSlide isActive={true} />,
    <CausesSlide isActive={true} />,
    <NatureEffectsSlide isActive={true} />,
    <HumanEffectsSlide isActive={true} />,
    <CountriesSlide isActive={true} />,
    <SolutionsSlide isActive={true} />,
    <ComparisonSlide isActive={true} />,
    <WarningSlide isActive={true} />,
    <ConclusionSlide isActive={true} />,
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="fixed inset-0 bg-[#1A0F05] text-[#F5DEB3] font-sans selection:bg-[#D2691E] selection:text-white overflow-hidden">
      <SandParticles />
      
      {/* Slide Container */}
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, filter: 'blur(10px)' }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="w-full h-full"
          >
            {/* Clone the element and pass the actual isActive state properly if we were using a list of components, 
                but for simplicity we just pass true and let the transition handle visibility */}
            {slides[currentSlide]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-0 right-0 z-50 flex justify-between items-center px-12 pointer-events-none">
        <div className="flex gap-4 pointer-events-auto">
          <button 
            onClick={prevSlide}
            className="p-4 bg-white/5 backdrop-blur-md rounded-full border border-white/10 hover:bg-white/20 transition-all text-white disabled:opacity-30"
          >
            <ChevronLeft size={32} />
          </button>
          <button 
            onClick={nextSlide}
            className="p-4 bg-white/5 backdrop-blur-md rounded-full border border-white/10 hover:bg-white/20 transition-all text-white"
          >
            <ChevronRight size={32} />
          </button>
        </div>
        
        {/* Progress Dots */}
        <div className="flex gap-3 pointer-events-auto">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2 transition-all duration-500 rounded-full ${
                currentSlide === i ? 'w-12 bg-[#D2691E]' : 'w-2 bg-white/20'
              }`}
            />
          ))}
        </div>

        <div className="text-white/50 font-mono text-sm tracking-widest hidden md:block">
          {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </div>
      </div>

      {/* Modern Overlay Gradient */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_200px_rgba(0,0,0,0.8)]" />
    </div>
  );
}
