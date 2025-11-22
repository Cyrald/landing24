import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Leaf, Heart, Star, CheckCircle2, Zap, Shield, ChevronDown } from "lucide-react";
import { useState } from "react";

// Нежная природная палитра
const softGreen = {
  50: "#f0f7f3",
  100: "#dff1e3",
  200: "#b7e0c2",
  300: "#8fcf9f",
  400: "#6bbc82",
  500: "#5fa97a",
  600: "#4d8e64",
};

export default function Landing6() {
  const [selectedBenefit, setSelectedBenefit] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const benefits = [
    {
      title: "Облегчение боли",
      desc: "Быстрое и эффективное снятие болевых ощущений",
      details: "Активные компоненты проникают глубоко в ткани, обеспечивая длительное облегчение",
    },
    {
      title: "Восстановление",
      desc: "Ускоренная регенерация повреждённых тканей",
      details: "Натуральные экстракты стимулируют естественные процессы заживления",
    },
    {
      title: "Расслабление",
      desc: "Снятие мышечного напряжения и спазмов",
      details: "Тёплый эффект помогает мышцам расслабиться и восстановиться",
    },
  ];

  const products = [
    {
      name: "Универсальный",
      desc: "Для ежедневного использования при любых болях",
      benefits: ["Широкий спектр действия", "Подходит для всей семьи", "Экономичная упаковка 10 шт"],
    },
    {
      name: "Спортивный",
      desc: "Для активных людей и спортсменов",
      benefits: ["Быстрое восстановление", "Усиленная формула", "Водостойкий"],
    },
    {
      name: "Ночной",
      desc: "Для глубокого восстановления во время сна",
      benefits: ["Пролонгированное действие", "Расслабляющий эффект", "Гипоаллергенный"],
    },
    {
      name: "Суставной",
      desc: "Специально для суставов и связок",
      benefits: ["Глубокое проникновение", "Хондропротекторы", "Согревающий эффект"],
    },
  ];

  const mechanismSteps = [
    {
      title: "Проникновение",
      desc: "Активные компоненты проникают через кожу в глубокие слои тканей",
      icon: <Zap className="w-12 h-12" />,
    },
    {
      title: "Действие",
      desc: "Натуральные экстракты начинают работать, снимая воспаление и боль",
      icon: <Shield className="w-12 h-12" />,
    },
    {
      title: "Восстановление",
      desc: "Ткани получают питание и стимуляцию для естественного заживления",
      icon: <Heart className="w-12 h-12" />,
    },
    {
      title: "Результат",
      desc: "Длительное облегчение и улучшение общего состояния",
      icon: <Star className="w-12 h-12" />,
    },
  ];

  const timelineFeatures = [
    {
      title: "Натуральный состав",
      desc: "100% природные компоненты без химических добавок и консервантов",
    },
    {
      title: "Быстрое действие",
      desc: "Эффект ощущается уже через 15-20 минут после применения",
    },
    {
      title: "Длительный результат",
      desc: "До 12 часов непрерывной защиты и облегчения боли",
    },
    {
      title: "Гипоаллергенность",
      desc: "Подходит для чувствительной кожи, протестировано дерматологами",
    },
    {
      title: "Удобство использования",
      desc: "Легко наклеивается, держится весь день, не оставляет следов",
    },
    {
      title: "Клинически доказано",
      desc: "Эффективность подтверждена исследованиями и тысячами довольных клиентов",
    },
  ];

  const faqs = [
    {
      q: "Как долго нужно носить пластырь?",
      a: "Рекомендуется носить пластырь 8-12 часов. Для достижения лучшего эффекта используйте ежедневно в течение 1-2 недель.",
    },
    {
      q: "Можно ли использовать во время беременности?",
      a: "Перед использованием во время беременности и кормления грудью проконсультируйтесь с врачом.",
    },
    {
      q: "Есть ли противопоказания?",
      a: "Не рекомендуется при открытых ранах, аллергии на компоненты состава. При появлении раздражения прекратите использование.",
    },
    {
      q: "Можно ли использовать детям?",
      a: "Пластырь подходит для детей с 6 лет под наблюдением взрослых. Для детей младшего возраста проконсультируйтесь с педиатром.",
    },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: softGreen[50] }}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
        {/* Нежные органичные фоны */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="hidden md:block absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl opacity-20"
            style={{ backgroundColor: softGreen[200] }}
          />
          <div className="hidden md:block absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-15"
            style={{ backgroundColor: softGreen[300] }}
          />
        </div>

        <div className="container mx-auto px-6 md:px-8 z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 md:mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <span className="text-gray-800 block mb-2">Гармония</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r inline-block"
                style={{
                  backgroundImage: `linear-gradient(to right, ${softGreen[400]}, ${softGreen[500]}, ${softGreen[600]})`
                }}
              >
                природы и науки
              </span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-10 md:mb-14 max-w-3xl mx-auto leading-relaxed px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              Откройте для себя целительную силу природы в современной форме.
              Лечебный пластырь для вашего благополучия
            </motion.p>

            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href="https://наш.магазин"
                className="group inline-flex items-center justify-center gap-3 text-white px-8 py-4 md:px-12 md:py-5 rounded-full text-lg md:text-xl font-semibold shadow-2xl relative overflow-hidden"
                style={{
                  backgroundColor: softGreen[500],
                  boxShadow: `0 20px 60px ${softGreen[500]}30`
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Начать путь к здоровью</span>
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 relative z-10 group-hover:translate-x-1 transition-transform" />
                <motion.div
                  className="absolute inset-0"
                  style={{ backgroundColor: softGreen[600] }}
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Механизм действия */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <motion.div
            className="text-center mb-16 md:mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4 md:mb-6">
              Как это работает
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Научно обоснованный механизм действия для максимальной эффективности
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
            {mechanismSteps.map((step, idx) => (
              <motion.div
                key={idx}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
              >
                <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border-2 h-full"
                  style={{ borderColor: softGreen[200] }}
                >
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-4 md:mb-6 mx-auto"
                    style={{ backgroundColor: softGreen[100], color: softGreen[600] }}
                  >
                    {step.icon}
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-black mb-2 opacity-20">
                      {(idx + 1).toString().padStart(2, '0')}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 md:mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
                {idx < mechanismSteps.length - 1 && (
                  <motion.div
                    className="hidden lg:block absolute top-1/2 -right-4 z-10"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ArrowRight className="w-8 h-8" style={{ color: softGreen[300] }} />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Линейка пластырей */}
      <section className="py-20 md:py-32" style={{ background: `linear-gradient(to bottom, ${softGreen[50]}, white)` }}>
        <div className="container mx-auto px-6 md:px-8">
          <motion.div
            className="text-center mb-16 md:mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4 md:mb-6">
              Линейка пластырей
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Выберите идеальное решение для ваших потребностей
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            {products.map((product, idx) => (
              <motion.div
                key={idx}
                className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 -mr-16 -mt-16"
                  style={{ backgroundColor: softGreen[400] }}
                />
                <div className="p-6 md:p-8">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center mb-4 md:mb-6 mx-auto"
                    style={{ backgroundColor: softGreen[100] }}
                  >
                    <span className="text-gray-400 text-xs md:text-sm">[Фото]</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 md:mb-3 text-center">
                    {product.name}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 text-center mb-5 md:mb-6">
                    {product.desc}
                  </p>
                  <ul className="space-y-2 md:space-y-3">
                    {product.benefits.map((benefit, bidx) => (
                      <li key={bidx} className="flex items-start gap-2 md:gap-3">
                        <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0 mt-0.5 md:mt-1"
                          style={{ color: softGreen[500] }}
                        />
                        <span className="text-sm md:text-base text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{ background: `linear-gradient(135deg, ${softGreen[100]}20, ${softGreen[200]}20)` }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <motion.div
            className="text-center mb-16 md:mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4 md:mb-6">
              Почему выбирают нас
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Каждая деталь продумана для вашего комфорта и здоровья
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {timelineFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-6 md:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border-2 h-full"
                style={{ borderColor: softGreen[200] }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center mb-4 md:mb-5"
                  style={{ backgroundColor: softGreen[100] }}
                >
                  <CheckCircle2 className="w-6 h-6 md:w-7 md:h-7" style={{ color: softGreen[600] }} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 md:mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Benefits */}
      <section className="py-20 md:py-32" style={{ backgroundColor: softGreen[50] }}>
        <div className="container mx-auto px-6 md:px-8">
          <motion.h2
            className="text-4xl md:text-5xl font-serif font-bold text-center text-gray-800 mb-12 md:mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Что вы получите
          </motion.h2>

          <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
            {benefits.map((benefit, idx) => (
              <motion.button
                key={idx}
                className="p-6 md:p-8 rounded-3xl text-left transition-all shadow-lg"
                style={{
                  backgroundColor: selectedBenefit === idx ? softGreen[500] : 'white',
                  color: selectedBenefit === idx ? 'white' : '#1f2937',
                  transform: selectedBenefit === idx ? 'scale(1.05)' : 'scale(1)',
                }}
                onClick={() => setSelectedBenefit(idx)}
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">{benefit.title}</h3>
                <p className="text-sm md:text-base" style={{
                  color: selectedBenefit === idx ? 'rgba(255,255,255,0.9)' : '#4b5563'
                }}>
                  {benefit.desc}
                </p>
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedBenefit}
              className="max-w-4xl mx-auto p-8 md:p-12 rounded-3xl shadow-xl"
              style={{
                background: `linear-gradient(135deg, ${softGreen[100]}, ${softGreen[200]})`
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-lg md:text-2xl text-gray-700 text-center leading-relaxed">
                {benefits[selectedBenefit].details}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Natural Ingredients */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <motion.div
            className="text-center mb-16 md:mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4 md:mb-6">
              100% натуральные ингредиенты
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Каждый компонент тщательно отобран из чистейших источников природы
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-6xl mx-auto">
            {[
              { name: "Экстракт алоэ", icon: <Leaf /> },
              { name: "Масло чайного дерева", icon: <Heart /> },
              { name: "Корень женьшеня", icon: <Star /> },
              { name: "Масло мяты", icon: <Leaf /> },
            ].map((ingredient, idx) => (
              <motion.div
                key={idx}
                className="group relative bg-white p-6 md:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all cursor-pointer border-2"
                style={{ borderColor: softGreen[200] }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="text-4xl md:text-5xl flex justify-center mb-3 md:mb-4"
                  style={{ color: softGreen[500] }}
                >
                  {ingredient.icon}
                </div>
                <h3 className="text-base md:text-xl font-bold text-center text-gray-800">
                  {ingredient.name}
                </h3>
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{ background: `linear-gradient(135deg, ${softGreen[100]}30, ${softGreen[200]}30)` }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-32" style={{ backgroundColor: softGreen[50] }}>
        <div className="container mx-auto px-6 md:px-8">
          <motion.h2
            className="text-4xl md:text-5xl font-serif font-bold text-center text-gray-800 mb-12 md:mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Частые вопросы
          </motion.h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <button
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <span className="text-xl font-bold text-gray-800 pr-4">
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: openFaq === idx ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-6 h-6" style={{ color: softGreen[500] }} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-8 pb-6 text-gray-600 leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <motion.h2
            className="text-4xl md:text-5xl font-serif font-bold text-center text-gray-800 mb-12 md:mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Нам доверяют тысячи людей
          </motion.h2>

          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Мария Л.",
                text: "Это действительно работает! Забыла о болях в шее после двух недель использования.",
                rating: 5,
              },
              {
                name: "Александр П.",
                text: "Натуральный состав - это именно то, что я искал. Никаких побочных эффектов.",
                rating: 5,
              },
              {
                name: "Екатерина В.",
                text: "Рекомендую всем! Очень приятный запах и быстрый эффект.",
                rating: 5,
              },
            ].map((review, idx) => (
              <motion.div
                key={idx}
                className="p-6 md:p-8 rounded-3xl shadow-lg"
                style={{ background: `linear-gradient(135deg, ${softGreen[100]}, white)` }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex gap-1 mb-3 md:mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-sm md:text-lg text-gray-700 mb-4 md:mb-6 italic">
                  "{review.text}"
                </p>
                <p className="text-sm md:text-base font-bold" style={{ color: softGreen[600] }}>— {review.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 text-white relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${softGreen[500]}, ${softGreen[600]}, ${softGreen[500]})`
        }}
      >
        <div className="container mx-auto px-6 md:px-8 text-center relative z-10">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 md:mb-8">
              Ваше здоровье бесценно
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl mb-3 md:mb-4 opacity-90">
              Не откладывайте заботу о себе на завтра
            </p>
            <p className="text-base sm:text-lg md:text-xl mb-8 md:mb-12 opacity-75">
              Начните путь к здоровью и гармонии прямо сейчас
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-8 md:mb-12">
              {[
                "Бесплатная доставка",
                "Гарантия качества",
                "Поддержка 24/7",
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6" />
                  <span className="text-sm md:text-base font-semibold">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="https://наш.магазин"
              className="inline-flex items-center gap-2 md:gap-3 bg-white px-8 py-4 md:px-12 md:py-6 rounded-full text-lg md:text-2xl font-bold hover:bg-gray-50 transition-all shadow-2xl"
              style={{ color: softGreen[600] }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              Заказать сейчас <ArrowRight className="w-6 h-6 md:w-7 md:h-7" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
