import { useState } from "react";
import { ChevronLeft, ChevronRight, Leaf, TreePine, Flower2, Mountain, Sun, Sparkles, Droplets, Snowflake, Heart, Shield, Zap, Star, ChevronDown, ExternalLink, Glasses, CircleDot, Ribbon, Activity } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Общие данные для всех вариантов
const products = [
  {
    id: 1,
    name: "Пластырь",
    shortName: "Пластырь",
    description: "Традиционный лечебный пластырь для наклеивания на проблемные зоны. Активные компоненты проникают через кожу и оказывают целебное воздействие на глубокие ткани.",
    benefits: ["Глубокое проникновение", "До 12 часов действия", "Удобное применение"],
    icon: CircleDot,
  },
  {
    id: 2,
    name: "Очиститель воды",
    shortName: "Вода",
    description: "Специальный состав для структурирования и очищения питьевой воды. Насыщает воду полезными минералами и улучшает её биодоступность для организма.",
    benefits: ["Природная минерализация", "Улучшение вкуса воды", "Польза для организма"],
    icon: Droplets,
  },
  {
    id: 3,
    name: "Очелье",
    shortName: "Очелье",
    description: "Лечебная повязка на голову с активными компонентами. Помогает при головных болях, снимает напряжение, улучшает кровообращение в области головы.",
    benefits: ["Снятие головной боли", "Расслабление", "Улучшение сна"],
    icon: Activity,
  },
  {
    id: 4,
    name: "Наочники",
    shortName: "Наочники", 
    description: "Накладки на глаза с целебными экстрактами. Снимают усталость глаз, уменьшают отёчность, освежают и тонизируют нежную кожу вокруг глаз.",
    benefits: ["Снятие усталости глаз", "Уменьшение отёков", "Освежающий эффект"],
    icon: Glasses,
  },
  {
    id: 5,
    name: "Кушак",
    shortName: "Кушак",
    description: "Широкий лечебный пояс для области живота и поясницы. Обеспечивает мягкое тепло, поддержку и оздоровительное воздействие на внутренние органы.",
    benefits: ["Поддержка поясницы", "Мягкое прогревание", "Комфорт в движении"],
    icon: Shield,
  },
  {
    id: 6,
    name: "Тесьма",
    shortName: "Тесьма",
    description: "Гибкая лечебная лента для обёртывания суставов и конечностей. Идеальна для локтей, запястий, коленей и других сложных зон тела.",
    benefits: ["Гибкое применение", "Для любых суставов", "Надёжная фиксация"],
    icon: Ribbon,
  },
];

const testimonials = [
  {
    id: 1,
    name: "Мария К.",
    city: "Москва",
    text: "Пользуюсь пластырями уже три месяца. Забыла о болях в спине после долгого рабочего дня. Натуральный состав — это именно то, что я искала.",
    rating: 5,
  },
  {
    id: 2,
    name: "Андрей С.",
    city: "Санкт-Петербург", 
    text: "Очелье стало моим спасением от мигреней. Надеваю при первых признаках — и боль отступает. Рекомендую всем, кто страдает головными болями.",
    rating: 5,
  },
  {
    id: 3,
    name: "Елена В.",
    city: "Казань",
    text: "Наочники — находка для тех, кто много работает за компьютером. Глаза отдыхают, отёки уходят. Использую каждый вечер.",
    rating: 5,
  },
  {
    id: 4,
    name: "Дмитрий П.",
    city: "Новосибирск",
    text: "Кушак помог с хронической болью в пояснице. Ношу на работе под одеждой — никто не замечает, а эффект ощутимый.",
    rating: 5,
  },
];

const faqItems = [
  {
    q: "Из чего сделаны ваши продукты?",
    a: "Все наши изделия созданы на основе натуральных компонентов: целебных трав, минералов и природных экстрактов. Мы не используем синтетические добавки.",
  },
  {
    q: "Как быстро наступает эффект?",
    a: "Первые ощущения появляются уже через 15-20 минут применения. Для достижения стойкого результата рекомендуем курсовое использование.",
  },
  {
    q: "Можно ли использовать при чувствительной коже?",
    a: "Да, наши продукты гипоаллергенны и подходят для чувствительной кожи. При индивидуальной непереносимости рекомендуем проконсультироваться с врачом.",
  },
  {
    q: "Как долго длится эффект одного применения?",
    a: "В зависимости от продукта, эффект сохраняется от 6 до 12 часов. Подробные рекомендации указаны в инструкции к каждому изделию.",
  },
  {
    q: "Где можно приобрести вашу продукцию?",
    a: "Полный каталог с ценами и возможностью заказа доступен на нашем основном сайте. Там же вы найдёте актуальные акции и специальные предложения.",
  },
];

