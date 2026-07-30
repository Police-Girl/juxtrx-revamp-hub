import React from 'react';
import { Award, FileText, Globe2, Users, CheckCircle2 } from 'lucide-react';

export function LogoVisual() {
  return (
    <div className="space-y-4 w-full">
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-bold tracking-wider text-slate-500 uppercase">
          IMPACT OVERVIEW
        </span>
        <span className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-600">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Active
        </span>
      </div>

      {/* 4 Cards themed with JMRC Logo Colors */}
      <div className="grid grid-cols-2 gap-3">
        {/* Card 1: Logo Blue / Cyan */}
        <div className="rounded-xl border border-sky-300/60 bg-gradient-to-br from-sky-500/20 via-sky-400/10 to-blue-600/20 p-3.5 backdrop-blur-md shadow-sm">
          <div className="flex items-center gap-2.5 mb-1.5">
            <div className="p-1.5 rounded-lg bg-sky-500/20 text-sky-700">
              <Award size={16} />
            </div>
            <span className="text-xl font-bold text-sky-950">10+</span>
          </div>
          <p className="text-[11px] text-slate-700 font-semibold leading-tight">
            Years in Regulated Markets
          </p>
        </div>

        {/* Card 2: Logo Teal / Emerald */}
        <div className="rounded-xl border border-teal-300/60 bg-gradient-to-br from-teal-500/20 via-emerald-400/10 to-teal-600/20 p-3.5 backdrop-blur-md shadow-sm">
          <div className="flex items-center gap-2.5 mb-1.5">
            <div className="p-1.5 rounded-lg bg-teal-500/20 text-teal-700">
              <FileText size={16} />
            </div>
            <span className="text-xl font-bold text-teal-950">200+</span>
          </div>
          <p className="text-[11px] text-slate-700 font-semibold leading-tight">
            Regulatory Submissions
          </p>
        </div>

        {/* Card 3: Logo Purple / Magenta */}
        <div className="rounded-xl border border-purple-300/60 bg-gradient-to-br from-purple-500/20 via-fuchsia-400/10 to-indigo-600/20 p-3.5 backdrop-blur-md shadow-sm">
          <div className="flex items-center gap-2.5 mb-1.5">
            <div className="p-1.5 rounded-lg bg-purple-500/20 text-purple-700">
              <Globe2 size={16} />
            </div>
            <span className="text-xl font-bold text-purple-950">5</span>
          </div>
          <p className="text-[11px] text-slate-700 font-semibold leading-tight">
            East African Markets
          </p>
        </div>

        {/* Card 4: Logo Amber / Gold */}
        <div className="rounded-xl border border-amber-300/60 bg-gradient-to-br from-amber-500/20 via-yellow-400/10 to-orange-500/20 p-3.5 backdrop-blur-md shadow-sm">
          <div className="flex items-center gap-2.5 mb-1.5">
            <div className="p-1.5 rounded-lg bg-amber-500/20 text-amber-700">
              <Users size={16} />
            </div>
            <span className="text-xl font-bold text-amber-950">500+</span>
          </div>
          <p className="text-[11px] text-slate-700 font-semibold leading-tight">
            Partner Organisations
          </p>
        </div>
      </div>

      {/* Capabilities Box with Glass & Gradient Accents */}
      <div className="rounded-xl border border-slate-200/80 bg-white/60 p-4 backdrop-blur-md space-y-3 shadow-sm">
        <span className="text-[11px] font-bold tracking-wider text-slate-500 uppercase block">
          SERVICE CAPABILITIES
        </span>

        {/* Bar 1: Logo Blue -> Cyan Gradient */}
        <div className="space-y-1">
          <div className="flex justify-between text-[11px] font-medium">
            <span className="text-slate-700">Local Trade Representation</span>
            <span className="text-slate-900 font-bold">95%</span>
          </div>
          <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 rounded-full w-[95%]" />
          </div>
        </div>

        {/* Bar 2: Logo Teal -> Emerald Gradient */}
        <div className="space-y-1">
          <div className="flex justify-between text-[11px] font-medium">
            <span className="text-slate-700">Regulatory Support</span>
            <span className="text-slate-900 font-bold">90%</span>
          </div>
          <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-teal-500 via-emerald-400 to-green-500 rounded-full w-[90%]" />
          </div>
        </div>

        {/* Bar 3: Logo Purple -> Magenta Gradient */}
        <div className="space-y-1">
          <div className="flex justify-between text-[11px] font-medium">
            <span className="text-slate-700">Systems & Operations</span>
            <span className="text-slate-900 font-bold">82%</span>
          </div>
          <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 rounded-full w-[82%]" />
          </div>
        </div>
      </div>

      {/* Footer Pill */}
      <div className="rounded-xl border border-slate-200/80 bg-white/70 p-3 backdrop-blur-md flex items-center gap-2 text-[12px] text-slate-600 shadow-sm">
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
        <span>Serving <strong className="text-slate-900">7 regulated industries</strong> across East Africa</span>
      </div>
    </div>
  );
}

