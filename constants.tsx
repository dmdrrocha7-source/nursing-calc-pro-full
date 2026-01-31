
import React from 'react';
import { Category, ScaleItem, ClinicalPearls } from './types.ts';

export const SCALES_LIST: ScaleItem[] = [
  { id: 'gcs-p', name: 'Glasgow-P', category: Category.NEURO, description: 'Escala de Coma de Glasgow com Reatividade Pupilar (GCS-P).', icon: 'fa-brain' },
  { id: 'cincinnati', name: 'Cincinnati', category: Category.NEURO, description: 'Escala Pré-hospitalar de AVC (F.A.S.T).', icon: 'fa-user-doctor' },
  { id: 'nihss', name: 'NIHSS Completa', category: Category.NEURO, description: 'National Institutes of Health Stroke Scale.', icon: 'fa-list-check' },
  { id: 'braden', name: 'Braden', category: Category.NURSING_CARE, description: 'Risco de Lesão por Pressão (LPP).', icon: 'fa-bed' },
  { id: 'morse', name: 'Morse', category: Category.NURSING_CARE, description: 'Escala de Risco de Quedas em Adultos.', icon: 'fa-person-falling' },
  { id: 'fugulin', name: 'Fugulin', category: Category.NURSING_CARE, description: 'Dimensionamento e Classificação de Pacientes.', icon: 'fa-users-gear' },
  { id: 'humpty-dumpty', name: 'Humpty Dumpty', category: Category.PEDIATRIC, description: 'Risco de Quedas Pediátrico.', icon: 'fa-child-reaching' },
  { id: 'apgar', name: 'APGAR', category: Category.PEDIATRIC, description: 'Avaliação da Vitalidade do Recém-Nascido.', icon: 'fa-baby' },
  { id: 'burn-wallace', name: 'Regra de Wallace', category: Category.BURN, description: 'Cálculo de SCQ (Adulto e Pediátrico).', icon: 'fa-fire' },
  { id: 'parkland', name: 'Parkland', category: Category.BURN, description: 'Reposição Volêmica e Alertas Críticos.', icon: 'fa-droplet' },
  { id: 'rass', name: 'RASS', category: Category.NEURO, description: 'Richmond Agitation-Sedation Scale.', icon: 'fa-bed-pulse' },
  { id: 'rsi', name: 'SRI (Drogas)', category: Category.MEDICATION, description: 'Sequência Rápida de Intubação e Doses.', icon: 'fa-lungs' },
  { id: 'acls', name: 'ACLS & PALS', category: Category.MEDICATION, description: 'Calculadora de Drogas de Parada (Adulto/Pediátrico).', icon: 'fa-heart-pulse' },
];

