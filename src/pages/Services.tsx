import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Icon from "@/components/ui/icon";

const services = [
  {
    icon: "Zap",
    title: "Электроснабжение жилых домов",
    desc: "Подача электроэнергии для частных домов, квартир и многоквартирных комплексов. Тарифы для населения. Социальная норма потребления.",
    features: ["Подключение к сети", "Смена тарифного плана", "Перенос точки учёта", "Увеличение мощности"],
    badge: "Популярное",
  },
  {
    icon: "Factory",
    title: "Промышленное электроснабжение",
    desc: "Комплексное энергоснабжение производственных предприятий, складских комплексов и промышленных объектов с гарантией качества.",
    features: ["Технологическое присоединение", "Резервное питание", "Учёт по нескольким точкам", "Индивидуальные условия"],
    badge: null,
  },
  {
    icon: "Building",
    title: "Электроснабжение бизнеса",
    desc: "Услуги для коммерческих объектов: офисов, торговых центров, ресторанов и других предприятий малого и среднего бизнеса.",
    features: ["Быстрое подключение", "Гибкие тарифы", "Онлайн-управление", "Персональный менеджер"],
    badge: "Для бизнеса",
  },
  {
    icon: "Wrench",
    title: "Обслуживание и ремонт",
    desc: "Техническое обслуживание электросетевого оборудования, проверка счётчиков и устранение аварийных ситуаций.",
    features: ["Проверка счётчиков", "Замена оборудования", "Аварийный ремонт", "Плановое ТО"],
    badge: null,
  },
  {
    icon: "Activity",
    title: "Умный учёт электроэнергии",
    desc: "Установка интеллектуальных приборов учёта (АСКУЭ). Автоматическая передача показаний и контроль потребления в реальном времени.",
    features: ["Умные счётчики", "Автопередача данных", "Мониторинг потребления", "Бесплатная установка"],
    badge: "Новинка",
  },
  {
    icon: "FileText",
    title: "Консультации и документация",
    desc: "Помощь в оформлении документов на подключение, техническое присоединение и урегулирование спорных ситуаций.",
    features: ["Технические условия", "Договор энергоснабжения", "Акты разграничения", "Юридическая помощь"],
    badge: null,
  },
];

const process = [
  { step: "01", title: "Подайте заявку", desc: "Заполните форму онлайн или обратитесь в офис" },
  { step: "02", title: "Получите ТУ", desc: "Технические условия подготавливаются за 15 дней" },
  { step: "03", title: "Выполните проект", desc: "Монтаж выполняется вашими или нашими специалистами" },
  { step: "04", title: "Подключение", desc: "Инспектор опломбирует счётчик и включит питание" },
];

const Services = () => {
  return (
    <Layout>
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-energy-yellow/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-energy-yellow/10 border border-energy-yellow/20 rounded-full px-4 py-1.5 mb-6">
              <Icon name="Settings" size={14} className="text-energy-yellow" />
              <span className="text-energy-yellow text-xs font-golos tracking-widest uppercase">Наши услуги</span>
            </div>
            <h1 className="font-oswald text-5xl md:text-6xl font-bold text-white leading-none mb-6">
              ВСЁ ДЛЯ <span className="text-gradient-yellow">НАДЁЖНОГО</span>
              <br />ЭЛЕКТРОСНАБЖЕНИЯ
            </h1>
            <p className="font-golos text-lg text-muted-foreground leading-relaxed">
              Полный спектр услуг в области электроснабжения — от подключения к сети до технического обслуживания и умного учёта энергии.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className="energy-card rounded-2xl p-6 group flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-xl bg-energy-yellow/10 flex items-center justify-center group-hover:bg-energy-yellow/20 transition-all">
                    <Icon name={s.icon} size={28} className="text-energy-yellow" />
                  </div>
                  {s.badge && (
                    <span className="bg-energy-yellow text-energy-dark text-xs font-oswald font-bold px-3 py-1 rounded-full">
                      {s.badge}
                    </span>
                  )}
                </div>
                <h3 className="font-oswald text-xl font-bold text-white mb-2 group-hover:text-energy-yellow transition-colors">{s.title}</h3>
                <p className="font-golos text-sm text-muted-foreground mb-4 leading-relaxed flex-1">{s.desc}</p>
                <ul className="space-y-2 mb-5">
                  {s.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 font-golos text-sm text-foreground/80">
                      <Icon name="ChevronRight" size={14} className="text-energy-yellow shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/apply" className="btn-outline-energy py-2 rounded-lg text-sm text-center">
                  Подать заявку
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-energy-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-oswald text-4xl font-bold text-white mb-3">
              КАК <span className="text-gradient-yellow">ПОДКЛЮЧИТЬСЯ</span>
            </h2>
            <p className="font-golos text-muted-foreground">Процесс технологического присоединения к электросети</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <div key={i} className="relative text-center">
                {i < process.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-px bg-gradient-to-r from-energy-yellow/50 to-transparent" />
                )}
                <div className="relative inline-flex w-20 h-20 rounded-full bg-energy-yellow/10 border-2 border-energy-yellow/30 items-center justify-center mb-4">
                  <span className="font-oswald text-2xl font-bold text-energy-yellow">{p.step}</span>
                </div>
                <div className="font-oswald text-lg font-bold text-white mb-2">{p.title}</div>
                <div className="font-golos text-sm text-muted-foreground">{p.desc}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/apply" className="btn-energy px-10 py-4 rounded-xl inline-flex items-center gap-2 font-oswald tracking-wide">
              <Icon name="FileText" size={18} />
              Подать заявку на подключение
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="energy-card rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-oswald text-2xl font-bold text-white mb-2">
                Не нашли нужную услугу?
              </h3>
              <p className="font-golos text-muted-foreground">Позвоните нам — решим любой вопрос по электроснабжению</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <a href="tel:+78412000000" className="btn-energy px-6 py-3 rounded-xl inline-flex items-center gap-2 font-oswald tracking-wide">
                <Icon name="Phone" size={16} />
                8 (8412) 00-00-00
              </a>
              <Link to="/apply" className="btn-outline-energy px-6 py-3 rounded-xl inline-flex items-center gap-2">
                <Icon name="MessageSquare" size={16} />
                Написать нам
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
