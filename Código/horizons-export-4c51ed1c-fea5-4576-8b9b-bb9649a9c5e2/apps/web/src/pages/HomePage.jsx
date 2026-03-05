
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Brain, Heart, AlertCircle, Stethoscope, BookOpen, Users, Calendar, CreditCard, Clock, CheckCircle, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import SpecialtyCard from '@/components/SpecialtyCard.jsx';
import StepCard from '@/components/StepCard.jsx';
import PricingCard from '@/components/PricingCard.jsx';
import SchedulingButton from '@/components/SchedulingButton.jsx';
import SchedulingModal from '@/components/SchedulingModal.jsx';

const HomePage = () => {
  const [isSchedulingModalOpen, setIsSchedulingModalOpen] = useState(false);

  const specialties = [
    {
      icon: Brain,
      title: 'Depressão',
      description: 'Tratamento especializado para quadros depressivos, ajudando você a recuperar o prazer pela vida e o equilíbrio emocional.'
    },
    {
      icon: Heart,
      title: 'Ansiedade',
      description: 'Técnicas eficazes para controlar a ansiedade, reduzir preocupações excessivas e recuperar a tranquilidade no dia a dia.'
    },
    {
      icon: AlertCircle,
      title: 'Crises Psicológicas',
      description: 'Suporte imediato e acolhimento em momentos de crise, oferecendo estratégias para superação e estabilização emocional.'
    },
    {
      icon: Stethoscope,
      title: 'Acompanhamento de Diagnósticos Psiquiátricos',
      description: 'Apoio psicológico complementar ao tratamento psiquiátrico, promovendo integração e melhores resultados terapêuticos.'
    },
    {
      icon: BookOpen,
      title: 'Baixo Desempenho Escolar',
      description: 'Identificação e tratamento de questões emocionais que impactam o aprendizado e o rendimento acadêmico.'
    },
    {
      icon: Users,
      title: 'Atendimento a Crianças Atípicas',
      description: 'Acompanhamento especializado para crianças com desenvolvimento atípico, respeitando suas particularidades e potencialidades.'
    }
  ];

  const steps = [
    {
      stepNumber: 1,
      icon: Calendar,
      title: 'Triagem Inicial',
      description: 'Primeira sessão para conhecer suas necessidades, histórico e definir os objetivos do tratamento de forma personalizada.'
    },
    {
      stepNumber: 2,
      icon: CreditCard,
      title: 'Agendamento e Pagamento',
      description: 'Escolha o melhor horário para suas sessões e realize o pagamento de forma flexível: PIX, dinheiro ou cartão via link.'
    },
    {
      stepNumber: 3,
      icon: Clock,
      title: 'Sessões Semanais de 50 min',
      description: 'Encontros regulares focados em objetividade, escuta ativa e empática, com foco na resolução dos seus desafios.'
    }
  ];

  const pricingOptions = [
    {
      title: 'Sessão Avulsa',
      price: 'R$ 200',
      description: 'Pagamento por sessão',
      features: [
        'Sessão de 50 minutos',
        'Atendimento presencial',
        'Pagamento: PIX, Dinheiro ou Cartão',
        'Agendamento flexível'
      ],
      isPopular: false
    },
    {
      title: 'Pacote Mensal',
      price: 'R$ 720',
      description: '4 sessões com desconto',
      features: [
        '4 sessões de 50 minutos',
        'Economia de R$ 80',
        'Atendimento presencial',
        'Pagamento: PIX, Dinheiro ou Cartão',
        'Agendamento prioritário'
      ],
      isPopular: true
    }
  ];

  return (
    <>
      <Helmet>
        <title>Dra. Paula Pires - Psicologia e Psicanálise em Barueri</title>
        <meta name="description" content="Psicóloga especializada em depressão, ansiedade, crises psicológicas e atendimento a crianças atípicas. Atendimento presencial em Barueri - SP. CRP 06/192851." />
      </Helmet>

      <Header />
      <SchedulingButton onClick={() => setIsSchedulingModalOpen(true)} />
      <SchedulingModal isOpen={isSchedulingModalOpen} onClose={() => setIsSchedulingModalOpen(false)} />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1656016977161-1ebf7607f295"
            alt="Ambiente acolhedor de consultório psicológico"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-secondary/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Encontre Alívio Emocional e Autoconhecimento
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Um espaço seguro, sigiloso e sem julgamentos para cuidar da sua saúde mental.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button
                size="lg"
                onClick={() => setIsSchedulingModalOpen(true)}
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300"
              >
                Agendar Minha Triagem
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* Especialidades Section */}
      <section id="especialidades" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Especialidades
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Atendimento especializado para diversas demandas emocionais e psicológicas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <SpecialtyCard {...specialty} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1575383596664-30f4489f9786"
                alt="Dra. Paula Pires - Psicóloga e Psicanalista"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Sobre Dra. Paula Pires
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <p className="text-lg text-muted-foreground">
                    <span className="font-semibold text-foreground">CRP 06/192851</span>
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <p className="text-lg text-muted-foreground">
                    <span className="font-semibold text-foreground">Formação:</span> Psicologia e Psicanálise
                  </p>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Com anos de experiência em atendimento clínico, ofereço um espaço acolhedor e profissional para você cuidar da sua saúde mental. Meu trabalho é pautado pela ética, sigilo e respeito às suas necessidades individuais.
              </p>

              <div className="space-y-4 pt-4">
                <h3 className="text-2xl font-bold text-foreground">Diferenciais do Atendimento</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Objetividade</p>
                      <p className="text-muted-foreground">Foco em resultados práticos e soluções efetivas</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Escuta Ativa e Empática</p>
                      <p className="text-muted-foreground">Acolhimento genuíno e compreensão profunda</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Foco na Resolução</p>
                      <p className="text-muted-foreground">Estratégias direcionadas para superar desafios</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section id="como-funciona" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Como Funciona
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Processo simples e transparente para iniciar seu acompanhamento
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-12">
            {steps.map((step) => (
              <StepCard key={step.stepNumber} {...step} />
            ))}
          </div>
        </div>
      </section>

      {/* Investimento Section */}
      <section id="investimento" className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Investimento
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Valores transparentes e opções flexíveis de pagamento
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {pricingOptions.map((option, index) => (
              <PricingCard
                key={index}
                {...option}
                onSelect={() => setIsSchedulingModalOpen(true)}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-3xl mx-auto bg-background rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Formas de Pagamento
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center space-y-2">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <CreditCard className="w-8 h-8 text-primary" />
                </div>
                <p className="font-semibold text-foreground">PIX</p>
                <p className="text-sm text-muted-foreground">Pagamento instantâneo</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <CreditCard className="w-8 h-8 text-primary" />
                </div>
                <p className="font-semibold text-foreground">Dinheiro</p>
                <p className="text-sm text-muted-foreground">Pagamento em espécie</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <CreditCard className="w-8 h-8 text-primary" />
                </div>
                <p className="font-semibold text-foreground">Cartão</p>
                <p className="text-sm text-muted-foreground">Via link de pagamento</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Políticas Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
              Políticas de Atendimento
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">Atrasos</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      O tempo de atraso será descontado do horário da sessão. As sessões têm duração fixa de 50 minutos, iniciando no horário agendado.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <XCircle className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">Faltas</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Sessões não comparecidas (no-show) não serão reembolsadas. Solicitamos avisar com antecedência mínima de 24 horas para reagendamento.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-primary/5 rounded-2xl p-8 border border-primary/20">
              <p className="text-center text-foreground leading-relaxed">
                <span className="font-semibold">Agendamento Autônomo:</span> Você tem total autonomia para agendar suas sessões nos horários disponíveis, garantindo flexibilidade e praticidade no seu tratamento.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HomePage;
