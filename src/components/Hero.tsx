import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-boost-dark via-background to-background opacity-60 z-0"></div>
      
      {/* Hero Content */}
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-block mb-6 px-6 py-2 bg-boost-purple/10 border border-boost-purple/30 rounded-full">
            <span className="text-sm font-medium text-boost-purple">Профессиональный буст аккаунтов</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-boost-purple to-indigo-400 text-transparent bg-clip-text">
            Поднимите свой игровой аккаунт на новый уровень
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mb-8">
            Наша команда профессиональных игроков поможет вам достичь желаемого ранга в кратчайшие сроки. 
            Гарантируем безопасность, конфиденциальность и высокое качество услуг.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button className="bg-boost-purple hover:bg-boost-purple/90 py-6 px-8 text-lg animate-pulse-glow">
              Начать сейчас <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-boost-purple/50 text-boost-purple hover:bg-boost-purple/10 py-6 px-8 text-lg">
              Узнать больше
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-bold text-boost-purple mb-2">98%</span>
              <span className="text-sm md:text-base text-foreground/70">Довольных клиентов</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-bold text-boost-purple mb-2">24/7</span>
              <span className="text-sm md:text-base text-foreground/70">Поддержка</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-bold text-boost-purple mb-2">5000+</span>
              <span className="text-sm md:text-base text-foreground/70">Выполненных заказов</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-bold text-boost-purple mb-2">100%</span>
              <span className="text-sm md:text-base text-foreground/70">Гарантия</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
