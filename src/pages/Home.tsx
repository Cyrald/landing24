import { useState, useRef } from "react";
import { ChevronDown, ExternalLink, Star, ChevronLeft, ChevronRight, Leaf, Quote, Activity } from "lucide-react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { products, testimonials, faqItems } from "../data";
import { getImageSources, palettes } from "../lib";

// --- SmartImage Component ---
interface SmartImageProps {
  sources: string[];
  alt: string;
  className?: string;
  placeholderContent?: React.ReactNode;
}

function SmartImage({ sources, alt, className, placeholderContent }: SmartImageProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (currentIndex < sources.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setHasError(true);
    }
  };

  if (hasError) {
    return <div className={className}>{placeholderContent}</div>;
  }

  return (
    <img
      src={sources[currentIndex]}
      alt={alt}
      className={className}
      onError={handleError}
    />
  );
}

// --- Constants ---
const currentPalette = palettes[0];
const colors = {
  bg: currentPalette.colors.bg,
  bgAlt: currentPalette.colors.bgAlt,
  accent: currentPalette.colors.accent,
  accentLight: currentPalette.colors.accentLight,
  accentDark: currentPalette.colors.accentDark,
  text: currentPalette.colors.text,
  textSecondary: currentPalette.colors.textSecondary,
  cardBg: currentPalette.colors.card,
  catalogBg: currentPalette.colors.bgAlt,
  button: currentPalette.colors.button,
  buttonText: currentPalette.colors.buttonText,
  gradient: `linear-gradient(135deg, ${currentPalette.colors.accent} 0%, ${currentPalette.colors.accentDark} 50%, ${currentPalette.colors.text} 100%)`,
};

// --- Page Components ---
function ProductImage({ text = "Продукт", aspectRatio = "1/1", className = "", bgColor }: { text?: string; aspectRatio?: string; className?: string; bgColor: string }) {
  return (
    <div
      className={`rounded-xl overflow-hidden ${className}`}
      style={{ aspectRatio, backgroundColor: bgColor }}
    >
      <SmartImage
        sources={getImageSources('hero-product', 1)}
        alt={text}
        className="w-full h-full object-cover"
        placeholderContent={
          <div className="w-full h-full flex flex-col items-center justify-center gap-2">
            <Leaf className="w-10 h-10 text-white/70" />
            <span className="text-white/80 text-sm font-medium">{text}</span>
          </div>
        }
      />
    </div>
  );
}

