import { useState, useEffect, useRef, MouseEvent, TouchEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
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
  Quote,
  Truck,
  Megaphone,
  Users,
  Plus,
  Lamp,
  Sprout,
  Smile,
  ShoppingBag,
  Wine,
  Package,
  Key,
  Heart,
  ChevronDown,
  Award,
  BookOpen,
  Landmark,
  Star,
  Trophy,
  ListChecks,
  Handshake,
  Ticket,
  Gavel,
  Sparkles,
  RefreshCw,
  Video,
  FileText,
  ArrowRight,
  Monitor,
  Layout,
  MousePointer2
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

const TeammatesSlide = ({ isActive }: SlideProps) => {
  const teams = [
    {
      name: "Marketing Team",
      members: ["Misheel", "Udval", "Anar-Erdene", "Anhbolor", "Buyntogtoh", "Bat-Erdene", "Member 7"]
    },
    {
      name: "PPT Team",
      members: ["Setsen", "Naranbadrakh", "Uuganbayr", "Tovshinjargal", "Arvin-Erdene", "Member 6", "Member 7"]
    },
    {
      name: "Research Team",
      members: ["Anungoo", "Anujin", "Mongonzaya", "Oyunsuvd", "Member 5", "Member 6", "Member 7"]
    }
  ];

  return (
    <div className="h-full flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80')] bg-cover opacity-[0.03] grayscale pointer-events-none" />
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        className="text-5xl font-bold text-[#F4A460] mb-12 uppercase tracking-widest border-b-2 border-[#D2691E] pb-4 z-10"
      >
        Манай Баг (21 Гишүүн)
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl z-10">
        {teams.map((team, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isActive ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: idx * 0.2 }}
            className="bg-[#3E2723]/40 backdrop-blur-md rounded-3xl p-6 border border-[#D2691E]/20"
          >
            <h3 className="text-2xl font-bold text-[#D2691E] mb-6 text-center border-b border-[#D2691E]/30 pb-2">
              {team.name}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {team.members.map((member, mIdx) => (
                <div key={mIdx} className="flex flex-col items-center group">
                  <div className="w-16 h-16 rounded-full bg-[#1A0F05] border-2 border-[#D2691E]/30 flex items-center justify-center overflow-hidden mb-2 group-hover:border-[#D2691E] transition-all relative">
                    {/* Image Placeholder */}
                    <img src={`https://images.unsplash.com/photo-${1500000000000 + mIdx + (idx * 10)}?auto=format&fit=crop&q=10`} className="w-full h-full object-cover opacity-20 filter grayscale" alt={member} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-[#D2691E]/40 text-[10px] uppercase font-bold">Photo</div>
                    </div>
                  </div>
                  <span className="text-xs text-[#F5DEB3] text-center font-medium opacity-80 group-hover:opacity-100">
                    {member}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const FocusSlide = ({ isActive }: SlideProps) => (
  <div className="h-full flex flex-col items-center justify-center text-center px-6 relative">
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1444491741275-3747c53c99b4?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 grayscale" />
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isActive ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 1 }}
      className="relative p-12 overflow-hidden rounded-full border-4 border-[#D2691E]/30 backdrop-blur-sm"
    >
      <div className="absolute inset-0 bg-[#D2691E]/5 animate-pulse" />
      <h2 className="text-6xl md:text-8xl font-black text-[#F4A460] uppercase tracking-tighter z-10 relative">
        БИД ЮУНД ЧИГЛЭЖ<br />БАЙГАА ВЭ?
      </h2>
    </motion.div>
  </div>
);

const GoalsObjectivesSlide = ({ isActive }: SlideProps) => (
  <div className="h-full flex flex-col justify-center max-w-6xl mx-auto px-6 relative">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb773b09?auto=format&fit=crop&q=80')] bg-contain bg-center opacity-5 bg-no-repeat pointer-events-none" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={isActive ? { opacity: 1, x: 0 } : {}}
        className="bg-[#D2691E]/10 p-10 rounded-3xl border-l-8 border-[#D2691E]"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-[#D2691E]/20 rounded-xl text-[#D2691E]">
            <Leaf size={32} />
          </div>
          <h2 className="text-4xl font-bold text-[#F4A460]">ЗОРИЛГО</h2>
        </div>
        <p className="text-xl text-[#F5DEB3] leading-relaxed">
          Хуванцар хаягдлыг дахин ашиглаж, бохирдлоо багасгаснаар хөрсний доройтолтой нутгыг сэргээж, целжилттэй тэмцэх, дэлхийн целжилт тэдийгүй Монголын Говийг дахин амь оруулж, эрүүл, тогтвортой ирээдүйг цогцлоох.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={isActive ? { opacity: 1, x: 0 } : {}}
        className="bg-[#4CAF50]/5 p-10 rounded-3xl border-l-8 border-[#4CAF50]"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-[#4CAF50]/20 rounded-xl text-[#4CAF50]">
            <ArrowRightLeft size={32} />
          </div>
          <h2 className="text-4xl font-bold text-[#4CAF50]">ЗОРИЛТ</h2>
        </div>
        <ul className="space-y-4">
          {[
            "Сургуулийн хуванцрын хаягдлыг багасгах.",
            "Сургуулийн ойр орчимын хуванцарын хаягдлыг багасгах.",
            "Хуванцар дахин боловсруулах.",
            "Чацарганы модыг тарих."
          ].map((text, i) => (
            <li key={i} className="flex items-start gap-3 text-lg text-[#F5DEB3]">
              <div className="mt-2 w-2 h-2 bg-[#4CAF50] rounded-full shrink-0" />
              {text}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  </div>
);

const IssuesChallengesSlide = ({ isActive }: SlideProps) => (
  <div className="h-full flex flex-col justify-center max-w-7xl mx-auto px-6 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?auto=format&fit=crop&q=80')] bg-cover opacity-10 grayscale pointer-events-none" />
    <motion.h2 
      initial={{ opacity: 0, y: -20 }}
      animate={isActive ? { opacity: 1, y: 0 } : {}}
      className="text-6xl font-bold text-red-600 mb-16 text-center uppercase tracking-widest z-10"
    >
      Асуудал
    </motion.h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        className="bg-black/40 p-8 rounded-3xl border border-red-900/30 backdrop-blur-md"
      >
        <h3 className="text-2xl font-bold text-red-500 mb-6 flex items-center gap-3">
          <AlertTriangle /> Монгол улсын хуванцарын хаягдал
        </h3>
        <p className="text-lg text-[#F5DEB3] leading-relaxed">
          Монголд 3.3 сая тн хаягдал жил болгон хаягдаж байдаг. Хогийн цэгт очиж буй хаягдлын 42% буюу 1,393,753тн нь Улаанбаатар хотоос, 58% буюу 1,959,795тн хаягдал нь орон нутгаас бүртгэгджээ.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2 }}
        className="bg-black/40 p-8 rounded-3xl border border-orange-900/30 backdrop-blur-md"
      >
        <h3 className="text-2xl font-bold text-orange-500 mb-6 flex items-center gap-3">
          <ThermometerSun /> Монгол улсын цөлжилтийн хэмжээ
        </h3>
        <p className="text-lg text-[#F5DEB3] leading-relaxed">
          Монгол орны нийт нутгийн 76.9 хувь нь цөлжилт, газрын доройтолд өртсөн гэж үздэг. Түүний 56 хувь нь байгалийн үзэгдэлтэй холбоотой. Харин 44 хувь нь хүний үйл ажиллагаатай холбоотой.
        </p>
      </motion.div>
    </div>
  </div>
);

const ActivitiesSlide = ({ isActive }: SlideProps) => (
  <div className="h-full flex flex-col justify-center max-w-7xl mx-auto px-6 relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb773b09?auto=format&fit=crop&q=80')] bg-cover opacity-[0.03] grayscale pointer-events-none" />
    <motion.h2 
      initial={{ opacity: 0, y: -20 }}
      animate={isActive ? { opacity: 1, y: 0 } : {}}
      className="text-5xl font-bold text-[#F4A460] mb-12 text-center uppercase tracking-widest border-b-2 border-[#D2691E] pb-4 z-10"
    >
      Бид юу хийв
    </motion.h2>

    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 z-10">
      {[
        { 
          num: "1", 
          text: "100кг хуванцар хаягдал цуглуулж дахин боловсруулах үйлдвэрт тушаав.",
          img: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80",
          label: "Хуванцар Цуглуулалт"
        },
        { 
          num: "2", 
          text: "20 ширхэг чацарганы мод Төв аймгийн Эрдэнэ сумд тарив.",
          img: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&q=80",
          label: "Мод Тарилт"
        },
        { 
          num: "3", 
          text: "БНСУ улсын Үндэсний Ассамблейд төслөө танилцуулав.",
          img: "https://images.unsplash.com/photo-1521791136064-7986c2959213?auto=format&fit=crop&q=80",
          label: "Олон Улсын Түвшинд"
        },
        { 
          num: "4", 
          text: "200 хүүхдэд хуванцар ангилах нөлөөллын ажлын сургалт явуулав.",
          img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80",
          label: "Сургалт & Нөлөөлөл"
        }
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 50 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: i * 0.1 }}
          className="group relative h-[400px] rounded-3xl overflow-hidden border border-white/10 hover:border-[#F4A460]/50 transition-all shadow-2xl"
        >
          <img src={item.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" alt="" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-8 flex flex-col justify-end">
            <span className="text-5xl font-black text-[#F4A460] mb-2 opacity-50">{item.num}</span>
            <div className="text-xs font-bold text-[#F4A460] uppercase tracking-widest mb-2">{item.label}</div>
            <p className="text-sm text-white leading-relaxed font-light">{item.text}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

const ExpansionSlide = ({ isActive }: SlideProps) => (
  <div className="h-full flex flex-col justify-center max-w-7xl mx-auto px-6 relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187534963-565868af21f6?auto=format&fit=crop&q=80')] bg-cover opacity-[0.03] pointer-events-none" />
    <motion.h2 
      initial={{ opacity: 0, y: -20 }}
      animate={isActive ? { opacity: 1, y: 0 } : {}}
      className="text-5xl font-bold text-[#F4A460] mb-16 text-center uppercase tracking-widest z-10"
    >
      Төслөө хэрхэн өргөжүүлэх вэ?
    </motion.h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 z-10">
      {/* Left Side: Stats */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={isActive ? { opacity: 1, x: 0 } : {}}
        className="space-y-10"
      >
        <div className="p-8 bg-white/5 rounded-[2.5rem] border border-white/10 backdrop-blur-md">
          <h3 className="text-2xl font-bold text-[#D2691E] border-b border-[#D2691E]/30 pb-4 mb-6">
            Бидний зорилтот бүлгийн сошиал хэрэглээ
          </h3>
          
          <div className="space-y-8">
            <div className="flex items-center gap-10">
              <div className="text-center">
                <div className="text-6xl font-black text-white">81%</div>
                <div className="text-xs text-[#F5DEB3]/50 uppercase tracking-widest mt-1">Instagram</div>
              </div>
              <div className="text-center border-l border-white/10 pl-10">
                <div className="text-6xl font-black text-white">90%</div>
                <div className="text-xs text-[#F5DEB3]/50 uppercase tracking-widest mt-1">Facebook</div>
              </div>
            </div>
            
            <p className="text-lg text-[#F5DEB3]/80 italic border-l-4 border-[#D2691E] pl-6 font-light">
              "Иймээс тус 2 платформоор нөлөөллийн ажлаа хийх юм."
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-[#D2691E]/10 p-6 rounded-2xl border border-[#D2691E]/20">
            <div className="text-3xl font-black text-[#D2691E] mb-1">30%</div>
            <div className="text-xs text-[#F5DEB3] uppercase tracking-widest">Богино бичлэг</div>
          </div>
          <div className="bg-[#4CAF50]/10 p-6 rounded-2xl border border-[#4CAF50]/20">
            <div className="text-3xl font-black text-[#4CAF50] mb-1">70%</div>
            <div className="text-xs text-[#F5DEB3] uppercase tracking-widest">Постер</div>
          </div>
        </div>
      </motion.div>

      {/* Right Side: Map/Visual */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={isActive ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.3 }}
        className="relative bg-black/40 rounded-[3rem] border border-white/10 overflow-hidden group"
      >
        <img src="https://images.unsplash.com/photo-1547234935-80c7145ec969?auto=format&fit=crop&q=80" className="w-full h-full object-cover opacity-20 filter grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" alt="" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-12">
          <Globe size={80} className="text-[#D2691E] mb-6 animate-spin-slow" />
          <h4 className="text-3xl font-black text-white uppercase mb-4 tracking-tighter">Mongolia & International</h4>
          <p className="text-[#F5DEB3]/60 max-w-sm leading-relaxed">
            Сургуулийн түвшнээс Олон Улсын түвшин хүртэлх хамтын ажиллагааны сүлжээг өргөжүүлэх.
          </p>
        </div>
      </motion.div>
    </div>
  </div>
);

const SDGSlide = ({ isActive }: SlideProps) => (
  <div className="h-full flex flex-col justify-center max-w-7xl mx-auto px-6 relative">
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb773b09?auto=format&fit=crop&q=80')] bg-cover opacity-[0.03] grayscale pointer-events-none" />
    <motion.h2 
      initial={{ opacity: 0, y: -20 }}
      animate={isActive ? { opacity: 1, y: 0 } : {}}
      className="text-5xl font-bold text-white mb-16 text-center uppercase tracking-widest flex items-center justify-center gap-4 z-10"
    >
      <Globe className="text-[#D2691E]" size={48} /> SDG (Sustainable Development Goals)
    </motion.h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 z-10">
      {[
        { 
          goal: "13", 
          title: "Уур амьсгалын өөрчлөлттэй тэмцэх", 
          color: "bg-emerald-900/40", 
          border: "border-emerald-700/50",
          desc: "Яаралтай арга хэмжээ авах...",
          img: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80"
        },
        { 
          goal: "15", 
          title: "Газар дээрх эко системийг хамгаалах", 
          color: "bg-green-900/40", 
          border: "border-green-700/50",
          desc: "Ой модыг хамгаалах, цөлжилттэй тэмцэх...",
          img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80"
        },
        { 
          goal: "6", 
          title: "Цэвэр ус, ариун цэврийн байгууламжийг хангах", 
          color: "bg-blue-900/40", 
          border: "border-blue-700/50",
          desc: "Усны нөөцийг тогтвортой ашиглах...",
          img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80"
        }
      ].map((card, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 50 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: i * 0.2 }}
          className={`${card.color} ${card.border} border-2 rounded-[2.5rem] p-10 flex flex-col items-center text-center group hover:scale-105 transition-all duration-300 backdrop-blur-xl relative overflow-hidden`}
        >
          <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
            <img src={card.img} className="w-full h-full object-cover" alt="" />
          </div>
          <div className="z-10 w-full">
            <div className="text-6xl font-black text-white/20 mb-4">{card.goal}</div>
            <h3 className="text-2xl font-bold text-white mb-6 leading-tight">{card.title}</h3>
            <p className="text-[#F5DEB3]/70 text-sm leading-relaxed">{card.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

const SIASlide = ({ isActive }: SlideProps) => (
  <div className="h-full flex flex-col justify-center max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={isActive ? { opacity: 1, x: 0 } : {}}
      >
        <h2 className="text-7xl font-black text-[#D2691E] mb-8 uppercase tracking-tighter">
          SIA<br />
          <span className="text-3xl font-light text-[#F5DEB3] tracking-widest">(Students In Action)</span>
        </h2>
        <div className="space-y-6">
          {[
            "“SIA” гэж юу вэ?",
            "Үндэсний Ассамблей",
            "Бид юу сурав?"
          ].map((label, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={isActive ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 + i * 0.2 }}
              className="px-8 py-4 bg-white/5 border border-white/10 rounded-full text-xl font-medium hover:bg-[#D2691E]/20 hover:border-[#D2691E] transition-all cursor-pointer group flex items-center justify-between"
            >
              <span>{label}</span>
              <ChevronRight className="text-[#D2691E] group-hover:translate-x-2 transition-transform" />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isActive ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1 }}
        className="relative group h-[500px] rounded-[3rem] overflow-hidden border-4 border-[#3E2723] shadow-2xl"
      >
        <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="SIA Group" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent flex items-end p-8">
          <p className="text-white text-sm font-bold uppercase tracking-widest bg-[#D2691E] px-4 py-1 rounded">Group Photo Placeholder</p>
        </div>
      </motion.div>
    </div>
  </div>
);

const SkillsSlide = ({ isActive }: SlideProps) => (
  <div className="h-full flex flex-col justify-center max-w-7xl mx-auto px-6">
    <motion.h2 
      initial={{ opacity: 0, y: -20 }}
      animate={isActive ? { opacity: 1, y: 0 } : {}}
      className="text-5xl font-bold text-[#F4A460] mb-16 text-center uppercase tracking-widest border-b border-[#D2691E]/30 pb-4"
    >
      Мэдлэг, чадвар
    </motion.h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          title: "Англи хэл",
          items: [
            { h: "Speaking", d: "Хэлэлцүүлэгт оролцох, бусадтай ойлголцох." },
            { h: "Writing", d: "Судалгааны тайлан, төслийн баримт бичиг бэлтгэх." },
            { h: "Listening", d: "Уулзалтад хүмүүсийг ойлгох." },
            { h: "Reading", d: "Судалгаа буюу судалгаа хийх явцад унших чадвар маань сайжирсан." }
          ],
          color: "border-blue-500",
          bg: "bg-blue-900/10"
        },
        {
          title: "Эко клуб",
          items: [
            { h: "Судалгаа", d: "Байгаль орчны асуудлаар судалгаа хийх." },
            { h: "Шийдэл", d: "Тогтвортой хөгжлийн шийдэл боловсруулах." },
            { h: "Санаачилга", d: "Ногоон санаачилга хэрэгжүүлэх." }
          ],
          color: "border-green-500",
          bg: "bg-green-900/10"
        },
        {
          title: "Илтгэлийн клуб",
          items: [
            { h: "Танилцуулга", d: "Тайзан дээр олны өмнө төслөө танилцуулах." },
            { h: "Хэлэлцүүлэг", d: "Хэлэлцүүлэгт оролцох." },
            { h: "Илтгэх", d: "Итгэлтэй илтгэх дадал эзэмших." },
            { h: "Ойлголт", d: "Бусдад өөрийгөө зөвөөр ойлгуулах." }
          ],
          color: "border-orange-500",
          bg: "bg-orange-900/10"
        }
      ].map((col, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: i * 0.2 }}
          className={`${col.bg} border-t-8 ${col.color} p-8 rounded-3xl backdrop-blur-sm`}
        >
          <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-2">{col.title}</h3>
          <div className="space-y-6">
            {col.items.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <span className="text-[#F4A460] font-bold text-sm uppercase tracking-wider">{item.h}:</span>
                <p className="text-sm text-[#F5DEB3]/80 leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

const FinanceSlide = ({ isActive }: SlideProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const data = [
    { name: 'Тээвэрлэлт', value: 500000, percentage: '10%', icon: <Truck size={20} />, sub: "Логистик, түгээлт" },
    { name: 'Маркетинг', value: 500000, percentage: '10%', icon: <Megaphone size={20} />, sub: "Сурталчилгаа, PR" },
    { name: 'Чацаргана', value: 2000000, percentage: '40%', icon: <Trees size={20} />, sub: "Суулгац, арчилгаа" },
    { name: 'Нөлөөлөл', value: 1000000, percentage: '20%', icon: <Users size={20} />, sub: "Сургалт, нөлөөллийн ажил" },
    { name: 'Бусад', value: 1000000, percentage: '20%', icon: <Plus size={20} />, sub: "Бичиг хэрэг, бусад" },
  ];

  const COLORS = ['#D2691E', '#F4A460', '#A0522D', '#8B4513', '#6D4C41'];

  return (
    <div className="h-full flex flex-col justify-center max-w-7xl mx-auto px-6 relative">
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-[url('https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80')] bg-cover opacity-5 grayscale pointer-events-none" />
      
      <div className="text-center mb-12 z-10">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          className="text-5xl font-bold text-[#F4A460] uppercase tracking-widest border-b-2 border-[#D2691E] pb-4 inline-block"
        >
          Санхүүжилт
        </motion.h2>
        <p className="text-[#F5DEB3]/60 mt-4 font-mono tracking-widest">PROJECT BUDGET BREAKDOWN (2024-2025)</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isActive ? { opacity: 1, scale: 1 } : {}}
          className="h-[450px] w-full relative flex items-center justify-center p-8 bg-black/20 rounded-[3rem] backdrop-blur-md border border-white/5"
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={110}
                outerRadius={160}
                paddingAngle={8}
                dataKey="value"
                stroke="none"
                onMouseEnter={(_, index) => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                {data.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={COLORS[index % COLORS.length]} 
                    opacity={activeIndex === null || activeIndex === index ? 1 : 0.6}
                    stroke={activeIndex === index ? "#FFF" : "none"}
                    strokeWidth={2}
                    className="transition-all duration-300 cursor-pointer outline-none"
                  />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ backgroundColor: '#1A0F05', border: '1px solid #D2691E', borderRadius: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.5)' }}
                itemStyle={{ color: '#F5DEB3' }}
                cursor={{ fill: 'transparent' }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-center flex flex-col pointer-events-none">
             <span className="text-xs font-bold text-[#D2691E]/60 tracking-[0.3em] uppercase mb-1">Нийт Төсөв</span>
             <span className="text-4xl font-black text-white tracking-tighter">5,000,000 <span className="text-lg font-light text-[#F5DEB3]/60">₮</span></span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isActive ? { opacity: 1, x: 0 } : {}}
          className="grid grid-cols-1 gap-4"
        >
          {data.map((item, i) => (
            <motion.div 
              key={i} 
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
              className={`flex items-center gap-6 p-5 rounded-2xl transition-all duration-300 border-l-8 group
                ${activeIndex === i ? 'bg-[#D2691E]/20 scale-105 border-[#F4A460] shadow-xl' : 'bg-white/5 border-[#D2691E] opacity-80'}`}
            >
              <div className={`p-4 rounded-xl transition-colors duration-300 ${activeIndex === i ? 'bg-[#F4A460] text-[#1A0F05]' : 'bg-[#D2691E]/20 text-[#D2691E]'}`}>
                {item.icon}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-end">
                  <div>
                    <h4 className="text-lg font-bold text-white group-hover:text-[#F4A460] transition-colors">{item.name}</h4>
                    <p className="text-xs text-[#F5DEB3]/50">{item.sub}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-black text-[#F4A460] block leading-none">{item.percentage}</span>
                    <span className="text-sm font-mono text-[#F5DEB3]/60">{item.value.toLocaleString()} ₮</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const VisionSlide = ({ isActive }: SlideProps) => (
  <div className="h-full flex flex-col justify-center max-w-7xl mx-auto px-6">
    <motion.h2 
      initial={{ opacity: 0, y: -20 }}
      animate={isActive ? { opacity: 1, y: 0 } : {}}
      className="text-5xl font-bold text-white mb-16 text-center uppercase tracking-widest"
    >
      Алсын хараа
    </motion.h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          title: "Хаягдалгүй ирээдүй",
          body: "Бидний алсын хараа бол шинэ үеийнхэнд хуванцар хаягдлаа зөв ангилан, зөв зүйтэй хаяж сурах соёлыг төлөвшүүлэх явдал.",
          img: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80"
        },
        {
          title: "5 жилийн төлөвлөгөө",
          body: "80 гаруй жимсээ өгсөн модыг дахин суулгаж, эко системийг байгальд буцааж цогцлоох.",
          img: "https://images.unsplash.com/photo-1542601906990-b4d3fb773b09?auto=format&fit=crop&q=80"
        },
        {
          title: "20 жилийн төлөвлөгөө",
          body: "Монголын тал нутагт 2000 гаруй чацарганы өтгөн ой сүндэрлэн, доройтсон газар нутгийг сэргээж, байгальтайгаа зохицон амьдрах нийгэм, хамт олон бүрэлдүүлэх.",
          img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80"
        }
      ].map((card, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 50 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: i * 0.2 }}
          className="bg-[#3E2723]/30 rounded-[2.5rem] overflow-hidden border border-white/5 flex flex-col group"
        >
          <div className="h-48 bg-[#1A0F05] relative overflow-hidden">
            <img src={card.img} className="w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-700" alt={card.title} />
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="text-white/10 uppercase font-black text-xl">Image Placeholder</div>
            </div>
          </div>
          <div className="p-8 space-y-4">
            <h3 className="text-2xl font-bold text-[#F4A460]">{card.title}</h3>
            <p className="text-[#F5DEB3]/70 leading-relaxed text-sm">{card.body}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

const MerchSlide = ({ isActive }: SlideProps) => {
  const merchItems = [
    { title: "Гэрэл", icon: <Lamp size={40} />, img: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80" },
    { title: "Мод, ургамлийн багц", icon: <Sprout size={40} />, img: "https://images.unsplash.com/photo-1589182397057-b82d7663446e?auto=format&fit=crop&q=80" },
    { title: "Стикер", icon: <Smile size={40} />, img: "https://images.unsplash.com/photo-1572375924201-4923ef0107f9?auto=format&fit=crop&q=80" },
    { title: "Амны зугаа", icon: <ShoppingBag size={40} />, img: "https://images.unsplash.com/photo-1599490659223-930b4478716f?auto=format&fit=crop&q=80" },
    { title: "Алимны коктейл", icon: <Wine size={40} />, img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80" },
    { title: "Mystery Eco Box", icon: <Package size={40} />, img: "https://images.unsplash.com/photo-1549463591-14760250809c?auto=format&fit=crop&q=80" },
    { title: "Түлхүүрийн оосор", icon: <Key size={40} />, img: "https://images.unsplash.com/photo-1584622781564-1d9876a13d00?auto=format&fit=crop&q=80" },
    { title: "Чихмэл", icon: <Heart size={40} />, img: "https://images.unsplash.com/photo-1559449134-a8524a317822?auto=format&fit=crop&q=80" },
  ];

  return (
    <div className="h-full flex flex-col justify-center max-w-7xl mx-auto px-6">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        className="text-5xl font-bold text-[#F4A460] mb-12 text-center uppercase tracking-widest border-b border-[#D2691E]/30 pb-4"
      >
        Бидний Мерч
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {merchItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isActive ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: i * 0.1 }}
            className="group relative h-48 rounded-3xl overflow-hidden border border-white/10 hover:border-[#D2691E]/50 transition-all cursor-pointer"
          >
            <img src={item.img} className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity grayscale group-hover:grayscale-0" alt={item.title} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent flex flex-col items-center justify-center p-4 text-center">
              <div className="text-[#D2691E] mb-2 transform group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-sm font-bold text-white tracking-wider">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const FutureTasksSlide = ({ isActive }: SlideProps) => (
  <div className="h-full flex flex-col justify-center max-w-7xl mx-auto px-6 relative">
    <div className="absolute inset-0 bg-[#D2691E]/5 pointer-events-none" />
    
    <div className="text-center mb-16 relative z-10">
      <motion.h2 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isActive ? { opacity: 1, scale: 1 } : {}}
        className="text-6xl font-black text-white mb-2 uppercase tracking-tighter"
      >
        ACTION <span className="text-[#D2691E]">PLAN</span>
      </motion.h2>
      <div className="h-1 w-32 bg-[#D2691E] mx-auto mt-4" />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
      {/* 1. Cycle (Wide) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        className="md:col-span-4 bg-white/5 border border-white/10 rounded-[3rem] p-10 group hover:bg-white/10 transition-colors"
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="p-5 bg-[#D2691E] rounded-[2rem] text-white shadow-2xl">
              <RefreshCw size={40} className="animate-spin-slow" />
            </div>
            <div>
              <h3 className="text-4xl font-black text-white uppercase tracking-tight">♻️ THE GREEN CYCLE</h3>
              <p className="text-[#F5DEB3]/50 text-lg italic mt-1">Тасралтгүй үргэлжлэх ногоон мөчлөг</p>
            </div>
          </div>
          
          <div className="flex gap-4 md:flex-row flex-wrap">
            {["Цуглуулах", "Боловсруулах", "Борлуулах", "Тарих"].map((text, i) => (
              <div key={i} className="flex items-center gap-3 bg-black/40 px-6 py-3 rounded-2xl border border-white/5">
                <div className="w-8 h-8 rounded-full bg-[#D2691E]/20 text-[#F4A460] flex items-center justify-center font-bold text-sm">{i+1}</div>
                <span className="text-sm font-bold text-white uppercase tracking-wider">{text}</span>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-8 text-xl text-[#F5DEB3]/70 font-light leading-relaxed max-w-5xl">
          Хуванцар хог хаягдал цуглуулан дахин боловсруулаад, борлуулж олсон орлогоороо мод худалдан авч тарина. Энэхүү мөчлөгийг тасралтгүй үргэлжлүүлнэ.
        </p>
      </motion.div>

      {/* 2. Reel */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.1 }}
        className="bg-black/30 border border-white/5 rounded-[2.5rem] p-8 flex flex-col justify-between hover:border-red-500/30 transition-colors"
      >
        <div className="w-14 h-14 bg-red-500/20 rounded-2xl flex items-center justify-center text-red-500 mb-6">
          <Video size={32} />
        </div>
        <h4 className="text-2xl font-black text-white mb-4 uppercase leading-tight">Reel<br />Challenge</h4>
        <p className="text-sm text-[#F5DEB3]/60 leading-relaxed">
          1 дагагч = 1кг хог цуглуулах уриалга. Сошиал медиад вирал болгоно.
        </p>
      </motion.div>

      {/* 3. 1000 Trees */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2 }}
        className="bg-black/30 border border-white/5 rounded-[2.5rem] p-8 flex flex-col justify-between hover:border-green-500/30 transition-colors"
      >
        <div className="w-14 h-14 bg-green-500/20 rounded-2xl flex items-center justify-center text-green-500 mb-6">
          <Trees size={32} />
        </div>
        <h4 className="text-2xl font-black text-white mb-4 uppercase leading-tight">1000<br />Trees</h4>
        <p className="text-sm text-[#F5DEB3]/60 leading-relaxed">
          Чацарганы мод голлон тарьж, цөлжсөн газрыг сэргээнэ.
        </p>
      </motion.div>

      {/* 4. Contracts */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3 }}
        className="bg-black/30 border border-white/5 rounded-[2.5rem] p-8 flex flex-col justify-between hover:border-[#D2691E]/30 transition-colors"
      >
        <div className="w-14 h-14 bg-[#D2691E]/20 rounded-2xl flex items-center justify-center text-[#F4A460] mb-6">
          <Handshake size={32} />
        </div>
        <h4 className="text-2xl font-black text-white mb-4 uppercase leading-tight">Official<br />Partners</h4>
        <p className="text-sm text-[#F5DEB3]/60 leading-relaxed">
          Байгууллагуудтай албан ёсны гэрээ байгуулж, сүлжээ үүсгэнэ.
        </p>
      </motion.div>
      
      {/* 5. Summary Card */}
       <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.4 }}
        className="bg-[#D2691E]/10 border border-[#D2691E]/20 rounded-[2.5rem] p-8 flex flex-col justify-center items-center text-center"
      >
        <div className="text-[#F4A460] font-black text-4xl mb-2">2026</div>
        <p className="text-xs text-[#F5DEB3] uppercase tracking-[0.2em] font-bold">Targeted Goals</p>
      </motion.div>
    </div>
  </div>
);

const EcoAcademySlide = ({ isActive }: SlideProps) => (
  <div className="h-full flex flex-col justify-center max-w-7xl mx-auto px-6 relative">
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80')] bg-cover opacity-[0.05] grayscale pointer-events-none" />
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={isActive ? { opacity: 1, x: 0 } : {}}
        className="space-y-8"
      >
        <div className="inline-block bg-[#4CAF50]/20 text-[#4CAF50] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-[0.3em] mb-4">
          Digital Education Platform
        </div>
        <h2 className="text-6xl font-black text-white leading-none">
          ECO SYSTEM<br />
          <span className="text-[#4CAF50]">LEARNING HUB</span>
        </h2>
        <p className="text-xl text-[#F5DEB3]/80 leading-relaxed font-light">
          Сурагчдад эко системийн талаарх мэдлэгийг хөгжилтэй, сонирхолтой хэлбэрээр олгох бие даасан вэбсайт хөгжүүлнэ.
        </p>
        
        <div className="space-y-4">
          {[
            { t: "Интерактив хичээлүүд", d: "Цөлжилт болон байгаль хамгааллын сэдэвтэй" },
            { t: "Тоглоомжуулсан сургалт", d: "Даалгавар биелүүлж оноо цуглуулах систем" },
            { t: "Мэдээллийн нэгдсэн сан", d: "Төслийн явц, үр дүн, судалгааны материалууд" }
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 bg-white/5 px-6 py-4 rounded-2xl border-l-4 border-[#4CAF50] hover:bg-[#4CAF50]/10 transition-colors">
              <div className="w-10 h-10 bg-[#4CAF50]/20 rounded-xl flex items-center justify-center text-[#4CAF50] font-bold shrink-0">
                <Layout size={20} />
              </div>
              <div>
                <h4 className="text-white font-bold">{item.t}</h4>
                <p className="text-sm text-[#F5DEB3]/60">{item.d}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isActive ? { opacity: 1, scale: 1 } : {}}
        className="relative"
      >
        {/* Mock Browser Interface */}
        <div className="relative z-10 bg-[#1A0F05] rounded-[2rem] border border-white/10 shadow-2xl overflow-hidden aspect-video">
          <div className="bg-white/10 px-4 py-3 flex items-center gap-2 border-b border-white/5">
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-red-500/50" />
              <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
              <div className="w-2 h-2 rounded-full bg-green-500/50" />
            </div>
            <div className="bg-black/20 rounded-md px-3 py-1 text-[10px] text-white/30 font-mono flex-1 text-center">
              https://eco-academy.mn
            </div>
          </div>
          <div className="p-8 h-full bg-gradient-to-br from-[#1A0F05] to-[#2D3F2D]">
             <div className="w-1/2 h-4 bg-white/10 rounded mb-4" />
             <div className="w-3/4 h-2 bg-white/5 rounded mb-2" />
             <div className="w-2/3 h-2 bg-white/5 rounded mb-8" />
             <div className="grid grid-cols-3 gap-4">
                <div className="aspect-square bg-[#4CAF50]/20 rounded-xl animate-pulse" />
                <div className="aspect-square bg-blue-500/20 rounded-xl animate-pulse delay-100" />
                <div className="aspect-square bg-[#D2691E]/20 rounded-xl animate-pulse delay-200" />
             </div>
             <div className="mt-8 flex justify-center">
                 <div className="px-6 py-2 bg-[#4CAF50] rounded-full text-xs font-bold text-white shadow-lg shadow-[#4CAF50]/20">
                    LEARN MORE
                 </div>
             </div>
          </div>
        </div>
        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#4CAF50]/20 blur-3xl -z-10" />
        <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-500/10 blur-3xl -z-10" />
      </motion.div>
    </div>
  </div>
);

const LuckyDrawAuctionSlide = ({ isActive }: SlideProps) => (
  <div className="h-full flex flex-col justify-center max-w-7xl mx-auto px-6 relative">
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80')] bg-cover opacity-[0.03] grayscale pointer-events-none" />
    
    <div className="text-center mb-16 relative z-10">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        className="text-5xl font-black text-white mb-4 uppercase tracking-tighter"
      >
        Сугалаа & Дуудлага худалдаа
      </motion.h2>
      <motion.div 
        initial={{ width: 0 }}
        animate={isActive ? { width: "200px" } : {}}
        className="h-1 bg-[#D2691E] mx-auto mb-6"
      />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
      {/* Raffle Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={isActive ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.2 }}
        className="bg-white/5 border border-white/10 p-10 rounded-[3rem] backdrop-blur-xl relative overflow-hidden group"
      >
        <div className="absolute -top-10 -right-10 opacity-10 group-hover:rotate-12 transition-transform duration-700">
           <Ticket size={240} className="text-[#D2691E]" />
        </div>
        
        <div className="flex items-center gap-4 mb-8">
          <div className="p-4 bg-[#D2691E]/20 rounded-2xl text-[#F4A460]">
            <Ticket size={32} />
          </div>
          <h3 className="text-3xl font-black text-white uppercase tracking-wider">Сугалаа</h3>
        </div>
        
        <div className="space-y-6">
          <p className="text-xl text-[#F5DEB3]/80 font-light leading-relaxed">
            <span className="text-white font-bold">20,000₮</span>-өөс дээш худалдан авалт хийсэн хүн бүрт <span className="text-[#F4A460] font-bold italic">СУГАЛААНЫ ДУГААР</span> олгоно.
          </p>
          <div className="flex items-center gap-3 bg-[#D2691E]/10 p-4 rounded-xl border border-[#D2691E]/20">
            <Sparkles className="text-[#F4A460]" size={20} />
            <p className="text-sm text-[#F5DEB3]">Төслийн танилцуулга дууссаны дараа азтан тодруулна.</p>
          </div>
        </div>
      </motion.div>

      {/* Auction Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={isActive ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.4 }}
        className="bg-[#D2691E]/5 border border-[#D2691E]/20 p-10 rounded-[3rem] backdrop-blur-xl relative overflow-hidden group"
      >
        <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:-rotate-12 transition-transform duration-700">
           <Gavel size={240} className="text-white" />
        </div>

        <div className="flex items-center gap-4 mb-8">
          <div className="p-4 bg-white/10 rounded-2xl text-white">
            <Gavel size={32} />
          </div>
          <h3 className="text-3xl font-black text-white uppercase tracking-wider">Дуудлага Худалдаа</h3>
        </div>

        <div className="space-y-6">
          <p className="text-xl text-[#F5DEB3]/80 font-light leading-relaxed">
            Азтан тодорвол бид <span className="text-white font-bold italic">ДУУДЛАГА ХУДАЛДАА</span>-г шууд явуулна.
          </p>
          <div className="p-6 bg-black/40 rounded-2xl border border-white/5 italic text-center">
            <p className="text-[#F5DEB3]/50">"Дуудлага худалдаагаар юу зарагдах вэ?"</p>
            <p className="text-white font-bold mt-2 tracking-widest uppercase">Тун удахгүй тодорхой болно...</p>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

const MonthlyCompetitionsSlide = ({ isActive }: SlideProps) => {
  const comps = [
    { title: "Хог ангилалтын тэмцээн", desc: "Хамгийн зөв ангилсан анги шалгарна.", img: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80" },
    { title: "Ус хэмнэлтийн сорил", desc: "7 хоногт хамгийн бага ус хэрэглэсэн анги шалгарна.", img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80" },
    { title: "Ногоон ангийн тэмцээн", desc: "Ангидаа ургамал тарьж, хамгийн сайн арчилсан анги шалгарна.", img: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80" },
    { title: "Хог хаягдалгүй өдөр", desc: "Бүтэн долоо хоног хог хаягдалгүй байсан анги шалгарна.", img: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80" },
    { title: "Хуванцараас татгалзах сорил", desc: "Нэг сарын хугацаанд хуванцар хэрэглээгээ хамгийн их бууруулсан анги шалгарна.", img: "https://images.unsplash.com/photo-1618477431435-08169135061b?auto=format&fit=crop&q=80" },
    { title: "Дахин боловсруулалтын бүтээлч тэмцээн", desc: "Хаягдал материалаар хамгийн гоё бүтээл хийсэн анги шалгарна.", img: "https://images.unsplash.com/photo-1536859355448-76f92ebdc33d?auto=format&fit=crop&q=80" },
  ];

  return (
    <div className="h-full flex flex-col justify-center max-w-7xl mx-auto px-6 relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80')] bg-fixed opacity-[0.02] grayscale" />
      <div className="text-center mb-12 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          className="text-5xl font-bold text-white mb-4 uppercase tracking-widest"
        >
          Сар бүрийн тэмцээн
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="text-[#F4A460] text-xl font-light"
        >
          Сургууль дээр сар бүр дараах тэмцээнүүдийг зохион байгуулна.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        {comps.map((comp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1 }}
            className="group relative h-48 rounded-[2rem] overflow-hidden border border-white/10 hover:border-[#D2691E]/50 transition-all cursor-pointer"
          >
            <img src={comp.img} className="w-full h-full object-cover opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700 grayscale group-hover:grayscale-0" alt={comp.title} />
            <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black via-black/20 to-transparent">
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#F4A460] transition-colors">{comp.title}</h3>
              <p className="text-[#F5DEB3]/60 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all delay-100">{comp.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const AwardsSlide = ({ isActive }: SlideProps) => (
  <div className="h-full flex flex-col justify-center max-w-7xl mx-auto px-6 relative">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] pointer-events-none flex items-center justify-center">
      <Award size={600} />
    </div>

    <div className="text-center mb-16 relative z-10">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        className="text-6xl font-black text-white mb-4 uppercase tracking-tighter"
      >
        Шагнал <span className="text-[#D2691E]">&</span> Сертификат
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ delay: 0.3 }}
        className="text-[#F4A460] text-xl font-light max-w-3xl mx-auto"
      >
        Сар бүрийн тэмцээнд ялагчдад зөвхөн шагнал биш, албан ёсны certificate гардуулна.
      </motion.p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={isActive ? { opacity: 1, x: 0 } : {}}
        className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[3rem] shadow-2xl space-y-6"
      >
        <div className="flex items-center gap-4 mb-4">
          <BookOpen className="text-[#D2691E]" size={40} />
          <h3 className="text-3xl font-bold text-white">🏫 Сургуулийн түвшин</h3>
        </div>
        <p className="text-[#F4A460] font-medium border-b border-[#D2691E]/30 pb-4">Сар бүр зохион байгуулагдах тэмцээн бүрийн ялагч анги болон сурагчдад:</p>
        <ul className="space-y-4">
          {[
            "Мерч болон шагнал гардуулна.",
            "Сургуулийн тамгатай албан ёсны сертификат олгоно.",
            "Сертификат нь сурагчийн портфолио болон ирээдүйн өргөдөлд ашиглагдах боломжтой."
          ].map((text, i) => (
            <li key={i} className="flex items-start gap-3 text-[#F5DEB3]">
              <div className="mt-2 w-2 h-2 bg-[#D2691E] rounded-full shrink-0" />
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={isActive ? { opacity: 1, x: 0 } : {}}
        className="bg-[#D2691E]/5 backdrop-blur-xl border border-[#D2691E]/30 p-10 rounded-[3rem] shadow-2xl space-y-6"
      >
        <div className="flex items-center gap-4 mb-4">
          <Landmark className="text-[#F4A460]" size={40} />
          <h3 className="text-3xl font-bold text-white">🏛️ Улсын түвшин</h3>
        </div>
        <p className="text-[#F4A460] font-medium border-b border-[#D2691E]/30 pb-4">Жилд нэг удаа сургуулиудын хооронд улсын хэмжээний тэмцээн зохион байгуулагдана:</p>
        <ul className="space-y-4">
          {[
            "Улсын хэмжээний тэмцээнд шилдэг ангиуд оролцоно.",
            "Ялагч сурагч, ангиудад Улсын Хүүхдийн Байгууллагын тамгатай улсын сертификат олгоно.",
            "Шилдэг төслүүдийг Үндэсний Ассамблей болон олон нийтэд танилцуулах боломж олгоно.",
            "Энэхүү сертификат нь дээд боловсролын байгууллагад элсэхэд давуу эрх олгох суурь болно."
          ].map((text, i) => (
            <li key={i} className="flex items-start gap-3 text-[#F5DEB3]">
              <div className="mt-2 w-2 h-2 bg-[#F4A460] rounded-full shrink-0" />
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>

    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={isActive ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.6 }}
      className="mt-16 text-center"
    >
      <div className="inline-flex items-center gap-4 bg-white/10 px-10 py-5 rounded-full border-2 border-[#D2691E]/30 backdrop-blur-md">
        <Star className="text-yellow-500 fill-yellow-500" size={24} />
        <span className="text-2xl font-black text-white italic tracking-tight uppercase">
          Зөвхөн цаас биш — ирээдүйн боломжийн түлхүүр!
        </span>
      </div>
    </motion.div>
  </div>
);

const InternationalLevelSlide = ({ isActive }: SlideProps) => (
  <div className="h-full flex flex-col justify-center max-w-7xl mx-auto px-6 relative">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] pointer-events-none flex items-center justify-center">
      <Globe size={600} />
    </div>

    <div className="text-center mb-12 relative z-10">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        className="text-5xl font-black text-white mb-2 uppercase tracking-tighter"
      >
        Олон Улсын Түвшин
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ delay: 0.3 }}
        className="text-[#F4A460] text-xl font-light italic"
      >
        SIA-гийн тусгай тамгатай олон улсын хэмжээний тэмцээн
      </motion.p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
      {/* Section 1 & 2 */}
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isActive ? { opacity: 1, scale: 1 } : {}}
          className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-md"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-[#D2691E]/20 rounded-2xl text-[#F4A460]">
              <Globe size={24} />
            </div>
            <h3 className="text-xl font-bold text-white uppercase tracking-wider">🌍 SIA Олон Улсын Тэмцээн гэж юу вэ?</h3>
          </div>
          <p className="text-[#F5DEB3]/70 text-sm leading-relaxed">
            SIA (Students in Action) байгууллагын нэрийн дор олон улсын хэмжээнд экологийн сэдэвт тэмцээн зохион байгуулна. Энэ тэмцээн нь дэлхийн өнцөг булан бүрийн идэвхтэй залуучуудыг нэгтгэж, тогтвортой хөгжлийн төлөө хамтран ажиллах платформ болно.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isActive ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-md"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-[#D2691E]/20 rounded-2xl text-[#F4A460]">
              <Trophy size={24} />
            </div>
            <h3 className="text-xl font-bold text-white uppercase tracking-wider">🏅 Оролцогчид юу авах вэ?</h3>
          </div>
          <ul className="space-y-3">
            {[
              "SIA байгууллагын албан ёсны тусгай тамгатай олон улсын сертификат.",
              "Олон улсын түвшинд өөрийн төслөө танилцуулах боломж.",
              "Дэлхийн тэргүүлэгч их сургуулиудад элсэхэд дэмжлэг болох баримт бичиг.",
              "SIA-гийн глобал сүлжээнд нэгдэх эрх.",
              "Шилдэг оролцогчид олон улсын хурал, чуулганд урилга хүлээн авна."
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-[#F5DEB3]/80">
                <div className="mt-1.5 w-1.5 h-1.5 bg-[#D2691E] rounded-full shrink-0" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Section 3 & 4 */}
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isActive ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.1 }}
          className="bg-[#D2691E]/5 border border-[#D2691E]/20 p-8 rounded-[2.5rem] backdrop-blur-md"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-[#D2691E]/20 rounded-2xl text-[#F4A460]">
              <ListChecks size={24} />
            </div>
            <h3 className="text-xl font-bold text-white uppercase tracking-wider">📋 Тэмцээний үе шат</h3>
          </div>
          <div className="space-y-4">
            {[
              { t: "Сургууль", d: "Ялагчид аймгийн тэмцээнд оролцоно." },
              { t: "Аймаг/Хот", d: "Шилдгүүд улсын тэмцээнд оролцоно." },
              { t: "Улсын", d: "Шилдэг төслүүд олон улсын тэмцээнд оролцоно." },
              { t: "Олон Улс", d: "SIA-гийн тусгай тамгатай сертификат гардуулна." }
            ].map((step, i) => (
              <div key={i} className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-[#D2691E] flex items-center justify-center text-white font-bold shrink-0 text-sm group-hover:scale-110 transition-transform">
                  {i + 1}
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">{step.t}</h4>
                  <p className="text-xs text-[#F5DEB3]/50">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isActive ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-md"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-[#D2691E]/20 rounded-2xl text-[#F4A460]">
              <Handshake size={24} />
            </div>
            <h3 className="text-xl font-bold text-white uppercase tracking-wider">🤝 Хамтрагч байгууллагууд</h3>
          </div>
          <p className="text-[#F5DEB3]/70 text-sm leading-relaxed">
            SIA нь НҮБ-ын Тогтвортой Хөгжлийн Зорилтууд (SDG)-тай уялдуулан ЮНЕП, ЮНИСЕФ болон бусад олон улсын байгууллагуудтай хамтран ажиллах зорилготой.
          </p>
        </motion.div>
      </div>
    </div>

    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={isActive ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.6 }}
      className="mt-12 text-center"
    >
      <div className="inline-block bg-gradient-to-r from-[#D2691E]/20 to-transparent px-8 py-4 rounded-2xl border-l-4 border-[#D2691E]">
        <p className="text-xl font-bold text-white italic">
          <Star className="inline-block mr-2 text-yellow-500 mb-1" size={20} />
          Монголын залуучуудыг дэлхийн тавцанд гаргах — энэ бол Бидний алсын хараа!
        </p>
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
    <div className="max-w-7xl mx-auto px-6 h-full flex flex-col justify-center relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504153933545-3642398288ce?auto=format&fit=crop&q=80')] bg-cover opacity-5 grayscale pointer-events-none" />
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
          <img src="https://images.unsplash.com/photo-1541013348633-14902b4d96a7?auto=format&fit=crop&q=80" className="w-full h-full object-cover" />
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
  <div className="h-full flex flex-col justify-center px-6 relative">
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5 pointer-events-none" />
    <h2 className="text-5xl font-bold text-[#4CAF50] mb-12 text-center z-10">Шийдлүүд: Бид юу хийж чадах вэ?</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto z-10">
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
          <img src="https://images.unsplash.com/photo-1541013348633-14902b4d96a7?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Desertified land" />
          <div className="absolute bottom-10 right-10 bg-black/60 px-6 py-2 rounded-full text-white font-bold opacity-80 backdrop-blur-sm border border-white/10">ОДООГИЙН БАЙДАЛ</div>
        </div>
        
        <div 
          className="absolute inset-0 z-10 pointer-events-none"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Healthy land" />
          <div className="absolute bottom-10 left-10 bg-[#4CAF50]/60 px-6 py-2 rounded-full text-white font-bold whitespace-nowrap backdrop-blur-sm border border-white/10">БОЛОМЖИТ ИРЭЭДҮЙ</div>
        </div>

        {/* Improved Slider Handle */}
        <div 
          className="absolute inset-y-0 w-1 bg-white z-20 cursor-col-resize shadow-[0_0_15px_rgba(0,0,0,0.5)] flex items-center justify-center pointer-events-none"
          style={{ left: `${position}%` }}
        >
          <div className="w-10 h-10 rounded-full bg-white shadow-2xl flex items-center justify-center -translate-x-1/2 pointer-events-auto border-4 border-[#3E2723]">
            <ArrowRightLeft className="text-[#3E2723]" size={20} />
          </div>
        </div>
      </div>
      
      <p className="mt-6 text-[#F5DEB3] text-lg">Хэрэв бид одооноос ажиллаж эхэлбэл байгалийг эргүүлэн авчирч чадна.</p>
    </div>
  );
};

const NationalAssemblySlide = ({ isActive }: SlideProps) => (
  <div className="h-full flex flex-col justify-center max-w-7xl mx-auto px-6 relative">
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521791136064-7986c2959213?auto=format&fit=crop&q=80')] bg-cover opacity-[0.05] grayscale pointer-events-none" />
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={isActive ? { opacity: 1, x: 0 } : {}}
        className="space-y-8"
      >
        <div className="inline-block bg-[#D2691E]/20 text-[#F4A460] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-[0.3em] mb-4">
          Decision Making Level
        </div>
        <h2 className="text-6xl font-black text-white leading-none">
          ҮНДЭСНИЙ<br />
          <span className="text-[#D2691E]">АССАМБЛЕЙ</span>
        </h2>
        <p className="text-xl text-[#F5DEB3]/80 leading-relaxed font-light">
          Бид өөрсдийн боловсруулан хэрэгжүүлсэн "Ногоон Ирээдүй" төслөө шийдвэр гаргах хамгийн дээд түвшинд танилцуулж, залуучуудын дуу хоолойг бодлогын түвшинд хүргэдэг.
        </p>
        <div className="space-y-4">
          {[
            { t: "Төслийн танилцуулга & Илтгэл", d: "Үр дүн, статистик мэдээллийг танилцуулах" },
            { t: "Бодлого боловсруулагчдад зөвлөмж хүргэх", d: "Хууль тогтоомжид залуучуудын саналыг тусгах" },
            { t: "Үндэсний хэмжээний сүлжээ үүсгэх", d: "Бусад сургууль, байгууллагуудтай хамтрах" },
            { t: "Шийдвэр гаргах үйл явдалд оролцох", d: "Экологийн боловсролыг заавал үзэх хөтөлбөрт оруулах" }
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 bg-white/5 px-6 py-4 rounded-2xl border-l-4 border-[#D2691E] group hover:bg-[#D2691E]/10 transition-colors">
              <div className="w-10 h-10 bg-[#D2691E]/20 rounded-xl flex items-center justify-center text-[#F4A460] font-bold shrink-0">
                0{i + 1}
              </div>
              <div>
                <h4 className="text-white font-bold">{item.t}</h4>
                <p className="text-sm text-[#F5DEB3]/60">{item.d}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isActive ? { opacity: 1, scale: 1 } : {}}
        className="relative"
      >
        <div className="relative z-10 rounded-[4rem] overflow-hidden border-8 border-white/5 shadow-2xl skew-y-3 hover:skew-y-0 transition-transform duration-700 aspect-[4/5]">
          <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Meeting" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-12">
            <Quote className="text-[#D2691E] mb-4" size={40} />
            <p className="text-2xl text-white font-bold italic leading-tight">
              "Залуучуудын оролцоо бол зөвхөн сонголт биш, энэ бол зайлшгүй шаардлага юм."
            </p>
          </div>
        </div>
        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#D2691E]/20 blur-3xl -z-10" />
        <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-500/20 blur-3xl -z-10" />
        
        {/* Floating badge */}
        <div className="absolute -right-8 top-20 bg-white p-6 rounded-3xl shadow-2xl z-20 rotate-12 animate-bounce">
          <Landmark className="text-[#D2691E]" size={40} />
        </div>

        {/* New Goal Badge */}
        <div className="absolute left-0 -bottom-10 bg-[#1A0F05] p-6 rounded-3xl shadow-2xl z-20 border border-white/10 max-w-[200px]">
           <p className="text-[#F4A460] font-black text-3xl mb-1">2026</p>
           <p className="text-[10px] text-white uppercase font-bold tracking-widest leading-tight">Үндэсний хэмжээний хөтөлбөрт багтах зорилт</p>
        </div>
      </motion.div>
    </div>
  </div>
);

const SIADetailsSlide = ({ isActive }: SlideProps) => (
  <div className="h-full flex flex-col justify-center max-w-7xl mx-auto px-6 relative">
    <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none overflow-hidden">
      <div className="text-[20rem] font-black text-white absolute -top-20 -left-20">SIA</div>
    </div>
    
    <div className="text-center mb-16 relative z-10">
      <motion.h2 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isActive ? { opacity: 1, scale: 1 } : {}}
        className="text-6xl font-black text-[#F4A460] mb-4 uppercase tracking-tighter"
      >
        STUDENTS IN <span className="text-white">ACTION</span>
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ delay: 0.3 }}
        className="text-xl text-[#F5DEB3]/60 italic font-light tracking-[0.2em]"
      >
        SIA — Эх дэлхийгээ аврах залуучуудын хүч
      </motion.p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
      {[
        { title: "Алсын хараа", desc: "Залуучуудыг байгаль хамгаалах үйлсэд манлайлагч болгон бэлтгэх.", icon: <Star className="text-yellow-500" /> },
        { title: "Үйл ажиллагаа", desc: "Судалгаа, төсөл боловсруулалт, бодит ажил хэрэг, нөлөөлөл.", icon: <ListChecks className="text-blue-500" /> },
        { title: "Үр дүн", desc: "Тогтвортой хөгжлийн зорилтуудыг хэрэгжүүлж, бодит өөрчлөлт авчрах.", icon: <Trophy className="text-orange-500" /> }
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: i * 0.2 }}
          className="bg-white/5 border border-white/10 p-10 rounded-[3rem] backdrop-blur-md hover:bg-[#D2691E]/10 transition-colors group"
        >
          <div className="mb-6 p-4 bg-white/5 rounded-2xl w-fit group-hover:scale-110 transition-transform">
            {item.icon}
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
          <p className="text-[#F5DEB3]/70 leading-relaxed">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

const WarningSlide = ({ isActive }: SlideProps) => (
  <div className="h-full bg-black flex flex-col items-center justify-center text-center px-6 relative overflow-hidden transition-colors">
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
        <h2 className="text-6xl font-black text-red-700 mb-8 uppercase">Ирээдүйн Анхааруулга</h2>
        <p className="text-3xl text-gray-300 italic mb-12 leading-relaxed">
          "Хөрс бол амьдралын үндэс. Хөрс үгүй бол хүн төрөлхтөн үгүй."
        </p>
        <div className="inline-block bg-red-950 p-8 border-2 border-red-900 rounded-2xl">
          <p className="text-[#F5DEB3] text-xl">
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
    <TeammatesSlide isActive={true} />,
    <FocusSlide isActive={true} />,
    <IssuesChallengesSlide isActive={true} />,
    <CausesSlide isActive={true} />,
    <NatureEffectsSlide isActive={true} />,
    <CountriesSlide isActive={true} />,
    <GoalsObjectivesSlide isActive={true} />,
    <SolutionsSlide isActive={true} />,
    <SDGSlide isActive={true} />,
    <ActivitiesSlide isActive={true} />,
    <ComparisonSlide isActive={true} />,
    <SIASlide isActive={true} />,
    <SIADetailsSlide isActive={true} />,
    <NationalAssemblySlide isActive={true} />,
    <SkillsSlide isActive={true} />,
    <MerchSlide isActive={true} />,
    <LuckyDrawAuctionSlide isActive={true} />,
    <ExpansionSlide isActive={true} />,
    <FutureTasksSlide isActive={true} />,
    <EcoAcademySlide isActive={true} />,
    <MonthlyCompetitionsSlide isActive={true} />,
    <AwardsSlide isActive={true} />,
    <InternationalLevelSlide isActive={true} />,
    <FinanceSlide isActive={true} />,
    <VisionSlide isActive={true} />,
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
    <div className="fixed inset-0 bg-[#1A0F05] text-[#F5DEB3] font-sans selection:bg-[#D2691E] selection:text-white overflow-hidden select-none">
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