export const ANTIDOTES = [
  { 
    toxin: 'Acetaminofeno (Paracetamol)', 
    antidote: 'N-Acetilcisteína (NAC)', 
    dose: 'Dose de ataque: 150 mg/kg em 200 ml de SG 5% em 60 min. Manutenção: 50 mg/kg em 500 ml de SG 5% em 4h, seguido de 100 mg/kg em 1000 ml de SG 5% em 16h.',
    obs: 'Eficácia máxima se iniciado em até 8h da ingestão. Utilizar Nomograma de Rumack-Matthew.' 
  },
  { 
    toxin: 'Benzodiazepínicos', 
    antidote: 'Flumazenil', 
    dose: '0,2 mg IV em 15 seg. Se necessário, 0,3 mg após 60 seg. Repetir 0,5 mg a cada 60 seg até dose máxima de 3 mg.',
    obs: 'Risco de convulsão em dependentes crônicos ou co-ingestão de tricíclicos.' 
  },
  { 
    toxin: 'Opioides (Heroína, Morfina, Fentanil)', 
    antidote: 'Naloxona', 
    dose: '0,4 a 2 mg IV, IM ou SC. Pode ser repetido a cada 2-3 min. Se necessário, infusão contínua (2/3 da dose de resposta por hora).',
    obs: 'Cuidado com síndrome de abstinência aguda e edema pulmonar não cardiogênico.' 
  },
  { 
    toxin: 'Betabloqueadores', 
    antidote: 'Glucagon / Insulina + Glicose', 
    dose: 'Glucagon: Ataque 3-10 mg IV (lento). Infusão: 3-5 mg/h. Terapia HIET: 1 UI/kg de Insulina regular + Glicose para euglicemia.',
    obs: 'Glucagon estimula adenilato ciclase independentemente dos receptores beta.' 
  },
  { 
    toxin: 'Bloqueadores de Canais de Cálcio', 
    antidote: 'Cálcio / Insulina (HIET)', 
    dose: 'Gluconato de Cálcio 10%: 30-60 ml IV. Cloreto de Cálcio 10%: 10-20 ml IV. Insulina: 1 UI/kg/h após ataque de 1 UI/kg.',
    obs: 'Monitorar glicemia a cada 30-60 min e potássio sérico.' 
  },
  { 
    toxin: 'Digoxina', 
    antidote: 'Fragmentos de Anticorpos (Fab) - Digibind', 
    dose: 'Dose (frascos) = [Nível sérico (ng/ml) x Peso (kg)] / 100. Em PCR, 10-20 frascos empiricamente.',
    obs: 'Indicado em K+ > 5.0 mEq/L, arritmias graves ou instabilidade hemodinâmica.' 
  },
  { 
    toxin: 'Organofosforados / Carbamatos', 
    antidote: 'Atropina / Pralidoxima', 
    dose: 'Atropina: 1 a 3 mg IV a cada 5-10 min até "atropinização" (secreções secas). Pralidoxima: 30 mg/kg ataque seguido de 8 mg/kg/h.',
    obs: 'Atenção à síndrome colinérgica: Miose, bradicardia, salivação excessiva.' 
  },
  { 
    toxin: 'Metanol / Etilenoglicol', 
    antidote: 'Fomepizol / Etanol', 
    dose: 'Fomepizol: 15 mg/kg ataque. Etanol: Manter nível sérico de 100-150 mg/dl.',
    obs: 'Bloqueiam a álcool desidrogenase, impedindo formação de metabólitos tóxicos.' 
  },
  { 
    toxin: 'Warfarina', 
    antidote: 'Vitamina K / Complexo Protrombínico (CCP)', 
    dose: 'Vitamina K: 10 mg IV (lento). CCP: 25-50 UI/kg dependendo do RNI inicial.',
    obs: 'CCP é preferível ao Plasma Fresco Congelado (PFC) por volume menor e reversão mais rápida.' 
  },
  { 
    toxin: 'Heparina não fracionada', 
    antidote: 'Protamina', 
    dose: '1 mg de protamina para cada 100 unidades de heparina administradas nas últimas 2-3h. Dose máxima 50 mg.',
    obs: 'Administração lenta para evitar hipotensão grave e anafilaxia.' 
  },
  { 
    toxin: 'Antidepressivos Tricíclicos', 
    antidote: 'Bicarbonato de Sódio', 
    dose: '1-2 mEq/kg IV em bolus. Manter pH sérico entre 7,45 e 7,55.',
    obs: 'Indicado se QRS > 100ms ou arritmias ventriculares.' 
  },
  { 
    toxin: 'Ferro', 
    antidote: 'Deferoxamina', 
    dose: 'Infusão contínua de 15 mg/kg/h IV. Máximo 6 g/dia.',
    obs: 'Pode causar "urina cor de vinho" (vin rosé).' 
  },
  { 
    toxin: 'Isoniazida', 
    antidote: 'Piridoxina (Vitamina B6)', 
    dose: 'Gramo por gramo da toxina ingerida (máximo 5g). Se dose desconhecida, 5g IV.',
    obs: 'Essencial para cessar convulsões refratárias ao diazepam.' 
  }
];

export const GCS_DATA = [
  { title: "Abertura Ocular", options: [{label:"Espontânea",value:4},{label:"Ao som",value:3},{label:"À pressão",value:2},{label:"Ausente",value:1}] },
  { title: "Resposta Verbal", options: [{label:"Orientada",value:5},{label:"Confusa",value:4},{label:"Palavras inaprop.",value:3},{label:"Sons incompreen.",value:2},{label:"Ausente",value:1}] },
  { title: "Resposta Motora", options: [{label:"Obedece comandos",value:6},{label:"Localiza dor",value:5},{label:"Flexão normal",value:4},{label:"Flexão anormal",value:3},{label:"Extensão",value:2},{label:"Ausente",value:1}] },
  { title: "Reatividade Pupilar", options: [{label:"Ambas reagem",value:0},{label:"Apenas uma reage",value:1},{label:"Nenhuma reage",value:2}] }
];

