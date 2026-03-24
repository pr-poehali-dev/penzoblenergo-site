import { useState } from "react";
import Layout from "@/components/Layout";
import Icon from "@/components/ui/icon";

const serviceTypes = [
  "Подключение к электросети",
  "Увеличение мощности",
  "Смена тарифа",
  "Замена счётчика",
  "Перерасчёт показаний",
  "Временное отключение",
  "Другое",
];

const Apply = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    account: "",
    address: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-energy-blue/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-energy-yellow/10 border border-energy-yellow/20 rounded-full px-4 py-1.5 mb-6">
              <Icon name="FileText" size={14} className="text-energy-yellow" />
              <span className="text-energy-yellow text-xs font-golos tracking-widest uppercase">Онлайн-заявка</span>
            </div>
            <h1 className="font-oswald text-5xl md:text-6xl font-bold text-white leading-none mb-6">
              ПОДАТЬ <span className="text-gradient-yellow">ЗАЯВКУ</span>
              <br />ОНЛАЙН
            </h1>
            <p className="font-golos text-lg text-muted-foreground leading-relaxed">
              Заполните форму — мы свяжемся с вами в течение одного рабочего дня и ответим на все вопросы.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            <div className="lg:col-span-2">
              {submitted ? (
                <div className="energy-card rounded-2xl p-12 text-center animate-fade-in">
                  <div className="w-20 h-20 rounded-full bg-green-400/20 border border-green-400/30 flex items-center justify-center mx-auto mb-6">
                    <Icon name="CheckCircle" size={40} className="text-green-400" />
                  </div>
                  <h2 className="font-oswald text-3xl font-bold text-white mb-3">
                    ЗАЯВКА <span className="text-gradient-yellow">ПРИНЯТА!</span>
                  </h2>
                  <p className="font-golos text-muted-foreground mb-2">
                    Номер вашей заявки: <span className="text-energy-yellow font-semibold">#ЗА-2024-{Math.floor(Math.random() * 9000) + 1000}</span>
                  </p>
                  <p className="font-golos text-muted-foreground mb-8">
                    Наш специалист свяжется с вами по телефону <span className="text-white">{form.phone}</span> в течение одного рабочего дня.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", account: "", address: "", service: "", message: "" }); }}
                    className="btn-outline-energy px-8 py-3 rounded-xl font-oswald tracking-wide"
                  >
                    Подать ещё одну заявку
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="energy-card rounded-2xl p-8 space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="font-golos text-sm text-muted-foreground block mb-2">
                        Ваше имя <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <Icon name="User" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Иванов Иван Иванович"
                          required
                          className="w-full bg-background border border-border rounded-xl pl-10 pr-4 py-3 font-golos text-sm text-foreground placeholder:text-muted-foreground focus:border-energy-yellow/50 focus:outline-none focus:ring-1 focus:ring-energy-yellow/30 transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="font-golos text-sm text-muted-foreground block mb-2">
                        Телефон <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <Icon name="Phone" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+7 (912) 345-67-89"
                          required
                          className="w-full bg-background border border-border rounded-xl pl-10 pr-4 py-3 font-golos text-sm text-foreground placeholder:text-muted-foreground focus:border-energy-yellow/50 focus:outline-none focus:ring-1 focus:ring-energy-yellow/30 transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="font-golos text-sm text-muted-foreground block mb-2">Email</label>
                      <div className="relative">
                        <Icon name="Mail" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="ivanov@example.com"
                          className="w-full bg-background border border-border rounded-xl pl-10 pr-4 py-3 font-golos text-sm text-foreground placeholder:text-muted-foreground focus:border-energy-yellow/50 focus:outline-none focus:ring-1 focus:ring-energy-yellow/30 transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="font-golos text-sm text-muted-foreground block mb-2">Лицевой счёт</label>
                      <div className="relative">
                        <Icon name="Hash" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        <input
                          type="text"
                          name="account"
                          value={form.account}
                          onChange={handleChange}
                          placeholder="001-234-567"
                          className="w-full bg-background border border-border rounded-xl pl-10 pr-4 py-3 font-golos text-sm text-foreground placeholder:text-muted-foreground focus:border-energy-yellow/50 focus:outline-none focus:ring-1 focus:ring-energy-yellow/30 transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="font-golos text-sm text-muted-foreground block mb-2">
                      Адрес объекта <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <Icon name="MapPin" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      <input
                        type="text"
                        name="address"
                        value={form.address}
                        onChange={handleChange}
                        placeholder="г. Пенза, ул. Ленина, д. 10, кв. 42"
                        required
                        className="w-full bg-background border border-border rounded-xl pl-10 pr-4 py-3 font-golos text-sm text-foreground placeholder:text-muted-foreground focus:border-energy-yellow/50 focus:outline-none focus:ring-1 focus:ring-energy-yellow/30 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-golos text-sm text-muted-foreground block mb-2">
                      Тип услуги <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <Icon name="Settings" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        required
                        className="w-full bg-background border border-border rounded-xl pl-10 pr-4 py-3 font-golos text-sm text-foreground focus:border-energy-yellow/50 focus:outline-none focus:ring-1 focus:ring-energy-yellow/30 transition-all appearance-none"
                      >
                        <option value="" disabled>Выберите услугу...</option>
                        {serviceTypes.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="font-golos text-sm text-muted-foreground block mb-2">Описание проблемы или вопроса</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Опишите подробнее вашу ситуацию..."
                      rows={4}
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 font-golos text-sm text-foreground placeholder:text-muted-foreground focus:border-energy-yellow/50 focus:outline-none focus:ring-1 focus:ring-energy-yellow/30 transition-all resize-none"
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input type="checkbox" required className="mt-1 rounded border-border" id="consent" />
                    <label htmlFor="consent" className="font-golos text-sm text-muted-foreground cursor-pointer">
                      Я согласен на обработку персональных данных в соответствии с{" "}
                      <span className="text-energy-yellow hover:underline cursor-pointer">политикой конфиденциальности</span>
                    </label>
                  </div>

                  <button type="submit" className="btn-energy w-full py-4 rounded-xl font-oswald tracking-wide text-base flex items-center justify-center gap-2">
                    <Icon name="Send" size={18} />
                    Отправить заявку
                  </button>
                </form>
              )}
            </div>

            <div className="space-y-5">
              <div className="energy-card rounded-2xl p-6">
                <h3 className="font-oswald text-lg font-bold text-white mb-4">КОНТАКТЫ</h3>
                <ul className="space-y-4">
                  {[
                    { icon: "Phone", label: "Телефон", value: "8 (8412) 00-00-00" },
                    { icon: "Mail", label: "Email", value: "info@penzoblenergo.ru" },
                    { icon: "MapPin", label: "Офис", value: "г. Пенза, ул. Московская, 1" },
                    { icon: "Clock", label: "Режим работы", value: "Пн–Пт: 8:00–18:00" },
                  ].map(({ icon, label, value }) => (
                    <li key={label} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-energy-yellow/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon name={icon} size={14} className="text-energy-yellow" />
                      </div>
                      <div>
                        <div className="font-golos text-xs text-muted-foreground">{label}</div>
                        <div className="font-golos text-sm text-white font-medium">{value}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="energy-card rounded-2xl p-6 border-l-2 border-l-red-400">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
                  <span className="font-oswald text-sm font-bold text-white">АВАРИЙНАЯ СЛУЖБА</span>
                </div>
                <a href="tel:+78412112233" className="font-oswald text-2xl font-bold text-energy-yellow hover:text-energy-orange transition-colors block mb-1">
                  8 (8412) 11-22-33
                </a>
                <div className="font-golos text-xs text-muted-foreground">Круглосуточно, бесплатно</div>
              </div>

              <div className="energy-card rounded-2xl p-6">
                <h3 className="font-oswald text-sm font-bold text-white mb-3">СРОКИ ОБРАБОТКИ</h3>
                <ul className="space-y-3">
                  {[
                    { label: "Звонок специалиста", time: "1 рабочий день" },
                    { label: "Технические условия", time: "15 рабочих дней" },
                    { label: "Перерасчёт", time: "5 рабочих дней" },
                    { label: "Смена тарифа", time: "С 1-го числа след. месяца" },
                  ].map(({ label, time }) => (
                    <li key={label} className="flex items-center justify-between">
                      <span className="font-golos text-xs text-muted-foreground">{label}</span>
                      <span className="font-golos text-xs text-energy-yellow font-medium">{time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Apply;
