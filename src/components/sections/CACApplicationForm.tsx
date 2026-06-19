"use client";
import { useState, useCallback } from "react";
import { CheckCircle, ArrowLeft, ArrowRight, ChevronDown } from "lucide-react";
import { SITE, NIGERIA_STATES, CAC_REGISTRATION_TYPES } from "@/lib/data";
import { cn } from "@/lib/utils";

/* ── helpers ── */
function gv(id: string): string {
  if (typeof document === "undefined") return "";
  const el = document.getElementById(id) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null;
  return el?.value?.trim() ?? "";
}

function PersonBlock({
  label, prefix, index, removable, onRemove,
}: {
  label: string; prefix: string; index: number; removable: boolean; onRemove: () => void;
}) {
  const p = `${prefix}_${index}`;
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden mb-4">
      <div className="flex items-center justify-between bg-slate-50 px-4 py-3 border-b border-slate-200">
        <span className="font-mono text-xs font-bold text-slate-700 tracking-wide">{label} {index + 1}</span>
        {removable && (
          <button
            type="button"
            onClick={onRemove}
            className="text-xs text-red-500 border border-red-200 rounded-lg px-3 py-1 hover:bg-red-50 transition-colors"
          >
            ✕ Remove
          </button>
        )}
      </div>
      <div className="p-5 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Field label="Surname *"    id={`${p}_surname`}    placeholder="e.g. Adeyemi" />
          <Field label="First Name *" id={`${p}_firstName`}  placeholder="e.g. Oluwaseun" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Field label="Date of Birth" id={`${p}_dob`}  type="date" />
          <SelectField label="Gender" id={`${p}_gender`} options={["Male","Female"]} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Field label="Phone"        id={`${p}_phone`}  type="tel"   placeholder="08012345678" />
          <Field label="Email"        id={`${p}_email`}  type="email" placeholder="email@example.com" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Field label="Nationality"  id={`${p}_nationality`} defaultValue="Nigerian" />
          <Field label="Occupation"   id={`${p}_occupation`}  placeholder="e.g. Entrepreneur" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Field label="NIN"          id={`${p}_nin`}      placeholder="11-digit NIN" maxLength={11} />
          <SelectField label="ID Type" id={`${p}_idType`} options={["National Identity Card (NIN)","International Passport","Driver's Licence","Voter's Card (PVC)"]} />
        </div>
        <Field label="ID Number" id={`${p}_idNumber`} placeholder="Document number" />
        <div className="grid grid-cols-2 gap-4">
          <SelectField label="State"  id={`${p}_state`} options={NIGERIA_STATES} />
          <Field label="LGA"          id={`${p}_lga`}   placeholder="Local Government Area" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Field label="City / Town"  id={`${p}_city`}    placeholder="e.g. Magboro" />
          <Field label="House No."    id={`${p}_houseNo`} placeholder="e.g. 12" />
        </div>
        <Field label="Street Name" id={`${p}_street`} placeholder="e.g. Bankole Estate Road" />
      </div>
    </div>
  );
}

function Field({
  label, id, type = "text", placeholder, defaultValue, maxLength,
}: {
  label: string; id: string; type?: string; placeholder?: string; defaultValue?: string; maxLength?: number;
}) {
  return (
    <div>
      <label htmlFor={id} className="label-field">{label}</label>
      <input
        type={type}
        id={id}
        defaultValue={defaultValue}
        placeholder={placeholder}
        maxLength={maxLength}
        className="input"
      />
    </div>
  );
}

function SelectField({ label, id, options }: { label: string; id: string; options: string[] }) {
  return (
    <div>
      <label htmlFor={id} className="label-field">{label}</label>
      <div className="relative">
        <select id={id} className="input appearance-none pr-8">
          <option value="">— Select —</option>
          {options.map((o) => <option key={o}>{o}</option>)}
        </select>
        <ChevronDown size={13} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
      </div>
    </div>
  );
}

function TextAreaField({ label, id, rows = 3, placeholder }: { label: string; id: string; rows?: number; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={id} className="label-field">{label}</label>
      <textarea id={id} rows={rows} placeholder={placeholder} className="input resize-none" />
    </div>
  );
}