export const CLINICAL_PEARLS: Record<string, ClinicalPearls> = {
  'rass': {
    dynamic: [
      {
        min: 3, max: 4,
        pearls: ["Agitação Extrema / Combatividade. Risco imediato de autoextubação e retirada de dispositivos.", "Priorizar segurança da equipe e do paciente."],
        pitfalls: ["Subestimar força física do paciente sob efeito de delírio.", "Atrasar sedação farmacológica em pacientes com risco de queda do leito."],
        nursingCare: ["Notificar equipe médica para ajuste imediato de sedação.", "Verificar integridade de acessos e drenos.", "Considerar contenção mecânica conforme protocolo institucional.", "Reduzir estímulos sensoriais no box."]
      },
      {
        min: 1, max: 2,
        pearls: ["Agitação Leve / Moderada. Paciente inquieto, mas não combativo.", "Frequentemente associado a dor não tratada ou delirium."],
        pitfalls: ["Ignorar a causa base da agitação (bexigoma, dor, hipóxia).", "Administrar sedativos sem avaliar escala de dor (BPS/CPOT)."],
        nursingCare: ["Avaliar sinais de dor (frequência cardíaca, expressão facial).", "Reorientar paciente quanto ao tempo e espaço.", "Verificar posicionamento do tubo e conforto no leito.", "Checar alarmes do ventilador e saturação."]
      },
      {
        min: 0, max: 0,
        pearls: ["Paciente Alerta e Calmo. Meta ideal para a maioria dos pacientes em UTI fora da fase aguda.", "Facilita o desmame ventilatório."],
        pitfalls: ["Não realizar despertar diário em pacientes que atingem a meta por longa data."],
        nursingCare: ["Manter comunicação verbal constante.", "Estimular mobilização precoce no leito.", "Monitorar sinais de delirium (CAM-ICU)."]
      },
      {
        min: -3, max: -1,
        pearls: ["Sedação Leve a Moderada. Responde ao chamado verbal.", "Indicado em processos de desmame e ventilação estável."],
        pitfalls: ["Acumulação de drogas (especialmente benzodiazepínicos) em pacientes idosos."],
        nursingCare: ["Avaliar despertar após estímulo verbal.", "Monitorar profundidade respiratória e drive ventilatório.", "Troca de decúbito assistida."]
      },
      {
        min: -5, max: -4,
        pearls: ["Sedação Profunda. Ausência de resposta ao chamado, responde apenas a estímulo físico ou é inexcitável.", "Necessário em SARA grave ou hipertensão intracraniana."],
        pitfalls: ["Permanecer em sedação profunda sem indicação clínica clara (paralisia diafragmática).", "Esquecer cuidados com integridade ocular."],
        nursingCare: ["Realizar higiene ocular e lubrificação 6/6h.", "Monitorar BIS (se disponível) para evitar sobredose.", "Protocolo de prevenção de pneumonia associada à ventilação (PAV).", "Avaliar diariamente a necessidade de manter este nível (Despertar Diário)."]
      }
    ]
  },
  'gcs-p': {
    dynamic: [
      {
        min: 1, max: 8,
        pearls: ["Gravidade Extrema (TCE Grave). PHTLS preconiza manejo agressivo de VA.", "Pupilas não reativas indicam possível herniação uncal."],
        pitfalls: ["Não atrasar IOT por Glasgow se houver sinais de obstrução.", "Confundir midríase por atropina com herniação."],
        nursingCare: ["Preparar material para IOT imediata.", "Manter cabeceira 30º para controle de PIC.", "Aspiração traqueal apenas se necessário (evitar picos de PIC).", "Monitorar CO2 exalado (EtCO2 entre 35-40 mmHg)."]
      },
      {
        min: 9, max: 12,
        pearls: ["Gravidade Moderada. Risco de deterioração neurológica súbita.", "Avaliação frequente (15/15 min se instável)."],
        pitfalls: ["Negligenciar o componente motor (é o mais fidedigno)."],
        nursingCare: ["Vigilância neurológica rigorosa.", "Garantir acesso venoso calibroso.", "Monitorar balanço hídrico rigoroso."]
      },
      {
        min: 13, max: 15,
        pearls: ["TCE Leve. Monitorar sinais de alerta (vômitos, cefaleia intensa)."],
        pitfalls: ["Alta precoce sem orientações de sinais de alerta por escrito."],
        nursingCare: ["Observação clínica e sinais vitais.", "Instruir família sobre sinais de alerta por escrito."]
      }
    ]
  },
  'morse': {
    dynamic: [
      {
        min: 45, max: 150,
        pearls: ["ALTO RISCO DE QUEDA. Requer intervenções multifatoriais imediatas.", "Literatura atual sugere 'No Pass Zone' para esses pacientes."],
        pitfalls: ["Acreditar que grades elevadas sozinhas evitam quedas (podem piorar lesão se o paciente pular)."],
        nursingCare: ["Pulseira de identificação vermelha (Protocolo de Quedas).", "Supervisão direta em transferências e higiene.", "Grades elevadas e cama na posição mais baixa.", "Sinalização de 'Alto Risco' na beira do leito.", "Manter pertences e campainha ao alcance fácil."]
      },
      {
        min: 25, max: 44,
        pearls: ["Risco Moderado. Implementar medidas preventivas padrão."],
        pitfalls: ["Subestimar risco em pacientes com Terapia EV (limita mobilidade)."],
        nursingCare: ["Orientar paciente e família sobre riscos.", "Manter iluminação adequada à noite.", "Calçados antiderrapantes obrigatórios."]
      },
      {
        min: 0, max: 24,
        pearls: ["Risco Baixo. Manter vigilância de rotina."],
        pitfalls: ["Ignorar mudanças de estado mental que elevam o escore subitamente."],
        nursingCare: ["Manter ambiente organizado.", "Reavaliar escore a cada 24h or mudança de quadro."]
      }
    ]
  },
  'braden': {
    dynamic: [
      {
        min: 6, max: 9,
        pearls: ["RISCO MUITO ALTO. Mobilização passiva e superfícies de alta tecnologia são mandatórias.", "Monitoramento nutricional agressivo."],
        pitfalls: ["Acreditar que apenas o colchão piramidal resolve."],
        nursingCare: ["Mudança de decúbito 2/2h rigorosa.", "Proteção de calcâneos com coxins.", "Inspecionar a pele a cada turno.", "Uso de colchão pneumático."]
      },
      {
        min: 10, max: 12,
        pearls: ["ALTO RISCO. Frequência elevada de lesão tecidual.", "Intervenções intensivas preventivas."],
        pitfalls: ["Atrasar a aplicação de barreira cutânea em áreas úmidas."],
        nursingCare: ["Mudança de decúbito frequente.", "Hidratação rigorosa da pele íntegra.", "Manter lençóis sem dobras.", "Avaliar suporte nutricional proteico."]
      },
      {
        min: 13, max: 14,
        pearls: ["RISCO MODERADO. Implementar protocolo de prevenção padrão."],
        pitfalls: ["Esquecer de inspecionar a pele sob dispositivos (SNE, Cateteres)."],
        nursingCare: ["Mudança de decúbito assistida.", "Uso de superfícies de redistribuição de pressão.", "Monitorar umidade por incontinência."]
      },
      {
        min: 15, max: 18,
        pearls: ["RISCO LEVE. Paciente com mobilidade mantida, mas requer vigilância."],
        pitfalls: ["Subestimar o risco por umidade em pacientes febris."],
        nursingCare: ["Troca de decúbito se necessário.", "Estimular deambulação.", "Inspecionar proeminências ósseas diariamente."]
      },
      {
        min: 19, max: 23,
        pearls: ["SEM RISCO. Manter cuidados gerais de higiene e conforto."],
        pitfalls: ["Não reavaliar se o paciente sofrer intervenção cirúrgica ou sedação."],
        nursingCare: ["Inspecionar a pele na admissão.", "Manter hidratação adequada.", "Mobilização livre."]
      }
    ]
  },
  'apgar': {
    dynamic: [
      {
        min: 0, max: 3,
        pearls: ["DEPRESSÃO GRAVE. Necessidade imediata de reanimação neonatal avançada.", "Escore no 1º e 5º minuto são cruciais."],
        pitfalls: ["Atrasar o início da VPP (Ventilação com Pressão Positiva) para esperar o escore de APGAR."],
        nursingCare: ["Iniciar protocolo de reanimação neonatal (Passos Iniciais, VPP).", "Manter o RN sob fonte de calor radiante.", "Monitorar saturação pré-ductal (mão direita).", "Preparar material para IOT e cateterismo umbilical se necessário."]
      },
      {
        min: 4, max: 6,
        pearls: ["DEPRESSÃO MODERADA. RN requer assistência respiratória e estimulação.", "Avaliação contínua da vitalidade."],
        pitfalls: ["Subestimar RN que apresenta melhora rápida mas pode fadigar."],
        nursingCare: ["Manter RN aquecido e seco.", "Ofertar O2 inalatório ou CPAP conforme saturação alvo.", "Estimular taticamente a planta dos pés ou dorso.", "Monitorar frequência cardíaca e esforço respiratório rigorosamente."]
      },
      {
        min: 7, max: 10,
        pearls: ["BOA VITALIDADE. RN adaptado à vida extrauterina.", "Incentivar contato pele a pele precoce."],
        pitfalls: ["Realizar procedimentos invasivos desnecessários nos primeiros minutos."],
        nursingCare: ["Promover o 'Golden Hour' (Hora de Ouro).", "Secar o RN e mantê-lo aquecido.", "Clampeamento oportuno do cordão umbilical (1-3 min).", "Estimular amamentação na primeira hora de vida."]
      }
    ]
  },
  'humpty-dumpty': {
    dynamic: [
      {
        min: 12, max: 23,
        pearls: ["ALTO RISCO DE QUEDA PEDIÁTRICA. Protocolos preventivos devem envolver os cuidadores.", "Crianças pequenas não têm percepção de perigo."],
        pitfalls: ["Acreditar que a presença da mãe/pai anula o risco de queda do leito."],
        nursingCare: ["Identificação visual de risco (pulseira/placa).", "Grades do berço/cama elevadas permanentemente.", "Orientar acompanhante a nunca deixar a criança sozinha no leito.", "Educação em saúde sobre o ambiente hospitalar."]
      },
      {
        min: 7, max: 11,
        pearls: ["BAIXO RISCO. Manter vigilância padrão e orientações de segurança."],
        pitfalls: ["Não reavaliar após uso de medicações sedativas ou antiepilépticas."],
        nursingCare: ["Manter o ambiente livre de obstáculos.", "Iluminação noturna adequada.", "Reavaliar escore diariamente."]
      }
    ]
  },
  'parkland': {
    dynamic: [
      {
        min: 0, max: 50000,
        pearls: ["Reposição Volêmica: 50% nas primeiras 8h do trauma.", "Ringer Lactato é a solução de escolha.", "Em Pediatria: Somar fluido de manutenção (Regra 4-2-1)."],
        pitfalls: ["Under-resuscitation (hipovolemia) ou Over-resuscitation (edema/síndrome compartimental)."],
        nursingCare: ["Monitorar Débito Urinário (Adulto: 0.5ml/kg/h | Peds: 1ml/kg/h).", "Avaliar perfusão periférica e pulsos.", "Controle rigoroso de temperatura (evitar hipotermia)."]
      }
    ]
  },
  'burn-wallace': {
    dynamic: [
      {
        min: 20, max: 100,
        pearls: ["Queimadura Grave (>20% SCQ). Risco iminente de choque hipovolêmico.", "Necessário monitorização hemodinâmica invasiva."],
        pitfalls: ["Subestimar a área em pacientes obesos ou com queimaduras circunferenciais."],
        nursingCare: ["Garantir 2 acessos venosos calibrosos periféricos.", "Sondagem vesical de demora para monitorar débito.", "Manter aquecimento externo e soluções aquecidas."]
      },
      {
        min: 0, max: 19,
        pearls: ["Queimadura Leve/Moderada. Focar no controle da dor e limpeza.", "Se >10% em peds, considerar transferência para centro de referência."],
        pitfalls: ["Negligenciar o componente inalatório (vias aéreas) em incêndios em locais fechados."],
        nursingCare: ["Curativo estéril e não aderente.", "Controle rigoroso de dor (Escala Visual Analógica).", "Avaliar vacinação antitetânica."]
      }
    ]
  }
};

