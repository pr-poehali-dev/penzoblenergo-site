import { useState } from "react";
import Layout from "@/components/Layout";
import Icon from "@/components/ui/icon";

const receipts = [
  { id: "2024-03", month: "Март 2024", amount: "1 240.00", status: "К оплате", statusColor: "text-red-400", kwh: "257", date: "до 25.03.2024" },
  { id: "2024-02", month: "Февраль 2024", amount: "1 180.00", status: "Оплачено", statusColor: "text-green-400", kwh: "244", date: "оплачено 22.02.2024" },
  { id: "2024-01", month: "Январь 2024", amount: "1 310.00", status: "Оплачено", statusColor: "text-green-400", kwh: "271", date: "оплачено 20.01.2024" },
  { id: "2023-12", month: "Декабрь 2023", amount: "1 560.00", status: "Оплачено", statusColor: "text-green-400", kwh: "323", date: "оплачено 19.12.2023" },
  { id: "2023-11", month: "Ноябрь 2023", amount: "1 420.00", status: "Оплачено", statusColor: "text-green-400", kwh: "294", date: "оплачено 21.11.2023" },
  { id: "2023-10", month: "Октябрь 2023", amount: "1 090.00", status: "Оплачено", statusColor: "text-green-400", kwh: "226", date: "оплачено 18.10.2023" },
];

const notifications = [
  { icon: "AlertTriangle", text: "Квитанция за март 2024 доступна для оплаты", time: "2 часа назад", type: "warning" },
  { icon: "CheckCircle", text: "Оплата за февраль 2024 получена — спасибо!", time: "22 февраля", type: "success" },
  { icon: "Info", text: "С 1 апреля изменятся тарифы на электроэнергию", time: "20 марта", type: "info" },
];

