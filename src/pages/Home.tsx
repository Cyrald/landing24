import { useState, useRef } from "react";
import { ChevronDown, ExternalLink, Star, ChevronLeft, ChevronRight, Leaf, Quote, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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

// --- How It Works Typography Variants (50 Unique Designs) ---
const howItWorksVariants = Array.from({ length: 50 }, (_, i) => {
  const id = i + 1;
  const styles = [
    { name: "Чистый холст", wrapper: "p-0", p: "text-xl font-light", accent: "" },
    { name: "Левый акцент", wrapper: "border-l-4 pl-10", p: "text-lg italic", accent: "border-accent" },
    { name: "Мягкая тень", wrapper: "bg-white p-10 rounded-3xl shadow-sm", p: "text-lg", accent: "" },
    { name: "Градиентный штрих", wrapper: "relative pl-8", p: "text-xl font-medium", accent: "before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1.5 before:bg-gradient-to-b before:from-accent before:to-transparent" },
    { name: "Журнальная буквица", wrapper: "p-0", p: "text-lg leading-relaxed first-letter:text-6xl first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:text-accent", accent: "" },
    { name: "Стеклянная подложка", wrapper: "bg-white/40 backdrop-blur-md p-12 rounded-[2rem] border border-white/60", p: "text-lg font-medium", accent: "" },
    { name: "Дзен-пустота", wrapper: "p-0 text-center md:text-left", p: "text-2xl font-extralight tracking-tight", accent: "" },
    { name: "Тонкая рамка", wrapper: "border-2 p-8 rounded-2xl", p: "text-lg", accent: "border-accent-light/30" },
    { name: "Акцент на фразах", wrapper: "p-0", p: "text-lg leading-loose selection:bg-accent selection:text-white", accent: "" },
    { name: "Классический Serif", wrapper: "p-0", p: "text-xl font-serif italic", accent: "" },
    { name: "Современный Mono", wrapper: "bg-slate-50 p-8 rounded-xl", p: "text-base font-mono", accent: "" },
    { name: "Цитатный блок", wrapper: "relative py-10", p: "text-xl leading-relaxed italic before:content-['“'] before:text-8xl before:absolute before:-left-10 before:-top-6 before:opacity-10", accent: "before:text-accent" },
    { name: "Двойная линия", wrapper: "border-y-2 py-12", p: "text-lg font-medium tracking-wide", accent: "border-accent-light/20" },
    { name: "Эфирный свет", wrapper: "p-0 opacity-80", p: "text-xl font-light tracking-widest uppercase", accent: "" },
    { name: "Органический шум", wrapper: "bg-accent/5 p-10 rounded-[3rem] border-2 border-white", p: "text-lg font-medium", accent: "" },
    { name: "Минимал Текст", wrapper: "p-0", p: "text-lg underline decoration-accent/30 decoration-4 underline-offset-8", accent: "" },
    { name: "Геометрический ритм", wrapper: "p-12 bg-white/80 rounded-tr-[5rem] rounded-bl-[5rem] card-shadow", p: "text-lg", accent: "" },
    { name: "Теневой фокус", wrapper: "p-0", p: "text-xl font-bold drop-shadow-sm", accent: "" },
    { name: "Природный контраст", wrapper: "bg-accent-dark text-white p-12 rounded-3xl", p: "text-lg opacity-90", accent: "" },
    { name: "Золотое сечение", wrapper: "max-w-md", p: "text-lg leading-relaxed font-medium", accent: "" },
    { name: "Пульсация цвета", wrapper: "p-0", p: "text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent-dark", accent: "" },
    { name: "Мягкий курсив", wrapper: "p-0 border-b-4 pb-6", p: "text-xl italic", accent: "border-accent-light/20" },
    { name: "Брутализм", wrapper: "border-4 p-8 shadow-[10px_10px_0px_0px_rgba(61,107,79,0.1)]", p: "text-lg font-bold uppercase", accent: "border-accent" },
    { name: "Шепот леса", wrapper: "p-0", p: "text-lg font-light tracking-tight opacity-70", accent: "" },
    { name: "Акцентный заголовок", wrapper: "space-y-4", p: "text-lg leading-relaxed", accent: "before:content-['ПРОЦЕСС'] before:text-xs before:font-bold before:tracking-[0.3em] before:text-accent" },
    { name: "Тонкий штрих", wrapper: "border-t-2 pt-10", p: "text-lg font-medium", accent: "border-accent-light" },
    { name: "Эстетика велнеса", wrapper: "p-10 bg-accent-light/10 rounded-2xl flex items-center", p: "text-lg italic font-light", accent: "" },
    { name: "Глубокое дыхание", wrapper: "p-0", p: "text-3xl font-extrabold tracking-tighter leading-none", accent: "text-accent-dark" },
    { name: "Природный кристалл", wrapper: "p-8 border-2 rounded-lg", p: "text-lg font-semibold", accent: "border-accent/20 shadow-inner" },
    { name: "Лесной туман", wrapper: "bg-gradient-to-r from-white to-transparent p-10", p: "text-lg font-medium italic", accent: "" },
    { name: "Вертикальный акцент", wrapper: "flex gap-6", p: "text-lg", accent: "before:content-[''] before:w-1 before:h-20 before:bg-accent" },
    { name: "Современная антиква", wrapper: "p-0", p: "text-xl font-serif leading-loose", accent: "" },
    { name: "Минимал лофт", wrapper: "bg-slate-100/50 p-12 rounded", p: "text-base font-mono tracking-tight", accent: "" },
    { name: "Атмосфера покоя", wrapper: "p-0", p: "text-xl font-light leading-snug", accent: "text-textSecondary" },
    { name: "Гармония сфер", wrapper: "p-16 border-2 border-dashed rounded-full aspect-square flex items-center justify-center text-center", p: "text-base", accent: "border-accent/30" },
    { name: "Чистый ритм", wrapper: "p-0 space-y-6", p: "text-lg leading-relaxed", accent: "after:content-[''] after:block after:w-12 after:h-1 after:bg-accent" },
    { name: "Элегантный шлейф", wrapper: "bg-gradient-to-b from-white/80 to-transparent p-10 rounded-t-3xl", p: "text-lg font-medium", accent: "" },
    { name: "Теневой брутализм", wrapper: "bg-white p-8 border-2 shadow-[4px_4px_0px_0px_black]", p: "text-lg", accent: "border-black" },
    { name: "Природная симметрия", wrapper: "p-0 text-center", p: "text-lg font-medium tracking-wide", accent: "" },
    { name: "Журнальный сплин", wrapper: "columns-2 gap-8", p: "text-sm leading-relaxed", accent: "" },
    { name: "Акцент на деталях", wrapper: "p-0", p: "text-lg leading-relaxed", accent: "first-line:text-accent first-line:font-bold" },
    { name: "Мягкий контур", wrapper: "p-10 border-2 rounded-[4rem]", p: "text-lg italic", accent: "border-accent-light/10" },
    { name: "Эфирный Mono", wrapper: "p-0", p: "text-base font-mono uppercase tracking-widest opacity-60", accent: "" },
    { name: "Природный паттерн", wrapper: "bg-white p-12 shadow-2xl rounded-none border-l-8", p: "text-xl font-light", accent: "border-accent" },
    { name: "Минимал Шик", wrapper: "p-0", p: "text-4xl font-thin tracking-tighter leading-tight", accent: "" },
    { name: "Лесной контраст", wrapper: "bg-accent p-12 text-white rounded-tr-[10rem]", p: "text-lg font-medium", accent: "" },
    { name: "Эстетика тишины", wrapper: "p-0 opacity-40 hover:opacity-100 transition-opacity duration-1000", p: "text-lg italic", accent: "" },
    { name: "Золотое сечение 2", wrapper: "p-14 border-4 border-double", p: "text-lg font-serif", accent: "border-accent-light/20" },
    { name: "Акцентный Serif", wrapper: "p-0", p: "text-2xl font-serif font-bold italic text-accent-dark", accent: "" },
    { name: "Финальная гармония", wrapper: "p-12 bg-white/90 backdrop-blur-2xl rounded-3xl border border-white card-shadow", p: "text-xl font-light leading-relaxed", accent: "" },
  ][i];

  return {
    id,
    name: styles.name,
    wrapperClass: styles.wrapper,
    pClass: styles.p,
    accentClass: styles.accent,
    pStyle: { color: !styles.p.includes('text-') ? (id % 2 === 0 ? colors.textSecondary : colors.text) : undefined }
  };
});

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [variantIndex, setVariantIndex] = useState(0);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const swiperRef = useRef<any>(null);

  const v = howItWorksVariants[variantIndex];

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.bg }}>
      <HeroSection />

      {/* Панель выбора (50 вариантов) */}
      <div className="fixed bottom-4 left-4 z-[100]">
        <motion.div 
          className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border p-4 w-72"
          animate={{ height: isPanelOpen ? "400px" : "56px" }}
        >
          <button 
            onClick={() => setIsPanelOpen(!isPanelOpen)}
            className="flex items-center justify-between w-full mb-2 font-bold text-sm uppercase tracking-wider opacity-60 hover:opacity-100"
          >
            <span>Дизайн текста (Вариант {v.id})</span>
            {isPanelOpen ? <ChevronDown size={18} /> : <ChevronUp size={18} />}
          </button>
          
          <AnimatePresence>
            {isPanelOpen && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-5 gap-2 pt-2 h-[320px] overflow-y-auto pr-2 custom-scrollbar"
              >
                {howItWorksVariants.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => setVariantIndex(idx)}
                    className={`w-10 h-10 rounded-lg text-xs font-bold transition-all flex-shrink-0 ${variantIndex === idx ? 'bg-black text-white scale-110 shadow-lg' : 'bg-slate-100 hover:bg-slate-200 text-slate-600'}`}
                  >
                    {item.id}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      <section className="py-10 md:py-14" style={{ backgroundColor: colors.bg }}>
        <div className="max-w-6xl xl:max-w-7xl mx-auto px-6 lg:px-8">
          <motion.h2 className="text-2xl md:text-3xl font-bold text-center mb-10" style={{ color: colors.text }}>
            Как это работает
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            {/* ТЕКСТ СЛЕВА */}
            <motion.div 
              key={`text-${variantIndex}`}
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }} 
              className={`md:col-span-7 flex flex-col justify-center transition-all duration-500 ${v.wrapperClass}`}
            >
              <div className={v.accentClass}>
                <p 
                  className={`leading-relaxed transition-all duration-500 ${v.pClass}`}
                  style={v.pStyle}
                >
                  Наши wellness-продукты основаны на принципах биорезонансного воздействия и натурального восстановления организма. 
                  Процесс начинается с мягкого очищения на клеточном уровне, что подготавливает тело к глубокой регенерации. 
                  Благодаря уникальному сочетанию природных компонентов и современных технологий, продукты активируют внутренние 
                  ресурсы здоровья, нормализуют обмен веществ и гармонизируют работу всех систем. Регулярное использование 
                  помогает не только устранить симптомы, но и воздействует на первопричину дискомфорта, возвращая вам 
                  природную энергию и жизненный тонус.
                </p>
              </div>
            </motion.div>
            
            {/* КАРТИНКА СПРАВА (ФИКСИРОВАННАЯ) */}
            <div className="md:col-span-5 w-full flex items-center justify-center">
              <motion.div 
                className="w-full aspect-[3/4] flex items-center justify-center rounded-xl transition-all duration-300 shadow-sm hover:shadow-[0_20px_50px_rgba(61,107,79,0.15)] bg-white p-4 scale-[0.83]"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <div className="w-full h-full flex items-center justify-center bg-accent-light/5 rounded-lg border border-accent-light/10">
                  <Leaf className="w-20 h-20 opacity-20" style={{ color: colors.accent }} />
                </div>
              </motion.div>
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