export const NIHSS_DATA = [
  { title: "1a. Nível de Consciência", options: [{label:"Alerta",value:0},{label:"Sonolento",value:1},{label:"Estuporoso",value:2},{label:"Comatoso",value:3}] },
  { title: "1b. Perguntas (Mês/Idade)", options: [{label:"Ambas corretas",value:0},{label:"Uma correta",value:1},{label:"Nenhuma correta",value:2}] },
  { title: "1c. Comandos (Olhos e Mão)", options: [{label:"Ambos corretos",value:0},{label:"Um correto",value:1},{label:"Nenhum correto",value:2}] },
  { title: "2. Olhar Conjugado", options: [{label:"Normal",value:0},{label:"Paralisia parcial",value:1},{label:"Desvio forçado",value:2}] },
  { title: "3. Campos Visuais", options: [{label:"Sem perda",value:0},{label:"Quadrantanopsia",value:1},{label:"Hemianopsia completa",value:2},{label:"Cegueira bilateral",value:3}] },
  { title: "4. Paralisia Facial", options: [{label:"Normal",value:0},{label:"Paresia leve",value:1},{label:"Paralisia parcial",value:2},{label:"Paralisia completa",value:3}] },
  { title: "5. Motor Braço (D/E)", options: [{label:"Sem queda",value:0},{label:"Queda s/ tocar leito",value:1},{label:"Toca o leito",value:2},{label:"Nenhum movimento",value:3}] },
  { title: "6. Motor Perna (D/E)", options: [{label:"Sem queda",value:0},{label:"Queda s/ tocar leito",value:1},{label:"Toca o leito",value:2},{label:"Nenhum movimento",value:3}] },
  { title: "7. Ataxia de Membros", options: [{label:"Ausente",value:0},{label:"Presente em 1 membro",value:1},{label:"Presente em 2 membros",value:2}] },
  { title: "8. Sensibilidade", options: [{label:"Normal",value:0},{label:"Perda leve",value:1},{label:"Perda total",value:2}] },
  { title: "9. Melhor Linguagem", options: [{label:"Normal",value:0},{label:"Afasia leve/mod",value:1},{label:"Afasia grave",value:2},{label:"Global/Mudo",value:3}] },
  { title: "10. Disartria", options: [{label:"Normal",value:0},{label:"Leve/mod",value:1},{label:"Grave",value:2}] },
  { title: "11. Extinção/Inatenção", options: [{label:"Normal",value:0},{label:"Inatenção parcial",value:1},{label:"Inatenção completa",value:2}] }
];

