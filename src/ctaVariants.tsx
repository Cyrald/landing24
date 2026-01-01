import { 
  Leaf, 
  ShieldCheck, 
  Truck, 
  CreditCard, 
  MessageCircle, 
  Heart, 
  Users, 
  ArrowRight, 
  Award,
  Clock,
  Globe,
  Sparkles,
  Activity,
  Smile,
  Lock,
  Target,
  Waves,
  Eye,
  Wind,
  Sunrise,
  Moon,
  Compass,
  Anchor,
  Box,
  ShoppingBag,
  Sparkle,
  Infinity,
  Dna,
  Layers,
  Star,
  Droplets,
  Package
} from "lucide-react";

export const ctaVariantsData = [
  {
    id: 1,
    name: "Classic Wellness Footer",
    content: (colors: any) => (
      <div className="w-full pt-16 pb-8 px-6 border-t" style={{ backgroundColor: colors.bg, borderColor: colors.accentLight }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Leaf className="w-8 h-8" style={{ color: colors.accent }} />
              <span className="text-2xl font-bold tracking-tight" style={{ color: colors.text }}>Естество природы в руках человека</span>
            </div>
            <p className="text-lg mb-8 leading-relaxed max-w-md" style={{ color: colors.textSecondary }}>
              Мы объединяем вековую мудрость природы с современными технологиями для вашего здоровья и долголетия.
            </p>
            <button className="px-8 py-3 rounded-md font-medium shadow-sm hover-elevate active-elevate-2 transition-all" 
                    style={{ backgroundColor: colors.accent, color: "#ffffff" }}
                    onClick={() => window.location.hash = 'catalog'}>
              Начать путь к здоровью
            </button>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold uppercase tracking-widest text-sm" style={{ color: colors.text }}>Навигация</h4>
            <nav className="flex flex-col gap-3">
              <a href="#catalog" className="hover:opacity-70 transition-opacity" style={{ color: colors.textSecondary }}>Продукты</a>
              <a href="#" className="hover:opacity-70 transition-opacity" style={{ color: colors.textSecondary }}>О нас</a>
              <a href="#" className="hover:opacity-70 transition-opacity" style={{ color: colors.textSecondary }}>Доставка</a>
              <a href="#" className="hover:opacity-70 transition-opacity" style={{ color: colors.textSecondary }}>Контакты</a>
            </nav>
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5" style={{ color: colors.accent }} />
              <span className="text-sm font-medium" style={{ color: colors.text }}>Гарантия качества</span>
            </div>
            <div className="flex items-center gap-3">
              <Truck className="w-5 h-5" style={{ color: colors.accent }} />
              <span className="text-sm font-medium" style={{ color: colors.text }}>Быстрая доставка</span>
            </div>
            <div className="flex items-center gap-3">
              <CreditCard className="w-5 h-5" style={{ color: colors.accent }} />
              <span className="text-sm font-medium" style={{ color: colors.text }}>Безопасная оплата</span>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 2,
    name: "Nature Harmony Lab",
    content: (colors: any) => (
      <div className="w-full py-20 px-6 border-y" style={{ backgroundColor: colors.bgAlt, borderColor: colors.accentLight }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider" style={{ backgroundColor: colors.accentLight, color: colors.accent }}>
              <Dna className="w-3 h-3" />
              Технологии природы
            </div>
            <h2 className="text-4xl font-bold tracking-tight" style={{ color: colors.text }}>Естество природы в руках человека</h2>
            <p className="text-lg leading-relaxed opacity-80 max-w-lg" style={{ color: colors.textSecondary }}>Наши решения мягко воздействуют на организм, восстанавливая природный баланс и жизненную энергию на клеточном уровне.</p>
            <button className="px-10 py-3 rounded-md font-medium hover-elevate active-elevate-2 transition-all" 
                    style={{ backgroundColor: colors.accent, color: "#ffffff" }}
                    onClick={() => window.location.hash = 'catalog'}>
              Узнать больше
            </button>
          </div>
          <div className="w-full md:w-1/3 grid grid-cols-1 gap-4">
             {[
               { icon: Sparkles, text: "98.7% усвоение" },
               { icon: Activity, text: "Мгновенный отклик" },
               { icon: ShieldCheck, text: "Био-защита" }
             ].map((item, i) => (
               <div key={i} className="p-6 bg-white rounded-xl border flex items-center gap-4 shadow-sm" style={{ borderColor: colors.accentLight }}>
                  <item.icon className="w-6 h-6" style={{ color: colors.accent }} />
                  <span className="font-medium text-sm tracking-wide" style={{ color: colors.text }}>{item.text}</span>
               </div>
             ))}
          </div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    name: "Trust & Community Bento",
    content: (colors: any) => (
      <div className="w-full py-16 px-6" style={{ backgroundColor: colors.bgAlt }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8 bg-white/60 backdrop-blur-md p-10 rounded-3xl border border-white flex flex-col justify-between h-[360px]">
            <div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: colors.text }}>Естество природы в руках человека</h2>
              <p className="text-lg opacity-80 mb-8 leading-relaxed" style={{ color: colors.textSecondary }}>
                Более 15 000 человек уже доверились силе природы. Присоединяйтесь к тем, кто выбирает осознанный подход к своему благополучию.
              </p>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-white overflow-hidden shadow-sm" style={{ backgroundColor: colors.accentLight }}>
                    <Users className="w-full h-full p-2.5 opacity-40" style={{ color: colors.accent }} />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-none" style={{ color: colors.accent }}>15,420+</span>
                <span className="text-xs opacity-60 font-medium">Счастливых клиентов</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 p-10 rounded-3xl text-white flex flex-col justify-center items-center text-center cursor-pointer hover-elevate active-elevate-2 transition-all h-[360px]" 
               style={{ backgroundColor: colors.accent }}
               onClick={() => window.location.hash = 'catalog'}>
            <ShoppingBag className="w-14 h-14 mb-6" />
            <h3 className="text-xl font-bold mb-3">Заботьтесь о себе</h3>
            <p className="text-sm opacity-90 mb-6">Получите персональную рекомендацию по выбору продуктов.</p>
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
              <ArrowRight className="w-5 h-5" style={{ color: colors.accent }} />
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 4,
    name: "Balance & Nature",
    content: (colors: any) => (
      <div className="w-full py-20 px-6 border-t bg-white" style={{ borderColor: colors.accentLight }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-5xl font-bold mb-6 leading-tight tracking-tight" style={{ color: colors.text }}>Естество природы в руках человека</h2>
            <p className="text-xl opacity-70 font-light leading-relaxed">Мы предоставляем натуральные инструменты. Вы обретаете гармонию и внутреннюю силу вашего организма.</p>
            <div className="flex flex-wrap gap-4">
               <button className="px-10 py-4 rounded-md font-medium text-lg hover-elevate active-elevate-2 transition-all shadow-sm" 
                       style={{ backgroundColor: colors.accent, color: "#ffffff" }}
                       onClick={() => window.location.hash = 'catalog'}>
                  Выбрать продукты
               </button>
               <div className="flex items-center gap-3 px-6 py-4 bg-slate-50 rounded-md border border-slate-100">
                  <Package className="w-5 h-5 opacity-40" />
                  <span className="font-semibold text-sm uppercase tracking-wide opacity-50">Бережная доставка</span>
               </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <div className="aspect-square bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 shadow-sm"><Dna className="w-10 h-10 opacity-20" style={{ color: colors.accent }} /></div>
             <div className="aspect-square rounded-2xl flex items-center justify-center text-white shadow-md" style={{ backgroundColor: colors.accent }}><Layers className="w-10 h-10" /></div>
             <div className="aspect-square rounded-2xl flex items-center justify-center text-white shadow-md" style={{ backgroundColor: colors.accentDark }}><Target className="w-10 h-10" /></div>
             <div className="aspect-square bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 shadow-sm"><ShieldCheck className="w-10 h-10 opacity-20" style={{ color: colors.accent }} /></div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 5,
    name: "Deep Nature Serenity",
    content: (colors: any) => (
      <div className="w-full py-28 px-6 text-center relative" style={{ backgroundColor: colors.bg }}>
        <div className="max-w-3xl mx-auto">
          <Leaf className="w-12 h-12 mx-auto mb-8 opacity-40 animate-pulse" style={{ color: colors.accent }} />
          <h2 className="text-4xl font-serif italic mb-6 leading-tight" style={{ color: colors.text }}>Естество природы в руках человека</h2>
          <p className="mb-10 opacity-70 text-lg leading-relaxed italic" style={{ color: colors.textSecondary }}>
            Наши продукты — это мягкий мост между первозданной силой природы и вашим ежедневным комфортом.
          </p>
          <button className="px-12 py-4 bg-white border rounded-md font-medium text-xl hover-elevate active-elevate-2 transition-all shadow-sm" 
                  style={{ borderColor: colors.accent, color: colors.accent }}
                  onClick={() => window.location.hash = 'catalog'}>
            Начать преображение
          </button>
        </div>
      </div>
    )
  },
  {
    id: 6,
    name: "Vitality System",
    content: (colors: any) => (
      <div className="w-full py-20 px-6" style={{ backgroundColor: colors.accent }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-16">
            <div className="flex-1 space-y-6 text-white">
               <h2 className="text-4xl font-bold leading-tight">Естество природы в руках человека</h2>
               <p className="text-lg opacity-90 max-w-xl">Мы переосмыслили подход к здоровью, создав систему, которая работает в унисон с вашими биологическими ритмами.</p>
               <button className="px-10 py-3 bg-white font-semibold text-lg hover-elevate active-elevate-2 transition-all rounded-md" 
                       style={{ color: colors.accent }}
                       onClick={() => window.location.hash = 'catalog'}>
                  Перейти в каталог
               </button>
            </div>
            <div className="w-full md:w-1/3 grid grid-cols-1 gap-4">
               {[
                 { label: "Доставка", val: "Бережная", icon: Truck },
                 { label: "Качество", val: "Эталон", icon: Award },
                 { label: "Поддержка", val: "Забота", icon: Heart }
               ].map((item, i) => (
                 <div key={i} className="flex items-center justify-between p-6 border border-white/20 bg-white/10 rounded-xl backdrop-blur-sm group transition-all">
                    <div className="flex items-center gap-3">
                       <item.icon className="w-5 h-5 text-white opacity-70" />
                       <span className="font-medium text-xs text-white/80 uppercase tracking-wider">{item.label}</span>
                    </div>
                    <span className="font-bold text-lg text-white italic">{item.val}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 7,
    name: "Soft Morning Bloom",
    content: (colors: any) => (
      <div className="w-full py-24 px-6 text-center" style={{ background: `linear-gradient(to bottom, ${colors.bg}, ${colors.bgAlt})` }}>
        <div className="max-w-4xl mx-auto">
          <Sunrise className="w-16 h-16 mx-auto mb-8 opacity-60" style={{ color: colors.accent }} />
          <h2 className="text-5xl font-bold mb-8 tracking-tight" style={{ color: colors.text }}>Естество природы в руках человека</h2>
          <p className="text-xl opacity-70 mb-12 max-w-2xl mx-auto font-light leading-relaxed">Подарите своему организму бережную заботу. Ваше обновленное состояние начинается с осознанного выбора.</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
             <button className="px-12 py-4 rounded-md font-semibold text-xl hover-elevate active-elevate-2 transition-all shadow-md" 
                     style={{ backgroundColor: colors.accent, color: "#ffffff" }}
                     onClick={() => window.location.hash = 'catalog'}>
                Начать сейчас
             </button>
             <div className="flex flex-col items-center px-8 py-4 bg-white rounded-xl border shadow-sm" style={{ borderColor: colors.accentLight }}>
                <span className="text-2xl font-bold" style={{ color: colors.accent }}>5000+</span>
                <span className="text-[10px] uppercase font-bold opacity-60">Довольных клиентов</span>
             </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 8,
    name: "Minimalist Navigator",
    content: (colors: any) => (
      <div className="w-full py-20 px-6 border-t bg-white" style={{ borderColor: colors.accentLight }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex items-center gap-8">
            <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center border" style={{ borderColor: colors.accentLight }}>
               <Compass className="w-7 h-7" style={{ color: colors.accent }} />
            </div>
            <div>
               <h3 className="text-3xl font-bold mb-2" style={{ color: colors.text }}>Естество природы в руках человека</h3>
               <p className="opacity-60 text-lg" style={{ color: colors.textSecondary }}>Ваш верный навигатор к гармонии и здоровью.</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full md:w-auto">
            <button className="px-12 py-3 rounded-md font-semibold text-lg hover-elevate active-elevate-2 transition-all" 
                    style={{ backgroundColor: colors.accent, color: "#ffffff" }}
                    onClick={() => window.location.hash = 'catalog'}>
              Смотреть каталог
            </button>
            <div className="flex justify-between items-center px-2 opacity-60">
               <div className="flex gap-1">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 text-amber-400 fill-current" />)}
               </div>
               <span className="text-[10px] font-bold uppercase tracking-wider">Top Rated 2026</span>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 9,
    name: "Ocean Purity Flow",
    content: (colors: any) => (
      <div className="w-full py-24 px-6 relative overflow-hidden" style={{ backgroundColor: colors.accentDark }}>
        <Waves className="absolute bottom-0 left-0 w-full h-40 opacity-10" style={{ color: "#ffffff" }} />
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10 text-white">
           <div className="flex-1 space-y-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                 <Droplets className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold leading-tight uppercase tracking-tight">Естество природы в руках человека</h2>
              <p className="text-lg opacity-80 font-light leading-relaxed">Натуральное очищение и восстановление биодоступности вашей воды. Вернитесь к истокам чистоты с нашими технологиями.</p>
              <button className="px-12 py-4 bg-white font-bold text-lg rounded-md hover-elevate active-elevate-2 transition-all" 
                      style={{ color: colors.accentDark }}
                      onClick={() => window.location.hash = 'catalog'}>
                 Выбрать очиститель
              </button>
           </div>
           <div className="w-full md:w-1/3 grid grid-cols-1 gap-4">
              {[
                { l: "Чистота", v: "100%" },
                { l: "Структура", v: "Природная" },
                { l: "Баланс", v: "Оптимальный" }
              ].map((item, i) => (
                <div key={i} className="p-8 border border-white/20 bg-white/5 backdrop-blur-md rounded-2xl text-center">
                   <div className="text-3xl font-bold text-white mb-1">{item.v}</div>
                   <div className="text-[10px] uppercase font-bold tracking-widest opacity-60">{item.l}</div>
                </div>
              ))}
           </div>
        </div>
      </div>
    )
  },
  {
    id: 10,
    name: "Aesthetic Wellness",
    content: (colors: any) => (
      <div className="w-full py-20 px-6 border-t" style={{ backgroundColor: colors.bg, borderColor: colors.accentLight }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-12">
             <div className="flex-1">
                <span className="text-xs uppercase tracking-[0.4em] opacity-40 font-bold block mb-6 italic">Wellness Edition . 2026</span>
                <h2 className="text-5xl font-serif mb-8 leading-tight tracking-tight" style={{ color: colors.text }}>Естество природы в руках человека</h2>
                <p className="text-xl opacity-70 leading-relaxed max-w-xl italic font-light" style={{ color: colors.textSecondary }}>
                   Мы верим, что истинное благополучие рождается на стыке природной мудрости и человеческого внимания. Каждый продукт — это гармония формы и сути.
                </p>
             </div>
             <div className="flex flex-col gap-6 items-end">
                <button className="px-12 py-4 border-2 font-bold uppercase tracking-wider text-sm hover-elevate active-elevate-2 transition-all rounded-md" 
                        style={{ borderColor: colors.accent, color: colors.accent }}
                        onClick={() => window.location.hash = 'catalog'}>
                   Смотреть коллекцию
                </button>
                <div className="flex gap-8 opacity-40 font-bold text-[9px] uppercase tracking-widest">
                   <span>Мудрость</span>
                   <span>Гармония</span>
                   <span>Чистота</span>
                </div>
             </div>
          </div>
          <div className="h-px w-full bg-black/5 mb-12"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
             {[Eye, Activity, ShieldCheck, Heart].map((Icon, i) => (
               <div key={i} className="flex flex-col items-center md:items-start gap-4 group cursor-pointer">
                  <Icon className="w-8 h-8 opacity-30 group-hover:opacity-100 transition-all" style={{ color: colors.accent }} />
                  <span className="text-[10px] uppercase font-bold opacity-40 tracking-wider">Гармония 0{i+1}</span>
               </div>
             ))}
          </div>
        </div>
      </div>
    )
  },
  {
    id: 11,
    name: "Earth Foundation",
    content: (colors: any) => (
      <div className="w-full py-24 px-6 relative overflow-hidden" style={{ backgroundColor: "#2a4a36", color: "#f8faf8" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16 relative z-10">
           <div className="max-w-xl space-y-8">
              <div className="w-16 h-0.5 bg-white/30"></div>
              <h2 className="text-5xl font-serif italic mb-6 leading-tight">Естество природы в руках человека</h2>
              <p className="text-xl opacity-80 leading-relaxed font-light">
                 Мы объединили вековую мудрость использования природных минералов с современными инновациями. Это ваш надежный фундамент здоровья.
              </p>
              <button className="px-12 py-4 bg-white text-[#2a4a36] rounded-md font-bold text-lg hover-elevate active-elevate-2 transition-all uppercase tracking-wider" 
                      onClick={() => window.location.hash = 'catalog'}>
                 Начать путь
              </button>
           </div>
           <div className="flex flex-col gap-8">
              <div className="w-48 h-48 border border-white/20 flex flex-col items-center justify-center bg-white/10 rounded-full p-8 text-center backdrop-blur-sm group hover:scale-105 transition-all">
                 <ShieldCheck className="w-10 h-10 mb-4 opacity-60 text-white" />
                 <div className="text-4xl font-bold mb-1 italic text-white">ECO</div>
                 <div className="text-[10px] uppercase font-bold tracking-widest opacity-60">Сертифицировано</div>
              </div>
           </div>
        </div>
      </div>
    )
  },
  {
    id: 12,
    name: "Sky Renewal",
    content: (colors: any) => (
      <div className="w-full py-24 px-6 text-center overflow-hidden relative" style={{ backgroundColor: colors.bgAlt }}>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="w-20 h-20 bg-white rounded-full shadow-md mx-auto mb-12 flex items-center justify-center border border-sky-100 rotate-12">
             <Wind className="w-10 h-10" style={{ color: colors.accent }} />
          </div>
          <h2 className="text-5xl font-bold mb-8 tracking-tight uppercase leading-tight" style={{ color: colors.accent }}>Естество природы в руках человека</h2>
          <p className="text-xl mb-12 opacity-70 italic font-serif leading-relaxed max-w-2xl mx-auto" style={{ color: colors.textSecondary }}>
            Ощутите легкость и свежесть нового дня. Наши решения созданы для того, чтобы вы чувствовали себя гармонично в любой ситуации.
          </p>
          <button className="px-12 py-4 bg-white border font-bold text-lg rounded-md hover-elevate active-elevate-2 transition-all shadow-sm" 
                  style={{ borderColor: colors.accent, color: colors.accent }}
                  onClick={() => window.location.hash = 'catalog'}>
            Почувствовать легкость
          </button>
        </div>
      </div>
    )
  },
  {
    id: 13,
    name: "Midnight Recovery",
    content: (colors: any) => (
      <div className="w-full py-24 px-6 overflow-hidden relative" style={{ backgroundColor: colors.bg }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16 relative z-10">
          <div className="max-w-xl space-y-8">
            <div className="flex items-center gap-4">
               <div className="w-10 h-10 rounded-xl bg-white border flex items-center justify-center shadow-sm" style={{ borderColor: colors.accentLight }}>
                  <Moon className="w-5 h-5" style={{ color: colors.accent }} />
               </div>
               <span className="text-xs font-bold uppercase tracking-widest opacity-60">Ночное восстановление</span>
            </div>
            <h2 className="text-5xl font-bold mb-6 leading-tight tracking-tight" style={{ color: colors.text }}>Естество природы в руках человека</h2>
            <p className="text-xl opacity-70 leading-relaxed font-light">
               Мы разработали систему глубокого восстановления для глаз и головы. Просыпайтесь полностью обновленным благодаря силе природных ритмов.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
               <button className="px-10 py-3 rounded-md font-bold text-lg hover-elevate active-elevate-2 transition-all shadow-md" 
                       style={{ backgroundColor: colors.accent, color: "#ffffff" }}
                       onClick={() => window.location.hash = 'catalog'}>
                  Выбрать систему
               </button>
               <div className="flex items-center gap-3 px-6 py-3 bg-white border rounded-md shadow-sm" style={{ borderColor: colors.accentLight }}>
                  <ShieldCheck className="w-5 h-5 opacity-60" style={{ color: colors.accent }} />
                  <span className="font-semibold text-sm opacity-60">Гарантия заботы</span>
               </div>
            </div>
          </div>
          <div className="w-full md:w-auto">
             <div className="p-12 bg-white border rounded-[3rem] text-center min-w-[280px] shadow-sm" style={{ borderColor: colors.accentLight }}>
                <Clock className="w-10 h-10 mx-auto mb-4 opacity-40" style={{ color: colors.accent }} />
                <div className="text-5xl font-bold mb-1 italic" style={{ color: colors.accent }}>RE-GEN</div>
                <div className="text-[10px] uppercase font-bold tracking-widest opacity-40">Режим восстановления</div>
             </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 14,
    name: "City Shield",
    content: (colors: any) => (
      <div className="w-full py-20 px-6 border-t" style={{ backgroundColor: colors.bgAlt, borderColor: colors.accentLight }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
            <div className="md:col-span-8 p-12 bg-white rounded-3xl border shadow-sm flex flex-col justify-between items-start relative overflow-hidden" style={{ borderColor: colors.accentLight }}>
               <div className="relative z-10 space-y-8">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-md text-white" style={{ backgroundColor: colors.accent }}>
                     <ShieldCheck className="w-8 h-8" />
                  </div>
                  <h3 className="text-4xl font-bold mb-6 tracking-tight" style={{ color: colors.text }}>Естество природы в руках человека</h3>
                  <p className="text-xl opacity-75 max-w-xl leading-relaxed" style={{ color: colors.textSecondary }}>
                     Ваша невидимая защита в ритме мегаполиса. Натуральные решения против стресса и усталости всегда под рукой.
                  </p>
                  <button className="px-10 py-3 rounded-md font-bold text-lg hover-elevate active-elevate-2 transition-all shadow-md text-white" 
                          style={{ backgroundColor: colors.accent }}
                          onClick={() => window.location.hash = 'catalog'}>
                     Активировать защиту
                  </button>
               </div>
            </div>
            <div className="md:col-span-4 flex flex-col gap-6">
               <div className="flex-1 p-8 bg-white rounded-3xl border flex flex-col justify-center items-center text-center shadow-sm" style={{ borderColor: colors.accentLight }}>
                  <Lock className="w-10 h-10 opacity-30 mb-4" style={{ color: colors.accent }} />
                  <h4 className="font-bold text-lg">Безопасно</h4>
                  <p className="text-[10px] opacity-50 font-bold uppercase tracking-wider">Защищенный заказ</p>
               </div>
               <div className="flex-1 p-8 rounded-3xl text-white flex flex-col justify-center items-center text-center shadow-md hover:scale-[1.02] transition-transform cursor-pointer" 
                    style={{ backgroundColor: colors.accentDark }}
                    onClick={() => window.location.hash = 'catalog'}>
                  <Truck className="w-10 h-10 mb-4" />
                  <h4 className="font-bold text-lg italic">Экспресс</h4>
                  <p className="text-[10px] opacity-80 font-bold uppercase tracking-wider">Доставка сегодня</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 15,
    name: "Family Care",
    content: (colors: any) => (
      <div className="w-full py-24 px-6 text-center" style={{ backgroundColor: colors.bg }}>
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center -space-x-4 mb-12">
             {[1,2,3,4,5].map(i => (
               <div key={i} className="w-20 h-20 rounded-full border-4 border-white bg-white shadow-sm flex items-center justify-center overflow-hidden hover:z-20 hover:scale-110 transition-all cursor-default group">
                  <Heart className="w-8 h-8 opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all" style={{ color: colors.accent }} />
               </div>
             ))}
          </div>
          <h2 className="text-4xl font-bold mb-6 tracking-tight" style={{ color: colors.text }}>Естество природы в руках человека</h2>
          <p className="text-xl opacity-70 mb-12 max-w-2xl mx-auto leading-relaxed font-light italic font-serif" style={{ color: colors.textSecondary }}>
             Мы создаем продукты, которые становятся частью вашей семейной традиции благополучия. Чистая забота для каждого поколения вашей семьи.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
             <button className="px-12 py-4 rounded-md font-bold text-xl hover-elevate active-elevate-2 transition-all shadow-md text-white" 
                     style={{ backgroundColor: colors.accent }}
                     onClick={() => window.location.hash = 'catalog'}>
                Заботиться о близких
             </button>
             <div className="flex flex-col text-left border-l-2 pl-8" style={{ borderColor: colors.accentLight }}>
                <span className="font-bold text-xl italic" style={{ color: colors.accent }}>100% Чистота</span>
                <span className="text-[10px] uppercase opacity-60 font-bold tracking-widest">Стандарт качества</span>
             </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 16,
    name: "Joy Foundation",
    content: (colors: any) => (
      <div className="w-full py-20 px-6 bg-white border-t" style={{ borderColor: colors.accentLight }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-16 mb-16">
            <div className="w-32 h-32 rounded-3xl bg-green-50 flex items-center justify-center shrink-0 shadow-sm border" style={{ borderColor: colors.accentLight }}>
               <Smile className="w-16 h-16" style={{ color: colors.accent }} />
            </div>
            <div className="flex-1 text-center md:text-left space-y-4">
               <h2 className="text-4xl font-bold tracking-tight" style={{ color: colors.text }}>Естество природы в руках человека</h2>
               <p className="text-xl opacity-75 leading-relaxed max-w-2xl font-light" style={{ color: colors.textSecondary }}>
                  Верните себе радость каждого движения и легкость каждого вдоха. Наши продукты созданы, чтобы вы снова улыбались по-настоящему.
               </p>
            </div>
          </div>
          <div className="p-3 bg-slate-50 rounded-2xl flex flex-col md:flex-row gap-3 border shadow-inner" style={{ borderColor: colors.accentLight }}>
             <button className="flex-[3] py-6 rounded-xl font-bold text-2xl hover-elevate active-elevate-2 transition-all shadow-sm text-white" 
                     style={{ backgroundColor: colors.accent }}
                     onClick={() => window.location.hash = 'catalog'}>
                Начать путь к радости
             </button>
             <div className="flex-1 py-6 bg-white border rounded-xl flex flex-col items-center justify-center gap-2 group cursor-pointer hover:bg-slate-50 transition-all shadow-sm" style={{ borderColor: colors.accentLight }}>
                <MessageCircle className="w-8 h-8 opacity-40 group-hover:opacity-100 transition-all" style={{ color: colors.accent }} />
                <span className="font-bold text-sm tracking-wide opacity-60">Задать вопрос</span>
             </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 17,
    name: "Zen Journey",
    content: (colors: any) => (
      <div className="w-full py-32 px-6 text-center relative bg-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent to-accent/30"></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="mb-12">
             <Infinity className="w-12 h-12 mx-auto opacity-30" style={{ color: colors.accent }} />
          </div>
          <h2 className="text-4xl font-serif italic mb-10 leading-snug tracking-tight" style={{ color: colors.text }}>Естество природы в руках человека</h2>
          <p className="mb-16 text-sm opacity-60 tracking-[0.4em] uppercase font-bold" style={{ color: colors.textSecondary }}>
             Гармония . Сила . Результат
          </p>
          <button className="px-16 py-4 border-2 rounded-md text-lg uppercase tracking-widest font-bold hover-elevate active-elevate-2 transition-all shadow-sm" 
                  style={{ borderColor: colors.accent, color: colors.accent }}
                  onClick={() => window.location.hash = 'catalog'}>
             Обрести баланс
          </button>
          <div className="mt-24 flex justify-center gap-16 opacity-20">
             <Anchor className="w-6 h-6" style={{ color: colors.accent }} />
             <Target className="w-6 h-6" style={{ color: colors.accent }} />
             <Compass className="w-6 h-6" style={{ color: colors.accent }} />
          </div>
        </div>
      </div>
    )
  },
  {
    id: 18,
    name: "Digital Wellness",
    content: (colors: any) => (
      <div className="w-full py-20 px-6 bg-white border-t" style={{ borderColor: colors.accentLight }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8 p-12 rounded-3xl flex flex-col justify-between items-start text-white overflow-hidden relative shadow-md" style={{ backgroundColor: colors.accentDark }}>
             <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-12">
                <Dna className="w-8 h-8" style={{ color: colors.accentDark }} />
             </div>
             <div className="space-y-6">
                <h2 className="text-4xl font-bold mb-4 tracking-tight leading-tight uppercase italic">Естество природы в руках человека</h2>
                <p className="opacity-80 text-xl font-light max-w-xl leading-relaxed">Мы объединили природные рецепты с современными технологиями, чтобы вы получили максимум пользы для здоровья без компромиссов.</p>
             </div>
          </div>
          <div className="md:col-span-4 flex flex-col gap-8">
             <div className="flex-1 p-10 rounded-3xl text-white flex flex-col justify-center items-center text-center cursor-pointer hover-elevate active-elevate-2 transition-all shadow-md group" 
                  style={{ backgroundColor: colors.accent }}
                  onClick={() => window.location.hash = 'catalog'}>
                <ShoppingBag className="w-14 h-14 mb-6 group-hover:scale-110 transition-transform" />
                <span className="font-bold text-xl uppercase tracking-wider leading-none">В магазин</span>
             </div>
             <div className="h-40 bg-slate-50 p-8 rounded-3xl flex flex-col justify-center items-center text-center border shadow-sm" style={{ borderColor: colors.accentLight }}>
                <div className="text-4xl font-bold mb-1 italic" style={{ color: colors.accent }}>98.9%</div>
                <div className="text-[10px] uppercase font-bold tracking-widest opacity-50">Чистота состава</div>
             </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 19,
    name: "Infinite Glow",
    content: (colors: any) => (
      <div className="w-full py-32 px-6 text-center bg-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <Infinity className="w-20 h-20 mx-auto mb-12 opacity-20" style={{ color: colors.accent }} />
          <h2 className="text-6xl font-bold mb-10 leading-tight tracking-tight uppercase" style={{ color: colors.text }}>Естество природы в руках человека</h2>
          <p className="text-2xl mb-16 opacity-70 italic font-serif max-w-3xl mx-auto leading-relaxed" style={{ color: colors.textSecondary }}>
            Ваше тело обладает невероятным потенциалом. Мы предоставляем природные инструменты, помогающие раскрыть его истинную силу и здоровье.
          </p>
          <button className="px-16 py-5 rounded-md font-bold text-2xl hover-elevate active-elevate-2 shadow-md transition-all text-white" 
                  style={{ backgroundColor: colors.accent }}
                  onClick={() => window.location.hash = 'catalog'}>
             Начать трансформацию
          </button>
        </div>
      </div>
    )
  },
  {
    id: 20,
    name: "Service Hub",
    content: (colors: any) => (
      <div className="w-full py-20 px-6 bg-slate-50 border-t" style={{ borderColor: colors.accentLight }}>
        <div className="max-w-7xl mx-auto">
           <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
              {[
                { icon: Truck, title: "Логистика", desc: "Бережно и в срок" },
                { icon: Globe, title: "География", desc: "Доставка по всему миру" },
                { icon: CreditCard, title: "Оплата", desc: "Удобные способы" },
                { icon: ShieldCheck, title: "Гарантия", desc: "Забота о качестве" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center md:items-start text-center md:text-left gap-6 group">
                   <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center border group-hover:scale-105 transition-transform" style={{ borderColor: colors.accentLight }}>
                      <item.icon className="w-7 h-7 opacity-40" style={{ color: colors.accent }} />
                   </div>
                   <div>
                      <h4 className="font-bold uppercase tracking-wider text-sm mb-2" style={{ color: colors.text }}>{item.title}</h4>
                      <p className="text-sm opacity-70 font-medium leading-relaxed" style={{ color: colors.textSecondary }}>{item.desc}</p>
                   </div>
                </div>
              ))}
           </div>
           <div className="p-12 bg-white rounded-3xl border flex flex-col lg:flex-row items-center justify-between gap-12 shadow-sm relative overflow-hidden" style={{ borderColor: colors.accentLight }}>
              <div className="max-w-xl text-center lg:text-left relative z-10 space-y-4">
                 <h2 className="text-4xl font-bold mb-2 tracking-tight uppercase">Естество природы в руках человека</h2>
                 <p className="opacity-75 text-xl font-medium leading-relaxed" style={{ color: colors.textSecondary }}>Ваш путь к новому уровню легкости и энергии начинается здесь. Сделайте первый шаг.</p>
              </div>
              <button className="px-16 py-4 rounded-md font-bold text-2xl shadow-md hover-elevate active-elevate-2 transition-all text-white" 
                      style={{ backgroundColor: colors.accent }}
                      onClick={() => window.location.hash = 'catalog'}>
                 Выбрать товары
              </button>
           </div>
        </div>
      </div>
    )
  },
  {
    id: 21,
    name: "Natural Bloom",
    content: (colors: any) => (
      <div className="w-full py-32 px-6 text-center bg-white overflow-hidden relative">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex justify-center gap-4 mb-12 opacity-60">
             {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 text-amber-400 fill-amber-400" />)}
          </div>
          <h2 className="text-6xl font-bold mb-8 tracking-tight uppercase leading-tight italic" style={{ color: colors.text }}>Естество природы в руках человека</h2>
          <p className="text-2xl mb-16 opacity-75 leading-relaxed italic max-w-3xl mx-auto font-serif" style={{ color: colors.textSecondary }}>
             Мы возвращаем радость полноценной жизни, объединяя чистоту природных компонентов с вашим стремлением к здоровью.
          </p>
          <button className="px-20 py-5 rounded-md font-bold text-2xl shadow-md hover-elevate active-elevate-2 transition-all text-white" 
                  style={{ backgroundColor: colors.accent }}
                  onClick={() => window.location.hash = 'catalog'}>
             Заказать сейчас
          </button>
          <div className="mt-20 text-[10px] uppercase tracking-[0.5em] opacity-40 font-bold">Гармония . Качество . 2026</div>
        </div>
      </div>
    )
  },
  {
    id: 22,
    name: "Earth Strength",
    content: (colors: any) => (
      <div className="w-full py-28 px-6 relative overflow-hidden text-white" style={{ backgroundColor: colors.accentDark }}>
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
           <div className="max-w-2xl space-y-8">
              <h2 className="text-5xl font-serif italic mb-6 leading-tight">Естество природы в руках человека</h2>
              <p className="text-xl opacity-80 leading-relaxed font-light max-w-xl">
                 Мы бережно сохраняем первозданную энергию природы. Это фундамент, на котором строится ваша новая жизнь, полная сил и уверенности.
              </p>
              <button className="px-16 py-4 bg-white font-bold text-xl rounded-md hover-elevate active-elevate-2 transition-all uppercase tracking-widest shadow-md" 
                      style={{ color: colors.accentDark }}
                      onClick={() => window.location.hash = 'catalog'}>
                 В каталог
              </button>
           </div>
           <div className="flex flex-col gap-8">
              <div className="w-40 h-40 border border-white/20 flex flex-col items-center justify-center p-8 text-center bg-white/10 backdrop-blur-sm rounded-full group hover:border-white/50 transition-all rotate-3">
                 <ShieldCheck className="w-10 h-10 mb-3 opacity-60" />
                 <div className="text-3xl font-bold mb-1 italic">ECO</div>
                 <div className="text-[10px] uppercase font-bold tracking-widest opacity-60">Био-стандарт</div>
              </div>
           </div>
        </div>
      </div>
    )
  },
  {
    id: 23,
    name: "Pure Joy",
    content: (colors: any) => (
      <div className="w-full py-24 px-6 bg-white border-t overflow-hidden" style={{ borderColor: colors.accentLight }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16 relative">
            <div className="w-40 h-40 rounded-3xl bg-green-50 flex items-center justify-center shrink-0 rotate-12 shadow-sm border" style={{ borderColor: colors.accentLight }}>
               <Smile className="w-20 h-20" style={{ color: colors.accent }} />
            </div>
            <div className="flex-1 text-center lg:text-left space-y-6">
               <h2 className="text-4xl font-bold tracking-tight" style={{ color: colors.text }}>Естество природы в руках человека</h2>
               <p className="text-xl opacity-75 leading-relaxed font-light max-w-xl" style={{ color: colors.textSecondary }}>
                  Обретите истинную легкость и вдохновение. Наши решения созданы для того, чтобы каждый ваш день был наполнен природной энергией.
               </p>
               <button className="px-12 py-4 rounded-md font-bold text-xl hover-elevate active-elevate-2 shadow-md transition-all text-white" 
                       style={{ backgroundColor: colors.accent }}
                       onClick={() => window.location.hash = 'catalog'}>
                  Выбрать здоровье
               </button>
            </div>
            <div className="hidden lg:flex flex-col gap-6 opacity-40">
               {[Award, Sparkles, Heart].map((Icon, i) => (
                 <Icon key={i} className="w-8 h-8" style={{ color: colors.accent }} />
               ))}
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 24,
    name: "Wellness Anchor",
    content: (colors: any) => (
      <div className="w-full py-24 px-6 text-center" style={{ backgroundColor: colors.bgAlt }}>
        <div className="max-w-4xl mx-auto">
          <Anchor className="w-12 h-12 mx-auto mb-8 opacity-40" style={{ color: colors.accent }} />
          <h2 className="text-5xl font-bold mb-8 leading-tight tracking-tight" style={{ color: colors.text }}>Естество природы в руках человека</h2>
          <p className="text-xl mb-12 opacity-70 leading-relaxed font-light italic" style={{ color: colors.textSecondary }}>
            Мы создаем надежную опору для вашего здоровья. Натуральность, доказанная временем и подтвержденная тысячами счастливых клиентов.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <button className="px-16 py-4 rounded-md font-bold text-xl hover-elevate active-elevate-2 shadow-md transition-all text-white" 
                    style={{ backgroundColor: colors.accent }}
                    onClick={() => window.location.hash = 'catalog'}>
               Стать частью сообщества
            </button>
            <div className="flex items-center gap-3 px-6 py-4 bg-white rounded-md border shadow-sm" style={{ borderColor: colors.accentLight }}>
               <Users className="w-5 h-5 opacity-50" style={{ color: colors.accent }} />
               <span className="font-bold text-sm opacity-60">15k+ участников</span>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 25,
    name: "Final Harmony",
    content: (colors: any) => (
      <div className="w-full py-32 px-6 text-center bg-white">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="w-16 h-1 bg-accent/20 mx-auto"></div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight" style={{ color: colors.text }}>Естество природы в руках человека</h2>
          <p className="text-xl opacity-75 italic font-serif leading-relaxed" style={{ color: colors.textSecondary }}>
            Ваш осознанный путь к совершенному самочувствию начинается здесь. Впустите силу природы в свою жизнь прямо сейчас.
          </p>
          <button className="px-20 py-5 rounded-md font-bold text-2xl hover-elevate active-elevate-2 shadow-lg transition-all text-white" 
                  style={{ backgroundColor: colors.accent }}
                  onClick={() => window.location.hash = 'catalog'}>
             Заказать комплексный уход
          </button>
          <div className="pt-12">
             <Leaf className="w-8 h-8 mx-auto opacity-30" style={{ color: colors.accent }} />
          </div>
        </div>
      </div>
    )
  }
];