export function RegulatoryVisual() {
  return (
    <div className="space-y-3 w-full">
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-bold tracking-wider text-slate-500 uppercase">REGULATORY CAPABILITIES</span>
        <span className="text-[11px] font-semibold text-teal-600">Compliant</span>
      </div>
      <div className="grid grid-cols-1 gap-2.5">
        {[
          { title: 'Local Technical Representation (LTR)', desc: 'Official market authorization holder in Kenya & East Africa.' },
          { title: 'Product Registration & Licensing', desc: 'End-to-end dossier preparation, submission, and tracking.' },
          { title: 'Pharmacovigilance & Safety', desc: 'Continuous safety monitoring, reporting, and post-market surveillance.' },
          { title: 'Import & Customs Clearance', desc: 'Regulatory import permits, port coordination, and batch release.' },
        ].map((item, idx) => (
          <div key={idx} className="rounded-xl border border-teal-200/80 bg-gradient-to-r from-teal-50/80 via-white/90 to-emerald-50/50 p-3.5 backdrop-blur-md flex items-start gap-3 shadow-sm">
            <CheckCircle2 className="text-teal-600 shrink-0 mt-0.5" size={16} />
            <div>
              <h4 className="text-xs font-bold text-slate-900">{item.title}</h4>
              <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SystemsVisual() {
  return (
    <div className="space-y-3 w-full">
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-bold tracking-wider text-slate-500 uppercase">SYSTEMS & INFRASTRUCTURE</span>
        <span className="text-[11px] font-semibold text-purple-600">Automated</span>
      </div>
      <div className="rounded-xl border border-slate-200/80 bg-white/70 p-4 backdrop-blur-md space-y-3 shadow-sm">
        <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500/10 via-fuchsia-500/5 to-purple-600/10 border border-purple-200/80 flex items-center justify-between">
          <span className="text-xs font-semibold text-purple-950">Regulatory Workflow Engine</span>
          <span className="text-[10px] bg-purple-200 text-purple-800 px-2 py-0.5 rounded-full font-bold">Active</span>
        </div>
        <div className="p-3 rounded-lg bg-gradient-to-r from-sky-500/10 via-blue-500/5 to-cyan-500/10 border border-sky-200/80 flex items-center justify-between">
          <span className="text-xs font-semibold text-sky-950">Supply Chain Traceability</span>
          <span className="text-[10px] bg-sky-200 text-sky-800 px-2 py-0.5 rounded-full font-bold">Syncing</span>
        </div>
        <div className="p-3 rounded-lg bg-gradient-to-r from-teal-500/10 via-emerald-500/5 to-teal-600/10 border border-teal-200/80 flex items-center justify-between">
          <span className="text-xs font-semibold text-teal-950">Compliance Audit Portal</span>
          <span className="text-[10px] bg-teal-200 text-teal-800 px-2 py-0.5 rounded-full font-bold">Verified</span>
        </div>
      </div>
    </div>
  );
}

export function MapVisual() {
  return (
    <div className="space-y-3 w-full">
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-bold tracking-wider text-slate-500 uppercase">REGIONAL COVERAGE</span>
        <span className="text-[11px] font-semibold text-sky-600">5 Nations</span>
      </div>
      <div className="grid grid-cols-2 gap-2.5">
        {[
          { country: 'Kenya', role: 'Regional Hub & LTR' },
          { country: 'Uganda', role: 'Regulatory Representation' },
          { country: 'Tanzania', role: 'Market Authorization' },
          { country: 'Rwanda', role: 'Distribution & Permits' },
          { country: 'Ethiopia', role: 'Trade Orchestration' },
        ].map((c, i) => (
          <div key={i} className="rounded-xl border border-sky-300/60 bg-gradient-to-br from-sky-500/15 via-white/80 to-blue-600/15 p-3 backdrop-blur-md shadow-sm">
            <span className="text-xs font-bold text-slate-900 block">{c.country}</span>
            <span className="text-[10px] text-slate-600 font-medium">{c.role}</span>
          </div>
        ))}
      </div>
    </div>
  );
}