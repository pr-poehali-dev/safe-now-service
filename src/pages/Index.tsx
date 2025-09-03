import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Проблема",
      content: "Рынок охранных услуг в России — более 400 млрд ₽, но он недоступен обычным семьям из-за высокой стоимости и сложности подключения."
    },
    {
      title: "Решение",
      content: "Safe Now делает охрану такой же доступной, как такси. Нажал кнопку SOS → группа реагирования выезжает за 5-10 минут."
    },
    {
      title: "Модель",
      content: "Uber-модель в охране: автоматическое распределение по ближайшим партнерским ЧОПам, подписочная модель, прозрачное ценообразование."
    },
    {
      title: "Рынок",
      content: "Даже 1% проникновения = 35 млрд ₽/год. Safe Now становится первым игроком этого сегмента с технологическим подходом."
    },
    {
      title: "Финансы",
      content: "Ищем 50-55 млн ₽ на запуск в Москве и Петербурге. Цель: первые 10,000 семей и выручка 60+ млн ₽/год."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-clean font-inter">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-emergency rounded-lg flex items-center justify-center">
                <Icon name="Shield" className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-professional">Safe Now</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-emergency transition-colors">Главная</a>
              <a href="#product" className="text-gray-700 hover:text-emergency transition-colors">Продукт</a>
              <a href="#investors" className="text-gray-700 hover:text-emergency transition-colors">Инвесторам</a>
              <a href="#partners" className="text-gray-700 hover:text-emergency transition-colors">Партнерам</a>
              <a href="#contact" className="text-gray-700 hover:text-emergency transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-professional via-professional to-gray-800 text-white py-20 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="outline" className="text-white border-white">
                Стартап #1 в персональной безопасности
              </Badge>
              <h1 className="text-5xl font-bold leading-tight animate-slide-up">
                Персональная безопасность как
                <span className="text-emergency"> Uber</span>
              </h1>
              <p className="text-xl text-gray-300 animate-slide-up">
                Нажми кнопку SOS в приложении → группа реагирования выезжает за 5-10 минут. 
                Быстро, прозрачно, по подписке.
              </p>
              <div className="flex space-x-4 animate-scale-in">
                <Button className="bg-emergency hover:bg-red-700 text-white px-8 py-3 text-lg">
                  <Icon name="Play" className="w-5 h-5 mr-2" />
                  Смотреть демо
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-professional px-8 py-3 text-lg">
                  Скачать презентацию
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                <img 
                  src="https://cdn.poehali.dev/files/8d7679fb-fc98-431a-bce3-bf7ab0cd83df.png" 
                  alt="Safe Now Login Screen" 
                  className="rounded-2xl shadow-2xl w-full"
                />
                <img 
                  src="https://cdn.poehali.dev/files/1c336fe0-4f8b-4a5e-8d5e-7ed8533e9c42.png" 
                  alt="Safe Now Profile Menu" 
                  className="rounded-2xl shadow-2xl w-full"
                />
                <img 
                  src="https://cdn.poehali.dev/files/189cc194-4005-4efe-8c3a-e4d5468e8055.png" 
                  alt="Safe Now Navigation Map" 
                  className="rounded-2xl shadow-2xl w-full"
                />
                <img 
                  src="https://cdn.poehali.dev/files/318fecd1-ceb1-4424-bcd2-412765c744bc.png" 
                  alt="Safe Now Route Tracking" 
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center border-none shadow-lg animate-fade-in">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-emergency mb-2">400+ млрд ₽</div>
                <div className="text-gray-600">Рынок охранных услуг в России</div>
              </CardContent>
            </Card>
            <Card className="text-center border-none shadow-lg animate-fade-in">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-trust mb-2">5-10 мин</div>
                <div className="text-gray-600">Время прибытия группы реагирования</div>
              </CardContent>
            </Card>
            <Card className="text-center border-none shadow-lg animate-fade-in">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-safety mb-2">10,000</div>
                <div className="text-gray-600">Целевое количество семей в первый год</div>
              </CardContent>
            </Card>
            <Card className="text-center border-none shadow-lg animate-fade-in">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-emergency mb-2">60+ млн ₽</div>
                <div className="text-gray-600">Планируемая выручка в год</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section id="product" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-professional mb-4">Как работает Safe Now</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Революционная технология, которая делает персональную безопасность доступной каждой семье
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-xl transition-shadow animate-scale-in">
              <CardContent>
                <div className="w-16 h-16 bg-emergency rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Smartphone" className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl mb-4">1. Нажми SOS</CardTitle>
                <CardDescription className="text-base">
                  Клиент активирует тревожную кнопку в мобильном приложении Safe Now
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-xl transition-shadow animate-scale-in">
              <CardContent>
                <div className="w-16 h-16 bg-trust rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Radar" className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl mb-4">2. Автоопределение</CardTitle>
                <CardDescription className="text-base">
                  Система автоматически находит ближайший экипаж партнерского ЧОПа
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-xl transition-shadow animate-scale-in">
              <CardContent>
                <div className="w-16 h-16 bg-safety rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Car" className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl mb-4">3. Выезд группы</CardTitle>
                <CardDescription className="text-base">
                  Группа реагирования прибывает на место за 5-10 минут
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investor Presentation */}
      <section id="investors" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-professional mb-4">Презентация для инвесторов</h2>
            <p className="text-xl text-gray-600">Интерактивная презентация ключевых слайдов</p>
          </div>
          
          <Card className="shadow-2xl animate-scale-in">
            <CardContent className="p-8">
              <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-professional">{slides[currentSlide].title}</h3>
                  <Badge variant="outline">{currentSlide + 1} / {slides.length}</Badge>
                </div>
                <Progress value={(currentSlide + 1) / slides.length * 100} className="mb-6" />
              </div>
              
              <div className="min-h-[200px] flex items-center">
                <p className="text-lg text-gray-700 leading-relaxed animate-fade-in">
                  {slides[currentSlide].content}
                </p>
              </div>
              
              <div className="flex justify-between items-center mt-8">
                <Button 
                  variant="outline" 
                  onClick={prevSlide}
                  disabled={currentSlide === 0}
                  className="flex items-center"
                >
                  <Icon name="ChevronLeft" className="w-4 h-4 mr-2" />
                  Назад
                </Button>
                
                <div className="flex space-x-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentSlide ? 'bg-emergency' : 'bg-gray-300'
                      }`}
                      onClick={() => setCurrentSlide(index)}
                    />
                  ))}
                </div>
                
                <Button 
                  onClick={nextSlide}
                  disabled={currentSlide === slides.length - 1}
                  className="bg-emergency hover:bg-red-700 flex items-center"
                >
                  Вперед
                  <Icon name="ChevronRight" className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <div className="text-center mt-8">
            <Button className="bg-trust hover:bg-blue-700 text-white px-8 py-3 text-lg">
              <Icon name="Download" className="w-5 h-5 mr-2" />
              Скачать полную презентацию
            </Button>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-professional mb-4">Партнерам</h2>
            <p className="text-xl text-gray-600">Присоединяйтесь к революции в сфере безопасности</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-professional">Возможности для ЧОПов</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Icon name="CheckCircle" className="w-6 h-6 text-safety mt-0.5" />
                  <span className="text-gray-700">Увеличение загрузки экипажей на 40-60%</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Icon name="CheckCircle" className="w-6 h-6 text-safety mt-0.5" />
                  <span className="text-gray-700">Автоматическое распределение заказов</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Icon name="CheckCircle" className="w-6 h-6 text-safety mt-0.5" />
                  <span className="text-gray-700">Прозрачная система расчетов</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Icon name="CheckCircle" className="w-6 h-6 text-safety mt-0.5" />
                  <span className="text-gray-700">Новый поток клиентов</span>
                </li>
              </ul>
              <Button className="bg-trust hover:bg-blue-700 text-white px-8 py-3 text-lg">
                Стать партнером
              </Button>
            </div>
            
            <Card className="p-8 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Экономика партнерства</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Комиссия Safe Now:</span>
                  <span className="font-bold text-xl">15%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Доход партнера:</span>
                  <span className="font-bold text-xl text-safety">85%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Средний чек:</span>
                  <span className="font-bold text-xl">2,500 ₽</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Доход с 10 вызовов/день:</span>
                    <span className="font-bold text-2xl text-emergency">21,250 ₽</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-professional text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Свяжитесь с нами</h2>
          <p className="text-xl mb-12">Готовы обсудить инвестиции или партнерство?</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center space-y-3">
              <Icon name="Mail" className="w-8 h-8 text-emergency" />
              <span className="text-lg">hello@safenow.ru</span>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <Icon name="Phone" className="w-8 h-8 text-emergency" />
              <span className="text-lg">+7 (495) 123-45-67</span>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <Icon name="MapPin" className="w-8 h-8 text-emergency" />
              <span className="text-lg">Москва, Россия</span>
            </div>
          </div>
          
          <Button className="bg-emergency hover:bg-red-700 text-white px-12 py-4 text-xl">
            Записаться на встречу
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-emergency rounded-lg flex items-center justify-center">
                <Icon name="Shield" className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Safe Now</span>
            </div>
            <div className="text-center md:text-right">
              <p>&copy; 2024 Safe Now. Все права защищены.</p>
              <p className="text-sm">Персональная безопасность нового поколения</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;