import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b-4 border-orange-300">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              🍊
            </div>
            <div>
              <h1 className="text-2xl font-bold text-orange-600">Апельсин</h1>
              <p className="text-sm text-orange-500">Онлайн школа</p>
            </div>
          </div>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full">
            Записаться на урок
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Живые уроки в малых группах
              <br />
              <span className="text-orange-500">2-4 человека</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Онлайн школа для начальных классов, где каждый ребенок получает
              индивидуальное внимание учителя
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Badge className="bg-green-100 text-green-700 px-4 py-2 text-base">
                <Icon name="Users" size={16} className="mr-2" />
                Малые группы
              </Badge>
              <Badge className="bg-blue-100 text-blue-700 px-4 py-2 text-base">
                <Icon name="Video" size={16} className="mr-2" />
                Живые уроки
              </Badge>
              <Badge className="bg-purple-100 text-purple-700 px-4 py-2 text-base">
                <Icon name="Heart" size={16} className="mr-2" />С любовью к
                детям
              </Badge>
            </div>
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg"
            >
              Попробовать бесплатно
            </Button>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <img
                src="/img/d1af31ea-1aa8-4df3-82f4-7232d725d1d3.jpg"
                alt="Дети изучают онлайн"
                className="rounded-3xl shadow-2xl max-w-full h-auto"
              />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white text-3xl animate-bounce">
                🍊
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <img
            src="/img/1ef3dca7-76cf-423b-b462-5216067e1464.jpg"
            alt="Маскот школы Апельсин"
            className="w-32 h-32 mx-auto mb-6 rounded-full shadow-lg"
          />
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Онлайн школа для начальных классов, где каждый ребенок получает
            индивидуальное внимание учителя
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <Badge className="bg-green-100 text-green-700 px-4 py-2 text-base">
              <Icon name="Users" size={16} className="mr-2" />
              Малые группы
            </Badge>
            <Badge className="bg-blue-100 text-blue-700 px-4 py-2 text-base">
              <Icon name="Video" size={16} className="mr-2" />
              Живые уроки
            </Badge>
            <Badge className="bg-purple-100 text-purple-700 px-4 py-2 text-base">
              <Icon name="Heart" size={16} className="mr-2" />С любовью к детям
            </Badge>
          </div>
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg"
          >
            Попробовать бесплатно
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Почему дети любят учиться с нами?
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-white shadow-lg border-t-4 border-orange-400 hover:shadow-xl transition-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Icon name="Users" size={32} className="text-orange-600" />
              </div>
              <CardTitle className="text-xl text-gray-800">
                Малые группы
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600">
                Всего 2-4 ученика в классе. Учитель успевает уделить внимание
                каждому ребенку
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg border-t-4 border-green-400 hover:shadow-xl transition-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Icon name="Video" size={32} className="text-green-600" />
              </div>
              <CardTitle className="text-xl text-gray-800">
                Живые уроки
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600">
                Настоящий учитель в реальном времени. Можно задавать вопросы и
                получать ответы сразу
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg border-t-4 border-blue-400 hover:shadow-xl transition-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Icon name="BookOpen" size={32} className="text-blue-600" />
              </div>
              <CardTitle className="text-xl text-gray-800">
                Интересные уроки
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600">
                Игровые методики и интерактивные задания. Учеба превращается в
                приключение!
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Subjects */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Изучаем основные предметы
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-gradient-to-br from-red-100 to-red-200 border-0 hover:scale-105 transition-transform">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-4">📚</div>
              <h4 className="font-bold text-lg text-red-700 mb-2">
                Русский язык
              </h4>
              <p className="text-red-600 text-sm">Грамотная речь и письмо</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-100 to-blue-200 border-0 hover:scale-105 transition-transform">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-4">🔢</div>
              <h4 className="font-bold text-lg text-blue-700 mb-2">
                Математика
              </h4>
              <p className="text-blue-600 text-sm">Логика и счёт</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-100 to-green-200 border-0 hover:scale-105 transition-transform">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h4 className="font-bold text-lg text-green-700 mb-2">
                Окружающий мир
              </h4>
              <p className="text-green-600 text-sm">Познание природы</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-100 to-purple-200 border-0 hover:scale-105 transition-transform">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-4">🎨</div>
              <h4 className="font-bold text-lg text-purple-700 mb-2">
                Творчество
              </h4>
              <p className="text-purple-600 text-sm">Рисование и поделки</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-6">
            Попробуйте бесплатный урок!
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Познакомьтесь с нашими учителями и методиками. Первый урок - в
            подарок!
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              size="lg"
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg"
            >
              Записаться на урок
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-full text-lg"
            >
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white text-lg">
              🍊
            </div>
            <span className="text-xl font-bold">Апельсин</span>
          </div>
          <p className="text-gray-400 mb-4">
            Онлайн школа для начальных классов с живыми уроками в малых группах
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Телефон: +7 (999) 123-45-67
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Email: info@apelsin-school.ru
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
