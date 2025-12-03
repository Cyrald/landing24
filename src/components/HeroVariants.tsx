import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ChevronDown, Leaf, Shield, Clock, Sparkles, Star, Check } from "lucide-react";
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
];

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

function HeroSelector({ currentVariant, onSelect }: { currentVariant: number; onSelect: (v: number) => void }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-white font-medium shadow-lg transition-all hover:opacity-90"
          style={{ backgroundColor: softGreen[600] }}
          data-testid="button-hero-selector"
        >
          <span>Hero: {heroVariantNames[currentVariant - 1]}</span>
          <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border overflow-hidden"
            >
              {heroVariantNames.map((name, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    onSelect(idx + 1);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 text-sm transition-colors ${
                    currentVariant === idx + 1
                      ? 'text-white'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  style={currentVariant === idx + 1 ? { backgroundColor: softGreen[500] } : {}}
                  data-testid={`button-hero-variant-${idx + 1}`}
                >
                  {name}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

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
                Революционная формула пластырей MediPatch снимает боль за 15 минут и действует до 24 часов.
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
                MediPatch
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
            Видео-демонстрация применения и эффективности пластырей MediPatch.
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
    { id: 1, name: "MediPatch Классик", price: "990 ₽" },
    { id: 2, name: "MediPatch Форте", price: "1 490 ₽" },
    { id: 3, name: "MediPatch Спорт", price: "1 290 ₽" },
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
            <span style={{ color: softGreen[600] }}> MediPatch</span>
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
                  Инновации встречают традиции
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
              Присоединяйтесь к тем, кто уже избавился от боли с помощью MediPatch. Читайте отзывы и убедитесь сами.
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
      title: "MediPatch Классик",
      subtitle: "Универсальное решение",
      description: "Для ежедневного применения при мышечных болях",
      color: softGreen[500],
    },
    {
      id: 2,
      title: "MediPatch Форте",
      subtitle: "Усиленная формула",
      description: "Для интенсивной терапии сильных болей",
      color: softGreen[600],
    },
    {
      id: 3,
      title: "MediPatch Спорт",
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

export default function HeroVariants({ variant = 1, onVariantChange, showSelector = true }: HeroProps) {
  const [currentVariant, setCurrentVariant] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('heroVariant');
      if (saved) {
        const parsed = parseInt(saved, 10);
        if (parsed >= 1 && parsed <= 10) return parsed;
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
      default: return <Hero1ClassicSplit />;
    }
  };

  return (
    <>
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
    </>
  );
}

export { heroVariantNames };