/* ── Step indicator ── */
const STEP_LABELS = ["Type","Personal","Address","Details","Docs","Review"];

function StepIndicator({ current, total }: { current: number; total: number }) {
  const pct = ((current - 1) / (total - 1)) * 100;
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 mb-6 shadow-card">
      <div className="relative">
        {/* Track */}
        <div className="absolute top-[19px] left-[19px] right-[19px] h-0.5 bg-slate-200 z-0" />
        {/* Fill */}
        <div
          className="absolute top-[19px] left-[19px] h-0.5 bg-green-600 z-0 transition-all duration-500"
          style={{ width: `calc(${pct}% * (100% - 38px) / 100)` }}
        />
        <div className="relative flex justify-between z-10">
          {STEP_LABELS.map((label, i) => {
            const num = i + 1;
            const done   = num < current;
            const active = num === current;
            return (
              <div key={label} className="flex flex-col items-center gap-1.5">
                <div className={cn(
                  "w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all duration-300",
                  done   ? "bg-green-600 border-green-600 text-white"
                  : active ? "bg-white border-green-700 text-green-700 shadow-brand-sm"
                  : "bg-white border-slate-200 text-slate-400"
                )}>
                  {done ? <CheckCircle size={16} /> : num}
                </div>
                <span className={cn(
                  "text-[10px] font-mono tracking-wide hidden sm:block",
                  active ? "text-green-700 font-bold" : done ? "text-green-600" : "text-slate-400"
                )}>
                  {label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ── Section header ── */
function SectionHead({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="border-l-2 border-green-600 pl-4 mb-6">
      <h4 className="font-bold text-slate-900 text-sm">{title}</h4>
      {sub && <p className="text-xs text-slate-500 mt-0.5">{sub}</p>}
    </div>
  );
}

/* ── Step wrapper ── */
function FormCard({ children, title, step, total }: { children: React.ReactNode; title: string; step: number; total: number }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-card overflow-hidden">
      <div className="border-b border-slate-100 px-7 py-4 bg-slate-50/60">
        <div className="font-mono text-[10px] text-green-700 tracking-widest uppercase mb-0.5">Step {step} of {total}</div>
        <h3 className="font-bold text-slate-900 text-base">{title}</h3>
      </div>
      <div className="p-7">{children}</div>
    </div>
  );
}

/* ── Button row ── */
function BtnRow({ onBack, onNext, nextLabel = "Continue", submitting = false }: {
  onBack?: () => void; onNext?: () => void; nextLabel?: string; submitting?: boolean;
}) {
  return (
    <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-100">
      {onBack ? (
        <button type="button" onClick={onBack}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-200 text-slate-600 text-sm font-semibold hover:border-slate-300 transition-colors">
          <ArrowLeft size={14} /> Back
        </button>
      ) : <div />}
      <button type="button" onClick={onNext} disabled={submitting}
        className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-green-700 text-white text-sm font-bold hover:bg-green-600 transition-colors shadow-brand-sm disabled:opacity-60">
        {submitting ? "Submitting…" : nextLabel}
        {!submitting && <ArrowRight size={14} />}
      </button>
    </div>
  );
}

/* ── Review block ── */
function RevBlock({ title, rows }: { title: string; rows: [string, string][] }) {
  const filled = rows.filter(([, v]) => v);
  if (!filled.length) return null;
  return (
    <div className="rounded-xl overflow-hidden border border-slate-200 mb-4">
      <div className="bg-green-700 text-white px-4 py-2.5 text-xs font-bold font-mono tracking-wide">{title}</div>
      {filled.map(([label, val]) => (
        <div key={label} className="flex text-sm border-b border-slate-100 last:border-0">
          <div className="w-36 px-4 py-2.5 text-slate-400 text-xs font-mono font-semibold shrink-0 bg-slate-50/50">{label}</div>
          <div className="px-4 py-2.5 text-slate-700 font-medium flex-1">{val}</div>
        </div>
      ))}
    </div>
  );
}

/* ══════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════ */
export default function CACApplicationForm() {
  const [step, setStep]       = useState(1);
  const [selType, setSelType] = useState("");
  const [error, setError]     = useState("");
  const [submitting, setSub]  = useState(false);
  const [refNum, setRefNum]   = useState("");

  /* People arrays */
  const [directors,    setDirectors]    = useState<number[]>([]);
  const [shareholders, setShareholders] = useState<number[]>([]);
  const [trustees,     setTrustees]     = useState<number[]>([]);
  const [partners,     setPartners]     = useState<number[]>([]);
  const [witnesses,    setWitnesses]    = useState<number[]>([]);

  const nextId = useCallback((arr: number[]) => arr.length ? Math.max(...arr) + 1 : 0, []);

  const isLLC = selType === "limited-liability-company";
  const isBN  = selType === "business-name";
  const isNGO = selType === "incorporated-trustee";
  const isLLP = selType === "limited-liability-partnership";
  const isBiz = isBN || isLLC;

  const TOTAL = 6;

  /* ── Validation ── */
  function validate(): boolean {
    setError("");
    if (step === 1 && !selType) { setError("Please select a registration type to continue."); return false; }
    if (step === 2) {
      if (!gv("ap_surname") || !gv("ap_firstName") || !gv("ap_phone") || !gv("ap_email")) {
        setError("Please fill in all required fields marked with *."); return false;
      }
    }
    if (step === 4 && isNGO && trustees.length < 2) {
      setError("NGO registration requires a minimum of 2 trustees."); return false;
    }
    return true;
  }

  function next() {
    if (!validate()) return;
    if (step === 1) {
      // Pre-populate people arrays based on type
      if (isLLC && directors.length === 0)   { setDirectors([0]); }
      if (isNGO && trustees.length < 2)      { setTrustees([0, 1]); }
      if (isLLP && partners.length === 0)    { setPartners([0]); }
    }
    if (step < TOTAL) setStep(step + 1);
  }
  function back() { if (step > 1) setStep(step - 1); }

  /* ── Collect review data ── */
  function getReviewData() {
    return {
      type: CAC_REGISTRATION_TYPES.find(t => t.id === selType)?.title ?? selType,
      applicant: {
        name: `${gv("ap_firstName")} ${gv("ap_surname")}`,
        phone: gv("ap_phone"), email: gv("ap_email"),
        dob: gv("ap_dob"), gender: gv("ap_gender"), nin: gv("ap_nin"),
      },
      homeAddress: `${gv("ha_houseNo")}, ${gv("ha_street")}, ${gv("ha_city")}, ${gv("ha_state")}`,
      businessName: gv("biz_name1") || gv("org_name1") || gv("llp_name"),
    };
  }

  /* ── Submit ── */
  async function submit() {
    if (!validate()) return;
    setSub(true);
    try {
      const fd = new FormData();
      fd.append("registrationType", selType);
      fd.append("applicant.surname",     gv("ap_surname"));
      fd.append("applicant.firstName",   gv("ap_firstName"));
      fd.append("applicant.phone",       gv("ap_phone"));
      fd.append("applicant.email",       gv("ap_email"));
      fd.append("applicant.dateOfBirth", gv("ap_dob"));
      fd.append("applicant.gender",      gv("ap_gender"));
      fd.append("applicant.nin",         gv("ap_nin"));
      fd.append("applicant.nationality", gv("ap_nationality"));
      fd.append("applicant.occupation",  gv("ap_occupation"));
      fd.append("applicant.idType",      gv("doc_idType"));
      fd.append("applicant.idNumber",    gv("doc_idNumber"));
      fd.append("homeAddress.state",           gv("ha_state"));
      fd.append("homeAddress.lga",             gv("ha_lga"));
      fd.append("homeAddress.cityTownVillage", gv("ha_city"));
      fd.append("homeAddress.houseNumber",     gv("ha_houseNo"));
      fd.append("homeAddress.streetName",      gv("ha_street"));
      if (isBiz) {
        fd.append("business.proposedName1",    gv("biz_name1"));
        fd.append("business.proposedName2",    gv("biz_name2"));
        fd.append("business.natureOfBusiness", gv("biz_nature"));
        fd.append("businessAddress.state",     gv("ba_state"));
        fd.append("businessAddress.lga",       gv("ba_lga"));
        fd.append("businessAddress.cityTownVillage", gv("ba_city"));
        fd.append("businessAddress.houseNumber",     gv("ba_houseNo"));
        fd.append("businessAddress.streetName",      gv("ba_street"));
      }
      if (isNGO) {
        fd.append("org.proposedName1",   gv("org_name1"));
        fd.append("org.purposeNature",   gv("org_purpose"));
        fd.append("org.email",           gv("org_email"));
        fd.append("orgAddress.state",    gv("oa_state"));
        fd.append("orgAddress.lga",      gv("oa_lga"));
        fd.append("orgAddress.cityTownVillage", gv("oa_city"));
        fd.append("orgAddress.houseNumber",     gv("oa_houseNo"));
        fd.append("orgAddress.streetName",      gv("oa_street"));
      }
      if (isLLP) {
        fd.append("llp.name",            gv("llp_name"));
        fd.append("llp.natureOfBusiness",gv("llp_nature"));
      }

      const res = await fetch(`${SITE.api.cac}/cac/submit`, { method: "POST", body: fd });
      const data = await res.json();
      if (data.success) {
        setRefNum(data.referenceNumber || "ANDUS-CAC-001");
        setStep(7); // success state
      } else {
        setError(data.message || "Submission failed. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection and try again, or contact us via WhatsApp.");
    } finally {
      setSub(false);
    }
  }

  /* ── SUCCESS ── */
  if (step === 7) {
    return (
      <div className="max-w-xl mx-auto">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-card p-10 text-center">
          <div className="w-20 h-20 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center text-4xl mx-auto mb-6">✓</div>
          <h3 className="text-2xl font-bold text-slate-900 mb-3">Application Submitted!</h3>
          <p className="text-slate-500 mb-6 leading-relaxed">
            Your application has been received. Our team will contact you within{" "}
            <strong className="text-slate-700">24–48 hours</strong> to confirm next steps and advise on payment.
          </p>
          <div className="font-mono text-2xl font-bold text-green-700 bg-green-50 border border-green-200 rounded-xl px-6 py-4 inline-block mb-4">
            {refNum}
          </div>
          <p className="text-xs text-slate-400 mb-8">Save this reference number for tracking your application</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={`tel:${SITE.phone[0]}`} className="btn-primary">📞 {SITE.phone[0]}</a>
            <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white"
               style={{background:"#25D366"}}>
              💬 WhatsApp
            </a>
            <a href={`mailto:${SITE.email}`} className="btn-outline">✉ Email</a>
          </div>
        </div>
      </div>
    );
  }

  /* ── REVIEW DATA ── */
  const rv = step === 6 ? getReviewData() : null;

  return (
    <div className="max-w-3xl mx-auto">
      <StepIndicator current={step} total={TOTAL} />

      {error && (
        <div className="mb-5 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-2">
          <span className="text-lg">⚠️</span> {error}
        </div>
      )}

      {/* ── STEP 1: Type ── */}
      {step === 1 && (
        <FormCard title="Select Registration Type" step={1} total={TOTAL}>
          <div className="grid sm:grid-cols-2 gap-4">
            {CAC_REGISTRATION_TYPES.slice(0, 4).map((type) => (
              <button
                key={type.id}
                type="button"
                onClick={() => { setSelType(type.id); setError(""); }}
                className={cn(
                  "relative text-left border-2 rounded-xl p-5 transition-all duration-200",
                  selType === type.id
                    ? "border-green-600 bg-green-50"
                    : "border-slate-200 hover:border-green-300 hover:bg-green-50/40"
                )}
              >
                {selType === type.id && (
                  <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-green-600 flex items-center justify-center">
                    <CheckCircle size={12} className="text-white" />
                  </div>
                )}
                <div className="text-2xl mb-3">{type.icon}</div>
                <div className="font-bold text-slate-900 text-sm mb-1">{type.title}</div>
                <div className="text-xs text-slate-500 leading-relaxed">{type.description}</div>
                <div className="mt-2 font-mono text-[10px] text-green-700">{type.timeline}</div>
              </button>
            ))}
          </div>
          {/* LLP option */}
          <div className="mt-4">
            <button
              type="button"
              onClick={() => { setSelType("limited-liability-partnership"); setError(""); }}
              className={cn(
                "w-full text-left border-2 rounded-xl p-5 transition-all flex items-center gap-4",
                selType === "limited-liability-partnership"
                  ? "border-green-600 bg-green-50"
                  : "border-slate-200 hover:border-green-300 hover:bg-green-50/40"
              )}
            >
              <span className="text-2xl">👥</span>
              <div>
                <div className="font-bold text-slate-900 text-sm">Limited Liability Partnership</div>
                <div className="text-xs text-slate-500">For professionals, consultants, and joint ventures</div>
              </div>
              {selType === "limited-liability-partnership" && (
                <CheckCircle size={16} className="text-green-600 ml-auto shrink-0" />
              )}
            </button>
          </div>
          <BtnRow nextLabel="Continue — Personal Details" onNext={next} />
        </FormCard>
      )}

      {/* ── STEP 2: Personal Details ── */}
      {step === 2 && (
        <FormCard title="Personal Details" step={2} total={TOTAL}>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Field label="Surname *"     id="ap_surname"   placeholder="e.g. Adeyemi" />
              <Field label="First Name *"  id="ap_firstName" placeholder="e.g. Oluwaseun" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Field label="Other Name"    id="ap_otherName" placeholder="Middle name (optional)" />
              <Field label="Date of Birth" id="ap_dob"       type="date" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <SelectField label="Gender"      id="ap_gender"      options={["Male","Female"]} />
              <Field label="Nationality"       id="ap_nationality" defaultValue="Nigerian" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Field label="Phone Number *"    id="ap_phone"  type="tel"   placeholder="08012345678" />
              <Field label="Email Address *"   id="ap_email"  type="email" placeholder="yourname@email.com" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Field label="Occupation"        id="ap_occupation" placeholder="e.g. Entrepreneur, Trader" />
              <Field label="NIN"               id="ap_nin"        placeholder="11-digit NIN" maxLength={11} />
            </div>
          </div>
          <BtnRow onBack={back} onNext={next} nextLabel="Continue — Address Details" />
        </FormCard>
      )}

      {/* ── STEP 3: Address ── */}
      {step === 3 && (
        <FormCard title="Address Details" step={3} total={TOTAL}>
          <SectionHead title="Home Address" sub="Your personal residential address" />
          <div className="space-y-4 mb-8">
            <div className="grid grid-cols-2 gap-4">
              <SelectField label="State" id="ha_state" options={NIGERIA_STATES} />
              <Field label="LGA"         id="ha_lga"   placeholder="Local Government Area" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Field label="City / Town" id="ha_city"    placeholder="e.g. Magboro" />
              <Field label="House No."   id="ha_houseNo" placeholder="e.g. 12" />
            </div>
            <Field label="Street Name"   id="ha_street"  placeholder="e.g. Bankole Estate Road" />
          </div>

          {isBiz && (
            <>
              <SectionHead title="Business Address" sub="Registered office address of the business" />
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <SelectField label="State" id="ba_state" options={NIGERIA_STATES} />
                  <Field label="LGA"         id="ba_lga"   placeholder="Local Government Area" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Field label="City / Town" id="ba_city"    placeholder="e.g. Magboro" />
                  <Field label="House No."   id="ba_houseNo" placeholder="e.g. 12" />
                </div>
                <Field label="Street Name"   id="ba_street"  placeholder="e.g. Bankole Estate Road" />
              </div>
            </>
          )}

          {isNGO && (
            <>
              <SectionHead title="Organisation Address" />
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <SelectField label="State" id="oa_state" options={NIGERIA_STATES} />
                  <Field label="LGA"         id="oa_lga"   placeholder="Local Government Area" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Field label="City / Town" id="oa_city"    placeholder="e.g. Magboro" />
                  <Field label="House No."   id="oa_houseNo" placeholder="e.g. 12" />
                </div>
                <Field label="Street Name"   id="oa_street"  placeholder="e.g. Bankole Estate Road" />
              </div>
            </>
          )}

          <BtnRow onBack={back} onNext={next} nextLabel="Continue — Business Details" />
        </FormCard>
      )}

      {/* ── STEP 4: Business Details ── */}
      {step === 4 && (
        <FormCard title={isNGO ? "Organisation Details" : isLLP ? "Partnership Details" : "Business Details"} step={4} total={TOTAL}>
          {isBiz && (
            <div className="space-y-4 mb-6">
              <SectionHead title="Business Information" />
              <div className="grid grid-cols-2 gap-4">
                <Field label="Proposed Name 1 *" id="biz_name1" placeholder="Your first choice" />
                <Field label="Proposed Name 2"   id="biz_name2" placeholder="Alternative backup" />
              </div>
              <Field label="Nature of Business *" id="biz_nature" placeholder="e.g. General merchandise, ICT services, Construction" />
              <div className="grid grid-cols-2 gap-4">
                <Field label="Business Phone" id="biz_phone" type="tel" />
                <Field label="Business Email" id="biz_email" type="email" />
              </div>
            </div>
          )}

          {isNGO && (
            <div className="space-y-4 mb-6">
              <SectionHead title="Organisation Information" />
              <div className="grid grid-cols-2 gap-4">
                <Field label="Proposed Name 1 *" id="org_name1" />
                <Field label="Proposed Name 2"   id="org_name2" />
              </div>
              <TextAreaField label="Nature / Purpose *" id="org_purpose" rows={3} placeholder="Describe the mission and activities of the organisation..." />
              <div className="grid grid-cols-2 gap-4">
                <Field label="Organisation Email" id="org_email" type="email" />
                <Field label="Organisation Phone" id="org_phone" type="tel" />
              </div>
            </div>
          )}

          {isLLP && (
            <div className="space-y-4 mb-6">
              <SectionHead title="Partnership Information" />
              <Field label="LLP Name *"           id="llp_name"    />
              <Field label="Nature of Business *" id="llp_nature"  />
              <Field label="Registered Office"    id="llp_address" />
            </div>
          )}

          {/* Directors */}
          {isLLC && (
            <>
              <SectionHead title="Directors" sub="At least one director required" />
              {directors.map((id, i) => (
                <PersonBlock key={id} label="Director" prefix="directors" index={i}
                  removable={i > 0}
                  onRemove={() => setDirectors(directors.filter((_, idx) => idx !== i))} />
              ))}
              <button type="button" onClick={() => setDirectors([...directors, nextId(directors)])}
                className="btn-outline text-sm mb-6">+ Add Director</button>
            </>
          )}

          {/* Shareholders */}
          {(isBN || isLLC) && (
            <>
              <SectionHead title="Shareholders" sub="Optional" />
              {shareholders.map((id, i) => (
                <PersonBlock key={id} label="Shareholder" prefix="shareholders" index={i}
                  removable={true}
                  onRemove={() => setShareholders(shareholders.filter((_, idx) => idx !== i))} />
              ))}
              <button type="button" onClick={() => setShareholders([...shareholders, nextId(shareholders)])}
                className="btn-outline text-sm mb-6">+ Add Shareholder</button>
            </>
          )}

          {/* Witnesses */}
          {isLLC && (
            <>
              <SectionHead title="Witnesses" sub="At least one witness required" />
              {witnesses.map((id, i) => (
                <PersonBlock key={id} label="Witness" prefix="witnesses" index={i}
                  removable={i > 0}
                  onRemove={() => setWitnesses(witnesses.filter((_, idx) => idx !== i))} />
              ))}
              <button type="button" onClick={() => setWitnesses([...witnesses, nextId(witnesses)])}
                className="btn-outline text-sm mb-6">+ Add Witness</button>
            </>
          )}

          {/* Trustees */}
          {isNGO && (
            <>
              <SectionHead title="Trustees" sub="Minimum 2 trustees required" />
              {trustees.map((id, i) => (
                <PersonBlock key={id} label="Trustee" prefix="trustees" index={i}
                  removable={i >= 2}
                  onRemove={() => setTrustees(trustees.filter((_, idx) => idx !== i))} />
              ))}
              <button type="button" onClick={() => setTrustees([...trustees, nextId(trustees)])}
                className="btn-outline text-sm mb-6">+ Add Trustee</button>
            </>
          )}

          {/* Partners */}
          {isLLP && (
            <>
              <SectionHead title="Partners" />
              {partners.map((id, i) => (
                <PersonBlock key={id} label="Partner" prefix="partners" index={i}
                  removable={i > 0}
                  onRemove={() => setPartners(partners.filter((_, idx) => idx !== i))} />
              ))}
              <button type="button" onClick={() => setPartners([...partners, nextId(partners)])}
                className="btn-outline text-sm mb-6">+ Add Partner</button>
            </>
          )}

          <BtnRow onBack={back} onNext={next} nextLabel="Continue — Documents" />
        </FormCard>
      )}

      {/* ── STEP 5: Documents ── */}
      {step === 5 && (
        <FormCard title="Supporting Documents" step={5} total={TOTAL}>
          <SectionHead title="Applicant Identification" />
          <div className="space-y-4 mb-6">
            <div className="grid grid-cols-2 gap-4">
              <SelectField label="ID Type"   id="doc_idType"   options={["National Identity Card (NIN)","International Passport","Driver's Licence","Permanent Voter's Card (PVC)"]} />
              <Field label="ID Number"       id="doc_idNumber" placeholder="Document number" />
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800 mb-6">
            <strong>Document Upload:</strong> Please have your ID document, signature, and passport photograph ready.
            Our team will request these via WhatsApp or email after reviewing your initial application.
            You can also email documents to{" "}
            <a href={`mailto:${SITE.email}`} className="underline">{SITE.email}</a>.
          </div>

          {isNGO && (
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm text-slate-600">
              <strong>For NGO/Incorporated Trustees:</strong> Please also prepare:
              <ul className="mt-2 space-y-1 list-disc list-inside text-xs">
                <li>Meeting minutes from inaugural meeting</li>
                <li>Organisation constitution / trust deed</li>
                <li>Trustee photographs and ID documents</li>
              </ul>
            </div>
          )}

          <BtnRow onBack={back} onNext={next} nextLabel="Continue — Review" />
        </FormCard>
      )}

      {/* ── STEP 6: Review ── */}
      {step === 6 && rv && (
        <FormCard title="Review & Submit" step={6} total={TOTAL}>
          <p className="text-sm text-slate-500 mb-6">
            Review all details carefully before submitting. Use <strong>Back</strong> to make changes.
          </p>

          <RevBlock title="Registration Type" rows={[["Type", rv.type]]} />
          <RevBlock title="Applicant Details" rows={[
            ["Full Name", rv.applicant.name],
            ["Phone",     rv.applicant.phone],
            ["Email",     rv.applicant.email],
            ["D.O.B",     rv.applicant.dob],
            ["Gender",    rv.applicant.gender],
            ["NIN",       rv.applicant.nin],
          ]} />
          <RevBlock title="Home Address" rows={[["Address", rv.homeAddress]]} />
          {rv.businessName && (
            <RevBlock title={isNGO ? "Organisation" : "Business"} rows={[["Proposed Name", rv.businessName]]} />
          )}

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs text-amber-800 mb-6 leading-relaxed">
            ⚠ By submitting this application you confirm that all information provided is accurate and complete.
            ANDUS International will contact you within <strong>24–48 hours</strong> to confirm next steps and advise on payment.
            All information is kept strictly confidential.
          </div>

          <BtnRow onBack={back} onNext={submit} nextLabel="Submit Application" submitting={submitting} />
        </FormCard>
      )}
    </div>
  );
}