export const CINCINNATI_DATA = [
  { title: "Queda Facial (Peça para sorrir)", options: [{label:"Normal",value:0},{label:"Queda de um lado",value:1}] },
  { title: "Queda do Braço (Peça para estender)", options: [{label:"Normal",value:0},{label:"Um braço cai",value:1}] },
  { title: "Fala Anormal (Peça para repetir frase)", options: [{label:"Normal",value:0},{label:"Fala arrastada/inapropriada",value:1}] }
];

export const BRADEN_DATA = [
  { title: "Percepção Sensorial", options: [{label:"Totalmente limitado",value:1},{label:"Muito limitado",value:2},{label:"Levemente limitado",value:3},{label:"Nenhuma limitação",value:4}] },
  { title: "Umidade", options: [{label:"Constantemente úmida",value:1},{label:"Muito úmida",value:2},{label:"Ocasionalmente úmida",value:3},{label:"Raramente úmida",value:4}] },
  { title: "Atividade", options: [{label:"Acamado",value:1},{label:"Confinado à cadeira",value:2},{label:"Deambula ocasionalmente",value:3},{label:"Deambula frequentemente",value:4}] },
  { title: "Mobilidade", options: [{label:"Totalmente imóvel",value:1},{label:"Muito limitado",value:2},{label:"Levemente limitado",value:3},{label:"Nenhuma limitação",value:4}] },
  { title: "Nutrição", options: [{label:"Muito pobre",value:1},{label:"Provavelmente inadequada",value:2},{label:"Adequada",value:3},{label:"Excelente",value:4}] },
  { title: "Fricção e Cisalhamento", options: [{label:"Problema",value:1},{label:"Problema potencial",value:2},{label:"Nenhum problema aparente",value:3}] }
];