const Cabinet = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [activeTab, setActiveTab] = useState<"receipts" | "meter" | "profile">("receipts");
  const [meterValue, setMeterValue] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (login && password) {
      setIsLoggedIn(true);
    }
  };

  const handleMeterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setMeterValue("");
  };

  if (!isLoggedIn) {
    return (
      <Layout>
        <section className="relative min-h-screen flex items-center justify-center py-24 overflow-hidden">
          <div className="absolute inset-0 grid-bg" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-energy-yellow/5 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-md mx-auto">
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-full bg-energy-yellow/20 border border-energy-yellow/30 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Zap" size={28} className="text-energy-yellow" />
                </div>
                <h1 className="font-oswald text-4xl font-bold text-white mb-2">
                  ЛИЧНЫЙ <span className="text-gradient-yellow">КАБИНЕТ</span>
                </h1>
                <p className="font-golos text-muted-foreground">
                  Войдите, чтобы управлять своим счётом и просматривать квитанции
                </p>
              </div>

              <div className="energy-card rounded-2xl p-8">
                <form onSubmit={handleLogin} className="space-y-5">
                  <div>
                    <label className="font-golos text-sm text-muted-foreground block mb-2">
                      Лицевой счёт или email
                    </label>
                    <div className="relative">
                      <Icon name="User" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      <input
                        type="text"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                        placeholder="001-234-567"
                        className="w-full bg-background border border-border rounded-xl pl-10 pr-4 py-3 font-golos text-sm text-foreground placeholder:text-muted-foreground focus:border-energy-yellow/50 focus:outline-none focus:ring-1 focus:ring-energy-yellow/30 transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-golos text-sm text-muted-foreground block mb-2">Пароль</label>
                    <div className="relative">
                      <Icon name="Lock" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full bg-background border border-border rounded-xl pl-10 pr-4 py-3 font-golos text-sm text-foreground placeholder:text-muted-foreground focus:border-energy-yellow/50 focus:outline-none focus:ring-1 focus:ring-energy-yellow/30 transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-border" />
                      <span className="font-golos text-sm text-muted-foreground">Запомнить меня</span>
                    </label>
                    <button type="button" className="font-golos text-sm text-energy-yellow hover:underline">
                      Забыли пароль?
                    </button>
                  </div>

                  <button type="submit" className="btn-energy w-full py-4 rounded-xl font-oswald tracking-wide text-base">
                    Войти в кабинет
                  </button>
                </form>

                <div className="mt-6 pt-6 border-t border-border text-center">
                  <p className="font-golos text-sm text-muted-foreground">
                    Нет личного кабинета?{" "}
                    <button className="text-energy-yellow hover:underline">Зарегистрироваться</button>
                  </p>
                </div>

                <div className="mt-4 bg-energy-yellow/5 border border-energy-yellow/15 rounded-xl p-4">
                  <div className="flex gap-2">
                    <Icon name="Info" size={14} className="text-energy-yellow shrink-0 mt-0.5" />
                    <p className="font-golos text-xs text-muted-foreground">
                      Для демонстрации введите любые данные и нажмите «Войти»
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-12 border-b border-border bg-energy-card/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-energy-yellow/20 border-2 border-energy-yellow/30 flex items-center justify-center">
                <Icon name="User" size={26} className="text-energy-yellow" />
              </div>
              <div>
                <h1 className="font-oswald text-2xl font-bold text-white">Иванов Иван Иванович</h1>
                <div className="font-golos text-sm text-muted-foreground">Лицевой счёт: 001-234-567 · ул. Ленина, д. 10, кв. 42</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="energy-card rounded-xl px-5 py-3 text-center">
                <div className="font-oswald text-2xl font-bold text-red-400">−1 240 ₽</div>
                <div className="font-golos text-xs text-muted-foreground">к оплате до 25.03</div>
              </div>
              <button className="btn-energy px-6 py-3 rounded-xl font-oswald tracking-wide text-sm">
                Оплатить
              </button>
              <button
                onClick={() => setIsLoggedIn(false)}
                className="p-3 border border-border rounded-xl text-muted-foreground hover:text-white hover:border-white/30 transition-all"
              >
                <Icon name="LogOut" size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {notifications.map((n, i) => (
            <div
              key={i}
              className={`energy-card rounded-xl p-4 flex items-start gap-3 border-l-2 ${
                n.type === "warning" ? "border-l-yellow-400" : n.type === "success" ? "border-l-green-400" : "border-l-blue-400"
              }`}
            >
              <Icon
                name={n.icon}
                size={16}
                className={n.type === "warning" ? "text-yellow-400" : n.type === "success" ? "text-green-400" : "text-blue-400"}
              />
              <div>
                <p className="font-golos text-sm text-foreground">{n.text}</p>
                <p className="font-golos text-xs text-muted-foreground mt-1">{n.time}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-2 mb-8 border-b border-border">
          {[
            { key: "receipts", label: "Квитанции", icon: "FileText" },
            { key: "meter", label: "Показания счётчика", icon: "Gauge" },
            { key: "profile", label: "Профиль", icon: "Settings" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as typeof activeTab)}
              className={`flex items-center gap-2 px-5 py-3 font-golos text-sm font-medium transition-all border-b-2 -mb-px ${
                activeTab === tab.key
                  ? "border-energy-yellow text-energy-yellow"
                  : "border-transparent text-muted-foreground hover:text-white"
              }`}
            >
              <Icon name={tab.icon} size={16} />
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === "receipts" && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-oswald text-2xl font-bold text-white">
                КВИТАНЦИИ И <span className="text-gradient-yellow">ИСТОРИЯ ПЛАТЕЖЕЙ</span>
              </h2>
              <button className="btn-outline-energy px-5 py-2 rounded-lg text-sm flex items-center gap-2">
                <Icon name="Download" size={14} />
                Скачать все
              </button>
            </div>

            <div className="space-y-3">
              {receipts.map((r) => (
                <div key={r.id} className="energy-card rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-energy-yellow/10 flex items-center justify-center shrink-0">
                      <Icon name="FileText" size={22} className="text-energy-yellow" />
                    </div>
                    <div>
                      <div className="font-oswald text-base font-bold text-white">{r.month}</div>
                      <div className="font-golos text-xs text-muted-foreground">{r.kwh} кВт·ч · {r.date}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 ml-16 sm:ml-0">
                    <div>
                      <div className="font-oswald text-xl font-bold text-white">{r.amount} ₽</div>
                      <div className={`font-golos text-xs ${r.statusColor}`}>{r.status}</div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-energy-yellow hover:border-energy-yellow/50 transition-all"
                        title="Просмотреть"
                      >
                        <Icon name="Eye" size={15} />
                      </button>
                      <button
                        className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-energy-yellow hover:border-energy-yellow/50 transition-all"
                        title="Скачать PDF"
                      >
                        <Icon name="Download" size={15} />
                      </button>
                      {r.status === "К оплате" && (
                        <button className="btn-energy px-4 py-2 rounded-lg font-oswald text-xs tracking-wide">
                          Оплатить
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "meter" && (
          <div className="max-w-xl">
            <h2 className="font-oswald text-2xl font-bold text-white mb-6">
              ПЕРЕДАТЬ <span className="text-gradient-yellow">ПОКАЗАНИЯ</span>
            </h2>

            <div className="energy-card rounded-2xl p-6 mb-6">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="font-golos text-xs text-muted-foreground mb-1">Прибор учёта</div>
                  <div className="font-oswald text-sm text-white font-semibold">ЦЭ6807Б №12345678</div>
                </div>
                <div>
                  <div className="font-golos text-xs text-muted-foreground mb-1">Предыдущее показание</div>
                  <div className="font-oswald text-sm text-white font-semibold">45 218 кВт·ч</div>
                </div>
                <div>
                  <div className="font-golos text-xs text-muted-foreground mb-1">Дата последней передачи</div>
                  <div className="font-oswald text-sm text-white font-semibold">25.02.2024</div>
                </div>
                <div>
                  <div className="font-golos text-xs text-muted-foreground mb-1">Срок передачи</div>
                  <div className="font-oswald text-sm text-energy-yellow font-semibold">с 15 по 25 марта</div>
                </div>
              </div>
            </div>

            {submitted ? (
              <div className="energy-card rounded-2xl p-8 text-center border border-green-400/30">
                <Icon name="CheckCircle" size={48} className="text-green-400 mx-auto mb-4" />
                <div className="font-oswald text-xl font-bold text-white mb-2">Показания переданы!</div>
                <div className="font-golos text-sm text-muted-foreground">Мы получили ваши данные и начислим оплату.</div>
              </div>
            ) : (
              <form onSubmit={handleMeterSubmit} className="space-y-5">
                <div>
                  <label className="font-golos text-sm text-muted-foreground block mb-2">
                    Текущее показание (кВт·ч)
                  </label>
                  <input
                    type="number"
                    value={meterValue}
                    onChange={(e) => setMeterValue(e.target.value)}
                    placeholder="Например: 45 475"
                    className="w-full bg-background border border-border rounded-xl px-4 py-4 font-oswald text-2xl text-foreground placeholder:text-muted-foreground placeholder:text-lg focus:border-energy-yellow/50 focus:outline-none focus:ring-1 focus:ring-energy-yellow/30 transition-all"
                    required
                  />
                  <p className="font-golos text-xs text-muted-foreground mt-2">
                    Введите показание без дробной части (без кВт·ч)
                  </p>
                </div>

                <button type="submit" className="btn-energy w-full py-4 rounded-xl font-oswald tracking-wide text-base">
                  Передать показания
                </button>
              </form>
            )}
          </div>
        )}

        {activeTab === "profile" && (
          <div className="max-w-xl">
            <h2 className="font-oswald text-2xl font-bold text-white mb-6">
              МОЙ <span className="text-gradient-yellow">ПРОФИЛЬ</span>
            </h2>
            <div className="space-y-4">
              {[
                { label: "Лицевой счёт", value: "001-234-567" },
                { label: "ФИО", value: "Иванов Иван Иванович" },
                { label: "Адрес", value: "г. Пенза, ул. Ленина, д. 10, кв. 42" },
                { label: "Тариф", value: "Одноставочный — 4.82 руб/кВт·ч" },
                { label: "Email", value: "ivanov@example.com" },
                { label: "Телефон", value: "+7 (912) 345-67-89" },
              ].map((field, i) => (
                <div key={i} className="energy-card rounded-xl p-4 flex items-center justify-between">
                  <div>
                    <div className="font-golos text-xs text-muted-foreground mb-1">{field.label}</div>
                    <div className="font-golos text-sm text-white font-medium">{field.value}</div>
                  </div>
                  <button className="text-muted-foreground hover:text-energy-yellow transition-colors">
                    <Icon name="Pencil" size={16} />
                  </button>
                </div>
              ))}
              <button className="btn-energy w-full py-3 rounded-xl font-oswald tracking-wide mt-4">
                Сохранить изменения
              </button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Cabinet;
