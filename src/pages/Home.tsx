import { useState, useRef } from "react";
import { ChevronDown, Star, ChevronLeft, ChevronRight, Leaf, Quote, Activity } from "lucide-react";
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
function ProductImage({ text = "Продукт", aspectRatio = "3/4", className = "", bgColor }: { text?: string; aspectRatio?: string; className?: string; bgColor: string }) {
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
              Каждый день we получаем благодарности от людей, которые вернули себе радость движения.
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
            <ProductImage text="Продукт" aspectRatio="3/4" className="shadow-xl rounded-2xl" bgColor={colors.accentLight} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const swiperRef = useRef<any>(null);

  const variants = [
    {
      id: 1,
      name: "Потоковая Регенерация",
      content: (
        <div className="h-full flex flex-col justify-center py-2 space-y-6">
          <div className="space-y-6">
            <h3 className="text-2xl font-light leading-tight" style={{ color: colors.text }}>
              Биорезонансная синергия и клеточный баланс
            </h3>
            <div className="space-y-4 text-sm leading-relaxed opacity-90" style={{ color: colors.textSecondary }}>
              <p>
                Наши wellness-продукты основаны на принципах биорезонансного воздействия и натурального восстановления организма. Процесс начинается с мягкого очищения на клеточном уровне, что подготавливает тело к глубокой регенерации. 
              </p>
              <p>
                Благодаря уникальному сочетанию природных компонентов и современных технологий, продукты активируют внутренние ресурсы здоровья, нормализуют обмен веществ и гармонизируют работу всех систем. Регулярное использование помогает не только устранить симптомы, но и воздействует на первопричину дискомфорта.
              </p>
              <p>
                Возвращая вам природную энергию и жизненный тонус, мы создаем условия для естественного долголетия и высокого качества жизни в любом возрасте. Все компоненты подобраны с учетом синергического эффекта.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 pt-6 border-t" style={{ borderColor: colors.accentLight }}>
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-[0.2em] opacity-40" style={{ color: colors.textSecondary }}>Биодоступность</span>
                <p className="text-xs font-medium" style={{ color: colors.text }}>98% активного усвоения тканями.</p>
              </div>
              <div className="space-y-1 text-right">
                <span className="text-[10px] uppercase tracking-[0.2em] opacity-40" style={{ color: colors.textSecondary }}>Метод</span>
                <p className="text-xs font-medium" style={{ color: colors.text }}>Квантовая активация клеток.</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const [ctaVariant, setCtaVariant] = useState(1);

  const ctaVariants = [
    {
      id: 1,
      name: "Modern Wellness Hub",
      content: (
        <div className="w-full bg-[#f8faf8] border-t border-slate-100 py-16">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.text }}>Ваше путешествие к здоровью начинается здесь</h2>
              <p className="text-lg opacity-70 mb-8" style={{ color: colors.textSecondary }}>Присоединяйтесь к сообществу людей, выбравших осознанный путь к долголетию.</p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 rounded-xl font-bold shadow-lg hover-elevate active-elevate-2 transition-all" style={{ backgroundColor: colors.button, color: colors.buttonText }}>В каталог магазина</button>
                <button className="px-8 py-4 rounded-xl font-bold border-2 transition-all hover:bg-slate-50" style={{ borderColor: colors.accent, color: colors.accent }}>О продуктах</button>
              </div>
            </div>
            <div className="flex flex-col gap-4 text-sm opacity-60">
              <div className="flex items-center gap-2 font-bold uppercase tracking-widest text-xs mb-2">Навигация</div>
              <a href="#" className="hover:text-accent transition-colors">Главная</a>
              <a href="#catalog" className="hover:text-accent transition-colors">Продукты</a>
              <a href="#" className="hover:text-accent transition-colors">Доставка</a>
              <a href="#" className="hover:text-accent transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      name: "Nature's Whisper",
      content: (
        <div className="w-full bg-[#eef4ee] py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <Leaf className="w-12 h-12 mx-auto mb-8 opacity-20" style={{ color: colors.accent }} />
            <h2 className="text-4xl font-serif italic mb-6" style={{ color: colors.text }}>Энергия природы в каждом движении</h2>
            <p className="text-xl mb-10 opacity-80" style={{ color: colors.textSecondary }}>Откройте для себя силу натуральных компонентов.</p>
            <button className="px-12 py-5 bg-black text-white rounded-full font-bold text-lg hover:bg-accent transition-all shadow-2xl">Смотреть каталог</button>
            <div className="mt-16 pt-8 border-t border-black/5 grid grid-cols-3 gap-8 text-xs uppercase tracking-[0.2em] opacity-40">
              <div>Экологичность</div>
              <div>Традиции</div>
              <div>Инновации</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      name: "Dark Transformation",
      content: (
        <div className="w-full bg-[#1a2e1f] py-24 text-white">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">Готовы изменить жизнь сегодня?</h2>
              <p className="text-xl opacity-60">Наши решения проверены временем и тысячами довольных клиентов по всей стране.</p>
            </div>
            <div className="md:w-1/3 flex flex-col gap-6">
              <button className="w-full py-5 bg-white text-[#1a2e1f] rounded-none font-black text-xl hover:bg-accent hover:text-white transition-all">МАГАЗИН</button>
              <p className="text-xs text-center opacity-40 uppercase tracking-widest">Бесплатная консультация доступна 24/7</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 4,
      name: "Geometric Grid",
      content: (
        <div className="w-full border-t border-slate-100">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-full">
            <div className="p-12 bg-white flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-50">
              <Activity className="w-8 h-8 text-accent mb-4" />
              <div className="font-bold">Эффективность</div>
            </div>
            <div className="p-12 bg-[#f4f9f5] flex flex-col justify-center gap-6 col-span-1 md:col-span-2">
              <h2 className="text-2xl font-bold">Выберите свой путь к совершенству</h2>
              <button className="self-start px-8 py-3 bg-accent text-white font-bold rounded-lg" onClick={() => window.location.hash = 'catalog'}>В каталог</button>
            </div>
            <div className="p-12 bg-black text-white flex items-end">
              <div className="text-4xl font-black">2026</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 5,
      name: "Minimalist Border",
      content: (
        <div className="w-full py-16 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="border-[1px] border-slate-200 p-12 md:p-20 flex flex-col items-center text-center gap-8">
              <div className="text-xs uppercase tracking-[0.5em] opacity-40">Next Step</div>
              <h2 className="text-3xl md:text-5xl font-light" style={{ color: colors.text }}>Почувствуйте разницу уже сегодня</h2>
              <button className="mt-4 px-12 py-4 border-b-2 border-accent text-accent font-bold uppercase tracking-widest hover:opacity-60 transition-opacity">Перейти в магазин</button>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 6,
      name: "Split Experience",
      content: (
        <div className="w-full h-[400px] flex flex-col md:flex-row">
          <div className="flex-1 bg-accent/5 p-16 flex flex-col justify-center items-center text-center">
            <h3 className="text-xl font-bold mb-4">Для новичков</h3>
            <p className="text-sm opacity-60 mb-6">Начните с наших базовых наборов для очищения</p>
            <button className="px-6 py-2 border border-accent text-accent font-bold rounded-full text-xs uppercase tracking-wider">Начать путь</button>
          </div>
          <div className="flex-1 bg-accent p-16 flex flex-col justify-center items-center text-center text-white">
            <h3 className="text-xl font-bold mb-4">Для профессионалов</h3>
            <p className="text-white/70 text-sm mb-6">Продвинутые системы биорезонансной терапии</p>
            <button className="px-6 py-2 bg-white text-accent font-bold rounded-full text-xs uppercase tracking-wider">В каталог</button>
          </div>
        </div>
      )
    },
    {
      id: 7,
      name: "Gradient Flow",
      content: (
        <div className="w-full py-24 relative overflow-hidden" style={{ background: colors.gradient }}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="max-w-4xl mx-auto px-6 text-center text-white relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Ваше тело заслуживает лучшего</h2>
            <button className="px-16 py-5 bg-white text-accent rounded-2xl font-black text-2xl shadow-2xl hover:scale-105 active:scale-95 transition-transform" onClick={() => window.location.hash = 'catalog'}>В МАГАЗИН</button>
          </div>
        </div>
      )
    },
    {
      id: 8,
      name: "Social Trust",
      content: (
        <div className="w-full bg-[#f8faf8] py-16 border-t border-slate-100">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div>
                <div className="flex -space-x-4 mb-4">
                  {[1,2,3,4,5].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 overflow-hidden">
                      <div className="w-full h-full bg-accent/20 flex items-center justify-center text-accent text-xs font-bold">{i}</div>
                    </div>
                  ))}
                </div>
                <h2 className="text-2xl font-bold mb-2">10,000+ довольных клиентов</h2>
                <p className="opacity-60">Присоединяйтесь к тем, кто уже вернул себе здоровье</p>
              </div>
              <button className="px-12 py-4 bg-accent text-white rounded-xl font-bold text-lg hover-elevate shadow-xl" onClick={() => window.location.hash = 'catalog'}>Выбрать продукт</button>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 9,
      name: "Bento Layout",
      content: (
        <div className="w-full py-12 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
            <div className="md:col-span-2 bg-[#f4f9f5] rounded-3xl p-8 flex flex-col justify-end">
              <h2 className="text-2xl font-bold mb-2">Натуральность</h2>
              <p className="text-sm opacity-60">100% природных компонентов в каждом изделии</p>
            </div>
            <div className="bg-accent rounded-3xl p-8 flex flex-col justify-between text-white cursor-pointer hover:opacity-90" onClick={() => window.location.hash = 'catalog'}>
              <div className="font-bold uppercase tracking-widest text-xs">Магазин</div>
              <ChevronRight className="w-10 h-10" />
            </div>
            <div className="bg-black text-white rounded-3xl p-8 flex items-center justify-center text-center">
              <div className="text-xs uppercase tracking-[0.4em]">Биорезонанс 2026</div>
            </div>
            <div className="md:col-span-2 bg-slate-50 rounded-3xl p-8 flex items-center justify-between">
              <h2 className="text-xl font-bold">Остались вопросы?</h2>
              <button className="px-6 py-2 border-2 border-black rounded-full font-bold text-sm">Связаться</button>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 10,
      name: "Floating Action",
      content: (
        <div className="w-full py-20 bg-white">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <div className="inline-block p-1 px-4 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest mb-6">Limited Edition</div>
            <h2 className="text-4xl font-bold mb-6">Эксклюзивная коллекция Wellness 2026</h2>
            <p className="text-lg opacity-60 mb-10">Только в этом сезоне — специальные наборы для комплексного восстановления.</p>
            <button className="px-12 py-5 bg-accent text-white rounded-2xl font-black text-xl hover:shadow-2xl hover:shadow-accent/40 transition-all active:scale-95" onClick={() => window.location.hash = 'catalog'}>ЗАБРАТЬ СВОЙ НАБОР</button>
          </div>
        </div>
      )
    },
    {
      id: 11,
      name: "Technical Specs",
      content: (
        <div className="w-full bg-[#eef4ee] py-16">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-end gap-12">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold mb-8">Научный подход к вашему комфорту</h2>
              <div className="grid grid-cols-2 gap-8 text-sm">
                <div>
                  <div className="font-black text-accent mb-1">ISO 9001</div>
                  <div className="opacity-60 font-medium">Международный стандарт качества</div>
                </div>
                <div>
                  <div className="font-black text-accent mb-1">Eco-Cert</div>
                  <div className="opacity-60 font-medium">Чистота и безопасность материалов</div>
                </div>
              </div>
            </div>
            <button className="px-10 py-10 bg-white border-4 border-accent rounded-full text-accent font-black text-center hover:bg-accent hover:text-white transition-all leading-tight" onClick={() => window.location.hash = 'catalog'}>В КАТАЛОГ<br/>МАГАЗИНА</button>
          </div>
        </div>
      )
    },
    {
      id: 12,
      name: "Serene Minimal",
      content: (
        <div className="w-full py-32 bg-[#f8faf8] text-center">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-5xl font-light mb-12 tracking-tight" style={{ color: colors.text }}>Простота. Здоровье. Вы.</h2>
            <button className="text-accent font-black text-2xl border-b-4 border-accent pb-2 hover:opacity-50 transition-opacity" onClick={() => window.location.hash = 'catalog'}>Перейти в каталог</button>
          </div>
        </div>
      )
    },
    {
      id: 13,
      name: "Dynamic Banner",
      content: (
        <div className="w-full bg-black py-12 overflow-hidden whitespace-nowrap border-y border-white/10">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex gap-20 text-white text-6xl font-black opacity-20"
          >
            <span>WELLNESS 2026</span>
            <span>PURE ENERGY</span>
            <span>HEALTH FIRST</span>
            <span>NATURE POWER</span>
          </motion.div>
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="px-16 py-6 bg-white text-black font-black text-2xl rounded-full hover:bg-accent hover:text-white transition-all shadow-2xl" onClick={() => window.location.hash = 'catalog'}>КАТАЛОГ</button>
          </div>
        </div>
      )
    },
    {
      id: 14,
      name: "Classic Footnote",
      content: (
        <div className="w-full bg-white border-t border-slate-100 pt-20 pb-10">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <Leaf className="text-accent w-6 h-6" />
                  <span className="font-black text-xl uppercase tracking-tighter">Wellness</span>
                </div>
                <p className="max-w-xs opacity-50 text-sm">Мы верим в силу природы и инноваций, создавая продукты, которые меняют жизни.</p>
              </div>
              <div className="grid grid-cols-2 gap-20">
                <div className="flex flex-col gap-3 text-sm">
                  <div className="font-bold mb-2">Магазин</div>
                  <a href="#catalog" className="opacity-60 hover:text-accent transition-colors">Каталог</a>
                  <a href="#" className="opacity-60 hover:text-accent transition-colors">Бестселлеры</a>
                  <a href="#" className="opacity-60 hover:text-accent transition-colors">Новинки</a>
                </div>
                <div className="flex flex-col gap-3 text-sm">
                  <div className="font-bold mb-2">Помощь</div>
                  <a href="#" className="opacity-60 hover:text-accent transition-colors">FAQ</a>
                  <a href="#" className="opacity-60 hover:text-accent transition-colors">Доставка</a>
                  <a href="#" className="opacity-60 hover:text-accent transition-colors">Возврат</a>
                </div>
              </div>
              <button className="px-8 py-3 bg-black text-white font-bold rounded-lg hover:bg-accent transition-colors" onClick={() => window.location.hash = 'catalog'}>Перейти в магазин</button>
            </div>
            <div className="text-center text-[10px] uppercase tracking-[0.5em] opacity-20">© 2026 Все права защищены</div>
          </div>
        </div>
      )
    },
    {
      id: 15,
      name: "The Final Statement",
      content: (
        <div className="w-full bg-accent py-24 text-white text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-5xl md:text-7xl font-black mb-12 italic leading-none uppercase tracking-tighter">Сделай шаг к новой версии себя</h2>
            <button className="px-20 py-6 bg-white text-accent rounded-full font-black text-2xl hover:bg-black hover:text-white transition-all shadow-2xl" onClick={() => window.location.hash = 'catalog'}>В КАТАЛОГ</button>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.bg }}>
      {/* Switcher UI in Dev Mode - Fixed at bottom */}
      <div className="fixed bottom-4 left-4 z-[100] bg-white/80 backdrop-blur-md p-2 rounded-lg shadow-xl border border-slate-200 flex gap-2">
        <select 
          className="text-xs p-1 rounded border border-slate-300 outline-none"
          value={ctaVariant}
          onChange={(e) => setCtaVariant(Number(e.target.value))}
        >
          {ctaVariants.map(v => (
            <option key={v.id} value={v.id}>{v.name}</option>
          ))}
        </select>
      </div>
      <HeroSection />

      {/* How it Works Section */}
      <section className="py-20 md:py-28" style={{ backgroundColor: colors.bg }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.text }}>
              Как это <span style={{ color: colors.accent }}>работает</span>
            </h2>
            <div className="w-24 h-1 mx-auto rounded-full" style={{ background: colors.gradient }}></div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-sm border" style={{ backgroundColor: colors.cardBg, borderColor: colors.accentLight }}>
            <div className="flex flex-col md:flex-row items-stretch">
              <div className="w-full md:w-5/12 shrink-0">
                <div className="aspect-[4/5] h-full">
                  <SmartImage
                    sources={getImageSources('how-it-works', 1)}
                    alt="How it works"
                    className="w-full h-full object-cover"
                    placeholderContent={
                      <div className="w-full h-full flex items-center justify-center bg-slate-50">
                        <Activity className="w-14 h-14 text-slate-300" />
                      </div>
                    }
                  />
                </div>
              </div>
              <div className="w-full md:w-7/12 p-10 md:p-16 flex flex-col justify-center">
                {variants[0].content}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-12 md:py-16" style={{ backgroundColor: colors.bgAlt }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.text }}>
              Каталог <span style={{ color: colors.accent }}>продуктов</span>
            </h2>
            <div className="w-24 h-1 mx-auto rounded-full" style={{ background: colors.gradient }}></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 max-w-6xl mx-auto px-4 md:px-0">
            {products.map((product) => (
              <motion.div 
                key={product.id} 
                className="flex flex-col md:flex-row rounded-xl overflow-hidden card-shadow scale-[0.9] origin-center mb-0 md:mb-0 relative" 
                style={{ backgroundColor: colors.cardBg, border: `1px solid ${colors.accentLight}`, zIndex: 1 }}
              >
                <div className="w-full md:w-[40%] shrink-0" style={{ backgroundColor: colors.bgAlt }}>
                  <div className="w-full aspect-[3/4] flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                      <product.icon className="w-full h-full max-w-[4rem] max-h-[4rem]" style={{ color: colors.accent }} />
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-[60%] p-6 md:p-8 flex flex-col justify-center">
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

      {/* Testimonials Section */}
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

      {/* FAQ Section */}
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

      {/* Footer Section */}
      <footer className="w-full border-t border-slate-200/50">
        {ctaVariants.find(v => v.id === ctaVariant)?.content}
      </footer>
    </div>
  );
}