export const MORSE_DATA = [
  { title: "Histórico de Quedas", options: [{label:"Não",value:0},{label:"Sim",value:25}] },
  { title: "Diagnóstico Secundário", options: [{label:"Não",value:0},{label:"Sim",value:15}] },
  { title: "Auxílio na Deambulação", options: [{label:"Nenhum/Acamado",value:0},{label:"Muletas/Bengala/Andador",value:15},{label:"Mobiliário",value:30}] },
  { title: "Terapia Endovenosa", options: [{label:"Não",value:0},{label:"Sim",value:20}] },
  { title: "Marcha", options: [{label:"Normal/Acamado",value:0},{label:"Fraca",value:10},{label:"Comprometida",value:20}] },
  { title: "Estado Mental", options: [{label:"Orientado",value:0},{label:"Esquece limitações",value:15}] }
];

export const FUGULIN_DATA = [
  { title: "Estado Mental", options: [{label:"Orientado",value:1},{label:"Períodos desorientação",value:2},{label:"Desorientação total",value:3},{label:"Comatoso",value:4}] },
  { title: "Oxigenação", options: [{label:"Ar ambiente",value:1},{label:"O2 intermitente",value:2},{label:"O2 contínuo",value:3},{label:"Ventilação assistida",value:4}] },
  { title: "Sinais Vitais", options: [{label:"Rotina (6h)",value:1},{label:"4h em 4h",value:2},{label:"2h em 2h",value:3},{label:"Contínuo",value:4}] },
  { title: "Motilidade", options: [{label:"Deambula sozinho",value:1},{label:"C/ auxílio",value:2},{label:"Restrito ao leito",value:3},{label:"Posicionamento",value:4}] },
  { title: "Alimentação", options: [{label:"Independente",value:1},{label:"Ajuda",value:2},{label:"SNE/Total",value:3},{label:"NPT",value:4}] },
  { title: "Cuidado Corporal", options: [{label:"Independente",value:1},{label:"Ajuda banho",value:2},{label:"No leito",value:3},{label:"Higiene total",value:4}] },
  { title: "Terapêutica", options: [{label:"Via Oral",value:1},{label:"EV intermitente",value:2},{label:"EV contínua",value:3},{label:"Drogas vasoativas",value:4}] }
];

