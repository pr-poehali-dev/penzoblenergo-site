import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import Layout from "@/components/Layout";

const stats = [
  { value: "32", suffix: "+", label: "Года на рынке" },
  { value: "580", suffix: "к+", label: "Клиентов" },
  { value: "99.8", suffix: "%", label: "Надёжность" },
  { value: "24/7", suffix: "", label: "Аварийная служба" },
];

const services = [
  {
    icon: "Zap",
    title: "Электроснабжение",
    desc: "Поставка электроэнергии для жилых домов, промышленных объектов и бизнеса",
    color: "from-yellow-500/20 to-orange-500/10",
  },
  {
    icon: "FileText",
    title: "Расчёт и оплата",
    desc: "Удобные квитанции, онлайн-оплата и история платежей в личном кабинете",
    color: "from-blue-500/20 to-cyan-500/10",
  },
  {
    icon: "Wrench",
    title: "Техническое обслуживание",
    desc: "Проверка и замена счётчиков, обслуживание сетей и аварийный ремонт",
    color: "from-purple-500/20 to-pink-500/10",
  },
  {
    icon: "ClipboardList",
    title: "Подача заявок",
    desc: "Подключение к сети, перерасчёт, смена тарифа — всё онлайн",
    color: "from-green-500/20 to-teal-500/10",
  },
];

const news = [
  {
    date: "20 марта 2024",
    tag: "Тарифы",
    title: "Обновление тарифов на электроэнергию с апреля 2024",
    desc: "С 1 апреля вступают в силу новые тарифные ставки согласно постановлению Правительства.",
  },
  {
    date: "15 марта 2024",
    tag: "Услуги",
    title: "Запуск нового личного кабинета с мобильной версией",
    desc: "Теперь управлять лицевым счётом, просматривать и скачивать квитанции можно с любого устройства.",
  },
  {
    date: "5 марта 2024",
    tag: "Ремонт",
    title: "Плановое отключение в Железнодорожном районе",
    desc: "10 апреля с 09:00 до 15:00 будет проведено плановое техническое обслуживание сетей.",
  },
];

