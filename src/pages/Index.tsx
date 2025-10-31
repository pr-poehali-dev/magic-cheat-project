import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const features = [
    { icon: "Target", title: "Aimbot", desc: "Безупречная точность в любой ситуации" },
    { icon: "Eye", title: "Wallhack", desc: "Видишь всех сквозь стены" },
    { icon: "Zap", title: "Speed Hack", desc: "Невероятная скорость передвижения" },
    { icon: "Shield", title: "God Mode", desc: "Полная неуязвимость" },
    { icon: "Radar", title: "Radar ESP", desc: "Карта с позициями врагов в реальном времени" },
    { icon: "Crosshair", title: "No Recoil", desc: "Стрельба без отдачи" },
  ];

  const reviews = [
    { name: "Артём", rating: 5, text: "Лучший чит! Пользуюсь уже месяц, никаких банов" },
    { name: "Дмитрий", rating: 5, text: "Просто огонь! Все работает четко, поддержка на высоте" },
    { name: "Максим", rating: 5, text: "Купил на день, теперь беру на месяц. Рекомендую!" },
  ];

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