export const HUMPTY_DUMPTY_DATA = [
  { title: "Idade", options: [{label:"< 3 anos",value:4},{label:"3-7 anos",value:3},{label:"7-13 anos",value:2},{label:"> 13 anos",value:1}] },
  { title: "Gênero", options: [{label:"Masculino",value:2},{label:"Feminino",value:1}] },
  { title: "Diagnóstico", options: [{label:"Neurológico",value:4},{label:"Oxigenação",value:3},{label:"Psíquico",value:2},{label:"Outros",value:1}] },
  { title: "Déficit Cognitivo", options: [{label:"Não orientado",value:3},{label:"Esquece limitações",value:2},{label:"Orientado",value:1}] },
  { title: "Cirurgia / Anestesia", options: [{label:"< 24h",value:3},{label:"< 48h",value:2},{label:"> 48h",value:1}] }
];

export const APGAR_DATA = [
  { title: "Frequência Cardíaca", options: [{label:"Ausente",value:0},{label:"< 100 bpm",value:1},{label:"> 100 bpm",value:2}] },
  { title: "Esforço Respiratório", options: [{label:"Ausente",value:0},{label:"Lento/Irregular",value:1},{label:"Bom/Choro forte",value:2}] },
  { title: "Tônus Muscular", options: [{label:"Flácido",value:0},{label:"Flexão de extremidades",value:1},{label:"Movimentação ativa",value:2}] },
  { title: "Irritabilidade Reflexa", options: [{label:"Sem resposta",value:0},{label:"Caretas",value:1},{label:"Choro/Espirro",value:2}] },
  { title: "Cor", options: [{label:"Pálido/Cianótico",value:0},{label:"Corpo rosado/extrem. cianóticas",value:1},{label:"Totalmente rosado",value:2}] }
];

export interface ACLSProtocol {
  adult: {
    isFixed: boolean;
    doses: { label: string; rate?: number; fixedValue?: number; unit: string; max?: number }[];
  };
  peds: {
    rate: number;
    unit: string;
    max: number;
    sequence?: { label: string; rate: number; max: number }[];
    minDose?: number;
  };
}

export interface DrugACLS {
  name: string;
  type: string;
  indication: string;
  nursing: string;
  protocol: ACLSProtocol;
}

export const ACLS_DRUGS_CALC: DrugACLS[] = [
  { 
    name: "Adrenalina", 
    type: "Vasopressor", 
    indication: "RCP: FV, TVSP, Assistolia, AESP", 
    nursing: "Administrar a cada 3-5 min. Flush de 20ml SF.",
    protocol: {
      adult: {
        isFixed: true,
        doses: [{ label: "Dose Padrão", fixedValue: 1, unit: "mg" }]
      },
      peds: {
        rate: 0.01,
        unit: "mg/kg",
        max: 1
      }
    }
  },
  { 
    name: "Amiodarona", 
    type: "Antiarrítmico", 
    indication: "FV / TVSP Refratária", 
    nursing: "Diluir em SG5%. Monitorar hipotensão pós-RCE.",
    protocol: {
      adult: {
        isFixed: true,
        doses: [
          { label: "1ª Dose", fixedValue: 300, unit: "mg" },
          { label: "2ª Dose", fixedValue: 150, unit: "mg" }
        ]
      },
      peds: {
        rate: 5,
        unit: "mg/kg",
        max: 300,
        sequence: [
          { label: "Dose Única/Repetível", rate: 5, max: 300 }
        ]
      }
    }
  },
  { 
    name: "Lidocaína", 
    type: "Antiarrítmico", 
    indication: "FV / TVSP (Alternativa Amiodarona)", 
    nursing: "Cuidado com toxicidade em idosos e hepatopatas.",
    protocol: {
      adult: {
        isFixed: false,
        doses: [
          { label: "1ª Dose", rate: 1.5, unit: "mg/kg" },
          { label: "2ª Dose", rate: 0.75, unit: "mg/kg" }
        ]
      },
      peds: {
        rate: 1,
        unit: "mg/kg",
        max: 100
      }
    }
  },
  { 
    name: "Adenosina", 
    type: "Antiarrítmico", 
    indication: "Taquicardia Supraventricular (TSV)", 
    nursing: "Acesso venoso proximal. Flush rápido obrigatório.",
    protocol: {
      adult: {
        isFixed: true,
        doses: [
          { label: "1ª Dose", fixedValue: 6, unit: "mg" },
          { label: "2ª Dose", fixedValue: 12, unit: "mg" },
          { label: "3ª Dose", fixedValue: 12, unit: "mg" }
        ]
      },
      peds: {
        rate: 0.1,
        unit: "mg/kg",
        max: 6,
        sequence: [
          { label: "1ª Dose", rate: 0.1, max: 6 },
          { label: "2ª Dose", rate: 0.2, max: 12 }
        ]
      }
    }
  },
  { 
    name: "Atropina", 
    type: "Anticolinérgico", 
    indication: "Bradicardia Sintomática", 
    nursing: "Pode causar midríase. Mínimo 0.1mg em peds.",
    protocol: {
      adult: {
        isFixed: false,
        doses: [
          { label: "Dose Única", rate: 0.015, unit: "mg/kg", max: 1 } // Na prática 1mg fixo, mas guidelines admitem variação por peso em emergência
        ]
      },
      peds: {
        rate: 0.02,
        unit: "mg/kg",
        max: 0.5,
        minDose: 0.1
      }
    }
  }
];

