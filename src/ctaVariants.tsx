import { 
  Leaf, 
  ShieldCheck, 
  Truck, 
  CreditCard, 
  MessageCircle, 
  HelpCircle, 
  Heart, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Award,
  Clock,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Globe,
  Sparkles,
  Zap,
  Activity,
  Smile,
  Navigation,
  ExternalLink,
  Lock,
  Target,
  Waves,
  Eye,
  ZapOff,
  Wind,
  Sunrise,
  Moon,
  Compass,
  Anchor,
  Box,
  ShoppingBag,
  Sparkle,
  Infinity,
  ChevronRight,
  Monitor,
  Dna,
  Layers,
  Search,
  Settings,
  Star,
  ShieldAlert,
  Droplets,
  Trophy,
  Wifi,
  Package,
  Headphones,
  Calendar,
  Cloud,
  Coffee,
  Frown,
  Gift,
  Key,
  Lightbulb,
  Music,
  Rocket,
  Sun,
  Thermometer,
  ThumbsUp,
  Umbrella,
  Video,
  Watch
} from "lucide-react";

export const ctaVariantsData = [
  {
    id: 1,
    name: "Classic Wellness Footer",
    content: (colors: any) => (
      <div className="w-full pt-16 pb-8 px-6 border-t" style={{ backgroundColor: colors.bgAlt, borderColor: colors.accentLight }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Leaf className="w-8 h-8" style={{ color: colors.accent }} />
              <span className="text-2xl font-bold tracking-tight" style={{ color: colors.text }}>Wellness Center</span>
            </div>
            <p className="text-lg mb-8 leading-relaxed max-w-md" style={{ color: colors.textSecondary }}>
              Мы объединяем вековую мудрость природы с современными технологиями для вашего здоровья.
            </p>
            <button className="px-8 py-4 rounded-xl font-bold shadow-lg hover-elevate active-elevate-2 transition-all" 
                    style={{ backgroundColor: colors.button, color: colors.buttonText }}
                    onClick={() => window.location.hash = 'catalog'}>
              Купить сейчас
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
              <span className="text-sm font-medium" style={{ color: colors.text }}>Быстрая доставка по РФ</span>
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
    name: "Quantum Cellular Lab",
    content: (colors: any) => (
      <div className="w-full py-24 px-6 bg-slate-900 text-white relative overflow-hidden">
        <Dna className="absolute top-[-5%] right-[-5%] w-[40%] h-[40%] opacity-5 animate-pulse" />
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-20 relative z-10">
          <div className="flex-1 space-y-8">
            <div className="inline-block px-4 py-1 bg-white/10 text-[10px] font-black uppercase tracking-[0.4em]">Bioscience Division</div>
            <h2 className="text-6xl font-black italic tracking-tighter leading-none">КВАНТОВАЯ ПЕРЕЗАГРУЗКА</h2>
            <p className="text-xl opacity-50 max-w-lg">Наши технологии воздействуют на первопричину дискомфорта, восстанавливая природный ритм ваших клеток.</p>
            <button className="px-16 py-6 bg-yellow-400 text-slate-900 font-black text-2xl hover:bg-white transition-all rounded-none shadow-[0_0_50px_rgba(250,204,21,0.2)]" onClick={() => window.location.hash = 'catalog'}>
              КУПИТЬ ТЕХНОЛОГИЮ
            </button>
          </div>
          <div className="w-full md:w-1/3 grid grid-cols-1 gap-4">
             {[
               { icon: Sparkles, text: "98.7% усвоение" },
               { icon: Activity, text: "Мгновенный отклик" },
               { icon: ShieldAlert, text: "Био-защита" }
             ].map((item, i) => (
               <div key={i} className="p-8 bg-white/5 border border-white/10 flex items-center gap-6">
                  <item.icon className="w-8 h-8 text-yellow-400" />
                  <span className="font-bold text-sm tracking-widest uppercase">{item.text}</span>
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
          <div className="md:col-span-8 bg-white/50 backdrop-blur-sm p-12 rounded-[3rem] border border-white flex flex-col justify-between h-[400px]">
            <div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: colors.text }}>Ваше тело — ваш главный актив</h2>
              <p className="text-lg opacity-70 mb-8 leading-relaxed" style={{ color: colors.textSecondary }}>
                Более 15 000 человек уже вернули себе радость движения. Присоединяйтесь к сообществу тех, кто выбрал осознанное долголетие.
              </p>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className="w-14 h-14 rounded-full border-4 border-white bg-slate-200 overflow-hidden" style={{ backgroundColor: colors.accentLight }}>
                    <Users className="w-full h-full p-3 opacity-20" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <span className="font-black text-lg leading-none" style={{ color: colors.accent }}>15,420+</span>
                <span className="text-xs opacity-50 uppercase tracking-tighter">Счастливых клиентов</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 bg-accent p-12 rounded-[3rem] text-white flex flex-col justify-center items-center text-center cursor-pointer hover-elevate active-elevate-2 transition-all h-[400px]" onClick={() => window.location.hash = 'catalog'}>
            <ShoppingBag className="w-16 h-16 mb-8" />
            <h3 className="text-2xl font-black mb-4">КУПИТЬ ЗДОРОВЬЕ СЕГОДНЯ</h3>
            <p className="text-sm opacity-80 mb-8">Оформите заказ до конца дня и получите подарок.</p>
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
              <ArrowRight className="w-6 h-6" style={{ color: colors.accent }} />
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 4,
    name: "Architect of Longevity",
    content: (colors: any) => (
      <div className="w-full py-20 px-6 border-t bg-white" style={{ borderColor: colors.accentLight }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <h2 className="text-7xl font-black mb-8 leading-[0.9] tracking-tighter" style={{ color: colors.text }}>СТРОЙТЕ СВОЕ БУДУЩЕЕ</h2>
            <p className="text-2xl opacity-60 font-light leading-snug">Мы даем инструменты. Вы создаете шедевр — свое здоровое и сильное тело.</p>
            <div className="flex flex-wrap gap-4">
               <button className="px-12 py-6 bg-black text-white font-black text-xl hover:bg-accent transition-all rounded-3xl shadow-xl" onClick={() => window.location.hash = 'catalog'}>
                  КУПИТЬ ИНСТРУМЕНТЫ
               </button>
               <div className="flex items-center gap-4 px-8 py-6 bg-slate-50 rounded-3xl border border-slate-100">
                  <Package className="w-6 h-6 opacity-30" />
                  <span className="font-bold text-sm uppercase opacity-40">Fast Ship</span>
               </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <div className="aspect-square bg-slate-50 rounded-[4rem] flex items-center justify-center border border-slate-100"><Dna className="w-12 h-12 opacity-10" /></div>
             <div className="aspect-square bg-accent rounded-[4rem] flex items-center justify-center text-white"><Layers className="w-12 h-12" /></div>
             <div className="aspect-square bg-slate-900 rounded-[4rem] flex items-center justify-center text-white"><Target className="w-12 h-12" /></div>
             <div className="aspect-square bg-slate-50 rounded-[4rem] flex items-center justify-center border border-slate-100"><ShieldCheck className="w-12 h-12 opacity-10" /></div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 5,
    name: "Deep Nature Serenity",
    content: (colors: any) => (
      <div className="w-full py-32 px-6 text-center relative" style={{ backgroundColor: colors.bgAlt }}>
        <div className="max-w-3xl mx-auto">
          <Leaf className="w-16 h-16 mx-auto mb-12 opacity-20 animate-pulse" style={{ color: colors.accent }} />
          <h2 className="text-5xl font-serif italic mb-10 leading-tight" style={{ color: colors.text }}>Почувствуйте дыхание самой жизни в каждой клетке</h2>
          <p className="mb-16 opacity-60 text-xl leading-relaxed italic" style={{ color: colors.textSecondary }}>
            Наши продукты — это мост между первозданной природой и вашим комфортом. Вернитесь к истокам своего благополучия.
          </p>
          <button className="px-20 py-7 bg-white border-2 rounded-full font-black text-2xl hover:bg-black hover:text-white hover:border-black transition-all shadow-2xl" 
                  style={{ borderColor: colors.accent, color: colors.accent }}
                  onClick={() => window.location.hash = 'catalog'}>
            ЗАБРАТЬ СВОЙ КОМПЛЕКТ
          </button>
          <div className="mt-24 h-px w-full bg-black/5 relative">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-inherit px-8">
                <Smile className="w-6 h-6 opacity-20" />
             </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 6,
    name: "Industrial Vitality Core",
    content: (colors: any) => (
      <div className="w-full py-20 px-6 bg-[#1a2e1f] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-20 mb-20">
            <div className="flex-1 space-y-8">
               <h2 className="text-8xl font-black italic tracking-tighter opacity-10 leading-none">VITALITY CORE</h2>
               <h3 className="text-5xl font-black leading-none uppercase max-w-2xl">Перезапустите свою жизненную систему прямо сейчас</h3>
               <button className="px-16 py-7 bg-white text-slate-900 font-black text-3xl hover:bg-accent transition-all rounded-none" onClick={() => window.location.hash = 'catalog'}>
                  КУПИТЬ В МАГАЗИНЕ
               </button>
            </div>
            <div className="w-full md:w-1/3 grid grid-cols-1 gap-6">
               {[
                 { label: "SHIPPING", val: "FAST", icon: Truck },
                 { label: "QUALITY", val: "GOLD", icon: Award },
                 { label: "SUPPORT", val: "24/7", icon: Headphones }
               ].map((item, i) => (
                 <div key={i} className="flex items-center justify-between p-8 border border-white/10 group hover:bg-white/5 transition-all cursor-default">
                    <div className="flex items-center gap-4">
                       <item.icon className="w-6 h-6 opacity-30" />
                       <span className="font-black text-xs uppercase tracking-widest">{item.label}</span>
                    </div>
                    <span className="font-black text-xl italic" style={{ color: colors.accentLight }}>{item.val}</span>
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
    name: "Golden Hour Bloom",
    content: (colors: any) => (
      <div className="w-full py-32 px-6 text-center" style={{ background: `linear-gradient(to bottom, ${colors.bg}, #fffbeb)` }}>
        <div className="max-w-4xl mx-auto">
          <Sunrise className="w-20 h-20 mx-auto mb-12 text-amber-500" />
          <h2 className="text-6xl font-black mb-10 tracking-tight" style={{ color: colors.text }}>ВРЕМЯ РАСЦВЕТАТЬ ПРИШЛО</h2>
          <p className="text-2xl opacity-60 mb-16 max-w-2xl mx-auto font-light">Подарите своему телу заботу, которой оно заслуживает. Ваша новая жизнь начинается сегодня.</p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
             <button className="px-24 py-8 bg-amber-500 text-white rounded-full font-black text-3xl shadow-[0_20px_60px_rgba(245,158,11,0.3)] hover:bg-amber-600 hover:scale-105 transition-all" onClick={() => window.location.hash = 'catalog'}>
                КУПИТЬ ВСЁ СРАЗУ
             </button>
             <div className="flex flex-col items-center p-8 bg-white rounded-3xl border border-amber-100 shadow-sm">
                <span className="text-4xl font-black text-amber-600">5000+</span>
                <span className="text-[10px] uppercase font-bold opacity-40">Счастливых душ</span>
             </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 8,
    name: "Minimalist Compass Flow",
    content: (colors: any) => (
      <div className="w-full py-20 px-6 border-t bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="flex items-center gap-12">
            <div className="w-24 h-24 rounded-full bg-slate-50 flex items-center justify-center shadow-inner">
               <Compass className="w-10 h-10" style={{ color: colors.accent }} />
            </div>
            <div>
               <h3 className="text-4xl font-bold mb-4" style={{ color: colors.text }}>Ваш навигатор в мире здоровья</h3>
               <p className="opacity-50 text-xl" style={{ color: colors.textSecondary }}>Выбирайте качество, проверенное временем.</p>
            </div>
          </div>
          <div className="flex flex-col gap-6 w-full md:w-auto">
            <button className="px-16 py-6 bg-black text-white rounded-none font-black text-2xl hover:bg-accent transition-all active:translate-y-1" onClick={() => window.location.hash = 'catalog'}>
              КУПИТЬ ТОВАРЫ
            </button>
            <div className="flex justify-between items-center px-4">
               <div className="flex gap-2">
                  {[1,2,3].map(i => <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />)}
               </div>
               <span className="text-[10px] font-black uppercase opacity-30">Top Rated 2026</span>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 9,
    name: "Deep Ocean Purity",
    content: (colors: any) => (
      <div className="w-full py-32 px-6 bg-slate-900 text-white relative overflow-hidden">
        <Waves className="absolute bottom-0 left-0 w-full h-64 opacity-5" />
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-24 relative z-10">
           <div className="flex-1 space-y-10">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.5)]">
                 <Droplets className="w-10 h-10" />
              </div>
              <h2 className="text-7xl font-black mb-8 leading-[0.8] tracking-tighter uppercase italic">ЧИСТАЯ ЭНЕРГИЯ ВОДЫ</h2>
              <p className="text-2xl opacity-50 font-light">Натуральное очищение и восстановление биодоступности вашей воды. Начните детокс с первого глотка.</p>
              <button className="px-20 py-7 bg-blue-500 text-white rounded-none font-black text-3xl hover:bg-white hover:text-slate-900 transition-all" onClick={() => window.location.hash = 'catalog'}>
                 КУПИТЬ ОЧИСТИТЕЛЬ
              </button>
           </div>
           <div className="w-full md:w-1/3 grid grid-cols-1 gap-4">
              {[
                { l: "PURITY", v: "100%" },
                { l: "STRUCTURE", v: "H2O+" },
                { l: "BALANCE", v: "pH 8.0" }
              ].map((item, i) => (
                <div key={i} className="p-10 border border-white/10 bg-white/5 backdrop-blur-md rounded-[3rem] text-center">
                   <div className="text-4xl font-black text-blue-400 mb-2 tracking-tighter">{item.v}</div>
                   <div className="text-[10px] uppercase font-black tracking-widest opacity-30">{item.l}</div>
                </div>
              ))}
           </div>
        </div>
      </div>
    )
  },
  {
    id: 10,
    name: "Editorial Aesthetic",
    content: (colors: any) => (
      <div className="w-full py-24 px-6 border-t bg-[#fdfcfb]" style={{ borderColor: colors.accentLight }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-16">
             <div className="flex-1">
                <span className="text-xs uppercase tracking-[0.8em] opacity-40 font-black block mb-10 italic">Wellness Edition . 2026</span>
                <h2 className="text-8xl font-serif mb-12 leading-[0.8] tracking-tighter" style={{ color: colors.text }}>Эстетика бытия</h2>
                <p className="text-2xl opacity-60 leading-tight max-w-xl italic font-light" style={{ color: colors.textSecondary }}>
                   Мы верим, что истинное здоровье рождается на стыке красоты и функциональности. Каждый наш продукт — это произведение искусства для вашего тела.
                </p>
             </div>
             <div className="flex flex-col gap-10 items-end">
                <button className="px-20 py-8 bg-black text-white rounded-none font-black uppercase tracking-[0.4em] text-sm hover:bg-accent transition-all shadow-2xl" onClick={() => window.location.hash = 'catalog'}>
                   КУПИТЬ КОЛЛЕКЦИЮ
                </button>
                <div className="flex gap-12 opacity-30 font-black text-[9px] uppercase tracking-widest">
                   <span>Archived</span>
                   <span>Curated</span>
                   <span>Pure</span>
                </div>
             </div>
          </div>
          <div className="h-px w-full bg-black/5 mb-16"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
             {[Eye, Activity, ShieldCheck, Heart].map((Icon, i) => (
               <div key={i} className="flex flex-col items-center md:items-start gap-6 group cursor-pointer">
                  <Icon className="w-10 h-10 opacity-10 group-hover:opacity-100 transition-all group-hover:scale-110" style={{ color: colors.accent }} />
                  <span className="text-[10px] uppercase font-black opacity-40">System Core 0{i+1}</span>
               </div>
             ))}
          </div>
        </div>
      </div>
    )
  },
  {
    id: 11,
    name: "Ancient Earth Wisdom",
    content: (colors: any) => (
      <div className="w-full py-28 px-6 bg-[#2d2a26] text-[#e5e1da] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none select-none flex items-center justify-center">
           <div className="text-[35vw] font-black uppercase tracking-tighter italic">FOUNDATION</div>
        </div>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-24 relative z-10">
           <div className="max-w-xl space-y-12">
              <div className="w-24 h-1 bg-white/20"></div>
              <h2 className="text-6xl font-serif italic mb-8 leading-none">Сила земли, точность науки</h2>
              <p className="text-2xl opacity-40 leading-tight font-light">
                 Мы объединили древнюю мудрость использования минералов с инновациями 21 века. Это ваш нерушимый фундамент здоровья.
              </p>
              <button className="px-20 py-7 bg-white text-[#2d2a26] rounded-none font-black text-2xl hover:bg-[#e5e1da] transition-all uppercase tracking-[0.2em] shadow-2xl shadow-black/50" onClick={() => window.location.hash = 'catalog'}>
                 КУПИТЬ В МАГАЗИНЕ
              </button>
           </div>
           <div className="flex flex-col gap-12">
              <div className="w-56 h-56 border border-white/10 flex flex-col items-center justify-center bg-white/5 rounded-full p-12 text-center group hover:scale-105 transition-all">
                 <ShieldAlert className="w-12 h-12 mb-6 opacity-30 text-amber-200" />
                 <div className="text-5xl font-black mb-2 italic" style={{ color: colors.accentLight }}>ECO</div>
                 <div className="text-[10px] uppercase font-bold tracking-widest opacity-30">Certified Pure</div>
              </div>
           </div>
        </div>
      </div>
    )
  },
  {
    id: 12,
    name: "Sky High Renewal",
    content: (colors: any) => (
      <div className="w-full py-36 px-6 text-center bg-sky-50 overflow-hidden relative">
        <Cloud className="absolute top-10 left-[-10%] w-64 h-64 opacity-10 animate-pulse" />
        <Cloud className="absolute bottom-10 right-[-10%] w-80 h-80 opacity-10 animate-pulse" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="w-24 h-24 bg-white rounded-full shadow-2xl mx-auto mb-16 flex items-center justify-center border border-sky-100 rotate-12">
             <Wind className="w-12 h-12 text-sky-400" />
          </div>
          <h2 className="text-7xl font-black mb-10 tracking-tighter uppercase leading-none" style={{ color: '#0369a1' }}>ДЫШИТЕ ЖИЗНЬЮ</h2>
          <p className="text-2xl mb-20 opacity-60 italic font-serif leading-snug max-w-2xl mx-auto">
            Чистота альпийских высот в каждом нашем изделии. Почувствуйте, как легкость наполняет ваше тело с первой минуты.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-8">
             <button className="px-24 py-8 bg-sky-500 text-white rounded-full font-black text-3xl shadow-2xl shadow-sky-200 hover:bg-sky-600 active:scale-95 transition-all" onClick={() => window.location.hash = 'catalog'}>
                КУПИТЬ ОБНОВЛЕНИЕ
             </button>
             <div className="flex flex-col items-start px-10 py-8 bg-white/50 backdrop-blur-md rounded-3xl border border-sky-100">
                <span className="text-3xl font-black text-sky-600 italic">99.9%</span>
                <span className="text-[10px] uppercase font-bold opacity-40 tracking-widest">Freshness index</span>
             </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 13,
    name: "Midnight Therapy Hub",
    content: (colors: any) => (
      <div className="w-full py-32 px-6 bg-[#0a1128] text-white overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.1)_0%,transparent_70%)]"></div>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-24 relative z-10">
          <div className="max-w-xl space-y-10">
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center">
                  <Moon className="w-6 h-6 text-indigo-400" />
               </div>
               <span className="text-xs font-black uppercase tracking-[0.5em] opacity-40">Midnight Recovery v3.0</span>
            </div>
            <h2 className="text-7xl font-bold mb-8 leading-none tracking-tight italic">СОН — ЭТО ВАША СУПЕРСИЛА</h2>
            <p className="text-2xl opacity-50 leading-relaxed font-light">
               Мы разработали интеллектуальную систему восстановления для глаз и головы. Проснитесь полностью обновленным, пока другие просто спят.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
               <button className="px-16 py-7 bg-indigo-500 text-white rounded-none font-black text-2xl hover:bg-white hover:text-indigo-900 transition-all shadow-[0_0_80px_rgba(99,102,241,0.3)] active:translate-y-1" onClick={() => window.location.hash = 'catalog'}>
                  КУПИТЬ СИСТЕМУ
               </button>
               <button className="px-12 py-7 bg-white/5 border border-white/10 rounded-none font-bold text-xl hover:bg-white/10 transition-all">
                  БЕЗОПАСНАЯ ОПЛАТА
               </button>
            </div>
          </div>
          <div className="w-full md:w-auto grid grid-cols-1 gap-6">
             <div className="p-16 bg-white/5 border border-white/10 rounded-[5rem] text-center min-w-[320px] hover:border-indigo-500/50 transition-colors">
                <Clock className="w-12 h-12 mx-auto mb-6 text-indigo-400 opacity-20" />
                <div className="text-7xl font-black mb-2 tracking-tighter italic">RE-GEN</div>
                <div className="text-xs uppercase font-black tracking-widest opacity-30">Active Sleep Mode</div>
             </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 14,
    name: "Metropolis Bio-Shield",
    content: (colors: any) => (
      <div className="w-full py-24 px-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-stretch">
            <div className="md:col-span-8 p-20 bg-white rounded-[5rem] shadow-xl shadow-slate-200/50 flex flex-col justify-between items-start relative overflow-hidden">
               <Box className="absolute top-[-5%] right-[-5%] w-64 h-64 opacity-5 rotate-12" />
               <div className="relative z-10 space-y-10">
                  <div className="w-24 h-24 bg-slate-900 rounded-[2.5rem] flex items-center justify-center shadow-2xl">
                     <ShieldCheck className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-6xl font-black mb-8 leading-[0.9] tracking-tighter" style={{ color: colors.text }}>ВАША БРОНЯ В РИТМЕ ГОРОДА</h3>
                  <p className="text-2xl opacity-60 max-w-xl leading-snug" style={{ color: colors.textSecondary }}>
                     Натуральные решения против стресса, смога и усталости. Будьте под защитой Wellness в любой точке мегаполиса.
                  </p>
                  <button className="px-20 py-8 bg-slate-900 text-white rounded-[2rem] font-black text-3xl hover:bg-accent transition-all shadow-2xl" onClick={() => window.location.hash = 'catalog'}>
                     АКТИВИРОВАТЬ ЗАЩИТУ
                  </button>
               </div>
            </div>
            <div className="md:col-span-4 flex flex-col gap-6">
               <div className="flex-1 p-12 bg-white rounded-[4rem] border border-slate-200 flex flex-col justify-center items-center text-center group hover:border-accent transition-all">
                  <Lock className="w-16 h-16 opacity-10 mb-6 group-hover:opacity-100 transition-opacity" style={{ color: colors.accent }} />
                  <h4 className="font-black text-2xl mb-2">SAFE SHOP</h4>
                  <p className="text-xs opacity-40 font-bold uppercase tracking-widest">SSL Encrypted</p>
               </div>
               <div className="flex-1 p-12 bg-accent rounded-[4rem] text-white flex flex-col justify-center items-center text-center shadow-2xl hover:scale-[1.02] transition-transform cursor-pointer" onClick={() => window.location.hash = 'catalog'}>
                  <Truck className="w-16 h-16 mb-6" />
                  <h4 className="font-black text-2xl mb-2 italic">EXPRESS</h4>
                  <p className="text-xs opacity-80 font-bold uppercase tracking-widest">Shipping Today</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 15,
    name: "Generational Care Circle",
    content: (colors: any) => (
      <div className="w-full py-32 px-6 text-center" style={{ backgroundColor: colors.bgAlt }}>
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center -space-x-12 mb-20">
             {[1,2,3,4,5].map(i => (
               <div key={i} className="w-36 h-36 rounded-full border-[12px] border-white bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex items-center justify-center overflow-hidden hover:z-20 hover:scale-110 transition-all cursor-default group">
                  <Heart className="w-12 h-12 opacity-20 group-hover:opacity-100 group-hover:scale-125 transition-all" style={{ color: colors.accent }} />
               </div>
             ))}
          </div>
          <h2 className="text-6xl font-black mb-10 tracking-tighter uppercase leading-none" style={{ color: colors.text }}>ЗАБОТА БЕЗ ГРАНИЦ</h2>
          <p className="text-2xl opacity-60 mb-20 max-w-3xl mx-auto leading-tight font-light italic font-serif">
             От здоровья малыша до долголетия старших. Мы создаем продукты, которые становятся частью вашей семейной традиции благополучия. Чистая любовь в каждом изделии.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
             <button className="px-24 py-8 bg-rose-400 text-white rounded-[3rem] font-black text-4xl hover:bg-rose-500 transition-all shadow-[0_25px_70px_rgba(251,113,133,0.4)] active:scale-95 active:translate-y-2" onClick={() => window.location.hash = 'catalog'}>
                КУПИТЬ ДЛЯ ВСЕХ
             </button>
             <div className="flex flex-col text-left border-l-4 pl-12 border-rose-200">
                <span className="font-black text-3xl text-rose-500 italic">100% PURE</span>
                <span className="text-xs uppercase opacity-40 font-black tracking-[0.4em]">Family Gold Standard</span>
             </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 16,
    name: "Infinite Joy Factory",
    content: (colors: any) => (
      <div className="w-full py-32 px-6 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-24 mb-24">
            <div className="w-56 h-56 rounded-[5rem] bg-green-100 flex items-center justify-center shrink-0 rotate-12 shadow-[0_30px_80px_rgba(34,197,94,0.2)] animate-float">
               <Smile className="w-24 h-24 text-green-600" />
            </div>
            <div className="flex-1 text-center md:text-left space-y-8">
               <h2 className="text-8xl font-black mb-6 tracking-tighter leading-[0.85] uppercase" style={{ color: colors.text }}>СНОВА В СТРОЮ? ЛЕГКО!</h2>
               <p className="text-3xl opacity-60 leading-[1.1] max-w-2xl font-light" style={{ color: colors.textSecondary }}>
                  Забудьте о боли. Верните себе радость каждого вдоха и каждого движения. Наши продукты созданы, чтобы вы снова улыбались по-настоящему.
               </p>
            </div>
          </div>
          <div className="p-4 bg-slate-900 rounded-[4rem] flex flex-col md:flex-row gap-4 shadow-3xl">
             <button className="flex-[3] py-12 bg-green-500 text-slate-900 rounded-[3rem] font-black text-5xl hover:bg-white transition-all active:scale-[0.97] active:translate-y-1" onClick={() => window.location.hash = 'catalog'}>
                КУПИТЬ WELLNESS СЕЙЧАС
             </button>
             <div className="flex-1 py-12 bg-white/5 border border-white/10 rounded-[3rem] text-white flex flex-col items-center justify-center gap-2 group cursor-pointer hover:bg-white/10 transition-all">
                <MessageCircle className="w-10 h-10 opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                <span className="font-black text-xl tracking-tighter">TG CHAT</span>
             </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 17,
    name: "The Zen Zenith",
    content: (colors: any) => (
      <div className="w-full py-48 px-6 text-center relative bg-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-64 bg-gradient-to-b from-transparent via-accent/30 to-accent"></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="mb-20">
             <Infinity className="w-16 h-16 mx-auto opacity-10 animate-spin-slow" style={{ color: colors.accent }} />
          </div>
          <h2 className="text-5xl font-serif italic mb-16 leading-snug tracking-tight" style={{ color: colors.text }}>Ваш личный путь к исцелению лежит через осознанный выбор самого чистого</h2>
          <p className="mb-24 text-xl opacity-40 tracking-[0.6em] uppercase font-black" style={{ color: colors.textSecondary }}>
             Гармония . Сила . Результат
          </p>
          <button className="px-24 py-8 border-4 border-black rounded-none text-2xl uppercase tracking-[0.4em] font-black hover:bg-black hover:text-white transition-all shadow-[0_30px_100px_rgba(0,0,0,0.1)] active:scale-95" 
                  onClick={() => window.location.hash = 'catalog'}>
             КУПИТЬ СЕЙЧАС
          </button>
          <div className="mt-32 flex justify-center gap-20 opacity-10">
             <Anchor className="w-8 h-8" />
             <Target className="w-8 h-8" />
             <Compass className="w-8 h-8" />
          </div>
        </div>
      </div>
    )
  },
  {
    id: 18,
    name: "Digital Health Core",
    content: (colors: any) => (
      <div className="w-full py-24 px-6 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 h-auto md:h-[700px]">
          <div className="md:col-span-8 p-24 bg-slate-900 rounded-[6rem] flex flex-col justify-between items-start text-white overflow-hidden relative shadow-3xl">
             <Wifi className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] opacity-5" />
             <div className="w-24 h-24 rounded-[3rem] bg-white shadow-2xl flex items-center justify-center mb-16">
                <Dna className="w-12 h-12 text-slate-900" />
             </div>
             <div className="space-y-8">
                <h2 className="text-8xl font-black mb-6 tracking-tighter uppercase leading-[0.8] italic">МАТРИЦА ТВОЕГО ТЕЛА</h2>
                <p className="opacity-50 text-3xl font-light max-w-2xl leading-tight">Мы оцифровали лучшие природные рецепты оздоровления, чтобы вы получили максимум пользы без побочных эффектов. Только чистый код здоровья.</p>
             </div>
          </div>
          <div className="md:col-span-4 flex flex-col gap-8">
             <div className="flex-1 bg-accent p-16 rounded-[5rem] text-white flex flex-col justify-center items-center text-center cursor-pointer hover:rotate-3 transition-transform shadow-[0_30px_80px_rgba(107,170,124,0.4)] active:scale-95 group" onClick={() => window.location.hash = 'catalog'}>
                <ShoppingBag className="w-20 h-20 mb-10 group-hover:scale-110 transition-transform" />
                <span className="font-black text-3xl uppercase tracking-tighter leading-none">КУПИТЬ В МАГАЗИНЕ</span>
             </div>
             <div className="h-56 bg-slate-100 p-16 rounded-[5rem] flex flex-col justify-center items-center text-center border border-slate-200">
                <div className="text-6xl font-black mb-2 italic tracking-tighter" style={{ color: colors.accent }}>98.9%</div>
                <div className="text-[10px] uppercase font-black tracking-[0.4em] opacity-30">Purity Standard</div>
             </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 19,
    name: "The Infinity Glow",
    content: (colors: any) => (
      <div className="w-full py-48 px-6 text-center bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-accent/5 blur-[200px] rounded-full pointer-events-none animate-pulse"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <Infinity className="w-32 h-32 mx-auto mb-20 opacity-10 animate-spin-slow" style={{ color: colors.accent }} />
          <h2 className="text-8xl font-black mb-16 leading-[0.85] tracking-tighter uppercase" style={{ color: colors.text }}>ВЕЧНАЯ ЭНЕРГИЯ ТВОИХ КЛЕТОК</h2>
          <p className="text-3xl mb-24 opacity-40 italic font-serif max-w-4xl mx-auto leading-relaxed">
            Твое тело — это совершенная, саморегулирующаяся система. Мы просто даем ей необходимые инструменты, чтобы вспомнить свой природный код здоровья. Начни свою эволюцию.
          </p>
          <button className="px-32 py-10 bg-black text-white rounded-full font-black text-4xl hover-elevate shadow-[0_40px_120px_rgba(0,0,0,0.2)] transition-all hover:px-48 active:scale-95 active:translate-y-2" onClick={() => window.location.hash = 'catalog'}>
             КУПИТЬ СИСТЕМУ СЕЙЧАС
          </button>
        </div>
      </div>
    )
  },
  {
    id: 20,
    name: "Global Logistic Center",
    content: (colors: any) => (
      <div className="w-full py-24 px-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
           <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
              {[
                { icon: Truck, title: "Логистика", desc: "Быстро и бережно" },
                { icon: Globe, title: "География", desc: "Доставка везде" },
                { icon: CreditCard, title: "Оплата", desc: "Все методы РФ" },
                { icon: ShieldCheck, title: "Гарантия", desc: "Честный возврат" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center md:items-start text-center md:text-left gap-8 group">
                   <div className="w-20 h-20 rounded-[2rem] bg-white shadow-xl flex items-center justify-center border border-slate-100 group-hover:scale-110 transition-transform">
                      <item.icon className="w-10 h-10 opacity-20" style={{ color: colors.accent }} />
                   </div>
                   <div>
                      <h4 className="font-black uppercase tracking-[0.2em] text-sm mb-3">{item.title}</h4>
                      <p className="text-lg opacity-50 font-medium leading-tight">{item.desc}</p>
                   </div>
                </div>
              ))}
           </div>
           <div className="p-24 bg-white rounded-[5rem] border border-slate-200 flex flex-col lg:flex-row items-center justify-between gap-20 shadow-3xl shadow-slate-200/50 relative overflow-hidden">
              <Package className="absolute bottom-[-10%] right-[-5%] w-64 h-64 opacity-5" />
              <div className="max-w-xl text-center lg:text-left relative z-10 space-y-6">
                 <h2 className="text-5xl font-black mb-4 tracking-tighter uppercase leading-[0.9]">ГОТОВЫ К НОВОМУ УРОВНЮ СЕБЯ?</h2>
                 <p className="opacity-50 text-2xl font-medium leading-tight">Ваша новая жизнь, полная энергии и легкости, начинается с одного нажатия кнопки. Не откладывайте.</p>
              </div>
              <button className="px-24 py-9 bg-accent text-white rounded-[2.5rem] font-black text-4xl shadow-[0_30px_100px_rgba(107,170,124,0.4)] hover:bg-accentDark transition-all active:scale-95 active:translate-y-2 relative z-10" onClick={() => window.location.hash = 'catalog'}>
                 КУПИТЬ ТОВАРЫ
              </button>
           </div>
        </div>
      </div>
    )
  },
  {
    id: 21,
    name: "Golden Zenith Finish",
    content: (colors: any) => (
      <div className="w-full py-40 px-6 text-center bg-white overflow-hidden relative">
        <Sparkle className="absolute top-10 left-10 w-24 h-24 text-amber-100 animate-spin-slow" />
        <Sparkle className="absolute bottom-10 right-10 w-32 h-32 text-amber-100 animate-spin-slow" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex justify-center gap-8 mb-16">
             {[1,2,3,4,5].map(i => <Star key={i} className="w-10 h-10 text-amber-400 fill-amber-400 animate-pulse" />)}
          </div>
          <h2 className="text-8xl font-black mb-12 tracking-tighter uppercase leading-[0.8] italic" style={{ color: colors.text }}>ВЕРНИТЕ СВОЙ ПРИРОДНЫЙ БЛЕСК</h2>
          <p className="text-3xl mb-24 opacity-60 leading-[1.1] italic max-w-3xl mx-auto font-serif" style={{ color: colors.textSecondary }}>
             Мы не лечим болезни — мы возвращаем вам радость полноценной жизни. Золотой стандарт качества и натуральности в каждой детали.
          </p>
          <button className="px-32 py-10 bg-amber-400 text-amber-950 rounded-full font-black text-4xl shadow-[0_40px_120px_rgba(251,191,36,0.4)] hover:bg-amber-500 transition-all hover:scale-105 active:scale-95 active:translate-y-2" onClick={() => window.location.hash = 'catalog'}>
             КУПИТЬ ВЕСЬ НАБОР
          </button>
          <div className="mt-32 text-xs uppercase tracking-[1em] opacity-40 font-black">LUMINESCENT . ARCHIVE . 2026</div>
        </div>
      </div>
    )
  },
  {
    id: 22,
    name: "Solid Earth Center",
    content: (colors: any) => (
      <div className="w-full py-36 px-6 bg-[#2d2a26] text-[#e5e1da] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 flex items-center justify-center select-none pointer-events-none">
           <span className="text-[40vw] font-black italic tracking-tighter">EARTH</span>
        </div>
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-32 relative z-10">
           <div className="max-w-2xl space-y-12">
              <h2 className="text-8xl font-serif italic mb-10 leading-[0.8] tracking-tighter">Сила земли, покой веков</h2>
              <p className="text-3xl opacity-40 leading-snug font-light max-w-xl">
                 Мы берем лучшее у природы, сохраняя первозданную энергию минералов и трав. Это фундамент, на котором строится ваше новое самочувствие. Чистый велнес без компромиссов.
              </p>
              <button className="px-24 py-9 bg-white text-[#2d2a26] rounded-none font-black text-3xl hover:bg-[#e5e1da] transition-all uppercase tracking-widest shadow-3xl active:translate-y-2" onClick={() => window.location.hash = 'catalog'}>
                 КУПИТЬ В МАГАЗИНЕ
              </button>
           </div>
           <div className="flex flex-col gap-12">
              <div className="w-64 h-64 border-2 border-white/10 flex flex-col items-center justify-center p-12 text-center bg-white/5 backdrop-blur-md group hover:border-white/40 transition-all cursor-default rotate-3">
                 <ShieldAlert className="w-16 h-16 mb-8 opacity-20 group-hover:opacity-100 transition-opacity" />
                 <div className="text-5xl font-black mb-2 italic" style={{ color: colors.accentLight }}>ECO</div>
                 <div className="text-[10px] uppercase font-black tracking-[0.3em] opacity-30">Full Bio-Cert</div>
              </div>
           </div>
        </div>
      </div>
    )
  },
  {
    id: 23,
    name: "Ultimate Joy Core",
    content: (colors: any) => (
      <div className="w-full py-32 px-6 bg-white border-t border-slate-100 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-24 mb-32 relative">
            <Smile className="absolute top-[-50%] left-[-10%] w-[100%] h-[100%] opacity-5 text-green-500 animate-spin-slow pointer-events-none" />
            <div className="w-64 h-64 rounded-[6rem] bg-green-100 flex items-center justify-center shrink-0 rotate-12 shadow-[0_40px_100px_rgba(34,197,94,0.3)] animate-float relative z-10">
               <Smile className="w-32 h-32 text-green-600" />
            </div>
            <div className="flex-1 text-center lg:text-left relative z-10 space-y-10">
               <h2 className="text-9xl font-black mb-8 tracking-[calc(-0.05em)] leading-[0.75] uppercase italic" style={{ color: colors.text }}>СНОВА В СТРОЮ?</h2>
               <p className="text-4xl opacity-60 leading-[0.95] max-w-2xl font-black uppercase tracking-tighter" style={{ color: colors.textSecondary }}>
                  Забудьте о боли. Мы возвращаем счастье в каждое ваше движение. Начните жить на полную прямо сейчас.
               </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-8 relative z-10">
             <button className="flex-[4] py-14 bg-slate-900 text-white rounded-[4rem] font-black text-6xl hover:bg-green-500 transition-all shadow-[0_40px_120px_rgba(0,0,0,0.2)] active:scale-[0.96] active:translate-y-2 uppercase italic tracking-tighter" onClick={() => window.location.hash = 'catalog'}>
                КУПИТЬ WELLNESS СЕЙЧАС
             </button>
             <button className="flex-1 py-14 bg-slate-50 border-4 border-slate-200 rounded-[4rem] font-black text-2xl hover:bg-white transition-all flex flex-col items-center justify-center gap-2 group">
                <div className="text-xs uppercase opacity-30 group-hover:opacity-100 transition-opacity">Expert Help</div>
                <span>TG CHAT</span>
             </button>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 24,
    name: "Zenith of Pure Power",
    content: (colors: any) => (
      <div className="w-full py-48 px-6 text-center relative overflow-hidden bg-slate-50">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(107,170,124,0.05)_0%,transparent_70%)] animate-pulse"></div>
        <div className="relative z-10 max-w-5xl mx-auto space-y-20">
          <div className="w-px h-48 bg-gradient-to-b from-transparent to-black/20 mx-auto"></div>
          <h2 className="text-9xl font-black mb-16 leading-[0.75] tracking-[calc(-0.07em)] uppercase italic" style={{ color: colors.text }}>ПРИРОДА ЗНАЕТ ЛУЧШЕ</h2>
          <p className="text-3xl mb-24 opacity-60 italic max-w-3xl mx-auto leading-[1.1] font-serif" style={{ color: colors.textSecondary }}>
             Доверьтесь вековым традициям оздоровления, усиленным современными биотехнологиями. Чистота, которую можно почувствовать каждой клеткой своего тела.
          </p>
          <button className="px-32 py-10 bg-black text-white rounded-none font-black text-4xl hover:bg-accent transition-all shadow-[0_50px_150px_rgba(0,0,0,0.25)] hover:scale-[1.05] active:scale-95 active:translate-y-2" onClick={() => window.location.hash = 'catalog'}>
             КУПИТЬ В 1 КЛИК
          </button>
          <div className="pt-20 flex justify-center gap-32 opacity-10">
             <Trophy className="w-12 h-12" />
             <Activity className="w-12 h-12" />
             <ShieldCheck className="w-12 h-12" />
          </div>
        </div>
      </div>
    )
  },
  {
    id: 25,
    name: "The Eternal Temple",
    content: (colors: any) => (
      <div className="w-full py-56 px-6 text-center text-white relative overflow-hidden" style={{ backgroundColor: colors.accentDark }}>
        <div className="absolute inset-0 opacity-10 flex items-center justify-center select-none pointer-events-none">
          <span className="text-[35vw] font-black italic tracking-[calc(-0.08em)] leading-none">TEMPLE</span>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto space-y-24">
          <h2 className="text-8xl md:text-[12vw] font-black mb-16 uppercase leading-[0.75] italic tracking-[calc(-0.06em)]">ТВОЕ ТЕЛО — ТВОЙ ХРАМ</h2>
          <p className="text-4xl mb-32 opacity-60 max-w-5xl mx-auto leading-[1] font-light italic tracking-tight">
             Инвестируй в свое абсолютное долголетие сегодня. Выбери путь бесконечной энергии, силы и гармонии вместе с Wellness Solutions. Вечность начинается сейчас.
          </p>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-20">
             <button className="px-48 py-12 bg-white text-slate-900 rounded-none font-black text-6xl hover:bg-black hover:text-white transition-all shadow-[0_0_150px_rgba(255,255,255,0.6)] hover:scale-110 active:scale-95" onClick={() => window.location.hash = 'catalog'}>
                КУПИТЬ ВСЁ
             </button>
             <div className="flex flex-col gap-6 text-left border-l-2 border-white/20 pl-16">
                <div className="flex items-center gap-6 group">
                   <Trophy className="w-12 h-12 text-yellow-400 group-hover:scale-125 transition-transform" />
                   <span className="font-black text-4xl uppercase italic tracking-widest">Premium Elite</span>
                </div>
                <div className="h-px w-full bg-white/10 my-4"></div>
                <div className="flex gap-16 text-[12px] font-black uppercase tracking-[0.8em] opacity-40">
                   <span>BIO-TECH</span>
                   <span>USA-CERT</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    )
  }
];