const HeroSection = () => {
  return (
    <section className="pt-8 pb-12 md:pt-10 md:pb-16" style={{ backgroundColor: colors.bg }}>
      <div className="max-w-6xl xl:max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Quote className="w-10 h-10 mb-6" style={{ color: colors.accent }} />
            <blockquote 
              className="text-2xl md:text-3xl font-medium mb-6 leading-relaxed italic"
              style={{ color: colors.text }}
            >
              "После многих лет боли я наконец нашла облегчение в простом натуральном средстве"
            </blockquote>
            <p className="mb-8" style={{ color: colors.textSecondary }}>
              — Мария, 54 года, Москва
            </p>
            <h2 className="text-xl md:text-2xl font-bold mb-4" style={{ color: colors.text }}>
              Тысячи историй <span style={{ color: colors.accent }}>исцеления</span>
            </h2>
            <p className="mb-8" style={{ color: colors.textSecondary }}>
              Каждый день мы получаем благодарности от людей, которые вернули себе радость движения.
            </p>
            <button
              className="px-8 py-4 rounded-lg font-semibold transition-transform hover:scale-105 shadow-md active-elevate-2"
              style={{ backgroundColor: colors.button, color: colors.buttonText }}
              data-testid="button-hero-stories"
            >
              Читать истории
            </button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <ProductImage text="Продукт" aspectRatio="4/5" className="shadow-xl rounded-2xl" bgColor={colors.accentLight} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [howItWorksVariant, setHowItWorksVariant] = useState(1);
  const swiperRef = useRef<any>(null);

  const variants = [
    {
      id: 1,
      name: "Природный Ритм",
      content: (
        <div className="h-full flex flex-col justify-between py-4">
          <div className="space-y-12">
            <p className="text-3xl font-light leading-tight italic" style={{ color: colors.accent }}>
              "Природа не спешит, но всё успевает."
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="border-l-2 pl-6 py-2" style={{ borderColor: colors.accentLight }}>
                <h4 className="text-sm uppercase tracking-widest opacity-50 mb-2">Начало</h4>
                <p className="text-lg">Мягкий резонанс</p>
              </div>
              <div className="border-l-2 pl-6 py-2" style={{ borderColor: colors.accentLight }}>
                <h4 className="text-sm uppercase tracking-widest opacity-50 mb-2">Пик</h4>
                <p className="text-lg">Глубокий детокс</p>
              </div>
            </div>
          </div>
          <p className="text-sm opacity-60 leading-relaxed max-w-md">
            Мы не боремся с телом, мы даем ему ресурс для самовосстановления через биоактивные частоты трав.
          </p>
        </div>
      )
    },
    {
      id: 2,
      name: "Чистая Структура",
      content: (
        <div className="h-full flex items-center justify-center p-8">
          <div className="grid grid-cols-1 gap-12 w-full">
            <div className="flex items-baseline gap-6 border-b pb-6" style={{ borderColor: colors.accentLight }}>
              <span className="text-5xl font-serif italic opacity-10">01</span>
              <div>
                <h4 className="text-xl font-medium mb-1">Клеточный уровень</h4>
                <p className="text-sm opacity-70">Очищение межклеточного пространства от токсинов.</p>
              </div>
            </div>
            <div className="flex items-baseline gap-6 border-b pb-6" style={{ borderColor: colors.accentLight }}>
              <span className="text-5xl font-serif italic opacity-10">02</span>
              <div>
                <h4 className="text-xl font-medium mb-1">Био-активация</h4>
                <p className="text-sm opacity-70">Восстановление природного ритма работы органов.</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      name: "Минимализм",
      content: (
        <div className="h-full flex flex-col items-center justify-center text-center space-y-10 px-12">
          <Leaf className="w-12 h-12 mb-4 opacity-20" style={{ color: colors.accent }} />
          <h3 className="text-4xl font-light tracking-tight" style={{ color: colors.text }}>Гармония через <span className="italic" style={{ color: colors.accent }}>резонанс</span></h3>
          <div className="w-16 h-px bg-current opacity-20"></div>
          <p className="text-lg font-light leading-relaxed opacity-80">
            Восстановление природного баланса организма без химического вмешательства.
          </p>
        </div>
      )
    },
    {
      id: 4,
      name: "Инфо-Графика",
      content: (
        <div className="h-full grid grid-cols-2 gap-1 px-4 py-8">
          <div className="bg-white/40 p-6 rounded-2xl flex flex-col justify-center text-center">
            <span className="text-2xl font-bold" style={{ color: colors.accent }}>98%</span>
            <span className="text-[10px] uppercase tracking-tighter opacity-60">Биодоступность</span>
          </div>
          <div className="p-6 flex flex-col justify-center">
            <h4 className="font-medium text-sm mb-1">Натурально</h4>
            <p className="text-[11px] opacity-70">Только травы и минералы</p>
          </div>
          <div className="p-6 flex flex-col justify-center text-right">
            <h4 className="font-medium text-sm mb-1">Быстро</h4>
            <p className="text-[11px] opacity-70">Эффект через 15 минут</p>
          </div>
          <div className="bg-white/40 p-6 rounded-2xl flex flex-col justify-center text-center">
            <span className="text-2xl font-bold" style={{ color: colors.accent }}>12ч</span>
            <span className="text-[10px] uppercase tracking-tighter opacity-60">Длительность</span>
          </div>
        </div>
      )
    },
    {
      id: 5,
      name: "Диалог",
      content: (
        <div className="h-full flex flex-col justify-center space-y-12 py-6">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-widest opacity-40">Проблема</p>
            <p className="text-xl font-light italic">Накопленная усталость и застой энергии.</p>
          </div>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>
          <div className="space-y-2 text-right">
            <p className="text-xs uppercase tracking-widest opacity-40">Решение</p>
            <p className="text-xl font-medium" style={{ color: colors.accent }}>Мягкое биорезонансное восстановление.</p>
          </div>
        </div>
      )
    },
    {
      id: 6,
      name: "Слои",
      content: (
        <div className="h-full flex flex-col justify-center py-6">
          <div className="relative">
             <div className="absolute -left-4 top-0 bottom-0 w-1 bg-accent/10"></div>
             <div className="space-y-10 pl-8">
               <div className="opacity-100"><h4 className="text-lg font-medium mb-1">Поверхность</h4><p className="text-sm opacity-60">Мгновенное охлаждение и снятие внешнего напряжения.</p></div>
               <div className="opacity-70"><h4 className="text-lg font-medium mb-1">Ткани</h4><p className="text-sm opacity-60">Проникновение активных компонентов в глубокие слои дермы.</p></div>
               <div className="opacity-40"><h4 className="text-lg font-medium mb-1">Клетки</h4><p className="text-sm opacity-60">Биорезонансная настройка внутреннего ритма каждой клетки.</p></div>
             </div>
          </div>
        </div>
      )
    },
    {
      id: 7,
      name: "Баланс",
      content: (
        <div className="h-full flex items-center justify-center">
          <div className="flex items-center gap-12 text-center">
            <div className="flex-1 space-y-2">
              <span className="text-xs uppercase tracking-tighter opacity-30">Физика</span>
              <p className="text-lg font-light">Снятие зажимов</p>
            </div>
            <div className="w-px h-24 bg-accent/20 rotate-12"></div>
            <div className="flex-1 space-y-2">
              <span className="text-xs uppercase tracking-tighter opacity-30">Энергия</span>
              <p className="text-lg font-light">Свободный поток</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 8,
      name: "Таймлайн",
      content: (
        <div className="h-full flex flex-col justify-center space-y-10 py-4">
          <div className="flex gap-6 items-start">
            <div className="text-accent font-bold pt-1">00:15</div>
            <div className="flex-1 border-b pb-4 border-slate-100">
              <h4 className="font-medium">Первый контакт</h4>
              <p className="text-xs opacity-60">Вы чувствуете мягкое тепло и начало действия состава.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="text-accent font-bold pt-1">02:00</div>
            <div className="flex-1 border-b pb-4 border-slate-100">
              <h4 className="font-medium">Глубокая фаза</h4>
              <p className="text-xs opacity-60">Активные вещества достигают цели, запуская регенерацию.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="text-accent font-bold pt-1">12:00</div>
            <div className="flex-1">
              <h4 className="font-medium">Результат</h4>
              <p className="text-xs opacity-60">Полное восстановление ресурса и легкость движений.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 9,
      name: "Цитата",
      content: (
        <div className="h-full flex flex-col items-center justify-center px-16 space-y-8">
          <Quote className="w-12 h-12 opacity-10" />
          <p className="text-2xl font-light text-center leading-relaxed italic" style={{ color: colors.text }}>
            Здоровье — это не отсутствие болезни, а <span className="text-accent" style={{ color: colors.accent }}>полнота жизни</span> в каждом движении.
          </p>
          <div className="w-8 h-0.5 bg-accent/30"></div>
        </div>
      )
    },
    {
      id: 10,
      name: "Био-Ритм",
      content: (
        <div className="h-full flex flex-col justify-center space-y-6">
          <div className="h-16 w-full flex items-end gap-1 px-4">
            {[...Array(20)].map((_, i) => (
              <motion.div 
                key={i}
                animate={{ height: [20, 40, 20] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                className="flex-1 bg-accent/20 rounded-full"
                style={{ backgroundColor: i % 5 === 0 ? colors.accent : undefined }}
              />
            ))}
          </div>
          <div className="px-4 space-y-2">
            <h4 className="text-xl font-medium">Синхронизация</h4>
            <p className="text-sm opacity-70 leading-relaxed">Продукт настраивает частоту вибраций клеток на природный эталон здоровья.</p>
          </div>
        </div>
      )
    },
    {
      id: 11,
      name: "Эссенция",
      content: (
        <div className="h-full flex flex-col justify-center p-8 space-y-10">
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 rounded-full border-2 border-accent flex items-center justify-center text-accent font-serif italic text-xl">P</div>
            <div><h4 className="font-medium">Pure Nature</h4><p className="text-xs opacity-50 uppercase tracking-widest">100% Органика</p></div>
          </div>
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 rounded-full border-2 border-accent flex items-center justify-center text-accent font-serif italic text-xl">S</div>
            <div><h4 className="font-medium">Smart Science</h4><p className="text-xs opacity-50 uppercase tracking-widest">Биорезонанс</p></div>
          </div>
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 rounded-full border-2 border-accent flex items-center justify-center text-accent font-serif italic text-xl">R</div>
            <div><h4 className="font-medium">Real Result</h4><p className="text-xs opacity-50 uppercase tracking-widest">Доказано</p></div>
          </div>
        </div>
      )
    },
    {
      id: 12,
      name: "Фокус",
      content: (
        <div className="h-full flex flex-col items-center justify-center p-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] flex items-center justify-center pointer-events-none">
            <Leaf className="w-96 h-96" />
          </div>
          <div className="z-10 space-y-6 text-center">
            <h4 className="text-3xl font-light tracking-widest uppercase opacity-20">Wellness</h4>
            <div className="h-px w-full bg-accent/30"></div>
            <p className="text-lg font-medium leading-relaxed">Централизованное воздействие на очаги напряжения.</p>
          </div>
        </div>
      )
    },
    {
      id: 13,
      name: "Шаги",
      content: (
        <div className="h-full grid grid-cols-2 gap-8 p-6">
          <div className="space-y-2"><span className="text-accent font-bold">01.</span><p className="text-sm">Освобождение от застойных явлений</p></div>
          <div className="space-y-2"><span className="text-accent font-bold">02.</span><p className="text-sm">Насыщение био-энергией</p></div>
          <div className="space-y-2"><span className="text-accent font-bold">03.</span><p className="text-sm">Укрепление защитных полей</p></div>
          <div className="space-y-2"><span className="text-accent font-bold">04.</span><p className="text-sm">Гармонизация биоритмов</p></div>
        </div>
      )
    },
    {
      id: 14,
      name: "Миссия",
      content: (
        <div className="h-full flex flex-col justify-end p-10 space-y-6 bg-gradient-to-t from-accent/5 to-transparent rounded-2xl">
          <div className="w-12 h-1 bg-accent"></div>
          <h4 className="text-2xl font-light leading-snug">Вернуть человеку <span className="font-medium">природную силу</span> в условиях мегаполиса.</h4>
          <p className="text-sm opacity-60">Мы создаем мост между древней мудростью трав и технологиями будущего.</p>
        </div>
      )
    },
    {
      id: 15,
      name: "Цифры",
      content: (
        <div className="h-full flex items-center justify-around px-4">
          <div className="text-center space-y-1">
            <span className="block text-4xl font-light text-accent">15м</span>
            <span className="text-[10px] uppercase opacity-40">Начало</span>
          </div>
          <div className="w-px h-12 bg-slate-200"></div>
          <div className="text-center space-y-1">
            <span className="block text-4xl font-light text-accent">24ч</span>
            <span className="text-[10px] uppercase opacity-40">Поддержка</span>
          </div>
          <div className="w-px h-12 bg-slate-200"></div>
          <div className="text-center space-y-1">
            <span className="block text-4xl font-light text-accent">100%</span>
            <span className="text-[10px] uppercase opacity-40">Чистота</span>
          </div>
        </div>
      )
    },
    {
      id: 16,
      name: "Поток",
      content: (
        <div className="h-full flex flex-col justify-center space-y-4 px-8">
          <p className="text-xl leading-relaxed">Энергия течет туда, где <span className="text-accent">нет препятствий</span>.</p>
          <div className="flex gap-2">
            {[...Array(5)].map((_, i) => <div key={i} className="h-1 flex-1 bg-accent/20 rounded-full" style={{ opacity: 1 - i * 0.2 }} />)}
          </div>
          <p className="text-sm opacity-60">Наш продукт устраняет блоки, восстанавливая естественный ток жизненных сил.</p>
        </div>
      )
    },
    {
      id: 17,
      name: "Атлас",
      content: (
        <div className="h-full flex items-center p-8 gap-8">
          <div className="w-1/3 h-full border rounded-xl flex items-center justify-center opacity-20"><Activity className="w-12 h-12" /></div>
          <div className="w-2/3 space-y-4">
            <h4 className="text-lg font-medium">Точечное воздействие</h4>
            <p className="text-sm opacity-70">Каждая зона получает именно ту частоту, которая ей необходима для исцеления.</p>
          </div>
        </div>
      )
    },
    {
      id: 18,
      name: "Легенда",
      content: (
        <div className="h-full flex flex-col justify-center p-12 space-y-6">
          <span className="text-[10px] uppercase tracking-[0.5em] opacity-30 text-center block">Bio-Harmony</span>
          <div className="space-y-4 border-y py-8 border-accent/10">
            <p className="text-center text-lg font-light">Традиция • Технология • Тело</p>
          </div>
          <p className="text-center text-xs opacity-40">Единство трех начал для безупречного здоровья.</p>
        </div>
      )
    },
    {
      id: 19,
      name: "Квант",
      content: (
        <div className="h-full flex flex-col items-center justify-center space-y-8">
          <div className="relative">
            <div className="w-16 h-16 rounded-full border border-accent/30 animate-ping absolute"></div>
            <div className="w-16 h-16 rounded-full border border-accent flex items-center justify-center bg-white"><Leaf className="w-8 h-8 text-accent" /></div>
          </div>
          <p className="text-sm text-center px-12 opacity-80">Информационный перенос целебных свойств растений напрямую в поле организма.</p>
        </div>
      )
    },
    {
      id: 20,
      name: "Синтез",
      content: (
        <div className="h-full grid grid-cols-3 gap-0 border rounded-2xl overflow-hidden">
           <div className="bg-accent/5 p-4 flex flex-col items-center justify-center text-center"><span className="text-xs opacity-50 mb-2">Травы</span><div className="w-1 h-8 bg-accent/20"></div></div>
           <div className="p-4 flex flex-col items-center justify-center text-center"><span className="text-xs opacity-50 mb-2">Био-поле</span><div className="w-1 h-8 bg-accent/20"></div></div>
           <div className="bg-accent/5 p-4 flex flex-col items-center justify-center text-center"><span className="text-xs opacity-50 mb-2">Защита</span><div className="w-1 h-8 bg-accent/20"></div></div>
           <div className="col-span-3 p-4 text-center text-sm">Гармоничное слияние природных сил.</div>
        </div>
      )
    },
    {
      id: 21,
      name: "Эфир",
      content: (
        <div className="h-full flex flex-col justify-center p-10">
          <h4 className="text-4xl font-serif italic mb-6 opacity-80">Essential</h4>
          <p className="text-lg font-light leading-relaxed border-l-4 pl-6 border-accent">Только самое важное. Никаких лишних компонентов, только чистая суть природы.</p>
        </div>
      )
    },
    {
      id: 22,
      name: "Сенсор",
      content: (
        <div className="h-full flex flex-col justify-center space-y-10 px-10">
          <div className="flex justify-between items-end"><span className="text-xs opacity-40">Стресс</span><div className="h-1 w-2/3 bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-accent/40 w-[90%]"></div></div></div>
          <div className="flex justify-between items-end"><span className="text-xs opacity-40">Энергия</span><div className="h-1 w-2/3 bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-accent w-[20%] animate-pulse"></div></div></div>
          <p className="text-xs opacity-60">Умное распознавание дефицитов и их восполнение в реальном времени.</p>
        </div>
      )
    },
    {
      id: 23,
      name: "Генезис",
      content: (
        <div className="h-full flex items-center justify-center relative">
          <div className="absolute inset-0 border-[20px] border-slate-50"></div>
          <div className="p-12 text-center space-y-4">
            <h4 className="text-2xl font-medium tracking-tighter">Genesis of Health</h4>
            <p className="text-sm opacity-60 italic">Возвращение к истокам, где каждая клетка вибрирует жизнью.</p>
          </div>
        </div>
      )
    },
    {
      id: 24,
      name: "Пульс",
      content: (
        <div className="h-full flex flex-col items-center justify-center space-y-4">
           <Activity className="w-24 h-24 text-accent/10 animate-pulse" />
           <p className="text-lg font-light">Ритмичное исцеление</p>
           <span className="text-[10px] tracking-[1em] opacity-30">PULSE</span>
        </div>
      )
    },
    {
      id: 25,
      name: "Финал",
      content: (
        <div className="h-full flex flex-col justify-center p-12 space-y-8 bg-white shadow-inner rounded-2xl">
          <div className="flex gap-2">
            {[...Array(3)].map((_, i) => <div key={i} className="w-2 h-2 rounded-full bg-accent" />)}
          </div>
          <p className="text-xl font-light leading-relaxed">Результат — это не конец пути, а <span className="font-medium">новое начало</span> вашей полноценной жизни.</p>
          <div className="text-xs uppercase tracking-widest opacity-30">The Wellness Revolution</div>
        </div>
      )
    }
  ];

  // Adding more variants conceptually to fulfill the request for 25 ideas
  // For the sake of code brevity and clarity, I'll provide a selector for the first 5 
  // and describe how the remaining 20 would expand this architectural thought.

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.bg }}>
      <HeroSection />

      <section className="py-10 md:py-14" style={{ backgroundColor: colors.bg }}>
        <div className="max-w-6xl xl:max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-4">
            <motion.h2 className="text-2xl md:text-3xl font-bold" style={{ color: colors.text }}>
              Как это работает
            </motion.h2>
            
            <div className="flex flex-wrap gap-2 p-1 bg-slate-100/50 rounded-lg max-w-md justify-center">
              {variants.map((v) => (
                <button
                  key={v.id}
                  onClick={() => setHowItWorksVariant(v.id)}
                  className={`px-3 py-1 text-[10px] uppercase tracking-widest rounded-md transition-all ${howItWorksVariant === v.id ? 'bg-white shadow-sm font-bold text-accent' : 'text-slate-500 hover:text-slate-800'}`}
                  style={howItWorksVariant === v.id ? { color: colors.accent } : {}}
                >
                  {v.name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-stretch">
             <div className="md:col-span-8 flex items-stretch">
                <div className="w-2 bg-accent rounded-full mr-6" style={{ backgroundColor: colors.accent }}></div>
                <motion.div 
                  key={howItWorksVariant}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex-1 bg-slate-50 p-12 rounded-2xl shadow-sm overflow-hidden"
                >
                  {variants.find(v => v.id === howItWorksVariant)?.content}
                </motion.div>
             </div>
             <div className="md:col-span-4">
                <div className="w-full aspect-[3/4] rounded-2xl bg-white border-2 border-dashed flex items-center justify-center transition-colors hover:border-accent/30" style={{ borderColor: colors.accentLight }}>
                   <Leaf className="w-20 h-20 opacity-20" style={{ color: colors.accent }} />
                </div>
             </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16" style={{ backgroundColor: colors.bgAlt }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: colors.text }}>Каталог продуктов</h2>
            <div className="w-24 h-0.5 mx-auto" style={{ backgroundColor: colors.accent }}></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product) => (
              <motion.div key={product.id} className="flex flex-row rounded-xl overflow-hidden card-shadow" style={{ backgroundColor: colors.cardBg, border: `1px solid ${colors.accentLight}` }}>
                <div className="w-[40%] aspect-[3/4] flex items-center justify-center flex-shrink-0" style={{ backgroundColor: colors.bgAlt }}>
                  <product.icon className="w-16 h-16 mx-auto mb-3" style={{ color: colors.accent }} />
                </div>
                <div className="w-[60%] p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="w-10 h-10 rounded-full flex items-center justify-center text-white text-base font-bold" style={{ backgroundColor: colors.accent }}>{product.id}</span>
                    <h3 className="text-2xl font-bold" style={{ color: colors.text }}>{product.name}</h3>
                  </div>
                  <p className="text-base leading-relaxed mb-6" style={{ color: colors.textSecondary }}>{product.description}</p>
                  <button className="px-6 py-3 text-base font-medium rounded-lg transition-all hover:scale-105 active-elevate-2" style={{ backgroundColor: colors.button, color: colors.buttonText }}>Подробнее</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16" style={{ backgroundColor: colors.bg }}>
        <div className="max-w-6xl xl:max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10" style={{ color: colors.text }}>Истории наших клиентов</h2>
          <div className="relative group">
            <Swiper 
              ref={swiperRef} 
              modules={[Navigation, Pagination]} 
              spaceBetween={20} 
              slidesPerView={1} 
              loop={true} 
              navigation={{ 
                nextEl: '.swiper-button-next-custom', 
                prevEl: '.swiper-button-prev-custom' 
              }} 
              breakpoints={{ 640: { slidesPerView: 2, spaceBetween: 24 } }} 
              className="px-4"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="rounded-2xl p-5 flex flex-col h-80 card-shadow" style={{ backgroundColor: colors.cardBg, border: `1px solid ${colors.accentLight}` }}>
                    <h3 className="font-bold text-base mb-1" style={{ color: colors.text }}>{testimonial.name}</h3>
                    <div className="text-sm mb-2" style={{ color: colors.textSecondary }}>{testimonial.city}</div>
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4" fill="#FFD700" color="#FFD700" />)}
                    </div>
                    <p className="leading-relaxed text-sm flex-1 overflow-hidden" style={{ color: colors.text }}>"{testimonial.text}"</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            
            <button 
              className="swiper-button-prev-custom absolute left-[-20px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all hover:scale-110 active:scale-95"
              style={{ backgroundColor: colors.cardBg, color: colors.accent, border: `1px solid ${colors.accentLight}` }}
              data-testid="button-testimonials-prev"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              className="swiper-button-next-custom absolute right-[-20px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all hover:scale-110 active:scale-95"
              style={{ backgroundColor: colors.cardBg, color: colors.accent, border: `1px solid ${colors.accentLight}` }}
              data-testid="button-testimonials-next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16" style={{ backgroundColor: colors.bgAlt }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10" style={{ color: colors.text }}>Вопросы и ответы</h2>
          <div className="space-y-4">
            {faqItems.map((item, idx) => (
              <motion.div key={idx} className="rounded-xl overflow-hidden card-shadow" style={{ backgroundColor: colors.cardBg, border: `1px solid ${colors.accentLight}` }}>
                <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full flex items-center justify-between p-5 text-left">
                  <span className="font-semibold pr-4" style={{ color: colors.text }}>{item.q}</span>
                  <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} style={{ color: colors.accent }} />
                </button>
                {openFaq === idx && (
                  <motion.div className="px-5 pb-5" style={{ borderTop: `1px dashed ${colors.accentLight}` }} initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}>
                    <p className="pt-4" style={{ color: colors.textSecondary }}>{item.a}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 relative overflow-hidden" style={{ background: colors.gradient }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Добро пожаловать в мир здоровья</h2>
          <p className="text-white/90 text-lg mb-8">Откройте для себя полный ассортимент продукции на нашем сайте.</p>
          <button className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-lg font-semibold transition-all hover:scale-105 bg-white shadow-lg active-elevate-2" style={{ color: colors.accent }}>
            Перейти в каталог <ExternalLink className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
