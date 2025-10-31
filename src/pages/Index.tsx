import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useState } from "react";

const Index = () => {
  const features = [
    { icon: "Target", title: "Aimbot", desc: "Безупречная точность в любой ситуации" },
    { icon: "Eye", title: "Wallhack", desc: "Видишь всех сквозь стены" },
    { icon: "Zap", title: "Speed Hack", desc: "Невероятная скорость передвижения" },
    { icon: "Shield", title: "God Mode", desc: "Полная неуязвимость" },
    { icon: "Radar", title: "Radar ESP", desc: "Карта с позициями врагов в реальном времени" },
    { icon: "Crosshair", title: "No Recoil", desc: "Стрельба без отдачи" },
  ];

  const screenshots = [
    { url: "https://cdn.poehali.dev/projects/66514dd7-f386-471c-9f56-46cccfe24e4c/files/2e162d9e-64b7-417e-ace7-4f7b8f79e088.jpg", title: "Aimbot Interface" },
    { url: "https://cdn.poehali.dev/projects/66514dd7-f386-471c-9f56-46cccfe24e4c/files/a5b34875-1987-4bd2-b252-c0ca4f802010.jpg", title: "ESP Wallhack" },
    { url: "https://cdn.poehali.dev/projects/66514dd7-f386-471c-9f56-46cccfe24e4c/files/eeffc807-76c3-41db-a41e-5ac72aa706da.jpg", title: "Radar System" },
  ];

  const reviews = [
    { name: "Артём", rating: 5, text: "Лучший чит! Пользуюсь уже месяц, никаких банов" },
    { name: "Дмитрий", rating: 5, text: "Просто огонь! Все работает четко, поддержка на высоте" },
    { name: "Максим", rating: 5, text: "Купил на день, теперь беру на месяц. Рекомендую!" },
  ];

  const faqs = [
    { q: "Безопасно ли использовать чит?", a: "Да! Наш чит использует продвинутые методы защиты от античитов. Тысячи пользователей играют без банов уже месяцами." },
    { q: "Как быстро я получу доступ?", a: "Моментально! После оплаты вы получите инструкции по установке в Telegram в течение 1-2 минут." },
    { q: "Работает ли на всех версиях игры?", a: "Да, чит автоматически обновляется под новые патчи игры. Вы всегда получаете актуальную версию." },
    { q: "Можно ли использовать на нескольких ПК?", a: "Нет, лицензия привязывается к одному компьютеру для безопасности. Но можно перепривязать при необходимости." },
    { q: "Что делать если возникли проблемы?", a: "Пишите в наш Telegram @Ebashygeroinss - техподдержка отвечает круглосуточно и решает любые вопросы за 10-15 минут." },
    { q: "Есть ли возврат средств?", a: "Да, если чит не работает по техническим причинам на вашем ПК - полный возврат в течение 24 часов." },
  ];

  const [isPlaying, setIsPlaying] = useState(false);

  const handleBuyClick = () => {
    window.open('https://t.me/Ebashygeroinss', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-card">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzliODdmNSIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="relative container mx-auto px-4 py-16">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block mb-6">
            <h1 className="text-7xl md:text-9xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent glow-text mb-4">
              MAGIC CHEAT
            </h1>
            <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse-glow"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Доминируй в игре с самым мощным читом на рынке
          </p>
          
          <Button 
            onClick={handleBuyClick}
            size="lg" 
            className="text-xl px-12 py-8 bg-gradient-to-r from-secondary to-destructive hover:from-destructive hover:to-secondary transition-all duration-300 transform hover:scale-105 glow-effect animate-pulse-glow"
          >
            <Icon name="ShoppingCart" className="mr-2" size={28} />
            КУПИТЬ ЧИТ
          </Button>
        </div>

        <div className="mb-20 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 glow-text">
            ВОЗМОЖНОСТИ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="p-6 bg-card/50 backdrop-blur border-2 border-primary/30 hover:border-primary transition-all duration-300 hover:scale-105 hover:glow-effect group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-accent group-hover:animate-pulse-glow">
                    <Icon name={feature.icon} size={32} className="text-background" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-primary">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 glow-text">
            ДЕМОНСТРАЦИЯ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {screenshots.map((screenshot, index) => (
              <Card 
                key={index}
                className="overflow-hidden bg-card/50 backdrop-blur border-2 border-primary/30 hover:border-accent transition-all duration-300 hover:scale-105 hover:glow-effect cursor-pointer group"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={screenshot.url} 
                    alt={screenshot.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <h3 className="text-lg font-bold text-primary">{screenshot.title}</h3>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 glow-text">
            ТАРИФЫ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 bg-gradient-to-br from-card to-muted border-2 border-accent/50 hover:border-accent transition-all duration-300 hover:scale-105 hover:glow-effect cursor-pointer">
              <div className="text-center">
                <Icon name="Zap" size={48} className="mx-auto mb-4 text-accent" />
                <h3 className="text-3xl font-bold mb-2">ДЕНЬ</h3>
                <div className="text-6xl font-bold text-accent mb-4">230₽</div>
                <p className="text-muted-foreground mb-6">24 часа доступа ко всем функциям</p>
                <Button 
                  onClick={handleBuyClick}
                  className="w-full bg-gradient-to-r from-accent to-primary hover:from-primary hover:to-accent transition-all duration-300"
                  size="lg"
                >
                  Купить
                </Button>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-card to-muted border-2 border-secondary/50 hover:border-secondary transition-all duration-300 hover:scale-105 hover:glow-effect cursor-pointer relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-secondary text-background px-4 py-1 rounded-full text-sm font-bold">
                ПОПУЛЯРНОЕ
              </div>
              <div className="text-center">
                <Icon name="Crown" size={48} className="mx-auto mb-4 text-secondary" />
                <h3 className="text-3xl font-bold mb-2">НЕДЕЛЯ</h3>
                <div className="text-6xl font-bold text-secondary mb-4">650₽</div>
                <p className="text-muted-foreground mb-6">7 дней безлимитного доминирования</p>
                <Button 
                  onClick={handleBuyClick}
                  className="w-full bg-gradient-to-r from-secondary to-destructive hover:from-destructive hover:to-secondary transition-all duration-300"
                  size="lg"
                >
                  Купить
                </Button>
              </div>
            </Card>
          </div>
        </div>

        <div className="mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 glow-text">
            ВИДЕО-ДЕМО
          </h2>
          <Card className="max-w-4xl mx-auto overflow-hidden bg-card/50 backdrop-blur border-2 border-primary/30 hover:border-accent transition-all duration-300">
            <div className="relative aspect-video bg-gradient-to-br from-background to-card flex items-center justify-center group cursor-pointer" onClick={() => setIsPlaying(!isPlaying)}>
              {!isPlaying ? (
                <div className="text-center">
                  <div className="mb-6 relative inline-block">
                    <div className="absolute inset-0 bg-primary/20 blur-3xl animate-pulse-glow"></div>
                    <div className="relative bg-gradient-to-br from-primary to-accent p-8 rounded-full glow-effect group-hover:scale-110 transition-transform duration-300">
                      <Icon name="Play" size={64} className="text-background" />
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-primary">Смотреть демонстрацию</p>
                  <p className="text-muted-foreground mt-2">2:30 мин • Все функции в действии</p>
                </div>
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Icon name="Video" size={80} className="mx-auto mb-4 text-primary animate-pulse" />
                    <p className="text-xl text-muted-foreground">Свяжитесь с нами в Telegram</p>
                    <p className="text-lg text-muted-foreground mt-2">чтобы получить полную демонстрацию</p>
                    <Button onClick={handleBuyClick} className="mt-6 bg-gradient-to-r from-primary to-accent" size="lg">
                      <Icon name="MessageCircle" className="mr-2" size={20} />
                      Открыть Telegram
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </Card>
        </div>

        <div className="mb-20 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 glow-text">
            ЧАСТЫЕ ВОПРОСЫ
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-2 border-primary/30 rounded-lg px-6 bg-card/50 backdrop-blur hover:border-primary transition-all duration-300"
                >
                  <AccordionTrigger className="text-left text-lg font-bold text-foreground hover:text-primary hover:no-underline">
                    <div className="flex items-center gap-3">
                      <Icon name="HelpCircle" size={24} className="text-accent flex-shrink-0" />
                      <span>{faq.q}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pl-9">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        <div className="animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 glow-text">
            ОТЗЫВЫ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card 
                key={index}
                className="p-6 bg-card/50 backdrop-blur border-2 border-primary/30 hover:border-primary transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Icon name="User" size={24} className="text-primary" />
                  <h4 className="font-bold text-lg">{review.name}</h4>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-secondary fill-secondary" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">"{review.text}"</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <Button 
            onClick={handleBuyClick}
            size="lg" 
            className="text-2xl px-16 py-10 bg-gradient-to-r from-primary via-accent to-secondary hover:scale-110 transition-all duration-300 glow-effect animate-pulse-glow"
          >
            <Icon name="MessageCircle" className="mr-3" size={32} />
            СВЯЗАТЬСЯ В TELEGRAM
          </Button>
          <p className="mt-4 text-muted-foreground">@Ebashygeroinss</p>
        </div>
      </div>
    </div>
  );
};

export default Index;