export const WALLACE_ADULT_DATA = [
  { title: "Cabeça e Pescoço", options: [{label:"Frente (4.5%)",value:4.5},{label:"Verso (4.5%)",value:4.5},{label:"Total (9%)",value:9},{label:"Nenhum",value:0}] },
  { title: "Tronco Superior", options: [{label:"Frente (9%)",value:9},{label:"Verso (9%)",value:9},{label:"Total (18%)",value:18},{label:"Nenhum",value:0}] },
  { title: "Tronco Inferior", options: [{label:"Frente (9%)",value:9},{label:"Verso (9%)",value:9},{label:"Total (18%)",value:18},{label:"Nenhum",value:0}] },
  { title: "Membros Superiores", options: [{label:"D (9%)",value:9},{label:"E (9%)",value:9},{label:"Ambos (18%)",value:18},{label:"Nenhum",value:0}] },
  { title: "Membros Inferiores", options: [{label:"D (9%)",value:9},{label:"E (9%)",value:9},{label:"Ambos (18%)",value:18},{label:"Nenhum",value:0}] },
  { title: "Genitália", options: [{label:"Sim (1%)",value:1},{label:"Não",value:0}] }
];

export const WALLACE_PEDS_DATA = [
  { title: "Cabeça e Pescoço", options: [{label:"Total (18%)",value:18},{label:"Nenhum",value:0}] },
  { title: "Tronco Anterior", options: [{label:"Frente (18%)",value:18},{label:"Nenhum",value:0}] },
  { title: "Tronco Posterior", options: [{label:"Verso (18%)",value:18},{label:"Nenhum",value:0}] },
  { title: "Membros Superiores", options: [{label:"D (9%)",value:9},{label:"E (9%)",value:9},{label:"Ambos (18%)",value:18},{label:"Nenhum",value:0}] },
  { title: "Membros Inferiores", options: [{label:"D (14%)",value:14},{label:"E (14%)",value:14},{label:"Ambos (28%)",value:28},{label:"Nenhum",value:0}] }
];

export const RASS_DATA = [
  { title: "Sedação / Agitação", options: [
    {label:"+4 Combativo", value: 4},
    {label:"+3 Muito Agitado", value: 3},
    {label:"+2 Agitado", value: 2},
    {label:"+1 Inquieto", value: 1},
    {label:"0 Alerta/Calmo", value: 0},
    {label:"-1 Sonolento", value: -1},
    {label:"-2 Sedação Leve", value: -2},
    {label:"-3 Sedação Mod", value: -3},
    {label:"-4 Sedação Profunda", value: -4},
    {label:"-5 Inexcitável", value: -5}
  ]}
];

export const RSI_DRUGS = {
  induction: [
    { name: 'Etomidato', doseRate: 0.3, elderlyDoseRate: 0.15, unit: 'mg/kg', obs: 'Dose: 0.3 mg/kg. Estabilidade hemodinâmica.' },
    { name: 'Cetamina', doseRate: 1.5, elderlyDoseRate: 1.0, unit: 'mg/kg', obs: 'Dose: 1.5 mg/kg. Broncodilatador.' },
    { name: 'Propofol', doseRate: 2, elderlyDoseRate: 1.0, unit: 'mg/kg', obs: 'Dose: 1.5-2.5 mg/kg. Hipotensão.' },
    { name: 'Midazolam', doseRate: 0.3, elderlyDoseRate: 0.1, unit: 'mg/kg', obs: 'Dose: 0.1-0.3 mg/kg. Benzodiazepínico.' }
  ],
  paralysis: [
    { name: 'Succinilcolina', doseRate: 1.5, elderlyDoseRate: 1.5, unit: 'mg/kg', obs: 'Dose: 1.5 mg/kg. Bloqueador Rápido.' },
    { name: 'Rocurônio', doseRate: 1.2, elderlyDoseRate: 1.2, unit: 'mg/kg', obs: 'Dose: 1.2 mg/kg. Longa duração.' }
  ],
  pretreat: [
    { name: 'Fentanil', doseRate: 3, elderlyDoseRate: 1.5, unit: 'mcg/kg', obs: 'Dose: 3 mcg/kg. Simpaticolítico.' },
    { name: 'Lidocaína', doseRate: 1.5, elderlyDoseRate: 1.5, unit: 'mg/kg', obs: 'Dose: 1.5 mg/kg. Neuroproteção.' }
  ]
};
