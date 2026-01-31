
import React, { useState, useEffect } from 'react';
import Layout from './components/Layout.tsx';
import { 
  SCALES_LIST, ANTIDOTES, GCS_DATA, BRADEN_DATA, 
  MORSE_DATA, APGAR_DATA, RASS_DATA, RSI_DRUGS,
  NIHSS_DATA, CINCINNATI_DATA, FUGULIN_DATA, 
  HUMPTY_DUMPTY_DATA, ACLS_DRUGS_CALC, CLINICAL_PEARLS,
  WALLACE_ADULT_DATA, WALLACE_PEDS_DATA
} from './constants.tsx';
import { Category } from './types.ts';
import { ScoreSelector, AlertBox, ClinicalPearlsSection } from './components/CalculatorUI.tsx';

// Componente utilitário para medidor de risco
const RiskGauge: React.FC<{ 
  current: number; 
  ranges: { min: number; max: number; label: string; color: string; textColor: string }[] 
}> = ({ current, ranges }) => {
  return (
    <div className="w-full mt-6">
      <div className="flex w-full h-3 rounded-full overflow-hidden bg-slate-100 mb-2 border border-slate-200/50">
        {ranges.map((range, idx) => {
          const totalRange = ranges[ranges.length - 1].max - ranges[0].min;
          const width = ((range.max - range.min + 1) / (totalRange + 1)) * 100;
          const isActive = current >= range.min && current <= range.max;
          return (
            <div 
              key={idx} 
              style={{ width: `${width}%` }} 
              className={`${range.color} transition-all relative ${isActive ? 'opacity-100 ring-2 ring-white ring-inset' : 'opacity-30'}`}
            >
              {isActive && (
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-5 bg-white shadow-sm rounded-full"></div>
              )}
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
        {ranges.map((range, idx) => {
          const isActive = current >= range.min && current <= range.max;
          return (
            <div 
              key={idx} 
              className={`text-[9px] p-1.5 rounded-lg border text-center font-bold leading-tight transition-all ${
                isActive 
                ? `${range.color} ${range.textColor} border-transparent shadow-sm scale-105` 
                : 'bg-white border-slate-100 text-slate-400 opacity-60'
              }`}
            >
              <div className="uppercase opacity-70 mb-0.5">{range.label}</div>
              <div>{range.min}-{range.max}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Category | 'ALL'>('ALL');
  const [activeScale, setActiveScale] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [currentScoreValues, setCurrentScoreValues] = useState<number[]>([]);
  const [burnType, setBurnType] = useState<'thermal' | 'electrical'>('thermal');
  const [patientType, setPatientType] = useState<'adult' | 'pediatric'>('adult');
  const [isElderly, setIsElderly] = useState<boolean>(false);
  const [weight, setWeight] = useState<number>(0);
  const [scq, setScq] = useState<number>(0);
  const [selectedAntidoteIdx, setSelectedAntidoteIdx] = useState<number | null>(null);

  useEffect(() => {
    setCurrentScoreValues([]);
    window.scrollTo(0, 0);
  }, [activeScale]);

  const filteredScales = SCALES_LIST.filter(scale => {
    const matchesTab = activeTab === 'ALL' || scale.category === activeTab;
    const matchesSearch = scale.name.toLowerCase().includes(search.toLowerCase()) || 
                         scale.description.toLowerCase().includes(search.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const renderDashboard = () => (
    <div className="space-y-6 animate-fadeIn">
      <div className="max-w-xl mx-auto mb-8">
        <div className="relative group">
          <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors"></i>
          <input 
            type="text" 
            placeholder="Pesquisar scores, medicamentos ou protocolos..."
            className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-2 justify-center">
        {['ALL', ...Object.values(Category)].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat as any)}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === cat ? 'bg-indigo-600 text-white shadow-lg' : 'bg-white text-slate-500 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            {cat === 'ALL' ? 'Todos' : cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredScales.map((scale) => (
          <div 
            key={scale.id}
            onClick={() => setActiveScale(scale.id)}
            className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-indigo-500 hover:shadow-xl transition-all cursor-pointer relative overflow-hidden"
          >
            <div className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center text-xl text-white shadow-inner ${
              scale.category === Category.NEURO ? 'bg-purple-500' :
              scale.category === Category.BURN ? 'bg-orange-500' :
              scale.category === Category.PEDIATRIC ? 'bg-sky-500' :
              scale.category === Category.MEDICATION ? 'bg-emerald-500' :
              'bg-indigo-500'
            }`}>
              <i className={`fas ${scale.icon}`}></i>
            </div>
            <h3 className="font-bold text-slate-800 text-lg mb-1 group-hover:text-indigo-600">{scale.name}</h3>
            <p className="text-slate-500 text-xs leading-relaxed">{scale.description}</p>
          </div>
        ))}
      </div>

      <section className="bg-slate-900 text-white rounded-3xl p-8 mt-12 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-5">
           <i className="fas fa-flask-vial text-9xl"></i>
        </div>
        <h2 className="text-xl font-black mb-6 flex items-center gap-3 border-b border-slate-800 pb-4 relative z-10">
          <i className="fas fa-biohazard text-amber-400"></i>
          Guia de Intoxicações e Antídotos
        </h2>
        
        <div className="max-w-2xl relative z-10">
          <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Selecione o Agente Tóxico / Medicamento</label>
          <select 
            className="w-full p-4 bg-slate-800 border border-slate-700 rounded-2xl text-white outline-none focus:ring-2 focus:ring-indigo-500 transition-all appearance-none cursor-pointer"
            value={selectedAntidoteIdx ?? ''}
            onChange={(e) => setSelectedAntidoteIdx(e.target.value === '' ? null : Number(e.target.value))}
          >
            <option value="">-- Escolha um agente para consultar --</option>
            {ANTIDOTES.sort((a,b) => a.toxin.localeCompare(b.toxin)).map((item, i) => (
              <option key={i} value={i}>{item.toxin}</option>
            ))}
          </select>
          <div className="absolute right-4 top-[58px] pointer-events-none text-slate-500">
             <i className="fas fa-chevron-down"></i>
          </div>
        </div>

        {selectedAntidoteIdx !== null && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 animate-slideUp relative z-10">
            <div className="bg-slate-800/80 border border-indigo-500/30 p-6 rounded-2xl shadow-xl">
               <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-indigo-500/20 rounded-xl flex items-center justify-center text-indigo-400">
                    <i className="fas fa-shield-virus"></i>
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-slate-400 uppercase">Antídoto Indicado</div>
                    <div className="text-lg font-bold text-white leading-tight">{ANTIDOTES[selectedAntidoteIdx].antidote}</div>
                  </div>
               </div>
               <div className="space-y-4">
                 <div>
                   <div className="text-[10px] font-black text-slate-400 uppercase mb-1">Protocolo e Posologia</div>
                   <div className="text-sm font-medium text-slate-200 leading-relaxed bg-slate-900/50 p-4 rounded-xl border border-slate-700">
                      {ANTIDOTES[selectedAntidoteIdx].dose}
                   </div>
                 </div>
               </div>
            </div>

            <div className="bg-amber-500/10 border border-amber-500/30 p-6 rounded-2xl">
               <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-amber-500/20 rounded-xl flex items-center justify-center text-amber-400">
                    <i className="fas fa-circle-exclamation"></i>
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-amber-600 uppercase">Observações Críticas</div>
                    <div className="text-lg font-bold text-amber-200">Cuidados & Alertas</div>
                  </div>
               </div>
               <div className="text-sm text-amber-100/80 leading-relaxed italic">
                 "{ANTIDOTES[selectedAntidoteIdx].obs}"
               </div>
               <div className="mt-6 p-3 bg-amber-500/5 rounded-xl border border-amber-500/20 text-[10px] text-amber-200/60 font-medium">
                  Informações baseadas no Guia Farmacêutico HIAE. Requer confirmação clínica e supervisão médica.
               </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );

  const renderActiveScale = () => {
    const pearls = CLINICAL_PEARLS[activeScale || ''] || {};
    const score = currentScoreValues.reduce((a, b) => a + b, 0);

    switch (activeScale) {
      case 'gcs-p': {
        const sumGcs = currentScoreValues.length >= 3 ? currentScoreValues.slice(0, 3).reduce((a, b) => a + b, 0) : 15;
        const pMod = currentScoreValues[3] || 0;
        const gcsp = Math.max(1, sumGcs - pMod);
        return (
          <div className="max-w-3xl mx-auto animate-slideUp">
            <ScoreSelector sections={GCS_DATA} onValuesChange={setCurrentScoreValues} />
            <div className="mt-8 bg-white border border-indigo-200 p-8 rounded-3xl shadow-2xl flex flex-col sm:flex-row justify-between items-center gap-6">
              <div className="text-center sm:text-left">
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Escore Glasgow-P Final</div>
                <div className="text-6xl font-black text-indigo-700">{gcsp}</div>
              </div>
              <div className="flex-1 w-full">
                <AlertBox title="Severidade Clínica" type={gcsp <= 8 ? 'danger' : gcsp <= 12 ? 'warning' : 'info'}>
                  {gcsp <= 8 ? 'GRAVE: Indicativo de Proteção de Vias Aéreas (IOT).' : gcsp <= 12 ? 'MODERADO: Monitorização rigorosa em UTI.' : 'LEVE: Observação clínica.'}
                </AlertBox>
              </div>
            </div>
            <ClinicalPearlsSection data={pearls} currentScore={gcsp} />
          </div>
        );
      }

      case 'nihss': {
        return (
          <div className="max-w-3xl mx-auto animate-slideUp">
            <ScoreSelector sections={NIHSS_DATA} onValuesChange={setCurrentScoreValues} />
            <div className="sticky bottom-4 mt-8 bg-indigo-900 text-white p-6 rounded-2xl shadow-2xl flex items-center justify-between">
              <div>
                <div className="text-[10px] font-black opacity-60 uppercase mb-1">NIHSS Score</div>
                <div className="text-4xl font-black">{score}</div>
              </div>
              <div className="text-right max-w-[60%]">
                <div className="text-sm font-bold">{score >= 21 ? 'AVC GRAVE' : score >= 15 ? 'AVC MODERADAMENTE GRAVE' : 'AVC LEVE/MOD'}</div>
                <p className="text-[10px] opacity-70">Protocolo de trombólise deve ser considerado se {"< 4.5h"}.</p>
              </div>
            </div>
            <ClinicalPearlsSection data={pearls} currentScore={score} />
          </div>
        );
      }

      case 'burn-wallace': {
        const wallaceSections = patientType === 'adult' ? WALLACE_ADULT_DATA : WALLACE_PEDS_DATA;
        return (
          <div className="max-w-3xl mx-auto animate-slideUp">
            <div className="flex bg-slate-100 p-1.5 rounded-2xl mb-6">
                <button onClick={() => setPatientType('adult')} className={`flex-1 py-3 rounded-xl text-xs font-black transition-all ${patientType === 'adult' ? 'bg-white text-indigo-700 shadow-sm' : 'text-slate-400'}`}>ADULTO</button>
                <button onClick={() => setPatientType('pediatric')} className={`flex-1 py-3 rounded-xl text-xs font-black transition-all ${patientType === 'pediatric' ? 'bg-white text-indigo-700 shadow-sm' : 'text-slate-400'}`}>PEDIÁTRICO</button>
            </div>
            <ScoreSelector sections={wallaceSections} onValuesChange={setCurrentScoreValues} />
            <div className="mt-8 bg-white border border-indigo-200 p-8 rounded-3xl shadow-2xl flex flex-col sm:flex-row justify-between items-center gap-6">
              <div className="text-center sm:text-left">
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">SCQ Total ({patientType.toUpperCase()})</div>
                <div className="text-6xl font-black text-indigo-700">{score}%</div>
              </div>
              <div className="flex-1 w-full">
                <AlertBox title="Severidade da Queimadura" type={score > 20 ? 'danger' : score > 10 ? 'warning' : 'info'}>
                  {score > 20 ? 'GRANDE QUEIMADO: Risco iminente de choque. Monitorização rigorosa.' : score > 10 ? 'MÉDIO QUEIMADO: Considerar transferência se peds.' : 'PEQUENO QUEIMADO.'}
                </AlertBox>
              </div>
            </div>
            <ClinicalPearlsSection data={pearls} currentScore={score} />
          </div>
        );
      }

      case 'parkland': {
        const constant = burnType === 'electrical' ? 4 : (patientType === 'pediatric' ? 3 : 2);
        const result = constant * weight * scq;
        return (
          <div className="max-w-2xl mx-auto space-y-6 animate-slideUp">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h2 className="text-2xl font-black text-indigo-700 mb-6 flex items-center gap-2">
                <i className="fas fa-droplet"></i> Parkland (ATLS 10)
              </h2>
              <div className="flex bg-slate-100 p-1.5 rounded-2xl mb-8">
                <button onClick={() => setPatientType('adult')} className={`flex-1 py-3 rounded-xl text-xs font-black transition-all ${patientType === 'adult' ? 'bg-white text-indigo-700 shadow-sm' : 'text-slate-400'}`}>ADULTO</button>
                <button onClick={() => setPatientType('pediatric')} className={`flex-1 py-3 rounded-xl text-xs font-black transition-all ${patientType === 'pediatric' ? 'bg-white text-indigo-700 shadow-sm' : 'text-slate-400'}`}>PEDIÁTRICO</button>
              </div>
              <div className="flex bg-slate-100 p-1.5 rounded-2xl mb-8">
                <button onClick={() => setBurnType('thermal')} className={`flex-1 py-3 rounded-xl text-xs font-black transition-all ${burnType === 'thermal' ? 'bg-white text-indigo-700 shadow-sm' : 'text-slate-400'}`}>TÉRMICA</button>
                <button onClick={() => setBurnType('electrical')} className={`flex-1 py-3 rounded-xl text-xs font-black transition-all ${burnType === 'electrical' ? 'bg-white text-indigo-700 shadow-sm' : 'text-slate-400'}`}>ELÉTRICA</button>
              </div>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase">Peso Atual (kg)</label>
                  <input type="number" value={weight || ''} onChange={(e) => setWeight(+e.target.value)} className="w-full p-4 bg-slate-800 text-white placeholder:text-slate-400 border border-slate-700 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="Ex: 75" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase">% SCQ Estimada</label>
                  <input type="number" value={scq || ''} onChange={(e) => setScq(+e.target.value)} className="w-full p-4 bg-slate-800 text-white placeholder:text-slate-400 border border-slate-700 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="Ex: 25" />
                </div>
              </div>
              <div className="bg-indigo-600 text-white p-8 rounded-3xl shadow-xl text-center">
                <div className="text-[10px] font-black opacity-60 uppercase mb-2">Total Cristaloide (24h) - {patientType.toUpperCase()}</div>
                <div className="text-5xl font-black">{result.toLocaleString()} <span className="text-xl">mL</span></div>
                {patientType === 'pediatric' && weight > 0 && (
                  <div className="mt-4 text-[11px] font-bold text-indigo-100 border-t border-white/10 pt-4">
                    *Nota: Somar Fluido de Manutenção em Pediatria.
                  </div>
                )}
                <div className="grid grid-cols-2 gap-4 mt-8 border-t border-white/10 pt-6">
                  <div>
                    <div className="text-[10px] font-black opacity-60 uppercase">Primeiras 8h</div>
                    <div className="text-2xl font-bold">{(result/2).toLocaleString()} ml</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-black opacity-60 uppercase">Próximas 16h</div>
                    <div className="text-2xl font-bold">{(result/2).toLocaleString()} ml</div>
                  </div>
                </div>
              </div>
              {burnType === 'electrical' && (
                <AlertBox title="RISCO DE RABDOMIÓLISE" type="danger">
                  Meta de débito urinário elevada: Adulto 100ml/h | Peds 1-1.5ml/kg/h. Monitorar mioglobinúria.
                </AlertBox>
              )}
            </div>
            <ClinicalPearlsSection data={pearls} currentScore={scq} />
          </div>
        );
      }

      case 'rsi': {
        return (
          <div className="max-w-4xl mx-auto space-y-6 animate-slideUp">
            <div className="bg-white p-8 rounded-3xl border border-slate-200">
              <h2 className="text-2xl font-black text-emerald-700 mb-6 flex items-center gap-2">
                <i className="fas fa-lungs"></i> Sequência Rápida de Intubação
              </h2>
              <div className="flex flex-col sm:flex-row gap-6 mb-8 items-start sm:items-end">
                <div className="w-full max-w-xs">
                  <label className="text-[10px] font-black text-slate-400 uppercase block mb-2">Peso do Paciente (kg)</label>
                  <input type="number" value={weight || ''} onChange={(e) => setWeight(+e.target.value)} className="w-full p-4 bg-slate-800 text-white placeholder:text-slate-400 border border-slate-700 rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Ex: 80" />
                </div>
                <div className="flex items-center gap-3 pb-4">
                  <label className="text-sm font-bold text-slate-600">Paciente Idoso?</label>
                  <button 
                    onClick={() => setIsElderly(!isElderly)}
                    className={`w-14 h-8 rounded-full p-1 transition-colors ${isElderly ? 'bg-emerald-500' : 'bg-slate-300'}`}
                  >
                    <div className={`w-6 h-6 bg-white rounded-full shadow-sm transition-transform ${isElderly ? 'translate-x-6' : 'translate-x-0'}`}></div>
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xs font-black text-emerald-600 border-b border-emerald-100 pb-2 uppercase tracking-widest">Pré-Tratamento</h3>
                  {RSI_DRUGS.pretreat.map((d, i) => {
                    const rate = isElderly ? d.elderlyDoseRate : d.doseRate;
                    return (
                      <div key={i} className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <div className="font-bold text-sm text-slate-800">{d.name}</div>
                        <div className="text-lg font-black text-emerald-600">{weight ? (rate * weight).toFixed(1) : '---'} <span className="text-xs">{d.unit}</span></div>
                        <p className="text-[10px] text-slate-400 mt-1">Ref: {rate} {d.unit}</p>
                      </div>
                    );
                  })}
                </div>
                <div className="space-y-4">
                  <h3 className="text-xs font-black text-emerald-600 border-b border-emerald-100 pb-2 uppercase tracking-widest">Indução</h3>
                  {RSI_DRUGS.induction.map((d, i) => {
                    const rate = isElderly ? d.elderlyDoseRate : d.doseRate;
                    return (
                      <div key={i} className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <div className="font-bold text-sm text-slate-800">{d.name}</div>
                        <div className="text-lg font-black text-emerald-600">{weight ? (rate * weight).toFixed(1) : '---'} <span className="text-xs">{d.unit}</span></div>
                        <p className="text-[10px] text-slate-400 mt-1">Ref: {rate} {d.unit}</p>
                      </div>
                    );
                  })}
                </div>
                <div className="space-y-4">
                  <h3 className="text-xs font-black text-emerald-600 border-b border-emerald-100 pb-2 uppercase tracking-widest">Paralisia</h3>
                  {RSI_DRUGS.paralysis.map((d, i) => {
                    const rate = isElderly ? d.elderlyDoseRate : d.doseRate;
                    return (
                      <div key={i} className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <div className="font-bold text-sm text-slate-800">{d.name}</div>
                        <div className="text-lg font-black text-emerald-600">{weight ? (rate * weight).toFixed(1) : '---'} <span className="text-xs">{d.unit}</span></div>
                        <p className="text-[10px] text-slate-400 mt-1">Ref: {rate} {d.unit}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <ClinicalPearlsSection data={pearls} currentScore={0} />
          </div>
        );
      }

      case 'acls': {
        return (
          <div className="max-w-4xl mx-auto space-y-6 animate-slideUp">
            <div className="bg-white p-8 rounded-3xl border border-slate-200">
              <h2 className="text-2xl font-black text-red-600 mb-6 flex items-center gap-2">
                <i className="fas fa-heart-pulse"></i> ACLS & PALS (Sequencial)
              </h2>
              
              <div className="flex flex-col sm:flex-row gap-6 mb-8 items-start sm:items-end">
                <div className="w-full max-w-xs">
                  <label className="text-[10px] font-black text-slate-400 uppercase block mb-2">Peso Estimado (kg)</label>
                  <input type="number" value={weight || ''} onChange={(e) => setWeight(+e.target.value)} className="w-full p-4 bg-slate-800 text-white placeholder:text-slate-400 border border-slate-700 rounded-2xl outline-none focus:ring-2 focus:ring-red-500" placeholder="Ex: 80" />
                </div>
                <div className="flex bg-slate-100 p-1.5 rounded-2xl">
                  <button onClick={() => setPatientType('adult')} className={`px-6 py-2 rounded-xl text-xs font-black transition-all ${patientType === 'adult' ? 'bg-white text-red-600 shadow-sm' : 'text-slate-400'}`}>ADULTO (ACLS)</button>
                  <button onClick={() => setPatientType('pediatric')} className={`px-6 py-2 rounded-xl text-xs font-black transition-all ${patientType === 'pediatric' ? 'bg-white text-red-600 shadow-sm' : 'text-slate-400'}`}>PEDIÁTRICO (PALS)</button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {ACLS_DRUGS_CALC.map((drug, i) => {
                  const dosesToRender = [];
                  
                  if (patientType === 'adult') {
                    drug.protocol.adult.doses.forEach(d => {
                      let value = "---";
                      if (drug.protocol.adult.isFixed) {
                        value = `${d.fixedValue} ${d.unit}`;
                      } else if (weight > 0 && d.rate) {
                        value = `${(d.rate * weight).toFixed(1)} ${d.unit}`;
                      }
                      dosesToRender.push({ label: d.label, val: value });
                    });
                  } else {
                    if (drug.protocol.peds.sequence) {
                       drug.protocol.peds.sequence.forEach(s => {
                         let val = "---";
                         if (weight > 0) {
                           const c = Math.min(s.rate * weight, s.max);
                           val = `${c.toFixed(2)} ${drug.protocol.peds.unit}`;
                         }
                         dosesToRender.push({ label: s.label, val });
                       });
                    } else {
                      let val = "---";
                      if (weight > 0) {
                        let c = drug.protocol.peds.rate * weight;
                        if (drug.protocol.peds.minDose && c < drug.protocol.peds.minDose) c = drug.protocol.peds.minDose;
                        if (c > drug.protocol.peds.max) c = drug.protocol.peds.max;
                        val = `${c.toFixed(2)} ${drug.protocol.peds.unit}`;
                      }
                      dosesToRender.push({ label: "Dose Padrão", val });
                    }
                  }

                  return (
                    <div key={i} className="p-5 border border-slate-100 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all">
                      <div className="flex justify-between items-center mb-4 border-b border-slate-50 pb-3">
                        <div>
                          <h4 className="font-black text-slate-800 uppercase text-sm tracking-wide">{drug.name}</h4>
                          <span className="text-[9px] font-bold uppercase text-red-500 bg-red-50 px-2 py-0.5 rounded-full">{drug.type}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        {dosesToRender.map((dose, di) => (
                          <div key={di} className="flex justify-between items-end">
                            <span className="text-[10px] font-black text-slate-400 uppercase">{dose.label}</span>
                            <span className="text-xl font-black text-indigo-700">{dose.val}</span>
                          </div>
                        ))}
                      </div>

                      <div className="text-[10px] text-slate-500 mt-4 italic leading-tight">{drug.indication}</div>
                      <div className="text-[10px] font-medium text-slate-400 mt-3 border-t border-slate-50 pt-2">{drug.nursing}</div>
                    </div>
                  );
                })}
              </div>
              <AlertBox title="Algoritmo AHA 2025" type="danger">
                {patientType === 'adult' 
                  ? 'Foco em RCP de alta qualidade. Adrenalina imediata em ritmos não-chocáveis.'
                  : 'Pediátrico: Use adrenalina precocemente (0,01mg/kg).'}
              </AlertBox>
            </div>
            <ClinicalPearlsSection data={pearls} currentScore={0} />
          </div>
        );
      }

      case 'braden': {
        const getBradenInterpretation = (s: number) => {
          if (s >= 19) return { text: 'SEM RISCO: Manter vigilância e rotina de higiene.', type: 'info' as const };
          if (s >= 15) return { text: 'RISCO LEVE: Iniciar medidas preventivas básicas.', type: 'warning' as const };
          if (s >= 13) return { text: 'RISCO MODERADO: Protocolo de mudança de decúbito assistida.', type: 'warning' as const };
          if (s >= 10) return { text: 'RISCO ALTO: Mudança de decúbito rigorosa 2/2h e colchão pneumático.', type: 'danger' as const };
          return { text: 'RISCO MUITO ALTO: Intervenções intensivas e vigilância total da pele.', type: 'danger' as const };
        };
        const interpretation = getBradenInterpretation(score);

        const bradenRanges = [
          { min: 6, max: 9, label: 'Muito Alto', color: 'bg-red-600', textColor: 'text-white' },
          { min: 10, max: 12, label: 'Alto', color: 'bg-red-400', textColor: 'text-white' },
          { min: 13, max: 14, label: 'Moderado', color: 'bg-amber-500', textColor: 'text-white' },
          { min: 15, max: 18, label: 'Leve', color: 'bg-lime-500', textColor: 'text-white' },
          { min: 19, max: 23, label: 'Sem Risco', color: 'bg-emerald-500', textColor: 'text-white' },
        ];

        return (
          <div className="max-w-3xl mx-auto animate-slideUp">
            <ScoreSelector sections={BRADEN_DATA} onValuesChange={setCurrentScoreValues} />
            <div className="mt-8 bg-white border border-slate-200 p-8 rounded-3xl shadow-xl space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Escore Braden</div>
                  <div className="text-5xl font-black text-indigo-700">{score || 23}</div>
                </div>
                <div className="flex-1 ml-8">
                  <AlertBox title="INTERPRETAÇÃO (RISCO DE LPP)" type={interpretation.type}>
                    {interpretation.text}
                  </AlertBox>
                </div>
              </div>
              
              <div className="pt-6 border-t border-slate-100">
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 text-center">Visualização de Faixas de Risco</div>
                <RiskGauge current={score || 23} ranges={bradenRanges} />
              </div>
            </div>
            <ClinicalPearlsSection data={pearls} currentScore={score || 23} />
          </div>
        );
      }

      case 'apgar': {
        const getApgarInterpretation = (s: number) => {
          if (s >= 7) return { text: 'BOA VITALIDADE: Recém-nascido adaptado. Cuidados de rotina.', type: 'info' as const };
          if (s >= 4) return { text: 'DEPRESSÃO MODERADA: Requer estimulação e possível suporte respiratório.', type: 'warning' as const };
          return { text: 'DEPRESSÃO GRAVE: Necessidade imediata de reanimação neonatal avançada.', type: 'danger' as const };
        };
        const interpretation = getApgarInterpretation(score);

        return (
          <div className="max-w-3xl mx-auto animate-slideUp">
            <ScoreSelector sections={APGAR_DATA} onValuesChange={setCurrentScoreValues} />
            <div className="mt-8 bg-white border border-slate-200 p-8 rounded-3xl shadow-xl flex items-center justify-between">
              <div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Escore APGAR</div>
                <div className="text-5xl font-black text-indigo-700">{score}</div>
              </div>
              <div className="flex-1 ml-8">
                <AlertBox title="INTERPRETAÇÃO (VITALIDADE RN)" type={interpretation.type}>
                  {interpretation.text}
                </AlertBox>
              </div>
            </div>
            <ClinicalPearlsSection data={pearls} currentScore={score} />
          </div>
        );
      }

      case 'humpty-dumpty': {
        const isHighRisk = score >= 12;
        const hdRanges = [
          { min: 7, max: 11, label: 'Baixo Risco', color: 'bg-emerald-500', textColor: 'text-white' },
          { min: 12, max: 23, label: 'Alto Risco', color: 'bg-red-600', textColor: 'text-white' },
        ];

        return (
          <div className="max-w-3xl mx-auto animate-slideUp">
            <div className="mb-4 bg-sky-50 text-sky-800 p-3 rounded-xl flex items-center gap-2 font-bold text-xs uppercase">
                <i className="fas fa-child"></i> Protocolo Pediátrico
            </div>
            <ScoreSelector sections={HUMPTY_DUMPTY_DATA} onValuesChange={setCurrentScoreValues} />
            <div className="mt-8 bg-white border border-slate-200 p-8 rounded-3xl shadow-xl space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Escore Humpty Dumpty</div>
                  <div className="text-5xl font-black text-indigo-700">{score}</div>
                </div>
                <div className="flex-1 ml-8">
                  <AlertBox title="RISCO DE QUEDA PEDIÁTRICA" type={isHighRisk ? 'danger' : 'info'}>
                    {isHighRisk ? 'ALTO RISCO: Implementar protocolo de prevenção imediato.' : 'BAIXO RISCO: Vigilância de rotina.'}
                  </AlertBox>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 text-center">Classificação de Risco de Queda</div>
                <RiskGauge current={score} ranges={hdRanges} />
              </div>
            </div>
            <ClinicalPearlsSection data={pearls} currentScore={score} />
          </div>
        );
      }

      case 'morse': {
        return (
          <div className="max-w-3xl mx-auto animate-slideUp">
            <ScoreSelector sections={MORSE_DATA} onValuesChange={setCurrentScoreValues} />
            <div className="mt-8 bg-white border border-slate-200 p-8 rounded-3xl shadow-xl flex items-center justify-between">
              <div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Escore Morse</div>
                <div className="text-5xl font-black text-indigo-700">{score}</div>
              </div>
              <div className="flex-1 ml-8">
                <AlertBox title="Risco de Queda" type={score >= 45 ? 'danger' : score >= 25 ? 'warning' : 'info'}>
                  {score >= 45 ? 'ALTO RISCO: Pulseira de identificação e grades elevadas.' : 'Risco baixo/médio.'}
                </AlertBox>
              </div>
            </div>
            <ClinicalPearlsSection data={pearls} currentScore={score} />
          </div>
        );
      }

      default: {
        const dataMap: Record<string, any[]> = { 
          'braden': BRADEN_DATA, 'morse': MORSE_DATA, 'fugulin': FUGULIN_DATA, 
          'humpty-dumpty': HUMPTY_DUMPTY_DATA, 'apgar': APGAR_DATA, 'rass': RASS_DATA,
          'cincinnati': CINCINNATI_DATA
        };
        const currentData = dataMap[activeScale || ''] || [];

        return (
          <div className="max-w-3xl mx-auto animate-slideUp">
            <ScoreSelector sections={currentData} onValuesChange={setCurrentScoreValues} />
            <div className="mt-8 bg-white border border-slate-200 p-8 rounded-3xl shadow-xl flex items-center justify-between">
              <div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Escore Total</div>
                <div className="text-5xl font-black text-indigo-700">{score}</div>
              </div>
              <div className="flex-1 ml-8">
                <AlertBox title="Alerta Interativo" type={score > 15 ? 'warning' : 'info'}>
                  Siga os protocolos ministeriais e as pérolas clínicas descritas abaixo para garantir a segurança do paciente.
                </AlertBox>
              </div>
            </div>
            {pearls.dynamic || pearls.static ? <ClinicalPearlsSection data={pearls} currentScore={score} /> : null}
          </div>
        );
      }
    }
  };

  return (activeScale ? (
    <Layout 
      onHome={() => setActiveScale(null)} 
      title={SCALES_LIST.find(s => s.id === activeScale)?.name || ''}
    >
      {renderActiveScale()}
    </Layout>
  ) : (
    <Layout 
      onHome={() => setActiveScale(null)} 
      title="NurseCalc Pro Dashboard"
    >
      {renderDashboard()}
    </Layout>
  ));
};

export default App;
