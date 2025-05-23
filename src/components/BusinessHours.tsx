import React from 'react';
import { Clock, CheckCircle } from 'lucide-react';

interface DayScheduleProps {
  day: string;
  hours: string;
  isOpen: boolean;
  isToday: boolean;
}

const DaySchedule: React.FC<DayScheduleProps> = ({ day, hours, isOpen, isToday }) => {
  return (
    <div className={`flex justify-between items-center p-4 rounded-lg transition-all duration-300 ${
      isToday ? 'bg-primary-50 border-l-4 border-primary-500' : 'hover:bg-gray-50'
    }`}>
      <div className="flex items-center">
        {isToday && <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>}
        <span className={`font-medium ${isToday ? 'text-primary-700' : 'text-gray-700'}`}>{day}</span>
      </div>
      <div className="flex items-center">
        <span className={isOpen ? 'text-gray-700' : 'text-gray-500'}>{hours}</span>
        {isOpen ? (
          <CheckCircle className="ml-2 h-4 w-4 text-green-500" />
        ) : (
          <span className="ml-2 h-4 w-4 rounded-full bg-gray-300"></span>
        )}
      </div>
    </div>
  );
};

const BusinessHours: React.FC = () => {
  // Get current day of week (0 = Sunday, 1 = Monday, etc.)
  const today = new Date().getDay();
  
  const schedule = [
    { day: "Segunda", hours: "09:00 - 20:00", isOpen: true, isToday: today === 1 },
    { day: "Terça", hours: "09:00 - 20:00", isOpen: true, isToday: today === 2 },
    { day: "Quarta", hours: "09:00 - 20:00", isOpen: true, isToday: today === 3 },
    { day: "Quinta", hours: "09:00 - 20:00", isOpen: true, isToday: today === 4 },
    { day: "Sexta", hours: "09:00 - 21:00", isOpen: true, isToday: today === 5 },
    { day: "Sábado", hours: "09:00 - 18:00", isOpen: true, isToday: today === 6 },
    { day: "Domingo", hours: "Fechado", isOpen: false, isToday: today === 0 }
  ];

  return (
    <section id="hours" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">Horário de Funcionamento</h2>
            <p className="text-gray-600 mb-8">
              Estamos abertos durante toda a semana com horários amplos. 
              Para garantir seu atendimento, recomendamos agendar previamente.
            </p>
            
            <div className="bg-white rounded-xl shadow-custom p-6 space-y-3">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-primary-600" />
                </div>
                <h3 className="text-lg font-heading font-bold">Nossos horários</h3>
              </div>
              
              <div className="space-y-2">
                {schedule.map((item, index) => (
                  <DaySchedule 
                    key={index}
                    day={item.day}
                    hours={item.hours}
                    isOpen={item.isOpen}
                    isToday={item.isToday}
                  />
                ))}
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Interior da barbearia"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-lg shadow-lg max-w-xs">
              <p className="text-lg font-heading font-bold mb-2">Busca atendimento VIP?</p>
              <p className="text-gray-600 text-sm mb-4">Reserve nosso espaço para eventos exclusivos e tenha uma experiência premium.</p>
              <a href="#contact" className="btn-primary text-sm">Solicitar informações</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessHours;