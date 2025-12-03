import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ChevronDown, Leaf, Shield, Clock, Sparkles, Star, Check, Heart, Droplets, Sun, TreePine, Flower2, Mountain, ArrowRight, Quote, Users, Award, Target, Zap } from "lucide-react";
import { SmartImage } from "./SmartImage";
import { getImageSources } from "../utils/imageLoader";

const softGreen = {
  50: "#f0f7f3",
  100: "#dff1e3",
  200: "#b7e0c2",
  300: "#8fcf9f",
  400: "#6bbc82",
  500: "#5fa97a",
  600: "#4d8e64",
  700: "#3d7250",
  800: "#2d5a3d",
  900: "#1d422a",
};

const warmEarth = {
  50: "#faf8f5",
  100: "#f5f0e8",
  200: "#e8dcc8",
  300: "#d4c4a8",
  400: "#bfa882",
  500: "#a68c5b",
  600: "#8a7349",
  700: "#6e5a3a",
  800: "#52422c",
  900: "#372b1d",
};

const heroVariantNames = [
  "1. Классический Split",
  "2. Полноэкранный Overlay",
  "3. Ассиметричный",
  "4. Карточный Hero",
  "5. Минималистичный",
  "6. Видео Placeholder",
  "7. Сетка продуктов",
  "8. Диагональный Split",
  "9. Стековый/Layered",
  "10. Интерактивный Slider",
  "11. Центральный Продукт",
  "12. Левый Акцент",
  "13. Правый Акцент",
  "14. Верхний Продукт",
  "15. Нижний Продукт",
  "16. Плавающий Продукт",
  "17. Двойной Ракурс",
  "18. Продукт в Применении",
  "19. До/После",
  "20. Продукт + Ингредиенты",
  "21. Утренняя Роса",
  "22. Закатное Тепло",
  "23. Лесная Тишина",
  "24. Травяной Луг",
  "25. Речная Прохлада",
  "26. Горный Воздух",
  "27. Берёзовая Роща",
  "28. Полевые Травы",
  "29. Дождевая Капля",
  "30. Солнечный Свет",
  "31. История Исцеления",
  "32. Забота о Себе",
  "33. Мудрость Предков",
  "34. Путь к Здоровью",
  "35. Природная Сила",
  "36. Баланс Тела",
  "37. Тихое Облегчение",
  "38. Доверие Веков",
  "39. Простое Решение",
  "40. Живая Энергия",
];

const TOTAL_VARIANTS = 40;

interface HeroProps {
  variant?: number;
  onVariantChange?: (variant: number) => void;
  showSelector?: boolean;
}

function HeroImagePlaceholder({ text, aspectRatio = "16/9", className = "" }: { text: string; aspectRatio?: string; className?: string }) {
  return (
    <div
      className={`w-full rounded-xl overflow-hidden ${className}`}
      style={{ aspectRatio, backgroundColor: softGreen[300] }}
    >
      <SmartImage
        sources={getImageSources('hero-main', 1)}
        alt={text}
        className="w-full h-full object-cover"
        placeholderContent={
          <div className="w-full h-full flex flex-col items-center justify-center gap-2">
            <Leaf className="w-12 h-12 text-white/80" />
            <span className="text-white text-lg font-medium">{text}</span>
          </div>
        }
      />
    </div>
  );
}

