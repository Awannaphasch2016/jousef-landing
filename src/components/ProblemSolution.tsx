import { X, Check, AlertCircle, TrendingUp } from "lucide-react";

// Problem points - what's wrong with standard approaches
const problems = [
  {
    title: "Kein Vertrauen aufgebaut",
    description:
      "Generische Prozesse, die keine Glaubwürdigkeit schaffen und Ihren einzigartigen Mehrwert nicht hervorheben.",
  },
  {
    title: "Keine klare Struktur",
    description:
      "Verwirrende Abläufe und schlechte Dokumentation, die potenzielle Effizienz verschenkt.",
  },
  {
    title: "Keine messbaren Ergebnisse",
    description:
      "Schöne Dashboards, die Ihrem Unternehmen keine echten Erkenntnisse oder Verbesserungen bringen.",
  },
];

// Solution points - what Leadflow offers
const solutions = [
  {
    title: "Vertrauen auf den ersten Blick",
    description:
      "Moderne, ehrliche Architektur, die sofort Professionalität zeigt.",
  },
  {
    title: "Klarer roter Faden",
    description:
      "Strukturierte Prozesse, die Ihr Team und Ihre Kunden intuitiv durch jeden Schritt führen.",
  },
  {
    title: "Messbarer ROI",
    description:
      "Systeme, die konkret zum Wachstum beitragen – mit transparentem Tracking.",
  },
  {
    title: "Skalierbare Grundlage",
    description:
      "Architekturen, die mit Ihrem Unternehmen wachsen und sich anpassen.",
  },
];

export const ProblemSolution = () => {
  return (
    <section className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800">
      {/* Problem Section */}
      <div id="standard-problem" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Das Problem mit{" "}
              <span className="text-red-400">alten und 0815</span>
              <br />
              Standard-Prozessen
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Sie sehen an der Oberfläche gut aus, aber scheitern dort, wo es am
              wichtigsten ist
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Mock standard website */}
            <div className="bg-slate-900 rounded-xl p-6 border border-slate-600">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex-1 bg-slate-700 rounded px-3 py-1 text-slate-400 text-sm">
                  www.standard-prozess.de
                </div>
              </div>
              {/* Mock content */}
              <div className="space-y-4">
                <div className="h-8 bg-slate-700 rounded w-1/3" />
                <div className="h-4 bg-slate-700 rounded w-2/3" />
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-20 bg-slate-700 rounded" />
                  <div className="h-20 bg-slate-700 rounded" />
                </div>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-xs flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    Keine Skalierung
                  </span>
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    Wenig Transparenz
                  </span>
                </div>
              </div>
            </div>

            {/* Problem list */}
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-700"
                >
                  <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                    <X className="w-4 h-4 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      {problem.title}
                    </h3>
                    <p className="text-slate-400 text-sm">
                      {problem.description}
                    </p>
                  </div>
                </div>
              ))}
              {/* Result callout */}
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30">
                <p className="text-red-400 text-center font-medium">
                  Ergebnis: Prozesse, die Zeit kosten, aber keinen Wert schaffen
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Solution Section */}
      <div id="standard-solution" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Was dein Unternehmen braucht, damit
              <br />
              aus <span className="text-emerald-400">Chaos Struktur</span> wird
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Wir entwickeln Architekturen, die Unternehmen transformieren –
              nicht nur optimieren
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Solution list */}
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-700"
                >
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      {solution.title}
                    </h3>
                    <p className="text-slate-400 text-sm">
                      {solution.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mock Leadflow website */}
            <div className="bg-slate-900 rounded-xl p-6 border border-emerald-500/30">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex-1 bg-slate-700 rounded px-3 py-1 text-slate-400 text-sm">
                  www.dein-unternehmen.de
                </div>
              </div>
              {/* Mock content with branding */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="px-3 py-1 bg-primary rounded text-white text-sm font-medium">
                    Prozessarchitektur
                  </div>
                  <div className="h-4 bg-slate-700 rounded flex-1" />
                </div>
                <div className="h-4 bg-slate-700 rounded w-2/3" />
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-20 bg-gradient-to-br from-primary/20 to-emerald-500/20 rounded border border-primary/30" />
                  <div className="h-20 bg-gradient-to-br from-primary/20 to-emerald-500/20 rounded border border-primary/30" />
                </div>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    Skalierbar
                  </span>
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs flex items-center gap-1">
                    <Check className="w-3 h-3" />
                    Messbar
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
