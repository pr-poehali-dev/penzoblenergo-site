import Layout from "@/components/Layout";
import Icon from "@/components/ui/icon";

const timeline = [
  { year: "1992", title: "Основание компании", desc: "ПензОблЭнерго создано как государственное предприятие для обслуживания жителей Пензенской области." },
  { year: "2005", title: "Модернизация сетей", desc: "Масштабная программа обновления электросетевого оборудования на сумму более 2 млрд рублей." },
  { year: "2012", title: "Цифровизация учёта", desc: "Внедрение автоматизированных систем учёта электроэнергии (АСКУЭ) на крупных объектах." },
  { year: "2020", title: "Личный кабинет онлайн", desc: "Запуск цифрового личного кабинета с возможностью онлайн-оплаты и просмотра квитанций." },
  { year: "2024", title: "Умные счётчики", desc: "Программа установки интеллектуальных приборов учёта для всех потребителей региона." },
];

const team = [
  { name: "Александр Петров", role: "Генеральный директор", exp: "28 лет в энергетике" },
  { name: "Елена Смирнова", role: "Финансовый директор", exp: "20 лет в отрасли" },
  { name: "Виктор Козлов", role: "Главный инженер", exp: "25 лет опыта" },
  { name: "Ольга Фёдорова", role: "Директор по клиентам", exp: "15 лет в сфере услуг" },
];

const values = [
  { icon: "ShieldCheck", title: "Надёжность", desc: "99.8% времени бесперебойной подачи электроэнергии" },
  { icon: "Leaf", title: "Экологичность", desc: "Снижение потерь в сетях на 15% за последние 5 лет" },
  { icon: "Users", title: "Клиентоориентированность", desc: "Каждая заявка обрабатывается не дольше 3 рабочих дней" },
  { icon: "Lightbulb", title: "Инновации", desc: "Инвестиции в умные технологии и цифровизацию услуг" },
];

const About = () => {
  return (
    <Layout>
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-energy-yellow/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-energy-yellow/10 border border-energy-yellow/20 rounded-full px-4 py-1.5 mb-6">
              <Icon name="Building2" size={14} className="text-energy-yellow" />
              <span className="text-energy-yellow text-xs font-golos tracking-widest uppercase">О компании</span>
            </div>
            <h1 className="font-oswald text-5xl md:text-6xl font-bold text-white leading-none mb-6">
              32 ГОДА <span className="text-gradient-yellow">НАДЁЖНОГО</span>
              <br />ЭНЕРГОСНАБЖЕНИЯ
            </h1>
            <p className="font-golos text-lg text-muted-foreground leading-relaxed max-w-2xl">
              ПензОблЭнерго — крупнейший поставщик электроэнергии Пензенской области, обслуживающий более 580 000 клиентов. Мы обеспечиваем бесперебойное электроснабжение жилых домов, промышленных предприятий и социальных объектов региона.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: "580 000+", label: "Клиентов" },
              { num: "12 000+", label: "Км электросетей" },
              { num: "850+", label: "Сотрудников" },
              { num: "32+", label: "Лет на рынке" },
            ].map((s, i) => (
              <div key={i}>
                <div className="font-oswald text-4xl font-bold text-gradient-yellow">{s.num}</div>
                <div className="font-golos text-sm text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-oswald text-4xl font-bold text-white mb-4">
                НАША <span className="text-gradient-yellow">МИССИЯ</span>
              </h2>
              <p className="font-golos text-muted-foreground mb-6 leading-relaxed">
                Обеспечивать жителей и предприятия Пензенской области качественной электроэнергией, предоставляя современный сервис и прозрачные условия работы.
              </p>
              <p className="font-golos text-muted-foreground mb-8 leading-relaxed">
                Мы строим долгосрочные отношения с каждым клиентом, постоянно улучшая инфраструктуру и внедряя цифровые решения для удобства обслуживания.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {values.map((v, i) => (
                  <div key={i} className="energy-card rounded-xl p-4">
                    <div className="w-10 h-10 rounded-lg bg-energy-yellow/10 flex items-center justify-center mb-3">
                      <Icon name={v.icon} size={20} className="text-energy-yellow" />
                    </div>
                    <div className="font-oswald text-sm font-semibold text-white mb-1">{v.title}</div>
                    <div className="font-golos text-xs text-muted-foreground">{v.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-oswald text-4xl font-bold text-white mb-8">
                ИСТОРИЯ <span className="text-gradient-yellow">КОМПАНИИ</span>
              </h2>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-energy-yellow via-energy-yellow/50 to-transparent" />
                <div className="space-y-6">
                  {timeline.map((item, i) => (
                    <div key={i} className="relative pl-12">
                      <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-energy-yellow/20 border border-energy-yellow/40 flex items-center justify-center">
                        <div className="w-2 h-2 bg-energy-yellow rounded-full" />
                      </div>
                      <div className="font-oswald text-energy-yellow font-bold text-sm mb-1">{item.year}</div>
                      <div className="font-oswald text-white font-semibold mb-1">{item.title}</div>
                      <div className="font-golos text-sm text-muted-foreground">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-energy-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-oswald text-4xl font-bold text-white mb-3">
              РУКОВОДСТВО <span className="text-gradient-yellow">КОМПАНИИ</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <div key={i} className="energy-card rounded-2xl p-6 text-center group">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-energy-yellow/20 to-energy-orange/10 border-2 border-energy-yellow/30 flex items-center justify-center mx-auto mb-4 group-hover:border-energy-yellow/60 transition-all">
                  <Icon name="User" size={36} className="text-energy-yellow/70" />
                </div>
                <div className="font-oswald text-base font-bold text-white mb-1">{member.name}</div>
                <div className="font-golos text-sm text-energy-yellow mb-2">{member.role}</div>
                <div className="font-golos text-xs text-muted-foreground">{member.exp}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "Award", title: "Лицензии и сертификаты", desc: "Все виды деятельности лицензированы. Лицензия Ростехнадзора №ПЭ-03-011785." },
              { icon: "FileCheck", title: "Регуляторная деятельность", desc: "Тарифы устанавливаются Управлением по регулированию тарифов Пензенской области." },
              { icon: "Phone", title: "Горячая линия", desc: "Бесплатная линия 8 (800) 100-11-22 работает круглосуточно для всех клиентов." },
            ].map((item, i) => (
              <div key={i} className="energy-card rounded-2xl p-6">
                <div className="w-12 h-12 rounded-xl bg-energy-yellow/10 flex items-center justify-center mb-4">
                  <Icon name={item.icon} size={24} className="text-energy-yellow" />
                </div>
                <h3 className="font-oswald text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="font-golos text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