function ProductImage({ text = "Продукт", aspectRatio = "1/1", className = "", bgColor = softGreen[200] }: { text?: string; aspectRatio?: string; className?: string; bgColor?: string }) {
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

function HeroSelector({ currentVariant, onSelect }: { currentVariant: number; onSelect: (v: number) => void }) {
  const [isOpen, setIsOpen] = useState(false);

  const goToPrev = () => {
    const newVariant = currentVariant === 1 ? TOTAL_VARIANTS : currentVariant - 1;
    onSelect(newVariant);
  };

  const goToNext = () => {
    const newVariant = currentVariant === TOTAL_VARIANTS ? 1 : currentVariant + 1;
    onSelect(newVariant);
  };

  return (
    <div className="w-full py-4 px-4 flex items-center justify-center gap-4 sticky top-0 z-[100]" style={{ backgroundColor: softGreen[700], minHeight: '60px' }}>
      <button
        onClick={goToPrev}
        className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
        data-testid="button-hero-prev"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-3 px-5 py-2.5 rounded-xl bg-white/20 text-white font-semibold transition-all hover:bg-white/30"
          data-testid="button-hero-selector"
        >
          <Leaf className="w-5 h-5" />
          <span>Hero {currentVariant}/{TOTAL_VARIANTS}: {heroVariantNames[currentVariant - 1].replace(/^\d+\.\s*/, '')}</span>
          <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-96 bg-white rounded-xl shadow-2xl border overflow-hidden z-50"
              style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}
            >
              <div className="p-3 border-b bg-gray-50">
                <span className="text-sm font-bold text-gray-700">Выберите дизайн Hero блока</span>
              </div>
              <div className="max-h-96 overflow-y-auto">
                <div className="p-2 border-b bg-gray-50/50">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Оригинальные (1-10)</span>
                </div>
                {heroVariantNames.slice(0, 10).map((name, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      onSelect(idx + 1);
                      setIsOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-sm transition-all flex items-center gap-3 ${
                      currentVariant === idx + 1
                        ? 'text-white font-semibold'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    style={currentVariant === idx + 1 ? { backgroundColor: softGreen[500] } : {}}
                    data-testid={`button-hero-variant-${idx + 1}`}
                  >
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                      currentVariant === idx + 1 ? 'bg-white/30' : 'bg-gray-200'
                    }`}>
                      {idx + 1}
                    </span>
                    <span className="truncate">{name.replace(/^\d+\.\s*/, '')}</span>
                  </button>
                ))}
                <div className="p-2 border-b border-t bg-gray-50/50">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Фокус на продукте (11-20)</span>
                </div>
                {heroVariantNames.slice(10, 20).map((name, idx) => (
                  <button
                    key={idx + 10}
                    onClick={() => {
                      onSelect(idx + 11);
                      setIsOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-sm transition-all flex items-center gap-3 ${
                      currentVariant === idx + 11
                        ? 'text-white font-semibold'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    style={currentVariant === idx + 11 ? { backgroundColor: softGreen[500] } : {}}
                    data-testid={`button-hero-variant-${idx + 11}`}
                  >
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                      currentVariant === idx + 11 ? 'bg-white/30' : 'bg-emerald-100'
                    }`}>
                      {idx + 11}
                    </span>
                    <span className="truncate">{name.replace(/^\d+\.\s*/, '')}</span>
                  </button>
                ))}
                <div className="p-2 border-b border-t bg-gray-50/50">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Природная эстетика (21-30)</span>
                </div>
                {heroVariantNames.slice(20, 30).map((name, idx) => (
                  <button
                    key={idx + 20}
                    onClick={() => {
                      onSelect(idx + 21);
                      setIsOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-sm transition-all flex items-center gap-3 ${
                      currentVariant === idx + 21
                        ? 'text-white font-semibold'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    style={currentVariant === idx + 21 ? { backgroundColor: softGreen[500] } : {}}
                    data-testid={`button-hero-variant-${idx + 21}`}
                  >
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                      currentVariant === idx + 21 ? 'bg-white/30' : 'bg-green-100'
                    }`}>
                      {idx + 21}
                    </span>
                    <span className="truncate">{name.replace(/^\d+\.\s*/, '')}</span>
                  </button>
                ))}
                <div className="p-2 border-b border-t bg-gray-50/50">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Эмоциональное (31-40)</span>
                </div>
                {heroVariantNames.slice(30, 40).map((name, idx) => (
                  <button
                    key={idx + 30}
                    onClick={() => {
                      onSelect(idx + 31);
                      setIsOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-sm transition-all flex items-center gap-3 ${
                      currentVariant === idx + 31
                        ? 'text-white font-semibold'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    style={currentVariant === idx + 31 ? { backgroundColor: softGreen[500] } : {}}
                    data-testid={`button-hero-variant-${idx + 31}`}
                  >
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                      currentVariant === idx + 31 ? 'bg-white/30' : 'bg-amber-100'
                    }`}>
                      {idx + 31}
                    </span>
                    <span className="truncate">{name.replace(/^\d+\.\s*/, '')}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      <button
        onClick={goToNext}
        className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
        data-testid="button-hero-next"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}

// ============================================
// ОРИГИНАЛЬНЫЕ HERO СЕКЦИИ (1-10)
// ============================================

function Hero1ClassicSplit() {
  return (
    <section className="py-12 md:py-20" style={{ background: `linear-gradient(135deg, ${softGreen[50]} 0%, white 100%)` }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
                style={{ backgroundColor: softGreen[100], color: softGreen[700] }}
              >
                <Leaf className="w-4 h-4" />
                Сила природы для здоровья
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Древние традиции
                <span className="block" style={{ color: softGreen[600] }}>исцеления</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
                Вековые рецепты народной медицины, бережно сохранённые и усовершенствованные для современного человека.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  className="px-8 py-4 rounded-lg text-white font-semibold text-lg transition-transform hover:scale-105"
                  style={{ backgroundColor: softGreen[600] }}
                  data-testid="button-hero-catalog"
                >
                  Смотреть каталог
                </button>
                <button
                  className="px-8 py-4 rounded-lg font-semibold text-lg border-2 transition-all hover:bg-gray-50"
                  style={{ borderColor: softGreen[300], color: softGreen[700] }}
                  data-testid="button-hero-learn"
                >
                  Узнать больше
                </button>
              </div>
            </motion.div>
          </div>
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <HeroImagePlaceholder text="Главное изображение" aspectRatio="4/5" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Hero2FullscreenOverlay() {
  return (
    <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="w-full h-full"
          style={{ backgroundColor: softGreen[400] }}
        >
          <SmartImage
            sources={getImageSources('hero-fullscreen', 1)}
            alt="Hero background"
            className="w-full h-full object-cover"
            placeholderContent={
              <div className="w-full h-full flex items-center justify-center">
                <Leaf className="w-24 h-24 text-white/30" />
              </div>
            }
          />
        </div>
        <div 
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%)' }}
        />
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Почувствуйте силу
            <span className="block" style={{ color: softGreen[300] }}>природного исцеления</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Инновационные пластыри на основе древних рецептов. Быстрое облегчение боли без побочных эффектов.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              className="px-10 py-4 rounded-lg text-white font-semibold text-lg transition-transform hover:scale-105"
              style={{ backgroundColor: softGreen[500] }}
              data-testid="button-hero2-order"
            >
              Заказать сейчас
            </button>
            <button
              className="px-10 py-4 rounded-lg font-semibold text-lg border-2 border-white/50 text-white backdrop-blur-sm transition-all hover:bg-white/10"
              data-testid="button-hero2-video"
            >
              Смотреть видео
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Hero3Asymmetric() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden" style={{ backgroundColor: softGreen[50] }}>
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-20" style={{ backgroundColor: softGreen[300] }} />
      <div className="absolute bottom-10 right-20 w-48 h-48 rounded-full opacity-15" style={{ backgroundColor: softGreen[400] }} />
      <div className="absolute top-1/2 left-1/3 w-32 h-32 rounded-full opacity-10" style={{ backgroundColor: softGreen[500] }} />
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                Забудьте о боли
                <span className="block mt-2" style={{ color: softGreen[600] }}>навсегда</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-xl">
                Революционная формула пластырей снимает боль за 15 минут и действует до 24 часов.
              </p>
              <div className="flex flex-wrap gap-6 mb-12">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: softGreen[100] }}>
                    <Clock className="w-6 h-6" style={{ color: softGreen[600] }} />
                  </div>
                  <span className="font-medium text-gray-700">Быстрое действие</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: softGreen[100] }}>
                    <Shield className="w-6 h-6" style={{ color: softGreen[600] }} />
                  </div>
                  <span className="font-medium text-gray-700">100% натурально</span>
                </div>
              </div>
              <button
                className="px-10 py-4 rounded-lg text-white font-semibold text-lg transition-transform hover:scale-105 shadow-lg"
                style={{ backgroundColor: softGreen[600] }}
                data-testid="button-hero3-try"
              >
                Попробовать бесплатно
              </button>
            </motion.div>
          </div>
          <div className="lg:col-span-2 lg:-mr-20">
            <motion.div
              initial={{ opacity: 0, x: 40, rotate: 3 }}
              animate={{ opacity: 1, x: 0, rotate: 3 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <HeroImagePlaceholder text="Продукт" aspectRatio="3/4" className="shadow-2xl" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Hero4Card() {
  return (
    <section 
      className="py-20 md:py-32 relative"
      style={{ 
        backgroundColor: softGreen[100],
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5 C35 15, 40 20, 30 30 C20 20, 25 15, 30 5' fill='${encodeURIComponent(softGreen[200])}' opacity='0.5'/%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px'
      }}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="aspect-square md:aspect-auto">
              <div className="h-full" style={{ backgroundColor: softGreen[300] }}>
                <SmartImage
                  sources={getImageSources('hero-card', 1)}
                  alt="Продукт"
                  className="w-full h-full object-cover"
                  placeholderContent={
                    <div className="w-full h-full flex items-center justify-center">
                      <Leaf className="w-16 h-16 text-white/60" />
                    </div>
                  }
                />
              </div>
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <span 
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 w-fit"
                style={{ backgroundColor: softGreen[100], color: softGreen[700] }}
              >
                <Star className="w-3 h-3" /> БЕСТСЕЛЛЕР
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Лечебный пластырь
                <span className="block" style={{ color: softGreen[600] }}>Premium</span>
              </h1>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Премиальная линейка пластырей с усиленной формулой для максимального эффекта.
              </p>
              <ul className="space-y-3 mb-8">
                {["Действие 24 часа", "Водостойкий", "Гипоаллергенный"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700">
                    <Check className="w-5 h-5" style={{ color: softGreen[500] }} />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold" style={{ color: softGreen[600] }}>1 990 ₽</span>
                <span className="text-lg text-gray-400 line-through">2 490 ₽</span>
              </div>
              <button
                className="mt-6 w-full py-4 rounded-lg text-white font-semibold text-lg transition-transform hover:scale-[1.02]"
                style={{ backgroundColor: softGreen[600] }}
                data-testid="button-hero4-buy"
              >
                Добавить в корзину
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Hero5Minimal() {
  return (
    <section className="py-24 md:py-40 relative" style={{ backgroundColor: 'white' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-gray-900 mb-8 tracking-tight">
            Просто.
            <span style={{ color: softGreen[500] }}> Работает.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 mb-12 max-w-2xl mx-auto">
            Один пластырь. Одно решение. Ноль проблем.
          </p>
          <button
            className="px-12 py-5 rounded-full text-white font-semibold text-lg transition-all hover:scale-105 hover:shadow-xl"
            style={{ backgroundColor: softGreen[600] }}
            data-testid="button-hero5-start"
          >
            Начать
          </button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute bottom-8 right-8 w-32 md:w-48"
        >
          <HeroImagePlaceholder text="" aspectRatio="1/1" className="opacity-80" />
        </motion.div>
      </div>
    </section>
  );
}

function Hero6VideoPlaceholder() {
  return (
    <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="w-full h-full flex items-center justify-center"
          style={{ backgroundColor: softGreen[800] }}
        >
          <div className="text-center text-white/30">
            <div className="w-24 h-24 border-4 border-white/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-white/50 border-b-[15px] border-b-transparent ml-2" />
            </div>
            <p className="text-lg">Место для видео</p>
          </div>
        </div>
        <div 
          className="absolute inset-0"
          style={{ background: `linear-gradient(135deg, ${softGreen[900]}99 0%, transparent 60%)` }}
        />
      </div>
      
      <div className="relative h-full flex items-center px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Смотрите как это
            <span className="block" style={{ color: softGreen[300] }}>работает</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-lg">
            Видео-демонстрация применения и эффективности наших лечебных пластырей.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              className="flex items-center gap-2 px-8 py-4 rounded-lg text-white font-semibold transition-transform hover:scale-105"
              style={{ backgroundColor: softGreen[500] }}
              data-testid="button-hero6-watch"
            >
              <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent" />
              Смотреть видео
            </button>
            <button
              className="px-8 py-4 rounded-lg font-semibold border-2 border-white/40 text-white transition-all hover:bg-white/10"
              data-testid="button-hero6-more"
            >
              Подробнее
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Hero7ProductGrid() {
  const miniProducts = [
    { id: 1, name: "Пластырь Классик", price: "990 ₽" },
    { id: 2, name: "Пластырь Форте", price: "1 490 ₽" },
    { id: 3, name: "Пластырь Спорт", price: "1 290 ₽" },
  ];

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: softGreen[50] }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Выберите свой
            <span style={{ color: softGreen[600] }}> пластырь</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Линейка продуктов для любых потребностей
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {miniProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-sm transition-all group-hover:shadow-xl group-hover:-translate-y-1">
                <div className="aspect-square" style={{ backgroundColor: softGreen[200] }}>
                  <SmartImage
                    sources={getImageSources(`products/product-${product.id}`, 1)}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    placeholderContent={
                      <div className="w-full h-full flex items-center justify-center">
                        <Leaf className="w-12 h-12 text-white/60" />
                      </div>
                    }
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900 mb-1">{product.name}</h3>
                  <p className="font-bold" style={{ color: softGreen[600] }}>{product.price}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
        >
          <button
            className="px-10 py-4 rounded-lg text-white font-semibold text-lg transition-transform hover:scale-105"
            style={{ backgroundColor: softGreen[600] }}
            data-testid="button-hero7-all"
          >
            Смотреть все продукты
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function Hero8DiagonalSplit() {
  return (
    <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
      <div className="absolute inset-0 flex">
        <div 
          className="w-1/2 relative"
          style={{ 
            backgroundColor: softGreen[600],
            clipPath: 'polygon(0 0, 100% 0, 70% 100%, 0 100%)'
          }}
        >
          <div className="absolute inset-0 flex items-center justify-end pr-24 md:pr-32">
            <div className="max-w-md text-white">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  Традиции встречают современность
                </h1>
                <p className="text-lg text-white/90 mb-8">
                  Современные технологии в сочетании с проверенными веками рецептами.
                </p>
                <button
                  className="px-8 py-4 rounded-lg bg-white font-semibold transition-transform hover:scale-105"
                  style={{ color: softGreen[700] }}
                  data-testid="button-hero8-discover"
                >
                  Открыть для себя
                </button>
              </motion.div>
            </div>
          </div>
        </div>
        <div 
          className="w-1/2 relative -ml-[15%]"
          style={{ 
            backgroundColor: softGreen[200],
            clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0 100%)'
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="absolute inset-0 flex items-center justify-center p-12"
          >
            <HeroImagePlaceholder text="Изображение" aspectRatio="3/4" className="max-w-sm shadow-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Hero9Layered() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden" style={{ backgroundColor: softGreen[100] }}>
      <div 
        className="absolute inset-0 opacity-30"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50' cy='50' r='40' fill='none' stroke='${encodeURIComponent(softGreen[300])}' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="absolute -top-8 -left-8 w-32 h-32 rounded-2xl shadow-lg flex items-center justify-center z-10"
              style={{ backgroundColor: softGreen[500] }}
            >
              <Sparkles className="w-12 h-12 text-white" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative z-20"
            >
              <HeroImagePlaceholder text="Главное фото" aspectRatio="4/3" className="shadow-xl" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute -bottom-6 -right-6 px-6 py-4 rounded-xl bg-white shadow-lg z-30"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[softGreen[400], softGreen[500], softGreen[600]].map((color, i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white" style={{ backgroundColor: color }} />
                  ))}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">1000+ отзывов</div>
                  <div className="text-sm text-gray-500">4.9 из 5</div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-2 mb-4">
              {[1,2,3,4,5].map(i => (
                <Star key={i} className="w-5 h-5 fill-current" style={{ color: softGreen[500] }} />
              ))}
              <span className="text-gray-600 ml-2">Рейтинг 4.9</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Доверие тысяч
              <span className="block" style={{ color: softGreen[600] }}>счастливых клиентов</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Присоединяйтесь к тем, кто уже избавился от боли с помощью наших пластырей. Читайте отзывы и убедитесь сами.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                className="px-8 py-4 rounded-lg text-white font-semibold transition-transform hover:scale-105"
                style={{ backgroundColor: softGreen[600] }}
                data-testid="button-hero9-reviews"
              >
                Читать отзывы
              </button>
              <button
                className="px-8 py-4 rounded-lg font-semibold border-2 transition-all hover:bg-gray-50"
                style={{ borderColor: softGreen[300], color: softGreen[700] }}
                data-testid="button-hero9-order"
              >
                Заказать
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Hero10Slider() {
  const slides = [
    {
      id: 1,
      title: "Пластырь Классик",
      subtitle: "Универсальное решение",
      description: "Для ежедневного применения при мышечных болях",
      color: softGreen[500],
    },
    {
      id: 2,
      title: "Пластырь Форте",
      subtitle: "Усиленная формула",
      description: "Для интенсивной терапии сильных болей",
      color: softGreen[600],
    },
    {
      id: 3,
      title: "Пластырь Спорт",
      subtitle: "Для активных людей",
      description: "Быстрое восстановление после тренировок",
      color: softGreen[700],
    },
  ];
  
  const [current, setCurrent] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (idx: number) => setCurrent(idx);
  const goPrev = () => setCurrent(prev => (prev - 1 + slides.length) % slides.length);
  const goNext = () => setCurrent(prev => (prev + 1) % slides.length);

  return (
    <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
          style={{ backgroundColor: slides[current].color }}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-10 h-full flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 bg-white/20 text-white">
                  {slides[current].subtitle}
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  {slides[current].title}
                </h1>
                <p className="text-xl text-white/90 mb-8 max-w-md">
                  {slides[current].description}
                </p>
                <button
                  className="px-8 py-4 rounded-lg bg-white font-semibold text-lg transition-transform hover:scale-105"
                  style={{ color: slides[current].color }}
                  data-testid="button-hero10-details"
                >
                  Подробнее
                </button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="hidden lg:block"
              >
                <div 
                  className="w-full max-w-md mx-auto aspect-square rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
                >
                  <Leaf className="w-32 h-32 text-white/50" />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      <button
        onClick={goPrev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors z-10"
        data-testid="button-hero10-prev"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={goNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors z-10"
        data-testid="button-hero10-next"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === current ? 'bg-white w-8' : 'bg-white/50'
            }`}
            data-testid={`button-hero10-dot-${idx}`}
          />
        ))}
      </div>
    </section>
  );
}

// ============================================
// КАТЕГОРИЯ A: ЧИСТЫЙ ФОКУС НА ПРОДУКТЕ (11-20)
// ============================================

function Hero11CentralProduct() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: softGreen[50] }}>
      <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <div className="w-full max-w-md mx-auto">
            <ProductImage text="Лечебный пластырь" aspectRatio="1/1" className="shadow-2xl mx-auto" />
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Природное <span style={{ color: softGreen[600] }}>исцеление</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Лечебный пластырь на основе древних травяных рецептов. Снимает боль естественно и бережно.
          </p>
          <button
            className="px-10 py-4 rounded-lg text-white font-semibold text-lg transition-transform hover:scale-105"
            style={{ backgroundColor: softGreen[600] }}
            data-testid="button-hero11-order"
          >
            Заказать сейчас
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function Hero12LeftAccent() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <ProductImage text="Пластырь" aspectRatio="4/5" className="shadow-xl" bgColor={softGreen[200]} />
          </motion.div>
          
          <div className="hidden lg:flex lg:col-span-1 justify-center">
            <div className="w-px h-80 bg-gradient-to-b from-transparent via-gray-200 to-transparent" />
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 lg:pl-8"
          >
            <span 
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-6"
              style={{ backgroundColor: softGreen[100], color: softGreen[700] }}
            >
              <Leaf className="w-4 h-4" />
              Натуральный состав
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Целительная сила
              <span className="block" style={{ color: softGreen[600] }}>трав и минералов</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Каждый пластырь содержит экстракты целебных растений, собранных в экологически чистых регионах. Действует мягко, но эффективно.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                className="px-8 py-4 rounded-lg text-white font-semibold transition-transform hover:scale-105"
                style={{ backgroundColor: softGreen[600] }}
                data-testid="button-hero12-buy"
              >
                Купить
              </button>
              <button
                className="px-8 py-4 rounded-lg font-semibold border-2 transition-all hover:bg-gray-50"
                style={{ borderColor: softGreen[300], color: softGreen[700] }}
                data-testid="button-hero12-info"
              >
                Подробнее о составе
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Hero13RightAccent() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: warmEarth[50] }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 lg:pr-8 order-2 lg:order-1"
          >
            <span 
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-6"
              style={{ backgroundColor: softGreen[100], color: softGreen[700] }}
            >
              <Heart className="w-4 h-4" />
              Забота о здоровье
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Традиционная
              <span className="block" style={{ color: softGreen[600] }}>медицина</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Рецепты, проверенные поколениями. Мы сохранили мудрость предков и добавили современные технологии производства.
            </p>
            <button
              className="px-8 py-4 rounded-lg text-white font-semibold transition-transform hover:scale-105"
              style={{ backgroundColor: softGreen[600] }}
              data-testid="button-hero13-catalog"
            >
              Перейти в каталог
            </button>
          </motion.div>
          
          <div className="hidden lg:flex lg:col-span-1 justify-center order-2">
            <div className="w-px h-80 bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 order-1 lg:order-3"
          >
            <ProductImage text="Продукт" aspectRatio="4/5" className="shadow-xl" bgColor={softGreen[300]} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Hero14TopProduct() {
  return (
    <section className="py-12 md:py-20" style={{ backgroundColor: 'white' }}>
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <div className="w-full max-w-2xl mx-auto">
            <ProductImage text="Лечебный пластырь" aspectRatio="16/9" className="shadow-lg rounded-2xl" bgColor={softGreen[200]} />
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Облегчение боли <span style={{ color: softGreen[600] }}>за минуты</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Активные компоненты начинают действовать уже через 15 минут после нанесения. Эффект сохраняется до 12 часов.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              className="px-8 py-4 rounded-lg text-white font-semibold transition-transform hover:scale-105"
              style={{ backgroundColor: softGreen[600] }}
              data-testid="button-hero14-try"
            >
              Попробовать
            </button>
            <button
              className="px-8 py-4 rounded-lg font-semibold border-2 transition-all hover:bg-gray-50"
              style={{ borderColor: softGreen[300], color: softGreen[700] }}
              data-testid="button-hero14-how"
            >
              Как это работает
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Hero15BottomProduct() {
  return (
    <section className="py-12 md:py-20" style={{ backgroundColor: softGreen[50] }}>
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{ backgroundColor: softGreen[100], color: softGreen[700] }}
          >
            <Shield className="w-4 h-4" />
            Проверено временем
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Древняя мудрость
            <span className="block" style={{ color: softGreen[600] }}>в современной форме</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Рецептуры, передающиеся из поколения в поколение, теперь доступны каждому.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative"
        >
          <div className="w-full max-w-3xl mx-auto">
            <ProductImage text="Продукт" aspectRatio="16/10" className="shadow-2xl rounded-2xl" bgColor={softGreen[300]} />
          </div>
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
            <button
              className="px-10 py-4 rounded-full text-white font-semibold text-lg shadow-xl transition-transform hover:scale-105"
              style={{ backgroundColor: softGreen[600] }}
              data-testid="button-hero15-order"
            >
              Заказать сейчас
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Hero16FloatingProduct() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden" style={{ backgroundColor: 'white' }}>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-10" style={{ backgroundColor: softGreen[300] }} />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full opacity-10" style={{ backgroundColor: softGreen[400] }} />
      </div>
      
      <div className="max-w-6xl mx-auto px-6 md:px-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Лёгкость и
              <span className="block" style={{ color: softGreen[600] }}>комфорт</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Пластырь настолько тонкий и мягкий, что вы забудете о его присутствии. Но боль точно не забудет уйти.
            </p>
            <div className="flex items-center gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold" style={{ color: softGreen[600] }}>0.3мм</div>
                <div className="text-sm text-gray-500">толщина</div>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div className="text-center">
                <div className="text-3xl font-bold" style={{ color: softGreen[600] }}>12ч</div>
                <div className="text-sm text-gray-500">действие</div>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div className="text-center">
                <div className="text-3xl font-bold" style={{ color: softGreen[600] }}>100%</div>
                <div className="text-sm text-gray-500">натурально</div>
              </div>
            </div>
            <button
              className="px-8 py-4 rounded-lg text-white font-semibold transition-transform hover:scale-105"
              style={{ backgroundColor: softGreen[600] }}
              data-testid="button-hero16-buy"
            >
              Попробовать
            </button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div 
              className="absolute inset-0 rounded-3xl transform rotate-3"
              style={{ backgroundColor: softGreen[100], transform: 'rotate(3deg) scale(1.05)' }}
            />
            <div className="relative">
              <ProductImage text="Продукт" aspectRatio="1/1" className="shadow-2xl rounded-2xl" bgColor={softGreen[200]} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Hero17DoubleAngle() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: softGreen[50] }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Каждая деталь <span style={{ color: softGreen[600] }}>продумана</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Эргономичная форма и качественные материалы для вашего комфорта.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30, rotate: -2 }}
            animate={{ opacity: 1, x: 0, rotate: -2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <ProductImage text="Вид спереди" aspectRatio="4/3" className="shadow-xl rounded-xl" bgColor={softGreen[200]} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30, rotate: 2 }}
            animate={{ opacity: 1, x: 0, rotate: 2 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <ProductImage text="Вид сбоку" aspectRatio="4/3" className="shadow-xl rounded-xl" bgColor={softGreen[300]} />
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <button
            className="px-10 py-4 rounded-lg text-white font-semibold text-lg transition-transform hover:scale-105"
            style={{ backgroundColor: softGreen[600] }}
            data-testid="button-hero17-details"
          >
            Узнать подробности
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function Hero18InUse() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div 
              className="w-full rounded-2xl overflow-hidden"
              style={{ aspectRatio: '4/3', backgroundColor: warmEarth[100] }}
            >
              <SmartImage
                sources={getImageSources('hero-usage', 1)}
                alt="Применение пластыря"
                className="w-full h-full object-cover"
                placeholderContent={
                  <div className="w-full h-full flex flex-col items-center justify-center gap-3">
                    <Heart className="w-16 h-16 text-gray-400" />
                    <span className="text-gray-500 font-medium">Продукт в применении</span>
                  </div>
                }
              />
            </div>
            <div 
              className="absolute -bottom-4 -right-4 px-4 py-2 rounded-lg shadow-lg"
              style={{ backgroundColor: softGreen[500] }}
            >
              <span className="text-white font-semibold">Легко наносится</span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span 
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-6"
              style={{ backgroundColor: softGreen[100], color: softGreen[700] }}
            >
              <Clock className="w-4 h-4" />
              Простое применение
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Три шага к
              <span className="block" style={{ color: softGreen[600] }}>облегчению</span>
            </h1>
            <ul className="space-y-4 mb-8">
              {[
                "Очистите кожу в месте нанесения",
                "Снимите защитную плёнку с пластыря",
                "Приложите к проблемной зоне"
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span 
                    className="w-7 h-7 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                    style={{ backgroundColor: softGreen[500] }}
                  >
                    {i + 1}
                  </span>
                  <span className="text-gray-700 text-lg">{step}</span>
                </li>
              ))}
            </ul>
            <button
              className="px-8 py-4 rounded-lg text-white font-semibold transition-transform hover:scale-105"
              style={{ backgroundColor: softGreen[600] }}
              data-testid="button-hero18-try"
            >
              Попробовать
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Hero19BeforeAfter() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: softGreen[50] }}>
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Результат, который <span style={{ color: softGreen[600] }}>ощущаешь</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Тысячи людей уже избавились от хронической боли
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 gap-4 md:gap-8 mb-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div 
              className="w-full rounded-xl overflow-hidden"
              style={{ aspectRatio: '4/3', backgroundColor: warmEarth[200] }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-white/80 font-medium">До применения</span>
              </div>
            </div>
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gray-800/70 text-white text-sm font-medium">
              До
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div 
              className="w-full rounded-xl overflow-hidden"
              style={{ aspectRatio: '4/3', backgroundColor: softGreen[300] }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-white/80 font-medium">После применения</span>
              </div>
            </div>
            <div 
              className="absolute top-4 left-4 px-3 py-1 rounded-full text-white text-sm font-medium"
              style={{ backgroundColor: softGreen[500] }}
            >
              После
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-block mb-8 p-6 bg-white rounded-xl shadow-lg">
            <ProductImage text="Продукт" aspectRatio="2/1" className="w-64 mx-auto rounded-lg" bgColor={softGreen[200]} />
          </div>
          <div className="block">
            <button
              className="px-10 py-4 rounded-lg text-white font-semibold text-lg transition-transform hover:scale-105"
              style={{ backgroundColor: softGreen[600] }}
              data-testid="button-hero19-start"
            >
              Начать преображение
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Hero20ProductIngredients() {
  const ingredients = [
    { icon: Leaf, name: "Травы", desc: "Целебные растения" },
    { icon: Droplets, name: "Масла", desc: "Эфирные экстракты" },
    { icon: Mountain, name: "Минералы", desc: "Природные элементы" },
    { icon: Sun, name: "Энергия", desc: "Солнечная сушка" },
  ];
  
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Только
              <span className="block" style={{ color: softGreen[600] }}>натуральное</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              В составе каждого пластыря — тщательно отобранные природные компоненты без химических добавок.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {ingredients.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * i }}
                  className="flex items-center gap-3 p-3 rounded-lg"
                  style={{ backgroundColor: softGreen[50] }}
                >
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: softGreen[100] }}
                  >
                    <item.icon className="w-5 h-5" style={{ color: softGreen[600] }} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{item.name}</div>
                    <div className="text-sm text-gray-500">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
            <button
              className="px-8 py-4 rounded-lg text-white font-semibold transition-transform hover:scale-105"
              style={{ backgroundColor: softGreen[600] }}
              data-testid="button-hero20-composition"
            >
              Подробнее о составе
            </button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <ProductImage text="Продукт" aspectRatio="1/1" className="shadow-xl rounded-2xl" bgColor={softGreen[200]} />
              
              {ingredients.map((item, i) => {
                const positions = [
                  { top: '5%', left: '-10%' },
                  { top: '5%', right: '-10%' },
                  { bottom: '5%', left: '-10%' },
                  { bottom: '5%', right: '-10%' },
                ];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                    className="absolute w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center"
                    style={positions[i] as React.CSSProperties}
                  >
                    <item.icon className="w-6 h-6" style={{ color: softGreen[500] }} />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// КАТЕГОРИЯ B: ПРИРОДНАЯ ЭСТЕТИКА (21-30)
// ============================================

function Hero21MorningDew() {
  return (
    <section 
      className="py-16 md:py-24 relative overflow-hidden"
      style={{ 
        background: `linear-gradient(180deg, ${softGreen[50]} 0%, white 50%, ${softGreen[50]} 100%)`
      }}
    >
      <div className="absolute top-0 left-0 w-full h-32 opacity-30">
        <div className="w-full h-full" style={{ 
          background: `repeating-linear-gradient(90deg, ${softGreen[200]} 0px, ${softGreen[200]} 2px, transparent 2px, transparent 20px)`
        }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Droplets className="w-5 h-5" style={{ color: softGreen[500] }} />
              <span className="text-sm font-medium" style={{ color: softGreen[600] }}>Свежесть утра</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Начните день
              <span className="block" style={{ color: softGreen[600] }}>без боли</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Как капли росы приносят свежесть растениям, так наши пластыри приносят облегчение вашему телу. Мягко и естественно.
            </p>
            <button
              className="px-8 py-4 rounded-lg text-white font-semibold transition-transform hover:scale-105"
              style={{ backgroundColor: softGreen[600] }}
              data-testid="button-hero21-start"
            >
              Попробовать
            </button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
              <div 
                className="absolute -inset-4 rounded-3xl opacity-50"
                style={{ backgroundColor: softGreen[100] }}
              />
              <ProductImage text="Продукт" aspectRatio="4/5" className="relative shadow-lg rounded-2xl" bgColor={softGreen[200]} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Hero22SunsetWarmth() {
  return (
    <section 
      className="py-16 md:py-24"
      style={{ 
        background: `linear-gradient(135deg, ${warmEarth[50]} 0%, ${warmEarth[100]} 100%)`
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <ProductImage text="Продукт" aspectRatio="4/5" className="shadow-xl rounded-2xl" bgColor={warmEarth[200]} />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="flex items-center gap-2 mb-6">
              <Sun className="w-5 h-5" style={{ color: warmEarth[500] }} />
              <span className="text-sm font-medium" style={{ color: warmEarth[600] }}>Тепло заботы</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Согревающее
              <span className="block" style={{ color: warmEarth[600] }}>прикосновение</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Мягкое тепло проникает глубоко в ткани, расслабляя мышцы и снимая напряжение. Как закатное солнце согревает землю.
            </p>
            <button
              className="px-8 py-4 rounded-lg text-white font-semibold transition-transform hover:scale-105"
              style={{ backgroundColor: warmEarth[600] }}
              data-testid="button-hero22-feel"
            >
              Почувствовать тепло
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Hero23ForestSilence() {
  return (
    <section 
      className="py-20 md:py-32 relative"
      style={{ backgroundColor: softGreen[800] }}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='60' viewBox='0 0 40 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 5 L5 30 L20 25 L35 30 Z M20 25 L20 55' fill='none' stroke='white' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '40px 60px'
        }} />
      </div>
      
      <div className="max-w-5xl mx-auto px-6 md:px-10 relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <TreePine className="w-12 h-12 mx-auto mb-6" style={{ color: softGreen[300] }} />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Тишина леса
            <span className="block" style={{ color: softGreen[300] }}>в каждом пластыре</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Экстракты хвойных деревьев и лесных трав создают атмосферу покоя и восстановления.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-md mx-auto"
        >
          <ProductImage text="Продукт" aspectRatio="1/1" className="shadow-2xl rounded-2xl" bgColor={softGreen[600]} />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10"
        >
          <button
            className="px-10 py-4 rounded-lg font-semibold text-lg transition-transform hover:scale-105"
            style={{ backgroundColor: softGreen[300], color: softGreen[900] }}
            data-testid="button-hero23-discover"
          >
            Открыть для себя
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function Hero24HerbMeadow() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: softGreen[100] }}>
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Flower2 className="w-10 h-10 mb-6" style={{ color: softGreen[500] }} />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Луговые травы
              <span className="block" style={{ color: softGreen[600] }}>для вашего здоровья</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Собранные на рассвете, когда концентрация полезных веществ максимальна. Высушенные на солнце, сохраняя всю силу природы.
            </p>
            <button
              className="px-8 py-4 rounded-lg text-white font-semibold transition-transform hover:scale-105"
              style={{ backgroundColor: softGreen[600] }}
              data-testid="button-hero24-learn"
            >
              Узнать о травах
            </button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div 
              className="w-80 h-80 rounded-full flex items-center justify-center p-8"
              style={{ backgroundColor: softGreen[200] }}
            >
              <ProductImage text="Продукт" aspectRatio="1/1" className="rounded-full shadow-xl" bgColor={softGreen[300]} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Hero25RiverCool() {
  return (
    <section 
      className="py-16 md:py-24 relative overflow-hidden"
      style={{ 
        background: `linear-gradient(180deg, #e8f4f0 0%, ${softGreen[50]} 100%)`
      }}
    >
      <div className="absolute bottom-0 left-0 right-0 h-24 opacity-20">
        <svg viewBox="0 0 1200 100" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,50 Q300,100 600,50 T1200,50 L1200,100 L0,100 Z" fill={softGreen[400]} />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Droplets className="w-10 h-10 mx-auto mb-4" style={{ color: softGreen[500] }} />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Прохлада <span style={{ color: softGreen[600] }}>горной реки</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Освежающее действие снимает жар и воспаление, как прохладная вода горного ручья.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="text-center md:text-right">
              <div className="text-2xl font-bold" style={{ color: softGreen[600] }}>-5°C</div>
              <div className="text-gray-500">охлаждающий эффект</div>
            </div>
            <ProductImage text="Продукт" aspectRatio="1/1" className="shadow-xl rounded-xl" bgColor={softGreen[200]} />
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold" style={{ color: softGreen[600] }}>30 мин</div>
              <div className="text-gray-500">снятие воспаления</div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10"
        >
          <button
            className="px-10 py-4 rounded-lg text-white font-semibold transition-transform hover:scale-105"
            style={{ backgroundColor: softGreen[600] }}
            data-testid="button-hero25-cool"
          >
            Ощутить прохладу
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function Hero26MountainAir() {
  return (
    <section 
      className="py-20 md:py-32 relative"
      style={{ 
        background: `linear-gradient(0deg, ${softGreen[50]} 0%, white 60%, ${softGreen[100]} 100%)`
      }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <Mountain className="w-12 h-12 mx-auto mb-4" style={{ color: softGreen[500] }} />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Чистота <span style={{ color: softGreen[600] }}>горного воздуха</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Травы, собранные на высокогорных лугах, где воздух чист, а солнце ярче.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-lg mx-auto"
        >
          <ProductImage text="Продукт" aspectRatio="3/4" className="shadow-2xl rounded-2xl" bgColor={softGreen[300]} />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10"
        >
          <button
            className="px-10 py-4 rounded-lg text-white font-semibold transition-transform hover:scale-105"
            style={{ backgroundColor: softGreen[600] }}
            data-testid="button-hero26-breathe"
          >
            Вдохнуть полной грудью
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function Hero27BirchGrove() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-white">
      <div className="absolute inset-0 opacity-5">
        <div className="h-full" style={{
          backgroundImage: `repeating-linear-gradient(90deg, ${softGreen[400]} 0px, ${softGreen[400]} 2px, transparent 2px, transparent 60px)`,
        }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span 
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-6"
              style={{ backgroundColor: softGreen[100], color: softGreen[700] }}
            >
              <TreePine className="w-4 h-4" />
              Сила берёзы
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Берёзовая
              <span className="block" style={{ color: softGreen[600] }}>целительная сила</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Экстракт берёзовых почек и коры — древнейшее средство от боли и воспалений, проверенное веками.
            </p>
            <button
              className="px-8 py-4 rounded-lg text-white font-semibold transition-transform hover:scale-105"
              style={{ backgroundColor: softGreen[600] }}
              data-testid="button-hero27-feel"
            >
              Ощутить силу
            </button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <ProductImage text="Продукт" aspectRatio="4/5" className="shadow-xl rounded-2xl" bgColor={softGreen[200]} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Hero28FieldHerbs() {
  return (
    <section 
      className="py-16 md:py-24"
      style={{ 
        backgroundColor: softGreen[50],
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='40' viewBox='0 0 60 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 35 Q15 20 10 10 M20 35 Q25 15 20 5 M30 35 Q35 20 30 8 M40 35 Q45 15 40 5 M50 35 Q55 25 50 15' fill='none' stroke='${encodeURIComponent(softGreen[200])}' stroke-width='1'/%3E%3C/svg%3E")`,
        backgroundSize: '60px 40px',
        backgroundPosition: 'bottom'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <ProductImage text="Продукт" aspectRatio="1/1" className="shadow-xl rounded-2xl" bgColor={softGreen[300]} />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Flower2 className="w-10 h-10 mb-6" style={{ color: softGreen[500] }} />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Полевые травы
              <span className="block" style={{ color: softGreen[600] }}>в каждом пластыре</span>
            </h1>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Ромашка, зверобой, тысячелистник — знакомые с детства травы теперь работают на ваше здоровье.
            </p>
            <ul className="space-y-3 mb-8">
              {["Противовоспалительное действие", "Успокаивающий эффект", "Регенерация тканей"].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-700">
                  <Check className="w-5 h-5" style={{ color: softGreen[500] }} />
                  {item}
                </li>
              ))}
            </ul>
            <button
              className="px-8 py-4 rounded-lg text-white font-semibold transition-transform hover:scale-105"
              style={{ backgroundColor: softGreen[600] }}
              data-testid="button-hero28-order"
            >
              Заказать
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Hero29RainDrop() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden" style={{ backgroundColor: softGreen[100] }}>
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 8 + (i % 4) * 4,
              height: 8 + (i % 4) * 4,
              left: `${(i * 8) % 100}%`,
              top: `${(i * 7) % 80}%`,
              backgroundColor: softGreen[200],
              opacity: 0.5,
            }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>
      
      <div className="max-w-5xl mx-auto px-6 md:px-10 relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Droplets className="w-12 h-12 mx-auto mb-6" style={{ color: softGreen[500] }} />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Каждая капля <span style={{ color: softGreen[600] }}>имеет значение</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Как дождь питает землю, так наши пластыри питают ваше тело целебными веществами.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative inline-block"
        >
          <div 
            className="w-72 h-72 md:w-80 md:h-80 rounded-full p-6 mx-auto"
            style={{ 
              background: `radial-gradient(circle, ${softGreen[200]} 0%, ${softGreen[300]} 100%)`,
              boxShadow: `0 20px 60px ${softGreen[300]}80`
            }}
          >
            <ProductImage text="Продукт" aspectRatio="1/1" className="rounded-full" bgColor={softGreen[400]} />
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10"
        >
          <button
            className="px-10 py-4 rounded-full text-white font-semibold transition-transform hover:scale-105"
            style={{ backgroundColor: softGreen[600] }}
            data-testid="button-hero29-try"
          >
            Попробовать
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function Hero30SunLight() {
  return (
    <section 
      className="py-16 md:py-24 relative overflow-hidden"
      style={{ backgroundColor: 'white' }}
    >
      <div 
        className="absolute top-0 right-0 w-96 h-96 opacity-20"
        style={{
          background: `radial-gradient(circle at top right, ${warmEarth[200]} 0%, transparent 70%)`
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Sun className="w-10 h-10 mb-6" style={{ color: warmEarth[500] }} />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Энергия
              <span className="block" style={{ color: warmEarth[600] }}>солнечного света</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Травы, высушенные под солнцем, сохраняют максимум полезных веществ. Солнечная энергия передаётся вашему телу.
            </p>
            <div className="flex items-center gap-4 mb-8">
              <div 
                className="w-14 h-14 rounded-full flex items-center justify-center"
                style={{ backgroundColor: warmEarth[100] }}
              >
                <Sun className="w-7 h-7" style={{ color: warmEarth[500] }} />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Солнечная сушка</div>
                <div className="text-sm text-gray-500">Традиционный метод</div>
              </div>
            </div>
            <button
              className="px-8 py-4 rounded-lg text-white font-semibold transition-transform hover:scale-105"
              style={{ backgroundColor: warmEarth[600] }}
              data-testid="button-hero30-energy"
            >
              Зарядиться энергией
            </button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div 
              className="absolute -inset-8 rounded-full opacity-30"
              style={{ 
                background: `radial-gradient(circle, ${warmEarth[200]} 0%, transparent 70%)`
              }}
            />
            <ProductImage text="Продукт" aspectRatio="1/1" className="shadow-xl rounded-2xl relative" bgColor={warmEarth[100]} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// КАТЕГОРИЯ C: ЭМОЦИОНАЛЬНОЕ ПОВЕСТВОВАНИЕ (31-40)
// ============================================

function Hero31HealingStory() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: softGreen[50] }}>
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Quote className="w-10 h-10 mb-6" style={{ color: softGreen[400] }} />
            <blockquote className="text-2xl md:text-3xl font-medium text-gray-800 mb-6 leading-relaxed italic">
              "После многих лет боли я наконец нашла облегчение в простом натуральном средстве"
            </blockquote>
            <p className="text-gray-600 mb-8">
              — Мария, 54 года, Москва
            </p>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Тысячи историй <span style={{ color: softGreen[600] }}>исцеления</span>
            </h2>
            <p className="text-gray-600 mb-8">
              Каждый день мы получаем благодарности от людей, которые вернули себе радость движения.
            </p>
            <button
              className="px-8 py-4 rounded-lg text-white font-semibold transition-transform hover:scale-105"
              style={{ backgroundColor: softGreen[600] }}
              data-testid="button-hero31-stories"
            >
              Читать истории
            </button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <ProductImage text="Продукт" aspectRatio="4/5" className="shadow-xl rounded-2xl" bgColor={softGreen[200]} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Hero32SelfCare() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <div 
                className="absolute -inset-4 rounded-3xl"
                style={{ backgroundColor: softGreen[100] }}
              />
              <ProductImage text="Продукт" aspectRatio="4/5" className="shadow-lg rounded-2xl relative" bgColor={softGreen[200]} />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <Heart className="w-10 h-10 mb-6" style={{ color: softGreen[500] }} />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Забота о себе —
              <span className="block" style={{ color: softGreen[600] }}>это не эгоизм</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Вы заслуживаете жить без боли. Позвольте природе позаботиться о вашем теле так же, как вы заботитесь о близких.
            </p>
            <button
              className="px-8 py-4 rounded-lg text-white font-semibold transition-transform hover:scale-105"
              style={{ backgroundColor: softGreen[600] }}
              data-testid="button-hero32-care"
            >
              Начать заботиться
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Hero33AncestorWisdom() {
  return (
    <section 
      className="py-16 md:py-24"
      style={{ 
        backgroundColor: warmEarth[50],
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50' cy='50' r='45' fill='none' stroke='${encodeURIComponent(warmEarth[200])}' stroke-width='0.5'/%3E%3Ccircle cx='50' cy='50' r='35' fill='none' stroke='${encodeURIComponent(warmEarth[200])}' stroke-width='0.5'/%3E%3C/svg%3E")`,
        backgroundSize: '100px 100px'
      }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span 
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-6"
              style={{ backgroundColor: warmEarth[200], color: warmEarth[700] }}
            >
              <Clock className="w-4 h-4" />
              Веками проверено
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Мудрость
              <span className="block" style={{ color: warmEarth[600] }}>наших предков</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Рецепты, которые бережно хранились в семьях травников поколениями. Теперь эта мудрость доступна и вам.
            </p>
            <button
              className="px-8 py-4 rounded-lg text-white font-semibold transition-transform hover:scale-105"
              style={{ backgroundColor: warmEarth[600] }}
              data-testid="button-hero33-discover"
            >
              Прикоснуться к традиции
            </button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div 
              className="p-6 rounded-2xl"
              style={{ backgroundColor: warmEarth[100], border: `2px solid ${warmEarth[200]}` }}
            >
              <ProductImage text="Продукт" aspectRatio="1/1" className="rounded-xl" bgColor={warmEarth[200]} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Hero34PathToHealth() {
  const steps = [
    { icon: Target, title: "Определите проблему", desc: "Где болит?" },
    { icon: Leaf, title: "Выберите средство", desc: "Подберём для вас" },
    { icon: Heart, title: "Почувствуйте облегчение", desc: "Результат за 15 мин" },
  ];
  
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: softGreen[50] }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Три простых шага к
              <span className="block" style={{ color: softGreen[600] }}>здоровой жизни</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Путь к облегчению боли начинается прямо сейчас.
            </p>
            
            <div className="space-y-4 mb-8">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm"
                >
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: softGreen[100] }}
                  >
                    <step.icon className="w-6 h-6" style={{ color: softGreen[600] }} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{step.title}</div>
                    <div className="text-sm text-gray-500">{step.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <button
              className="px-8 py-4 rounded-lg text-white font-semibold transition-transform hover:scale-105 flex items-center gap-2"
              style={{ backgroundColor: softGreen[600] }}
              data-testid="button-hero34-start"
            >
              Начать путь
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <ProductImage text="Продукт" aspectRatio="4/5" className="shadow-xl rounded-2xl" bgColor={softGreen[200]} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Hero35NaturalPower() {
  return (
    <section 
      className="py-20 md:py-32"
      style={{ backgroundColor: softGreen[700] }}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Zap className="w-12 h-12 mx-auto mb-6" style={{ color: softGreen[300] }} />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Сила природы
            <span className="block" style={{ color: softGreen[300] }}>в ваших руках</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Миллионы лет эволюции создали идеальные лечебные растения. Мы лишь собрали их вместе.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-sm mx-auto mb-10"
        >
          <ProductImage text="Продукт" aspectRatio="1/1" className="shadow-2xl rounded-2xl" bgColor={softGreen[500]} />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button
            className="px-10 py-4 rounded-lg font-semibold text-lg transition-transform hover:scale-105"
            style={{ backgroundColor: 'white', color: softGreen[700] }}
            data-testid="button-hero35-power"
          >
            Ощутить силу
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function Hero36BodyBalance() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Гармония <span style={{ color: softGreen[600] }}>тела и духа</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Восстановите естественный баланс организма с помощью древних знаний о травах.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-3 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-right space-y-8"
          >
            <div>
              <div className="font-semibold text-gray-900">Физическое</div>
              <div className="text-sm text-gray-500">Снятие боли и напряжения</div>
            </div>
            <div>
              <div className="font-semibold text-gray-900">Эмоциональное</div>
              <div className="text-sm text-gray-500">Спокойствие и умиротворение</div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <ProductImage text="Продукт" aspectRatio="1/1" className="shadow-xl rounded-full" bgColor={softGreen[200]} />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-left space-y-8"
          >
            <div>
              <div className="font-semibold text-gray-900">Энергетическое</div>
              <div className="text-sm text-gray-500">Восстановление сил</div>
            </div>
            <div>
              <div className="font-semibold text-gray-900">Духовное</div>
              <div className="text-sm text-gray-500">Связь с природой</div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <button
            className="px-10 py-4 rounded-lg text-white font-semibold transition-transform hover:scale-105"
            style={{ backgroundColor: softGreen[600] }}
            data-testid="button-hero36-balance"
          >
            Найти баланс
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function Hero37QuietRelief() {
  return (
    <section className="py-24 md:py-40" style={{ backgroundColor: softGreen[50] }}>
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <ProductImage text="Продукт" aspectRatio="1/1" className="shadow-2xl rounded-2xl" bgColor={softGreen[200]} />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Тихое
              <span className="block" style={{ color: softGreen[600] }}>облегчение</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Без лишних слов. Без побочных эффектов. Просто результат.
            </p>
            <button
              className="px-8 py-4 rounded-lg text-white font-semibold transition-transform hover:scale-105"
              style={{ backgroundColor: softGreen[600] }}
              data-testid="button-hero37-feel"
            >
              Почувствовать
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Hero38TrustOfAges() {
  const stats = [
    { value: "500+", label: "лет традиций" },
    { value: "50 000+", label: "довольных клиентов" },
    { value: "4.9", label: "средний рейтинг" },
  ];
  
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Award className="w-10 h-10 mb-6" style={{ color: softGreen[500] }} />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Доверие,
              <span className="block" style={{ color: softGreen[600] }}>проверенное веками</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Наши рецепты основаны на традициях, которым сотни лет. Им доверяли наши предки, им доверяют тысячи людей сегодня.
            </p>
            
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="text-center p-4 rounded-lg"
                  style={{ backgroundColor: softGreen[50] }}
                >
                  <div className="text-2xl md:text-3xl font-bold" style={{ color: softGreen[600] }}>{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            
            <button
              className="px-8 py-4 rounded-lg text-white font-semibold transition-transform hover:scale-105"
              style={{ backgroundColor: softGreen[600] }}
              data-testid="button-hero38-join"
            >
              Присоединиться
            </button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <ProductImage text="Продукт" aspectRatio="4/5" className="shadow-xl rounded-2xl" bgColor={softGreen[200]} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Hero39SimpleSolution() {
  return (
    <section className="py-24 md:py-40 bg-white">
      <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <ProductImage text="Продукт" aspectRatio="1/1" className="shadow-xl rounded-2xl max-w-sm mx-auto" bgColor={softGreen[200]} />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Одно <span style={{ color: softGreen[600] }}>простое</span> решение
          </h1>
          <p className="text-lg text-gray-500 mb-8">
            Никаких сложных процедур. Никаких побочных эффектов. Только облегчение.
          </p>
          <button
            className="px-10 py-4 rounded-lg text-white font-semibold text-lg transition-transform hover:scale-105"
            style={{ backgroundColor: softGreen[600] }}
            data-testid="button-hero39-try"
          >
            Попробовать
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function Hero40LivingEnergy() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden" style={{ backgroundColor: softGreen[100] }}>
      <motion.div
        className="absolute inset-0"
        animate={{ 
          background: [
            `radial-gradient(circle at 30% 50%, ${softGreen[200]}40 0%, transparent 50%)`,
            `radial-gradient(circle at 70% 50%, ${softGreen[200]}40 0%, transparent 50%)`,
            `radial-gradient(circle at 30% 50%, ${softGreen[200]}40 0%, transparent 50%)`,
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Sparkles className="w-10 h-10 mb-6" style={{ color: softGreen[500] }} />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Живая энергия
              <span className="block" style={{ color: softGreen[600] }}>природы</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Каждый пластырь наполнен энергией живых растений. Почувствуйте, как природа работает на ваше здоровье.
            </p>
            <div className="flex items-center gap-4 mb-8">
              <div className="flex -space-x-2">
                {[{ Icon: Users, bg: softGreen[100] }, { Icon: Heart, bg: softGreen[200] }, { Icon: Star, bg: softGreen[300] }].map((item, i) => (
                  <div 
                    key={i}
                    className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-white"
                    style={{ backgroundColor: item.bg }}
                  >
                    <item.Icon className="w-5 h-5" style={{ color: softGreen[600] }} />
                  </div>
                ))}
              </div>
              <span className="text-gray-600">Тысячи довольных клиентов</span>
            </div>
            <button
              className="px-8 py-4 rounded-lg text-white font-semibold transition-transform hover:scale-105"
              style={{ backgroundColor: softGreen[600] }}
              data-testid="button-hero40-feel"
            >
              Ощутить энергию
            </button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              className="absolute -inset-4 rounded-3xl"
              style={{ backgroundColor: softGreen[200] }}
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <ProductImage text="Продукт" aspectRatio="1/1" className="shadow-xl rounded-2xl relative" bgColor={softGreen[300]} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// ГЛАВНЫЙ ЭКСПОРТ
// ============================================

export default function HeroVariants({ variant = 1, onVariantChange, showSelector = true }: HeroProps) {
  const [currentVariant, setCurrentVariant] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('heroVariant');
      if (saved) {
        const parsed = parseInt(saved, 10);
        if (parsed >= 1 && parsed <= TOTAL_VARIANTS) return parsed;
      }
    }
    return variant;
  });

  useEffect(() => {
    setCurrentVariant(variant);
  }, [variant]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('heroVariant', currentVariant.toString());
    }
  }, [currentVariant]);

  const handleVariantChange = useCallback((v: number) => {
    setCurrentVariant(v);
    onVariantChange?.(v);
  }, [onVariantChange]);

  const renderHero = () => {
    switch (currentVariant) {
      case 1: return <Hero1ClassicSplit />;
      case 2: return <Hero2FullscreenOverlay />;
      case 3: return <Hero3Asymmetric />;
      case 4: return <Hero4Card />;
      case 5: return <Hero5Minimal />;
      case 6: return <Hero6VideoPlaceholder />;
      case 7: return <Hero7ProductGrid />;
      case 8: return <Hero8DiagonalSplit />;
      case 9: return <Hero9Layered />;
      case 10: return <Hero10Slider />;
      case 11: return <Hero11CentralProduct />;
      case 12: return <Hero12LeftAccent />;
      case 13: return <Hero13RightAccent />;
      case 14: return <Hero14TopProduct />;
      case 15: return <Hero15BottomProduct />;
      case 16: return <Hero16FloatingProduct />;
      case 17: return <Hero17DoubleAngle />;
      case 18: return <Hero18InUse />;
      case 19: return <Hero19BeforeAfter />;
      case 20: return <Hero20ProductIngredients />;
      case 21: return <Hero21MorningDew />;
      case 22: return <Hero22SunsetWarmth />;
      case 23: return <Hero23ForestSilence />;
      case 24: return <Hero24HerbMeadow />;
      case 25: return <Hero25RiverCool />;
      case 26: return <Hero26MountainAir />;
      case 27: return <Hero27BirchGrove />;
      case 28: return <Hero28FieldHerbs />;
      case 29: return <Hero29RainDrop />;
      case 30: return <Hero30SunLight />;
      case 31: return <Hero31HealingStory />;
      case 32: return <Hero32SelfCare />;
      case 33: return <Hero33AncestorWisdom />;
      case 34: return <Hero34PathToHealth />;
      case 35: return <Hero35NaturalPower />;
      case 36: return <Hero36BodyBalance />;
      case 37: return <Hero37QuietRelief />;
      case 38: return <Hero38TrustOfAges />;
      case 39: return <Hero39SimpleSolution />;
      case 40: return <Hero40LivingEnergy />;
      default: return <Hero1ClassicSplit />;
    }
  };

  return (
    <div className="w-full">
      {showSelector && (
        <HeroSelector currentVariant={currentVariant} onSelect={handleVariantChange} />
      )}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentVariant}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {renderHero()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export { heroVariantNames };