const Home = () => {
  return (
    <Layout>
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-energy-yellow/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-energy-blue/10 rounded-full blur-3xl animate-pulse delay-700" />

        <div className="absolute top-20 right-10 opacity-10 animate-spin-slow">
          <Icon name="Circle" size={300} className="text-energy-yellow" />
        </div>
        <div className="absolute bottom-10 left-10 opacity-5 animate-float">
          <Icon name="Zap" size={200} className="text-energy-yellow" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-energy-yellow/10 border border-energy-yellow/20 rounded-full px-4 py-1.5 mb-6 animate-fade-in">
              <div className="w-2 h-2 bg-energy-yellow rounded-full animate-pulse" />
              <span className="text-energy-yellow text-xs font-golos font-medium tracking-widest uppercase">
                Официальный поставщик Пензенской области
              </span>
            </div>

            <h1 className="font-oswald text-5xl md:text-7xl font-bold leading-none mb-6 animate-fade-in delay-100">
              <span className="text-white">ЭНЕРГИЯ</span>
              <br />
              <span className="text-gradient-yellow">ДЛЯ ВАШЕГО</span>
              <br />
              <span className="text-white">ГОРОДА</span>
            </h1>

            <p className="font-golos text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed animate-fade-in delay-200">
              ПензОблЭнерго — надёжное энергоснабжение более 580 000 клиентов Пензенской области. Подключайтесь, платите и управляйте услугами онлайн.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in delay-300">
              <Link to="/cabinet" className="btn-energy px-8 py-4 rounded-xl text-base font-oswald tracking-wide inline-flex items-center justify-center gap-2">
                <Icon name="User" size={18} />
                Личный кабинет
              </Link>
              <Link to="/apply" className="btn-outline-energy px-8 py-4 rounded-xl text-base inline-flex items-center justify-center gap-2">
                <Icon name="FileText" size={18} />
                Подать заявку
              </Link>
            </div>

            <div className="flex flex-wrap gap-6 mt-10 animate-fade-in delay-400">
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Icon name="CheckCircle" size={16} className="text-energy-yellow" />
                Онлайн-оплата
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Icon name="CheckCircle" size={16} className="text-energy-yellow" />
                Электронные квитанции
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Icon name="CheckCircle" size={16} className="text-energy-yellow" />
                Аварийная служба 24/7
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-center animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="font-oswald text-4xl md:text-5xl font-bold text-gradient-yellow">
                  {stat.value}
                  <span className="text-energy-yellow/70">{stat.suffix}</span>
                </div>
                <div className="font-golos text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-oswald text-4xl font-bold text-white mb-3">
              НАШИ <span className="text-gradient-yellow">УСЛУГИ</span>
            </h2>
            <p className="font-golos text-muted-foreground max-w-lg mx-auto">
              Всё необходимое для надёжного электроснабжения вашего дома и бизнеса
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <div
                key={i}
                className="energy-card rounded-2xl p-6 group cursor-pointer"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <Icon name={s.icon} size={26} className="text-energy-yellow" />
                </div>
                <h3 className="font-oswald text-lg font-semibold text-white mb-2 tracking-wide">{s.title}</h3>
                <p className="font-golos text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/services" className="btn-outline-energy px-8 py-3 rounded-xl inline-flex items-center gap-2">
              Все услуги
              <Icon name="ArrowRight" size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-energy-card/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-oswald text-4xl font-bold text-white mb-6">
                ЛИЧНЫЙ <span className="text-gradient-yellow">КАБИНЕТ</span>
                <br />
                ДЛЯ КЛИЕНТОВ
              </h2>
              <p className="font-golos text-muted-foreground mb-8 leading-relaxed">
                Управляйте своим лицевым счётом, просматривайте историю начислений и скачивайте квитанции — всё в одном месте без очередей.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Просмотр и скачивание квитанций",
                  "История платежей за любой период",
                  "Онлайн-оплата без комиссии",
                  "Подача заявок на перерасчёт",
                  "Передача показаний счётчика",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-golos text-sm text-foreground">
                    <div className="w-5 h-5 rounded-full bg-energy-yellow/20 flex items-center justify-center shrink-0">
                      <Icon name="Check" size={12} className="text-energy-yellow" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/cabinet" className="btn-energy px-8 py-3 rounded-xl inline-flex items-center gap-2">
                <Icon name="LogIn" size={16} />
                Войти в кабинет
              </Link>
            </div>

            <div className="relative">
              <div className="energy-card rounded-2xl p-6 animate-pulse-glow">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="font-oswald text-lg text-white font-bold">Иванов И.И.</div>
                    <div className="font-golos text-xs text-muted-foreground">Лицевой счёт: 001-234-567</div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-energy-yellow/20 flex items-center justify-center">
                    <Icon name="User" size={20} className="text-energy-yellow" />
                  </div>
                </div>

                <div className="bg-energy-yellow/10 rounded-xl p-4 mb-4">
                  <div className="font-golos text-xs text-muted-foreground mb-1">Текущий баланс</div>
                  <div className="font-oswald text-3xl font-bold text-energy-yellow">-1 240 ₽</div>
                  <div className="font-golos text-xs text-red-400 mt-1">К оплате до 25 марта</div>
                </div>

                <div className="space-y-2 mb-4">
                  {[
                    { month: "Февраль 2024", amount: "1 180 ₽", status: "Оплачено" },
                    { month: "Январь 2024", amount: "1 310 ₽", status: "Оплачено" },
                    { month: "Декабрь 2023", amount: "1 560 ₽", status: "Оплачено" },
                  ].map((r, i) => (
                    <div key={i} className="flex items-center justify-between py-2 border-b border-border">
                      <span className="font-golos text-xs text-muted-foreground">{r.month}</span>
                      <span className="font-golos text-xs font-medium text-white">{r.amount}</span>
                      <span className="font-golos text-xs text-green-400">{r.status}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 btn-energy py-2 rounded-lg text-xs font-oswald tracking-wide">
                    Оплатить
                  </button>
                  <button className="flex-1 btn-outline-energy py-2 rounded-lg text-xs flex items-center justify-center gap-1">
                    <Icon name="Download" size={12} />
                    Квитанция
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <h2 className="font-oswald text-4xl font-bold text-white">
              НОВОСТИ И <span className="text-gradient-yellow">ОБЪЯВЛЕНИЯ</span>
            </h2>
            <button className="btn-outline-energy px-5 py-2 rounded-xl text-sm hidden md:flex items-center gap-2">
              Все новости
              <Icon name="ArrowRight" size={14} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {news.map((item, i) => (
              <div key={i} className="energy-card rounded-2xl p-6 cursor-pointer group">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-golos text-muted-foreground">{item.date}</span>
                  <span className="bg-energy-yellow/10 text-energy-yellow text-xs font-golos px-3 py-1 rounded-full border border-energy-yellow/20">
                    {item.tag}
                  </span>
                </div>
                <h3 className="font-oswald text-base font-semibold text-white mb-2 group-hover:text-energy-yellow transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="font-golos text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                <div className="flex items-center gap-1 mt-4 text-energy-yellow text-xs font-golos group-hover:gap-2 transition-all">
                  Читать далее <Icon name="ArrowRight" size={12} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-energy-yellow/10 via-energy-orange/5 to-energy-blue/10 border-y border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-oswald text-3xl md:text-4xl font-bold text-white mb-4">
            НУЖНА ПОМОЩЬ ИЛИ <span className="text-gradient-yellow">КОНСУЛЬТАЦИЯ?</span>
          </h2>
          <p className="font-golos text-muted-foreground mb-8 max-w-lg mx-auto">
            Наши специалисты готовы ответить на любые вопросы по тарифам, подключению и оплате
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+79968041246"
              className="btn-energy px-8 py-4 rounded-xl inline-flex items-center justify-center gap-2 font-oswald tracking-wide"
            >
              <Icon name="Phone" size={18} />
              Позвонить нам
            </a>
            <Link
              to="/apply"
              className="btn-outline-energy px-8 py-4 rounded-xl inline-flex items-center justify-center gap-2"
            >
              <Icon name="MessageSquare" size={18} />
              Написать заявку
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;