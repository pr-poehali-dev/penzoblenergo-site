import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const navLinks = [
  { path: "/", label: "Главная" },
  { path: "/about", label: "О компании" },
  { path: "/services", label: "Услуги" },
  { path: "/tariffs", label: "Тарифы" },
  { path: "/cabinet", label: "Личный кабинет" },
  { path: "/apply", label: "Подать заявку" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen bg-background text-foreground grid-bg flex flex-col">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-energy-dark/95 backdrop-blur-md shadow-lg shadow-black/30 border-b border-energy-yellow/10"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="https://cdn.poehali.dev/projects/3115fc60-c3b5-469a-a5ad-ac39a8bf7243/files/f459de85-cc4f-4c52-a6e6-bd86fcca794e.jpg"
                alt="ПензОблЭнерго"
                className="w-10 h-10 rounded-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div>
                <div className="font-oswald text-lg font-bold leading-none text-white tracking-wider">
                  ПЕНЗ<span className="text-energy-yellow">ОБЛ</span>ЭНЕРГО
                </div>
                <div className="text-xs text-muted-foreground font-golos tracking-widest uppercase">
                  Энергоснабжение
                </div>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-md font-golos text-sm font-medium transition-all duration-200 relative group ${
                    location.pathname === link.path
                      ? "text-energy-yellow"
                      : "text-muted-foreground hover:text-white"
                  }`}
                >
                  {link.label}
                  {location.pathname === link.path && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-energy-yellow rounded-full" />
                  )}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+78412000000"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors"
              >
                <Icon name="Phone" size={14} className="text-energy-yellow" />
                8 (8412) 00-00-00
              </a>
              <Link to="/cabinet" className="btn-energy px-5 py-2 rounded-lg text-sm font-oswald tracking-wide">
                Войти
              </Link>
            </div>

            <button
              className="lg:hidden p-2 text-muted-foreground hover:text-white transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Icon name={menuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-energy-dark/98 backdrop-blur-md border-t border-border animate-fade-in">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-lg font-golos text-sm font-medium transition-all ${
                    location.pathname === link.path
                      ? "bg-energy-yellow/10 text-energy-yellow"
                      : "text-muted-foreground hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 border-t border-border mt-2 flex flex-col gap-3">
                <a
                  href="tel:+78412000000"
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <Icon name="Phone" size={14} className="text-energy-yellow" />
                  8 (8412) 00-00-00
                </a>
                <Link to="/cabinet" className="btn-energy px-5 py-2 rounded-lg text-sm font-oswald tracking-wide text-center">
                  Войти в личный кабинет
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1 pt-16 md:pt-20">{children}</main>

      <footer className="bg-energy-dark border-t border-border mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="https://cdn.poehali.dev/projects/3115fc60-c3b5-469a-a5ad-ac39a8bf7243/files/f459de85-cc4f-4c52-a6e6-bd86fcca794e.jpg"
                  alt="ПензОблЭнерго"
                  className="w-9 h-9 rounded-full object-cover"
                />
                <span className="font-oswald font-bold text-white tracking-wider">
                  ПЕНЗ<span className="text-energy-yellow">ОБЛ</span>ЭНЕРГО
                </span>
              </div>
              <p className="text-muted-foreground text-sm font-golos leading-relaxed">
                Надёжное энергоснабжение Пензенской области с 1992 года.
              </p>
              <div className="flex gap-3 mt-4">
                {(["Facebook", "Youtube", "MessageCircle"] as string[]).map((icon) => (
                  <button
                    key={icon}
                    className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-energy-yellow hover:border-energy-yellow/50 transition-all"
                  >
                    <Icon name={icon} size={14} />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-oswald font-semibold text-white mb-4 tracking-wide">НАВИГАЦИЯ</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-muted-foreground hover:text-energy-yellow text-sm font-golos transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-oswald font-semibold text-white mb-4 tracking-wide">КОНТАКТЫ</h4>
              <ul className="space-y-3">
                {[
                  { icon: "MapPin", text: "г. Пенза, ул. Московская, 1" },
                  { icon: "Phone", text: "8 (8412) 00-00-00" },
                  { icon: "Mail", text: "info@penzoblenergo.ru" },
                  { icon: "Clock", text: "Пн-Пт: 8:00 — 18:00" },
                ].map(({ icon, text }) => (
                  <li key={text} className="flex items-start gap-2">
                    <Icon name={icon} size={14} className="text-energy-yellow mt-0.5 shrink-0" />
                    <span className="text-muted-foreground text-sm font-golos">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-oswald font-semibold text-white mb-4 tracking-wide">АВАРИЙНАЯ СЛУЖБА</h4>
              <div className="energy-card rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-xs text-green-400 font-golos">Работает 24/7</span>
                </div>
                <a
                  href="tel:+78412112233"
                  className="text-2xl font-oswald font-bold text-energy-yellow hover:text-energy-orange transition-colors"
                >
                  8 (8412) 11-22-33
                </a>
                <p className="text-xs text-muted-foreground font-golos mt-1">Звонок бесплатный</p>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-xs font-golos">
              © 2024 ПензОблЭнерго. Все права защищены.
            </p>
            <div className="flex gap-4">
              <button className="text-muted-foreground text-xs font-golos hover:text-white transition-colors">
                Политика конфиденциальности
              </button>
              <button className="text-muted-foreground text-xs font-golos hover:text-white transition-colors">
                Пользовательское соглашение
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;