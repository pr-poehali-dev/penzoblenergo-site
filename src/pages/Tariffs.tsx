import { useState } from "react";
import Layout from "@/components/Layout";
import Icon from "@/components/ui/icon";

const categories = ["Население", "Бизнес", "Промышленность"];

const tariffs = {
  "Население": [
    {
      name: "Базовый",
      subtitle: "Одноставочный тариф",
      price: "4.82",
      unit: "руб/кВт·ч",
      desc: "Единый тариф для всех часов суток. Подходит для большинства домашних потребителей.",
      features: [
        "Для квартир и частных домов",
        "Счётчик любого типа",
        "Без ограничений по мощности",
        "Онлайн-оплата без комиссии",
      ],
      highlight: false,
    },
    {
      name: "Двухзонный",
      subtitle: "День / Ночь",
      priceDay: "5.14",
      priceNight: "2.41",
      unit: "руб/кВт·ч",
      desc: "Раздельный учёт по зонам суток. Выгодно при активном ночном потреблении.",
      features: [
        "День 7:00–23:00: 5.14 руб/кВт·ч",
        "Ночь 23:00–7:00: 2.41 руб/кВт·ч",
        "Требуется многотарифный счётчик",
        "Экономия до 30% при сдвиге нагрузки",
      ],
      highlight: true,
    },
    {
      name: "Трёхзонный",
      subtitle: "Пик / Полупик / Ночь",
      price: "от 2.41",
      unit: "руб/кВт·ч",
      desc: "Три тарифные зоны для максимальной экономии. Подходит для «умных» домов.",
      features: [
        "Пик: 5.96 руб/кВт·ч",
        "Полупик: 4.82 руб/кВт·ч",
        "Ночь: 2.41 руб/кВт·ч",
        "Экономия до 40% от базового",
      ],
      highlight: false,
    },
  ],
  "Бизнес": [
    {
      name: "Малый бизнес",
      subtitle: "До 150 кВт",
      price: "6.28",
      unit: "руб/кВт·ч",
      desc: "Тариф для небольших коммерческих объектов: магазинов, кафе, офисов.",
      features: [
        "Мощность до 150 кВт",
        "Одноставочный расчёт",
        "Персональный менеджер",
        "Электронные счета-фактуры",
      ],
      highlight: false,
    },
    {
      name: "Средний бизнес",
      subtitle: "150–750 кВт",
      price: "5.74",
      unit: "руб/кВт·ч",
      desc: "Для средних предприятий торговли, сервиса и производства.",
      features: [
        "Мощность 150–750 кВт",
        "Зонные тарифы доступны",
        "Приоритетная поддержка",
        "Договор с гарантией мощности",
      ],
      highlight: true,
    },
    {
      name: "Крупный бизнес",
      subtitle: "Свыше 750 кВт",
      price: "По договору",
      unit: "",
      desc: "Индивидуальные условия для крупных торговых и бизнес-центров.",
      features: [
        "Мощность свыше 750 кВт",
        "Индивидуальные условия",
        "Выделенный аккаунт-менеджер",
        "SLA на восстановление",
      ],
      highlight: false,
    },
  ],
  "Промышленность": [
    {
      name: "Промышленный базовый",
      subtitle: "НН до 35 кВ",
      price: "5.12",
      unit: "руб/кВт·ч",
      desc: "Для производственных объектов с низким напряжением подключения.",
      features: [
        "Напряжение НН (до 1 кВ)",
        "Почасовой учёт",
        "Трёхзонный тариф",
        "Резервное питание",
      ],
      highlight: false,
    },
    {
      name: "Промышленный СН",
      subtitle: "Среднее напряжение",
      price: "4.67",
      unit: "руб/кВт·ч",
      desc: "Для предприятий с присоединением на среднем напряжении (1–35 кВ).",
      features: [
        "Напряжение СН1/СН2",
        "Экономия на передаче",
        "Автоматический учёт АСКУЭ",
        "Почасовой мониторинг",
      ],
      highlight: true,
    },
    {
      name: "Промышленный ВН",
      subtitle: "Высокое напряжение",
      price: "3.98",
      unit: "руб/кВт·ч",
      desc: "Самый выгодный тариф для крупных промышленных предприятий ВН.",
      features: [
        "Напряжение ВН (свыше 35 кВ)",
        "Максимальная экономия",
        "Индивидуальный договор",
        "Прямое подключение к ПС",
      ],
      highlight: false,
    },
  ],
};

const faq = [
  { q: "Как узнать свой текущий тариф?", a: "Войдите в личный кабинет — тарифный план отображается в разделе «Мой счёт». Также можно позвонить на горячую линию." },
  { q: "Как перейти на двухзонный тариф?", a: "Подайте заявку в личном кабинете или в офисе. Потребуется многотарифный счётчик — мы поможем с его установкой." },
  { q: "Когда происходит перерасчёт при смене тарифа?", a: "Смена тарифа вступает в силу с 1-го числа следующего месяца после подачи заявления." },
  { q: "Есть ли льготные тарифы?", a: "Да, льготный тариф предоставляется пенсионерам, инвалидам и сельским жителям. Подтвердить льготу можно в офисе или онлайн." },
];

