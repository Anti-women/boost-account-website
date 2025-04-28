import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ChevronRight } from "lucide-react";

const Index = () => {
  // Данные для карточек услуг
  const services = [
    {
      title: "Буст рейтинга",
      description: "Быстрое и безопасное повышение рейтинга в любой игре",
      price: "от 2500 ₽",
      image: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?auto=format&fit=crop&q=80",
      popular: true,
      features: [
        "Игра профессионалами высокого ранга",
        "Быстрое выполнение заказа",
        "Гарантия результата",
        "Безопасность аккаунта"
      ]
    },
    {
      title: "Калибровка аккаунта",
      description: "Идеальное начало игровой карьеры с хорошим рейтингом",
      price: "от 3000 ₽",
      image: "https://images.unsplash.com/photo-1580327344181-c1163234e5a0?auto=format&fit=crop&q=80",
      features: [
        "Калибровка на высокий ранг",
        "Опытные игроки",
        "Отчеты о ходе выполнения",
        "Индивидуальный подход"
      ]
    },
    {
      title: "Коучинг",
      description: "Обучение от профессиональных игроков высокого ранга",
      price: "от 1500 ₽/час",
      image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&q=80",
      features: [
        "Индивидуальные тренировки",
        "Анализ ваших игр",
        "Практические советы",
        "Разбор мета-стратегий"
      ]
    }
  ];

  // Данные для FAQ
  const faqItems = [
    {
      question: "Безопасно ли использовать ваши услуги?",
      answer: "Да, мы уделяем максимальное внимание безопасности вашего аккаунта. Используем VPN, играем в соответствии с вашим регионом и соблюдаем все меры предосторожности, чтобы ваш аккаунт не попал под подозрение."
    },
    {
      question: "Сколько времени занимает буст?",
      answer: "Время выполнения заказа зависит от текущего и желаемого ранга. В среднем, буст на 1-2 ранга занимает 1-3 дня. Более точные сроки мы сообщим после оценки вашего заказа."
    },
    {
      question: "Можно ли следить за процессом буста?",
      answer: "Конечно! Вы получаете доступ к личному кабинету, где можете в реальном времени отслеживать прогресс выполнения заказа, статистику игр и общаться с бустером."
    },
    {
      question: "Какие у вас способы оплаты?",
      answer: "Мы принимаем различные способы оплаты: банковские карты, электронные кошельки (QIWI, YooMoney, WebMoney), криптовалюту и другие. Подробности можно узнать при оформлении заказа."
    },
    {
      question: "Что делать, если результат не достигнут?",
      answer: "Мы гарантируем выполнение заказа. Если по каким-то причинам результат не был достигнут, мы вернем вам деньги или продолжим выполнение заказа бесплатно до достижения желаемого результата."
    }
  ];

  // Данные для вкладок игр
  const games = [
    {
      id: "dota2",
      name: "Dota 2",
      services: services
    },
    {
      id: "csgo",
      name: "CS:GO",
      services: services
    },
    {
      id: "valorant",
      name: "Valorant",
      services: services
    },
    {
      id: "lol",
      name: "League of Legends",
      services: services
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />
        
        {/* Services Section */}
        <section id="services" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Наши услуги</h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                Выберите подходящую услугу и достигните желаемого результата с профессиональной командой бустеров
              </p>
            </div>
            
            <Tabs defaultValue={games[0].id} className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
                {games.map((game) => (
                  <TabsTrigger key={game.id} value={game.id}>
                    {game.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {games.map((game) => (
                <TabsContent key={game.id} value={game.id}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {game.services.map((service, index) => (
                      <ServiceCard
                        key={index}
                        title={service.title}
                        description={service.description}
                        price={service.price}
                        image={service.image}
                        popular={service.popular}
                        features={service.features}
                      />
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="py-20 bg-boost-dark/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Как это работает</h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                Простой процесс получения буста в несколько шагов
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="relative p-6 bg-secondary/50 rounded-lg border border-border/40 text-center">
                <div className="absolute -top-4 -right-4 w-10 h-10 bg-boost-purple rounded-full flex items-center justify-center text-foreground font-bold">1</div>
                <div className="mb-4 flex justify-center">
                  <svg className="h-12 w-12 text-boost-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Оформление заказа</h3>
                <p className="text-foreground/70 text-sm">Выберите услугу и заполните форму заказа с указанием деталей</p>
              </div>
              
              <div className="relative p-6 bg-secondary/50 rounded-lg border border-border/40 text-center">
                <div className="absolute -top-4 -right-4 w-10 h-10 bg-boost-purple rounded-full flex items-center justify-center text-foreground font-bold">2</div>
                <div className="mb-4 flex justify-center">
                  <svg className="h-12 w-12 text-boost-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Оплата</h3>
                <p className="text-foreground/70 text-sm">Выберите удобный способ оплаты и произведите оплату</p>
              </div>
              
              <div className="relative p-6 bg-secondary/50 rounded-lg border border-border/40 text-center">
                <div className="absolute -top-4 -right-4 w-10 h-10 bg-boost-purple rounded-full flex items-center justify-center text-foreground font-bold">3</div>
                <div className="mb-4 flex justify-center">
                  <svg className="h-12 w-12 text-boost-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Отслеживание</h3>
                <p className="text-foreground/70 text-sm">Следите за процессом выполнения заказа в реальном времени</p>
              </div>
              
              <div className="relative p-6 bg-secondary/50 rounded-lg border border-border/40 text-center">
                <div className="absolute -top-4 -right-4 w-10 h-10 bg-boost-purple rounded-full flex items-center justify-center text-foreground font-bold">4</div>
                <div className="mb-4 flex justify-center">
                  <svg className="h-12 w-12 text-boost-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Получение результата</h3>
                <p className="text-foreground/70 text-sm">Получите желаемый результат и бонусы для постоянных клиентов</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Что говорят клиенты</h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                Более 5000 довольных клиентов уже выбрали наши услуги
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-secondary/30 rounded-lg border border-border/40">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-boost-purple/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-boost-purple font-bold">АМ</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Алексей М.</h4>
                    <div className="flex text-yellow-500">
                      <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                    </div>
                  </div>
                </div>
                <p className="text-foreground/70">
                  "Отличный сервис! Заказывал буст до Divine в Dota 2, сделали за 5 дней. Бустер играл отлично, даже дал несколько советов. Однозначно рекомендую!"
                </p>
              </div>
              
              <div className="p-6 bg-secondary/30 rounded-lg border border-border/40">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-boost-purple/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-boost-purple font-bold">ЕК</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Екатерина К.</h4>
                    <div className="flex text-yellow-500">
                      <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                    </div>
                  </div>
                </div>
                <p className="text-foreground/70">
                  "Очень довольна работой! Заказывала калибровку, получила Legend 3, всё быстро и качественно. Отдельное спасибо за бонус в виде настройки аккаунта."
                </p>
              </div>
              
              <div className="p-6 bg-secondary/30 rounded-lg border border-border/40">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-boost-purple/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-boost-purple font-bold">ДС</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Дмитрий С.</h4>
                    <div className="flex text-yellow-500">
                      <span>★</span><span>★</span><span>★</span><span>★</span><span>☆</span>
                    </div>
                  </div>
                </div>
                <p className="text-foreground/70">
                  "Брал коучинг по CS:GO. Тренер очень опытный, разобрали все мои ошибки, показал много новых фишек. После 5 занятий ранг вырос с Gold Nova до MG2!"
                </p>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <a href="#" className="inline-flex items-center text-boost-purple hover:underline">
                Смотреть все отзывы <ChevronRight className="h-4 w-4 ml-1" />
              </a>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-boost-dark/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Часто задаваемые вопросы</h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                Ответы на самые распространенные вопросы о наших услугах
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                    <AccordionContent className="text-foreground/70">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-boost-purple/10 border border-boost-purple/30 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Готовы начать?</h2>
              <p className="text-foreground/70 max-w-2xl mx-auto mb-8">
                Закажите буст прямо сейчас и получите 10% скидку на первый заказ!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-boost-purple hover:bg-boost-purple/90 text-white font-bold py-3 px-8 rounded-lg animate-pulse-glow">
                  Заказать буст
                </button>
                <button className="bg-transparent border border-boost-purple text-boost-purple hover:bg-boost-purple/10 font-bold py-3 px-8 rounded-lg">
                  Связаться с нами
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