const howItWorks = [
  {
    step: 1,
    title: "Природные компоненты",
    desc: "Активные вещества из целебных растений и минералов начинают работать сразу при контакте с телом.",
  },
  {
    step: 2,
    title: "Постепенное высвобождение",
    desc: "Компоненты медленно проникают в ткани, обеспечивая длительное и равномерное воздействие.",
  },
  {
    step: 3,
    title: "Целебный эффект",
    desc: "Улучшение кровообращения, снятие напряжения и восстановление естественного баланса организма.",
  },
];

// ==================== ВАРИАНТ 1: УТРЕННЯЯ РОСА ====================
const MorningDewTheme = {
  name: "Утренняя роса",
  subtitle: "Свежесть раннего утра, капли росы на листьях",
  icon: Droplets,
  colors: {
    bg: "#f0fdf4",
    bgAlt: "#dcfce7",
    accent: "#10b981",
    accentLight: "#d1fae5",
    accentDark: "#059669",
    text: "#064e3b",
    textSecondary: "#047857",
    cardBg: "#ffffff",
  },
};

function MorningDewVariant() {
  const colors = MorningDewTheme.colors;
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div style={{ backgroundColor: colors.bg }}>
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{ backgroundColor: colors.accentLight, color: colors.accent }}
          >
            <Sparkles className="w-4 h-4" />
            Сила природы для вашего здоровья
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: colors.text }}>
            Исцеление от природы
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto" style={{ color: colors.textSecondary }}>
            Каждое утро природа дарит нам свежесть и силу. Наши продукты собирают эту энергию для вашего здоровья и благополучия.
          </p>
          <div 
            className="w-full max-w-4xl mx-auto rounded-2xl overflow-hidden"
            style={{ backgroundColor: colors.bgAlt, aspectRatio: "16/7" }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <span style={{ color: colors.accent }} className="text-xl font-medium">Баннер 1820 x 500</span>
            </div>
          </div>
        </div>
      </section>

      {/* О нас */}
      <section className="py-16 md:py-20" style={{ backgroundColor: colors.cardBg }}>
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xl md:text-2xl text-center leading-relaxed" style={{ color: colors.text }}>
            Мы создаём продукты, которые помогают людям чувствовать себя лучше каждый день. 
            Шесть уникальных изделий — от пластырей до кушака — для разных потребностей вашего тела.
          </p>
        </div>
      </section>

      {/* Продукты */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-4" style={{ color: colors.text }}>
            Наша линейка продуктов
          </h2>
          <p className="text-center mb-12 md:mb-16" style={{ color: colors.textSecondary }}>
            Каждый продукт создан для конкретной задачи
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div 
                key={product.id}
                className="rounded-xl p-6 transition-all duration-300 hover:shadow-lg"
                style={{ backgroundColor: colors.cardBg, border: `1px solid ${colors.accentLight}` }}
              >
                <div 
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: colors.accentLight }}
                >
                  <product.icon className="w-7 h-7" style={{ color: colors.accent }} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: colors.text }}>{product.name}</h3>
                <p className="text-sm mb-4 leading-relaxed" style={{ color: colors.textSecondary }}>
                  {product.description}
                </p>
                <ul className="space-y-2">
                  {product.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm" style={{ color: colors.text }}>
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colors.accent }}></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Как это работает */}
      <section className="py-16 md:py-24" style={{ backgroundColor: colors.cardBg }}>
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-4" style={{ color: colors.text }}>
            Как это работает
          </h2>
          <p className="text-center mb-12" style={{ color: colors.textSecondary }}>
            Простой принцип — мощный результат
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((item) => (
              <div key={item.step} className="text-center">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold"
                  style={{ backgroundColor: colors.accent, color: "#fff" }}
                >
                  {item.step}
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: colors.text }}>{item.title}</h3>
                <p className="text-sm" style={{ color: colors.textSecondary }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-4" style={{ color: colors.text }}>
            Отзывы наших клиентов
          </h2>
          <p className="text-center mb-12" style={{ color: colors.textSecondary }}>
            Реальные истории реальных людей
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div 
                key={t.id}
                className="rounded-xl p-6"
                style={{ backgroundColor: colors.cardBg, border: `1px solid ${colors.accentLight}` }}
              >
                <div className="flex gap-1 mb-3">
                  {[1,2,3,4,5].map((s) => (
                    <Star key={s} className="w-4 h-4 fill-current" style={{ color: colors.accent }} />
                  ))}
                </div>
                <p className="mb-4 leading-relaxed" style={{ color: colors.text }}>"{t.text}"</p>
                <div className="flex items-center gap-2">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm"
                    style={{ backgroundColor: colors.accent }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-sm" style={{ color: colors.text }}>{t.name}</div>
                    <div className="text-xs" style={{ color: colors.textSecondary }}>{t.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24" style={{ backgroundColor: colors.cardBg }}>
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-4" style={{ color: colors.text }}>
            Частые вопросы
          </h2>
          <p className="text-center mb-12" style={{ color: colors.textSecondary }}>
            Ответы на популярные вопросы о нашей продукции
          </p>
          <div className="space-y-3">
            {faqItems.map((item, idx) => (
              <div 
                key={idx}
                className="rounded-xl overflow-hidden"
                style={{ backgroundColor: colors.bg, border: `1px solid ${colors.accentLight}` }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-semibold pr-4" style={{ color: colors.text }}>{item.q}</span>
                  <ChevronDown 
                    className={`w-5 h-5 flex-shrink-0 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`}
                    style={{ color: colors.accent }}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5">
                    <p style={{ color: colors.textSecondary }}>{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24" style={{ backgroundColor: colors.accent }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Готовы попробовать?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
            Посетите наш основной сайт, чтобы узнать больше о продуктах, ценах и оформить заказ с доставкой.
          </p>
          <button
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-lg font-semibold transition-all hover:scale-105"
            style={{ backgroundColor: "#fff", color: colors.accent }}
            data-testid="button-go-to-site"
          >
            Перейти на сайт
            <ExternalLink className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}

// ==================== ВАРИАНТ 2: ЛЕСНАЯ ТРОПА ====================
const ForestPathTheme = {
  name: "Лесная тропа",
  subtitle: "Тёплые земляные тона, мудрость леса",
  icon: TreePine,
  colors: {
    bg: "#faf7f2",
    bgAlt: "#f0ebe0",
    accent: "#7c5e3f",
    accentLight: "#e8dfd0",
    accentDark: "#5a4430",
    text: "#3d3226",
    textSecondary: "#6b5c4d",
    cardBg: "#ffffff",
  },
};

function ForestPathVariant() {
  const colors = ForestPathTheme.colors;
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div style={{ backgroundColor: colors.bg, fontFamily: "'Georgia', serif" }}>
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{ backgroundColor: colors.accentLight, color: colors.accent }}
          >
            <TreePine className="w-4 h-4" />
            Мудрость природы
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: colors.text }}>
            Древняя сила леса
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto" style={{ color: colors.textSecondary }}>
            Тысячелетиями люди черпали здоровье из лесных трав и древесных смол. 
            Мы сохранили эту мудрость в современных продуктах.
          </p>
          <div 
            className="w-full max-w-4xl mx-auto rounded-2xl overflow-hidden"
            style={{ backgroundColor: colors.bgAlt, aspectRatio: "16/7" }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <span style={{ color: colors.accent }} className="text-xl font-medium">Баннер 1820 x 500</span>
            </div>
          </div>
        </div>
      </section>

      {/* О нас */}
      <section className="py-16 md:py-20" style={{ backgroundColor: colors.cardBg }}>
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xl md:text-2xl text-center leading-relaxed italic" style={{ color: colors.text }}>
            «Лес — это аптека под открытым небом. Мы научились извлекать его целебную силу 
            и дарить её вам в удобной форме — от пластырей до тесьмы.»
          </p>
        </div>
      </section>

      {/* Продукты */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-4" style={{ color: colors.text }}>
            Дары леса
          </h2>
          <p className="text-center mb-12 md:mb-16" style={{ color: colors.textSecondary }}>
            Шесть изделий для вашего здоровья
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div 
                key={product.id}
                className="rounded-xl p-6"
                style={{ backgroundColor: colors.cardBg, border: `2px solid ${colors.accentLight}` }}
              >
                <div 
                  className="w-14 h-14 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: colors.accentLight }}
                >
                  <product.icon className="w-7 h-7" style={{ color: colors.accent }} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: colors.text }}>{product.name}</h3>
                <p className="text-sm mb-4 leading-relaxed" style={{ color: colors.textSecondary }}>
                  {product.description}
                </p>
                <ul className="space-y-2">
                  {product.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm" style={{ color: colors.text }}>
                      <Leaf className="w-3 h-3" style={{ color: colors.accent }} />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Как это работает */}
      <section className="py-16 md:py-24" style={{ backgroundColor: colors.bgAlt }}>
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12" style={{ color: colors.text }}>
            Как это работает
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 space-y-6">
              {howItWorks.map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 text-xl font-bold"
                    style={{ backgroundColor: colors.accent, color: "#fff" }}
                  >
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-bold mb-1" style={{ color: colors.text }}>{item.title}</h3>
                    <p className="text-sm" style={{ color: colors.textSecondary }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div 
              className="w-full md:w-80 h-64 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: colors.cardBg }}
            >
              <span style={{ color: colors.accent }}>Иллюстрация</span>
            </div>
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12" style={{ color: colors.text }}>
            Голоса благодарности
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div 
                key={t.id}
                className="rounded-xl p-6"
                style={{ backgroundColor: colors.cardBg, borderLeft: `4px solid ${colors.accent}` }}
              >
                <p className="mb-4 leading-relaxed italic" style={{ color: colors.text }}>"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm"
                    style={{ backgroundColor: colors.accent }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-sm" style={{ color: colors.text }}>{t.name}</div>
                    <div className="text-xs" style={{ color: colors.textSecondary }}>{t.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24" style={{ backgroundColor: colors.cardBg }}>
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12" style={{ color: colors.text }}>
            Вопросы и ответы
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, idx) => (
              <div 
                key={idx}
                className="rounded-lg overflow-hidden"
                style={{ backgroundColor: colors.bg }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-semibold pr-4" style={{ color: colors.text }}>{item.q}</span>
                  <ChevronDown 
                    className={`w-5 h-5 flex-shrink-0 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`}
                    style={{ color: colors.accent }}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5">
                    <p style={{ color: colors.textSecondary }}>{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24" style={{ backgroundColor: colors.accent }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Начните путь к здоровью
          </h2>
          <p className="text-white/90 text-lg mb-8">
            На нашем сайте вы найдёте полный каталог продуктов и сможете сделать заказ.
          </p>
          <button
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105"
            style={{ backgroundColor: "#fff", color: colors.accent }}
            data-testid="button-go-to-site"
          >
            Перейти на сайт
            <ExternalLink className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}

// ==================== ВАРИАНТ 3: ЦВЕТУЩИЙ ЛУГ (заменил Японский сад) ====================
const BloomingMeadowTheme = {
  name: "Цветущий луг",
  subtitle: "Нежные полевые цветы, летняя свежесть",
  icon: Flower2,
  colors: {
    bg: "#fdf8f6",
    bgAlt: "#fce7f3",
    accent: "#db2777",
    accentLight: "#fbcfe8",
    accentDark: "#9d174d",
    text: "#500724",
    textSecondary: "#831843",
    cardBg: "#ffffff",
  },
};

function BloomingMeadowVariant() {
  const colors = BloomingMeadowTheme.colors;
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div style={{ backgroundColor: colors.bg }}>
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{ backgroundColor: colors.accentLight, color: colors.accent }}
          >
            <Flower2 className="w-4 h-4" />
            Природная гармония
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: colors.text }}>
            Дыхание летнего луга
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto" style={{ color: colors.textSecondary }}>
            Полевые травы и цветы хранят в себе солнечную энергию лета. 
            Мы бережно сохраняем эту силу в каждом нашем продукте.
          </p>
          <div 
            className="w-full max-w-4xl mx-auto rounded-2xl overflow-hidden"
            style={{ backgroundColor: colors.accentLight, aspectRatio: "16/7" }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <span style={{ color: colors.accent }} className="text-xl font-medium">Баннер 1820 x 500</span>
            </div>
          </div>
        </div>
      </section>

      {/* О нас */}
      <section className="py-16 md:py-20" style={{ backgroundColor: colors.cardBg }}>
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xl md:text-2xl text-center leading-relaxed" style={{ color: colors.text }}>
            Наша продукция — это союз традиционных рецептов и современных технологий. 
            Шесть уникальных изделий для красоты, здоровья и хорошего самочувствия.
          </p>
        </div>
      </section>

      {/* Продукты */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-4" style={{ color: colors.text }}>
            Наша коллекция
          </h2>
          <p className="text-center mb-12 md:mb-16" style={{ color: colors.textSecondary }}>
            Натуральные решения для каждой потребности
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div 
                key={product.id}
                className="rounded-2xl p-6 text-center"
                style={{ backgroundColor: colors.cardBg, boxShadow: '0 4px 20px rgba(219, 39, 119, 0.08)' }}
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: colors.accentLight }}
                >
                  <product.icon className="w-8 h-8" style={{ color: colors.accent }} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: colors.text }}>{product.name}</h3>
                <p className="text-sm mb-4 leading-relaxed" style={{ color: colors.textSecondary }}>
                  {product.description}
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {product.benefits.map((benefit, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs px-3 py-1 rounded-full"
                      style={{ backgroundColor: colors.accentLight, color: colors.accent }}
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Как это работает */}
      <section className="py-16 md:py-24" style={{ backgroundColor: colors.bgAlt }}>
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12" style={{ color: colors.text }}>
            Как это работает
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((item) => (
              <div key={item.step} className="text-center">
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: colors.cardBg, border: `3px solid ${colors.accent}` }}
                >
                  <span className="text-2xl font-bold" style={{ color: colors.accent }}>{item.step}</span>
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: colors.text }}>{item.title}</h3>
                <p className="text-sm" style={{ color: colors.textSecondary }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section className="py-16 md:py-24" style={{ backgroundColor: colors.cardBg }}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12" style={{ color: colors.text }}>
            Что говорят наши клиенты
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div 
                key={t.id}
                className="rounded-2xl p-6"
                style={{ backgroundColor: colors.bg }}
              >
                <div className="flex gap-1 mb-3">
                  {[1,2,3,4,5].map((s) => (
                    <Heart key={s} className="w-4 h-4 fill-current" style={{ color: colors.accent }} />
                  ))}
                </div>
                <p className="mb-4 leading-relaxed" style={{ color: colors.text }}>"{t.text}"</p>
                <div className="font-semibold text-sm" style={{ color: colors.textSecondary }}>
                  {t.name}, {t.city}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12" style={{ color: colors.text }}>
            Частые вопросы
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, idx) => (
              <div 
                key={idx}
                className="rounded-2xl overflow-hidden"
                style={{ backgroundColor: colors.cardBg, boxShadow: '0 2px 10px rgba(219, 39, 119, 0.05)' }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-semibold pr-4" style={{ color: colors.text }}>{item.q}</span>
                  <ChevronDown 
                    className={`w-5 h-5 flex-shrink-0 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`}
                    style={{ color: colors.accent }}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5">
                    <p style={{ color: colors.textSecondary }}>{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24" style={{ background: `linear-gradient(135deg, ${colors.accent}, ${colors.accentDark})` }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Почувствуйте силу природы
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Загляните на наш сайт и выберите продукт, который подойдёт именно вам.
          </p>
          <button
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105"
            style={{ backgroundColor: "#fff", color: colors.accent }}
            data-testid="button-go-to-site"
          >
            Перейти на сайт
            <ExternalLink className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}

// ==================== ВАРИАНТ 4: ТРАВЯНАЯ АПТЕКА ====================
const HerbalPharmacyTheme = {
  name: "Травяная аптека",
  subtitle: "Винтажный ботанический стиль, мудрость веков",
  icon: Leaf,
  colors: {
    bg: "#fdfcf9",
    bgAlt: "#f5f0e8",
    accent: "#4a7c59",
    accentLight: "#e8f0e8",
    accentDark: "#2d5a3d",
    text: "#2c3e2f",
    textSecondary: "#5a6b5c",
    cardBg: "#ffffff",
  },
};

function HerbalPharmacyVariant() {
  const colors = HerbalPharmacyTheme.colors;
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div style={{ backgroundColor: colors.bg, fontFamily: "'Georgia', serif" }}>
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div 
            className="inline-block px-6 py-2 mb-6"
            style={{ border: `2px solid ${colors.accent}` }}
          >
            <span className="text-sm uppercase tracking-widest" style={{ color: colors.accent }}>
              Традиции исцеления
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: colors.text }}>
            Травяная аптека
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto" style={{ color: colors.textSecondary }}>
            Вековые рецепты народной медицины, бережно сохранённые и усовершенствованные 
            для современного человека.
          </p>
          <div 
            className="w-full max-w-4xl mx-auto overflow-hidden"
            style={{ backgroundColor: colors.bgAlt, aspectRatio: "16/7", border: `3px solid ${colors.accentLight}` }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <span style={{ color: colors.accent }} className="text-xl font-medium">Баннер 1820 x 500</span>
            </div>
          </div>
        </div>
      </section>

      {/* Девиз */}
      <section className="py-16 md:py-20" style={{ backgroundColor: colors.cardBg }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div 
            className="inline-block p-8"
            style={{ border: `1px solid ${colors.accentLight}` }}
          >
            <p className="text-xl md:text-2xl italic leading-relaxed" style={{ color: colors.text }}>
              «Природа — лучший целитель. Мы лишь помогаем ей достучаться до вас.»
            </p>
          </div>
        </div>
      </section>

      {/* Продукты */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold mb-2" style={{ color: colors.text }}>
              Каталог продуктов
            </h2>
            <div className="w-24 h-0.5 mx-auto" style={{ backgroundColor: colors.accent }}></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div 
                key={product.id}
                className="p-6"
                style={{ backgroundColor: colors.cardBg, border: `1px solid ${colors.accentLight}` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <product.icon className="w-6 h-6" style={{ color: colors.accent }} />
                  <h3 className="text-xl font-bold" style={{ color: colors.text }}>{product.name}</h3>
                </div>
                <p className="text-sm mb-4 leading-relaxed" style={{ color: colors.textSecondary }}>
                  {product.description}
                </p>
                <div className="pt-4" style={{ borderTop: `1px dashed ${colors.accentLight}` }}>
                  <ul className="space-y-1">
                    {product.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm" style={{ color: colors.text }}>
                        <span style={{ color: colors.accent }}>—</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Как это работает */}
      <section className="py-16 md:py-24" style={{ backgroundColor: colors.bgAlt }}>
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12" style={{ color: colors.text }}>
            Принцип действия
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {howItWorks.map((item) => (
              <div key={item.step} className="text-center p-6" style={{ backgroundColor: colors.cardBg }}>
                <div 
                  className="w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold"
                  style={{ border: `2px solid ${colors.accent}`, color: colors.accent }}
                >
                  {item.step}
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: colors.text }}>{item.title}</h3>
                <p className="text-sm" style={{ color: colors.textSecondary }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section className="py-16 md:py-24" style={{ backgroundColor: colors.cardBg }}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12" style={{ color: colors.text }}>
            Свидетельства
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div 
                key={t.id}
                className="p-6"
                style={{ backgroundColor: colors.bg, border: `1px solid ${colors.accentLight}` }}
              >
                <p className="mb-4 leading-relaxed italic" style={{ color: colors.text }}>«{t.text}»</p>
                <div className="text-sm" style={{ color: colors.textSecondary }}>
                  — {t.name}, г. {t.city}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12" style={{ color: colors.text }}>
            Вопросы и ответы
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, idx) => (
              <div 
                key={idx}
                style={{ backgroundColor: colors.cardBg, border: `1px solid ${colors.accentLight}` }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-semibold pr-4" style={{ color: colors.text }}>{item.q}</span>
                  <ChevronDown 
                    className={`w-5 h-5 flex-shrink-0 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`}
                    style={{ color: colors.accent }}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5" style={{ borderTop: `1px dashed ${colors.accentLight}` }}>
                    <p className="pt-4" style={{ color: colors.textSecondary }}>{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24" style={{ backgroundColor: colors.accent }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Добро пожаловать в мир здоровья
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Откройте для себя полный ассортимент продукции на нашем сайте.
          </p>
          <button
            className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold transition-all hover:scale-105"
            style={{ backgroundColor: "#fff", color: colors.accent }}
            data-testid="button-go-to-site"
          >
            Перейти в каталог
            <ExternalLink className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}

// ==================== ВАРИАНТ 5: ГОРНЫЙ ИСТОЧНИК ====================
const MountainSpringTheme = {
  name: "Горный источник",
  subtitle: "Чистота горных вершин, прохлада родников",
  icon: Mountain,
  colors: {
    bg: "#f0f9ff",
    bgAlt: "#e0f2fe",
    accent: "#0284c7",
    accentLight: "#bae6fd",
    accentDark: "#0369a1",
    text: "#0c4a6e",
    textSecondary: "#0369a1",
    cardBg: "#ffffff",
  },
};

function MountainSpringVariant() {
  const colors = MountainSpringTheme.colors;
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div style={{ backgroundColor: colors.bg }}>
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{ backgroundColor: colors.accentLight, color: colors.accent }}
          >
            <Mountain className="w-4 h-4" />
            Чистота природы
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: colors.text }}>
            Сила горных вершин
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto" style={{ color: colors.textSecondary }}>
            Высоко в горах, где воздух кристально чист, а вода течёт из древних ледников — 
            там рождается сила наших продуктов.
          </p>
          <div 
            className="w-full max-w-4xl mx-auto rounded-xl overflow-hidden"
            style={{ backgroundColor: colors.bgAlt, aspectRatio: "16/7" }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <span style={{ color: colors.accent }} className="text-xl font-medium">Баннер 1820 x 500</span>
            </div>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-12" style={{ backgroundColor: colors.cardBg }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-4 md:gap-8">
            {[
              { Icon: Droplets, title: "Чистота", desc: "Натуральные компоненты" },
              { Icon: Mountain, title: "Сила", desc: "Энергия горных трав" },
              { Icon: Snowflake, title: "Свежесть", desc: "Тонизирующий эффект" },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div 
                  className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: colors.accentLight }}
                >
                  <item.Icon className="w-6 h-6 md:w-8 md:h-8" style={{ color: colors.accent }} />
                </div>
                <h3 className="font-bold text-sm md:text-base mb-1" style={{ color: colors.text }}>{item.title}</h3>
                <p className="text-xs md:text-sm" style={{ color: colors.textSecondary }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Продукты */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-4" style={{ color: colors.text }}>
            Наша продукция
          </h2>
          <p className="text-center mb-12" style={{ color: colors.textSecondary }}>
            Шесть продуктов для здоровья и благополучия
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div 
                key={product.id}
                className="rounded-xl p-6"
                style={{ backgroundColor: colors.cardBg, boxShadow: '0 4px 15px rgba(2, 132, 199, 0.1)' }}
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: colors.accentLight }}
                >
                  <product.icon className="w-7 h-7" style={{ color: colors.accent }} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: colors.text }}>{product.name}</h3>
                <p className="text-sm mb-4 leading-relaxed" style={{ color: colors.textSecondary }}>
                  {product.description}
                </p>
                <ul className="space-y-2">
                  {product.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm" style={{ color: colors.text }}>
                      <Zap className="w-3 h-3" style={{ color: colors.accent }} />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Как это работает */}
      <section className="py-16 md:py-24" style={{ backgroundColor: colors.accentLight }}>
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12" style={{ color: colors.text }}>
            Как это работает
          </h2>
          <div className="flex flex-col md:flex-row gap-4">
            {howItWorks.map((item, idx) => (
              <div key={item.step} className="flex-1 flex items-start gap-4">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-lg font-bold text-white"
                  style={{ backgroundColor: colors.accent }}
                >
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold mb-1" style={{ color: colors.text }}>{item.title}</h3>
                  <p className="text-sm" style={{ color: colors.textSecondary }}>{item.desc}</p>
                </div>
                {idx < howItWorks.length - 1 && (
                  <ChevronRight className="hidden md:block w-6 h-6 mt-2 flex-shrink-0" style={{ color: colors.accent }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section className="py-16 md:py-24" style={{ backgroundColor: colors.cardBg }}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12" style={{ color: colors.text }}>
            Отзывы покупателей
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div 
                key={t.id}
                className="rounded-xl p-6"
                style={{ backgroundColor: colors.bg }}
              >
                <div className="flex gap-1 mb-3">
                  {[1,2,3,4,5].map((s) => (
                    <Star key={s} className="w-4 h-4 fill-current" style={{ color: "#fbbf24" }} />
                  ))}
                </div>
                <p className="mb-4 leading-relaxed" style={{ color: colors.text }}>"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold"
                    style={{ backgroundColor: colors.accent }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-sm" style={{ color: colors.text }}>{t.name}</div>
                    <div className="text-xs" style={{ color: colors.textSecondary }}>{t.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12" style={{ color: colors.text }}>
            Часто задаваемые вопросы
          </h2>
          <div className="space-y-3">
            {faqItems.map((item, idx) => (
              <div 
                key={idx}
                className="rounded-xl overflow-hidden"
                style={{ backgroundColor: colors.cardBg }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-semibold pr-4" style={{ color: colors.text }}>{item.q}</span>
                  <ChevronDown 
                    className={`w-5 h-5 flex-shrink-0 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`}
                    style={{ color: colors.accent }}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5">
                    <p style={{ color: colors.textSecondary }}>{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24" style={{ background: `linear-gradient(to right, ${colors.accent}, ${colors.accentDark})` }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Откройте мир чистоты
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Полный каталог продукции и удобный заказ — на нашем основном сайте.
          </p>
          <button
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-lg font-semibold transition-all hover:scale-105"
            style={{ backgroundColor: "#fff", color: colors.accent }}
            data-testid="button-go-to-site"
          >
            Перейти на сайт
            <ExternalLink className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}

// ==================== ВАРИАНТ 6: СОЛНЕЧНЫЙ ЛУГ ====================
const SunnyMeadowTheme = {
  name: "Солнечный луг",
  subtitle: "Тёплые золотистые тона, энергия солнца",
  icon: Sun,
  colors: {
    bg: "#fffbeb",
    bgAlt: "#fef3c7",
    accent: "#d97706",
    accentLight: "#fde68a",
    accentDark: "#b45309",
    text: "#78350f",
    textSecondary: "#92400e",
    cardBg: "#ffffff",
  },
};

function SunnyMeadowVariant() {
  const colors = SunnyMeadowTheme.colors;
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div style={{ backgroundColor: colors.bg }}>
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{ backgroundColor: colors.accentLight, color: colors.accent }}
          >
            <Sun className="w-4 h-4" />
            Сила солнца
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: colors.text }}>
            Тепло и забота природы
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto" style={{ color: colors.textSecondary }}>
            Солнечные лучи дарят растениям жизненную силу. Мы собираем эту энергию, 
            чтобы передать её вашему телу через наши продукты.
          </p>
          <div 
            className="w-full max-w-4xl mx-auto rounded-2xl overflow-hidden"
            style={{ backgroundColor: colors.accentLight, aspectRatio: "16/7" }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <span style={{ color: colors.accent }} className="text-xl font-medium">Баннер 1820 x 500</span>
            </div>
          </div>
        </div>
      </section>

      {/* Миссия */}
      <section className="py-16" style={{ backgroundColor: colors.cardBg }}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div 
              className="w-32 h-32 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: colors.accentLight }}
            >
              <Sun className="w-16 h-16" style={{ color: colors.accent }} />
            </div>
            <p className="text-xl md:text-2xl leading-relaxed text-center md:text-left" style={{ color: colors.text }}>
              Мы верим, что природа создала всё необходимое для нашего здоровья. 
              Наша задача — бережно донести эти дары до вас.
            </p>
          </div>
        </div>
      </section>

      {/* Продукты */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-4" style={{ color: colors.text }}>
            Наши продукты
          </h2>
          <p className="text-center mb-12" style={{ color: colors.textSecondary }}>
            Шесть решений для разных потребностей
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div 
                key={product.id}
                className="rounded-2xl p-6 transition-all duration-300 hover:shadow-lg"
                style={{ backgroundColor: colors.cardBg, border: `2px solid ${colors.accentLight}` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: colors.accentLight }}
                  >
                    <product.icon className="w-6 h-6" style={{ color: colors.accent }} />
                  </div>
                  <h3 className="text-xl font-bold" style={{ color: colors.text }}>{product.name}</h3>
                </div>
                <p className="text-sm mb-4 leading-relaxed" style={{ color: colors.textSecondary }}>
                  {product.description}
                </p>
                <ul className="space-y-2">
                  {product.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm" style={{ color: colors.text }}>
                      <Sun className="w-3 h-3" style={{ color: colors.accent }} />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Как это работает */}
      <section className="py-16 md:py-24" style={{ backgroundColor: colors.bgAlt }}>
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12" style={{ color: colors.text }}>
            Как это работает
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((item) => (
              <div 
                key={item.step} 
                className="text-center p-6 rounded-2xl"
                style={{ backgroundColor: colors.cardBg }}
              >
                <div 
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold text-white"
                  style={{ backgroundColor: colors.accent }}
                >
                  {item.step}
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: colors.text }}>{item.title}</h3>
                <p className="text-sm" style={{ color: colors.textSecondary }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section className="py-16 md:py-24" style={{ backgroundColor: colors.cardBg }}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12" style={{ color: colors.text }}>
            Истории наших клиентов
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div 
                key={t.id}
                className="rounded-2xl p-6"
                style={{ backgroundColor: colors.bg, border: `1px solid ${colors.accentLight}` }}
              >
                <div className="flex gap-1 mb-3">
                  {[1,2,3,4,5].map((s) => (
                    <Star key={s} className="w-4 h-4 fill-current" style={{ color: colors.accent }} />
                  ))}
                </div>
                <p className="mb-4 leading-relaxed" style={{ color: colors.text }}>"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold"
                    style={{ backgroundColor: colors.accent }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-sm" style={{ color: colors.text }}>{t.name}</div>
                    <div className="text-xs" style={{ color: colors.textSecondary }}>{t.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12" style={{ color: colors.text }}>
            Ответы на вопросы
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, idx) => (
              <div 
                key={idx}
                className="rounded-2xl overflow-hidden"
                style={{ backgroundColor: colors.cardBg, border: `1px solid ${colors.accentLight}` }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-semibold pr-4" style={{ color: colors.text }}>{item.q}</span>
                  <ChevronDown 
                    className={`w-5 h-5 flex-shrink-0 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`}
                    style={{ color: colors.accent }}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5">
                    <p style={{ color: colors.textSecondary }}>{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24" style={{ backgroundColor: colors.accent }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Согрейтесь силой природы
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Посетите наш сайт, чтобы узнать больше и сделать заказ.
          </p>
          <button
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-lg font-semibold transition-all hover:scale-105"
            style={{ backgroundColor: "#fff", color: colors.accent }}
            data-testid="button-go-to-site"
          >
            Перейти на сайт
            <ExternalLink className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}

// ==================== ГЛАВНЫЙ КОМПОНЕНТ ====================
const variants = [
  { theme: MorningDewTheme, component: MorningDewVariant },
  { theme: ForestPathTheme, component: ForestPathVariant },
  { theme: BloomingMeadowTheme, component: BloomingMeadowVariant },
  { theme: HerbalPharmacyTheme, component: HerbalPharmacyVariant },
  { theme: MountainSpringTheme, component: MountainSpringVariant },
  { theme: SunnyMeadowTheme, component: SunnyMeadowVariant },
];

export default function DesignVariants() {
  const [currentVariant, setCurrentVariant] = useState(0);
  
  const goToPrev = () => {
    setCurrentVariant((prev) => (prev === 0 ? variants.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentVariant((prev) => (prev === variants.length - 1 ? 0 : prev + 1));
  };

  const CurrentComponent = variants[currentVariant].component;
  const currentTheme = variants[currentVariant].theme;
  const ThemeIcon = currentTheme.icon;

  return (
    <div className="min-h-screen">
      {/* Навигация между вариантами */}
      <div className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <button
            onClick={goToPrev}
            className="p-2 rounded-full border hover:bg-gray-50 transition-colors flex-shrink-0"
            aria-label="Предыдущий вариант"
            data-testid="button-variant-prev"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          
          <div className="text-center min-w-0 flex-1">
            <div className="flex items-center justify-center gap-2 mb-1">
              <ThemeIcon className="w-5 h-5" style={{ color: currentTheme.colors.accent }} />
              <span className="font-semibold text-gray-900 truncate">
                Вариант {currentVariant + 1}: {currentTheme.name}
              </span>
            </div>
            <p className="text-sm text-gray-500 truncate">{currentTheme.subtitle}</p>
            <div className="flex justify-center gap-1.5 mt-2">
              {variants.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentVariant(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentVariant ? 'w-6' : ''
                  }`}
                  style={{ 
                    backgroundColor: idx === currentVariant 
                      ? currentTheme.colors.accent 
                      : '#d1d5db'
                  }}
                  aria-label={`Вариант ${idx + 1}`}
                  data-testid={`indicator-variant-${idx}`}
                />
              ))}
            </div>
          </div>

          <button
            onClick={goToNext}
            className="p-2 rounded-full border hover:bg-gray-50 transition-colors flex-shrink-0"
            aria-label="Следующий вариант"
            data-testid="button-variant-next"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Контент варианта */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentVariant}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <CurrentComponent />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