const Tariffs = () => {
  const [activeCategory, setActiveCategory] = useState("Население");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const currentTariffs = tariffs[activeCategory as keyof typeof tariffs];

  return (
    <Layout>
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-energy-yellow/10 border border-energy-yellow/20 rounded-full px-4 py-1.5 mb-6">
              <Icon name="BarChart3" size={14} className="text-energy-yellow" />
              <span className="text-energy-yellow text-xs font-golos tracking-widest uppercase">Тарифы</span>
            </div>
            <h1 className="font-oswald text-5xl md:text-6xl font-bold text-white leading-none mb-6">
              ТАРИФЫ НА <span className="text-gradient-yellow">ЭЛЕКТРОЭНЕРГИЮ</span>
            </h1>
            <p className="font-golos text-lg text-muted-foreground">
              Актуальные тарифы с 1 апреля 2024 года. Установлены Управлением по регулированию тарифов Пензенской области.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-xl font-oswald font-semibold tracking-wide text-sm transition-all ${
                  activeCategory === cat
                    ? "bg-energy-yellow text-energy-dark shadow-lg shadow-energy-yellow/20"
                    : "border border-border text-muted-foreground hover:border-energy-yellow/40 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {currentTariffs.map((tariff, i) => (
              <div
                key={i}
                className={`rounded-2xl p-6 flex flex-col relative overflow-hidden transition-all ${
                  tariff.highlight
                    ? "bg-gradient-to-br from-energy-yellow/20 to-energy-orange/10 border-2 border-energy-yellow/50 shadow-xl shadow-energy-yellow/10"
                    : "energy-card"
                }`}
              >
                {tariff.highlight && (
                  <div className="absolute top-4 right-4 bg-energy-yellow text-energy-dark text-xs font-oswald font-bold px-3 py-1 rounded-full">
                    Популярный
                  </div>
                )}
                <div className="mb-4">
                  <div className="font-oswald text-xl font-bold text-white">{tariff.name}</div>
                  <div className="font-golos text-sm text-energy-yellow">{tariff.subtitle}</div>
                </div>

                <div className="mb-4">
                  {"priceDay" in tariff ? (
                    <div>
                      <div className="font-oswald text-3xl font-bold text-white">
                        {tariff.priceDay} <span className="text-base text-muted-foreground">{tariff.unit}</span>
                      </div>
                      <div className="font-golos text-sm text-muted-foreground mt-1">
                        Ночь: {tariff.priceNight} {tariff.unit}
                      </div>
                    </div>
                  ) : (
                    <div className="font-oswald text-3xl font-bold text-white">
                      {tariff.price} <span className="text-base text-muted-foreground">{tariff.unit}</span>
                    </div>
                  )}
                </div>

                <p className="font-golos text-sm text-muted-foreground mb-5 leading-relaxed">{tariff.desc}</p>

                <ul className="space-y-2 flex-1 mb-6">
                  {tariff.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 font-golos text-sm text-foreground/80">
                      <Icon name="Check" size={14} className="text-energy-yellow mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-xl font-oswald tracking-wide text-sm ${
                    tariff.highlight ? "btn-energy" : "btn-outline-energy"
                  }`}
                >
                  Выбрать тариф
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-energy-card/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="font-oswald text-4xl font-bold text-white mb-3">
              ЧАСТО <span className="text-gradient-yellow">ЗАДАВАЕМЫЕ ВОПРОСЫ</span>
            </h2>
          </div>
          <div className="space-y-3">
            {faq.map((item, i) => (
              <div key={i} className="energy-card rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-oswald font-semibold text-white">{item.q}</span>
                  <Icon
                    name={openFaq === i ? "ChevronUp" : "ChevronDown"}
                    size={18}
                    className="text-energy-yellow shrink-0"
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 font-golos text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="energy-card rounded-2xl p-8 text-center">
            <Icon name="HelpCircle" size={40} className="text-energy-yellow mx-auto mb-4" />
            <h3 className="font-oswald text-2xl font-bold text-white mb-3">Нужна помощь с выбором тарифа?</h3>
            <p className="font-golos text-muted-foreground mb-6 max-w-md mx-auto">
              Наши специалисты помогут подобрать оптимальный тариф и рассчитают возможную экономию
            </p>
            <a href="tel:+78412000000" className="btn-energy px-8 py-3 rounded-xl inline-flex items-center gap-2 font-oswald tracking-wide">
              <Icon name="Phone" size={16} />
              Позвонить консультанту
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Tariffs;
