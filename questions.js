// ═══════════════════════════════════════════════════════════
// TESCIA — BASE DE DONNÉES DES QUESTIONS
// ═══════════════════════════════════════════════════════════

const TESCIA_DB = [

// ══════════════════════════════════════════
// THÈME 1 : LIMITES DE FONCTIONS
// ══════════════════════════════════════════

// ── 2026 Exercice 2 ──
{id:"2026-M9",year:2026,source:"MG2026 Ex.2",theme:"Limites",subtheme:"Limites en +∞",level:2,type:"M",
context:"On étudie des limites de fonctions.",
question:"Quand $x$ tend vers $+\\infty$, la quantité $\\exp\\!\\left(\\dfrac{e^{-x}}{x}\\right)$ tend vers :",
choices:["$+\\infty$","$-\\infty$","$0$","une limite finie non nulle","aucune limite, finie ou non"],
answer:"D",
explanation:"Quand $x\\to+\\infty$, $e^{-x}/x \\to 0$, donc $\\exp(e^{-x}/x)\\to e^0=1$, limite finie non nulle."},

{id:"2026-M12",year:2026,source:"MG2026 Ex.2",theme:"Limites",subtheme:"Croissances comparées",level:2,type:"M",
context:"",
question:"Quand $x$ tend vers $+\\infty$, la quantité $e^x - 2026\\,x^{2026}$ tend vers :",
choices:["une limite finie non nulle","$0$","$-\\infty$","aucune limite","$+\\infty$"],
answer:"E",
explanation:"Par croissances comparées, $e^x$ domine tout polynôme, donc $e^x - 2026x^{2026}\\to+\\infty$."},

{id:"2026-M13",year:2026,source:"MG2026 Ex.2",theme:"Limites",subtheme:"Limites en -∞",level:2,type:"M",
context:"",
question:"Quand $x$ tend vers $-\\infty$, la quantité $e^x - 2026\\,x^{2026}$ tend vers :",
choices:["$+\\infty$","$-\\infty$","une limite finie non nulle","aucune limite","$0$"],
answer:"B",
explanation:"Quand $x\\to-\\infty$ : $e^x\\to 0$ et $x^{2026}\\to+\\infty$ (exposant pair), donc $-2026x^{2026}\\to-\\infty$."},

{id:"2026-M14",year:2026,source:"MG2026 Ex.2",theme:"Limites",subtheme:"Fonctions oscillantes",level:3,type:"M",
context:"",
question:"Quand $x$ tend vers $+\\infty$, la quantité $\\exp(\\cos(x))$ tend vers :",
choices:["une limite finie non nulle","aucune limite, finie ou non","$+\\infty$","$-\\infty$","$0$"],
answer:"B",
explanation:"$\\cos(x)$ n'a pas de limite en $+\\infty$, donc $\\exp(\\cos(x))$ n'en a pas non plus."},

{id:"2026-M15",year:2026,source:"MG2026 Ex.2",theme:"Limites",subtheme:"Fonctions oscillantes",level:3,type:"M",
context:"",
question:"Quand $x$ tend vers $+\\infty$, la quantité $\\exp(x + \\cos(x))$ tend vers :",
choices:["$0$","$+\\infty$","une limite finie non nulle","$-\\infty$","aucune limite, finie ou non"],
answer:"B",
explanation:"$x+\\cos(x)\\geq x-1\\to+\\infty$, donc $\\exp(x+\\cos(x))\\to+\\infty$."},

{id:"2026-L1",year:2026,source:"MG2026 Ex.2",theme:"Limites",subtheme:"Calcul de limite",level:3,type:"L",
context:"",
question:"Déterminer la limite quand $x\\to+\\infty$ de $\\dfrac{e^x - e^{2x}}{e^x - e^{-x}}$.",
answerValue:"-Infinity",answerDisplay:"$-\\infty$",
explanation:"Factoriser $e^x$ : $\\frac{e^x(1-e^x)}{e^x(1-e^{-2x})}=\\frac{1-e^x}{1-e^{-2x}}\\to\\frac{-\\infty}{1}=-\\infty$."},

{id:"2026-L2",year:2026,source:"MG2026 Ex.2",theme:"Limites",subtheme:"Calcul de limite en 0",level:3,type:"L",
context:"",
question:"Déterminer la limite quand $x\\to 0$ de $\\dfrac{e^x - e^{2x}}{e^x - e^{-x}}$.",
answerValue:"-0.5",answerDisplay:"$-\\dfrac{1}{2}$",
explanation:"En $0$ : num $\\sim 1\\cdot(1-1)$... Par DL : num $=e^x(1-e^x)\\approx 1\\cdot(-x)=-x$, dén $=e^x-e^{-x}\\approx 2x$. Donc $\\to -x/(2x)=-1/2$."},

// ── 2025 Exercice 1 ──
{id:"2025-M1",year:2025,source:"MG2025 Ex.1",theme:"Limites",subtheme:"Polynômes",level:1,type:"M",
context:"On considère $f:x\\mapsto 3x^2-5x+2$ et $g:x\\mapsto\\dfrac{1}{x}$.",
question:"Quand $x$ tend vers $+\\infty$, $f(x)$ tend vers :",
choices:["$0$","$+\\infty$","aucune limite","un réel non nul","$-\\infty$"],
answer:"B",
explanation:"$3x^2-5x+2\\to+\\infty$."},

{id:"2025-M2",year:2025,source:"MG2025 Ex.1",theme:"Limites",subtheme:"Polynômes",level:1,type:"M",
context:"On considère $f:x\\mapsto 3x^2-5x+2$.",
question:"Quand $x$ tend vers $-\\infty$, $f(x)$ tend vers :",
choices:["aucune limite","$+\\infty$","un réel non nul","$-\\infty$","$0$"],
answer:"B",
explanation:"$3x^2\\to+\\infty$ même pour $x\\to-\\infty$ (carré positif)."},

{id:"2025-M3",year:2025,source:"MG2025 Ex.1",theme:"Limites",subtheme:"Limites en +∞",level:1,type:"M",
context:"On considère $g:x\\mapsto\\dfrac{1}{x}$.",
question:"Quand $x$ tend vers $+\\infty$, $g(x)$ tend vers :",
choices:["$+\\infty$","$-\\infty$","un réel non nul","aucune limite","$0$"],
answer:"E",
explanation:"$1/x\\to 0$."},

{id:"2025-M4",year:2025,source:"MG2025 Ex.1",theme:"Limites",subtheme:"Limites unilatérales",level:2,type:"M",
context:"On considère $g:x\\mapsto\\dfrac{1}{x}$.",
question:"Quand $x$ tend vers $0$ avec $x<0$, $g(x)$ tend vers :",
choices:["$-\\infty$","$+\\infty$","$0$","aucune limite","un réel non nul"],
answer:"A",
explanation:"Si $x\\to 0^-$, $1/x\\to-\\infty$."},

{id:"2025-M5",year:2025,source:"MG2025 Ex.1",theme:"Limites",subtheme:"Composition",level:3,type:"M",
context:"$f:x\\mapsto 3x^2-5x+2$, $g:x\\mapsto 1/x$.",
question:"Quand $x$ tend vers $0$, $f(g(x))$ tend vers :",
choices:["$-\\infty$","$+\\infty$","$0$","aucune limite","un réel non nul"],
answer:"B",
explanation:"$g(x)\\to\\pm\\infty$, donc $f(1/x)=3/x^2-5/x+2\\sim 3/x^2\\to+\\infty$."},

{id:"2025-M9",year:2025,source:"MG2025 Ex.1",theme:"Limites",subtheme:"Taux de variation",level:3,type:"M",
context:"$f:x\\mapsto 3x^2-5x+2$.",
question:"Quand $x$ tend vers $1$, $\\dfrac{f(x)}{x-1}$ tend vers :",
choices:["aucune limite","valeur $\\neq 0,1,+\\infty$","$0$","$+\\infty$","$1$"],
answer:"E",
explanation:"$f(1)=0$, factoriser : $\\frac{(x-1)(3x-2)}{x-1}=3x-2\\to 1$."},

{id:"2025-M10",year:2025,source:"MG2025 Ex.1",theme:"Limites",subtheme:"Taux de variation",level:3,type:"M",
context:"$f:x\\mapsto 3x^2-5x+2$.",
question:"Quand $x$ tend vers $2$, $\\dfrac{f(x)-4}{x-2}$ tend vers :",
choices:["valeur $\\neq 0,2,7$","aucune limite","$7$","$2$","$0$"],
answer:"C",
explanation:"$f(2)=4$. Le taux de variation $\\to f'(2)=6(2)-5=7$."},

{id:"2025-L1",year:2025,source:"MG2025 Ex.1",theme:"Limites",subtheme:"Calcul de limite",level:4,type:"L",
context:"$f:x\\mapsto 3x^2-5x+2$, $g:x\\mapsto 1/x$.",
question:"Donner la limite de $\\dfrac{f(x)-4}{2g(x)-1}$ quand $x\\to 2$.",
answerValue:"-14",answerDisplay:"$-14$",
explanation:"Num $\\sim 7(x-2)$, dén : $2/x-1=\\frac{2-x}{x}\\sim\\frac{-(x-2)}{2}$. Rapport $\\to\\frac{7}{-1/2}=-14$."},

// ── 2023 Exercice 3 ──
{id:"2023-M20",year:2023,source:"MG2023 Ex.3",theme:"Limites",subtheme:"Polynômes",level:1,type:"M",
context:"",
question:"La limite de $3x^6 - 10x^2 + 4$ quand $x\\to-\\infty$ :",
choices:["est $-\\infty$","n'existe pas","est $+\\infty$","est $3x^6$","est $4$"],
answer:"C",
explanation:"$3x^6\\to+\\infty$ (puissance paire)."},

{id:"2023-M22",year:2023,source:"MG2023 Ex.3",theme:"Limites",subtheme:"Exponentielle",level:3,type:"M",
context:"",
question:"La limite de $\\dfrac{e^x}{e^{-x}-1}$ quand $x\\to+\\infty$ :",
choices:["est $-\\infty$","n'existe pas","est $+\\infty$","est finie non nulle","est $0$"],
answer:"A",
explanation:"$e^{-x}-1\\to-1$, $e^x\\to+\\infty$, donc rapport $\\to -\\infty$."},

{id:"2023-M23",year:2023,source:"MG2023 Ex.3",theme:"Limites",subtheme:"Logarithme",level:2,type:"M",
context:"",
question:"La limite de $\\dfrac{\\ln(x)}{x}$ quand $x\\to0^+$ :",
choices:["est $+\\infty$","est $-\\infty$","n'existe pas","est finie non nulle","est $0$"],
answer:"B",
explanation:"$\\ln x\\to-\\infty$ et $x\\to0^+$, donc $\\ln(x)/x\\to-\\infty$."},

{id:"2023-M24",year:2023,source:"MG2023 Ex.3",theme:"Limites",subtheme:"Exponentielle",level:2,type:"M",
context:"",
question:"La limite de $e^x - e^{2x}$ quand $x\\to+\\infty$ :",
choices:["n'existe pas","est $0$","est $-\\infty$","est finie non nulle","est $+\\infty$"],
answer:"C",
explanation:"$e^{2x}$ domine $e^x$, donc $e^x-e^{2x}\\sim-e^{2x}\\to-\\infty$."},

{id:"2023-M25",year:2023,source:"MG2023 Ex.3",theme:"Limites",subtheme:"Logarithme",level:2,type:"M",
context:"",
question:"La limite de $\\ln(3x+1)-\\ln(x)$ quand $x\\to+\\infty$ :",
choices:["est $-\\infty$","n'existe pas","est $+\\infty$","est finie non nulle","est $0$"],
answer:"D",
explanation:"$=\\ln\\!\\left(\\frac{3x+1}{x}\\right)=\\ln\\!\\left(3+\\frac{1}{x}\\right)\\to\\ln 3$."},

{id:"2023-L5",year:2023,source:"MG2023 Ex.3",theme:"Limites",subtheme:"Calcul de limite",level:4,type:"L",
context:"",
question:"Donner la limite $\\ell$ de $\\dfrac{xe^x}{\\sqrt{1+x}-1}$ quand $x\\to0^+$.",
answerValue:"2",answerDisplay:"$2$",
explanation:"Num $\\approx x$, dén $\\approx x/2$. Rapport $\\to 2$."},

// ── 2022 Exercice 7 ──
{id:"2022-M43",year:2022,source:"MG2022 Ex.7",theme:"Limites",subtheme:"Polynômes",level:1,type:"M",
context:"",
question:"Lorsque $x\\to-\\infty$, la quantité $-10x^2+3x^6+4$ tend vers :",
choices:["$3x^6$","$-\\infty$","$1$","$4$","$+\\infty$"],
answer:"E",
explanation:"$3x^6\\to+\\infty$ (puissance paire)."},

{id:"2022-M45",year:2022,source:"MG2022 Ex.7",theme:"Limites",subtheme:"Exponentielle",level:3,type:"M",
context:"",
question:"Lorsque $x\\to+\\infty$, la quantité $\\dfrac{e^x}{e^{-x}-1}$ tend vers :",
choices:["une limite finie non nulle","$0$","$+\\infty$","aucune limite","$-\\infty$"],
answer:"E",
explanation:"$e^{-x}-1\\to-1$, $e^x\\to+\\infty$, rapport $\\to-\\infty$."},

{id:"2022-M49",year:2022,source:"MG2022 Ex.7",theme:"Limites",subtheme:"Taux de variation",level:2,type:"M",
context:"",
question:"Lorsque $x\\to0$, la quantité $\\dfrac{e^{2+3x}-e^2}{x}$ tend vers :",
choices:["$3e$","$e^2$","$-\\infty$","$3e^2$","$+\\infty$"],
answer:"D",
explanation:"Taux de variation de $x\\mapsto e^{2+3x}$ en $0$ : dérivée $=3e^{2+3\\cdot0}=3e^2$."},

// ── 2021 Exercice 8 ──
{id:"2021-M51",year:2021,source:"MG2021 Ex.8",theme:"Limites",subtheme:"Polynômes+ln",level:2,type:"M",
context:"",
question:"Quand $x\\to+\\infty$, la quantité $-5x+x^3-2\\ln(x^4)$ tend vers :",
choices:["aucune limite","$0$","$-\\infty$","une limite finie non nulle","$+\\infty$"],
answer:"E",
explanation:"$x^3$ domine $5x$ et $8\\ln x$, donc $\\to+\\infty$."},

{id:"2021-M52",year:2021,source:"MG2021 Ex.8",theme:"Limites",subtheme:"Exponentielle",level:2,type:"M",
context:"",
question:"Quand $x\\to+\\infty$, la quantité $2e^x-e^{x/2}+(\\ln(e^{3x}))^4$ tend vers :",
choices:["$+\\infty$","aucune limite","une limite finie non nulle","$-\\infty$","$0$"],
answer:"A",
explanation:"$2e^x\\to+\\infty$ domine tout."},

{id:"2021-M57",year:2021,source:"MG2021 Ex.8",theme:"Limites",subtheme:"Logarithme",level:3,type:"M",
context:"",
question:"Quand $u\\to0$, la quantité $\\dfrac{\\ln(1+u)}{u}$ tend vers :",
choices:["une limite finie non nulle","aucune limite","$-\\infty$","$0$","$+\\infty$"],
answer:"A",
explanation:"C'est la définition de la dérivée de $\\ln$ en $1$ : $\\ln'(1)=1$. Donc la limite vaut $1$."},

{id:"2021-M61",year:2021,source:"MG2021 Ex.8",theme:"Limites",subtheme:"Formes indéterminées",level:3,type:"M",
context:"",
question:"Quand $x\\to+\\infty$, la quantité $\\sqrt{x+1}-\\sqrt{x-1}$ tend vers :",
choices:["Rien de tout cela","$+\\infty$","$\\frac{1}{2}$","$1$","$0$"],
answer:"E",
explanation:"$=\\frac{(x+1)-(x-1)}{\\sqrt{x+1}+\\sqrt{x-1}}=\\frac{2}{\\sqrt{x+1}+\\sqrt{x-1}}\\to0$."},

{id:"2021-M62",year:2021,source:"MG2021 Ex.8",theme:"Limites",subtheme:"Formes indéterminées",level:4,type:"M",
context:"",
question:"Quand $x\\to+\\infty$, la quantité $\\sqrt{x}\\left(\\sqrt{x+1}-\\sqrt{x-1}\\right)$ tend vers :",
choices:["$1$","Rien de tout cela","$\\frac{1}{2}$","$+\\infty$","$0$"],
answer:"A",
explanation:"$\\sqrt{x}\\cdot\\frac{2}{\\sqrt{x+1}+\\sqrt{x-1}}\\sim\\frac{2\\sqrt{x}}{2\\sqrt{x}}=1$."},

// ── QUESTIONS INVENTÉES ──
{id:"INV-L-001",year:null,source:"Inédit",theme:"Limites",subtheme:"Formes indéterminées",level:2,type:"M",
context:"",
question:"Quand $x\\to+\\infty$, la quantité $\\dfrac{x^2+3x}{x^2-1}$ tend vers :",
choices:["$0$","$1$","$3$","$+\\infty$","aucune limite"],
answer:"B",
explanation:"Diviser par $x^2$ : $\\frac{1+3/x}{1-1/x^2}\\to 1$."},

{id:"INV-L-002",year:null,source:"Inédit",theme:"Limites",subtheme:"Formes indéterminées",level:3,type:"M",
context:"",
question:"Quand $x\\to 0$, la quantité $\\dfrac{\\sin(3x)}{x}$ tend vers :",
choices:["$0$","$1$","$3$","$+\\infty$","aucune limite"],
answer:"C",
explanation:"$\\frac{\\sin(3x)}{x}=3\\cdot\\frac{\\sin(3x)}{3x}\\to 3\\cdot 1=3$."},

{id:"INV-L-003",year:null,source:"Inédit",theme:"Limites",subtheme:"Croissances comparées",level:3,type:"M",
context:"",
question:"Quand $x\\to+\\infty$, la quantité $x^{100}e^{-x}$ tend vers :",
choices:["$+\\infty$","$100$","$1$","$0$","aucune limite"],
answer:"D",
explanation:"Par croissances comparées, $e^x$ domine toute puissance, donc $x^{100}e^{-x}\\to 0$."},

{id:"INV-L-004",year:null,source:"Inédit",theme:"Limites",subtheme:"Formes indéterminées",level:4,type:"M",
context:"",
question:"Quand $x\\to 1$, la quantité $\\dfrac{x^3-1}{x^2-1}$ tend vers :",
choices:["$1$","$\\dfrac{3}{2}$","$2$","$3$","aucune limite"],
answer:"B",
explanation:"$\\frac{(x-1)(x^2+x+1)}{(x-1)(x+1)}=\\frac{x^2+x+1}{x+1}\\to\\frac{3}{2}$."},

{id:"INV-L-005",year:null,source:"Inédit",theme:"Limites",subtheme:"Logarithme",level:3,type:"L",
context:"",
question:"Donner la limite de $x\\ln(x)$ quand $x\\to0^+$.",
answerValue:"0",answerDisplay:"$0$",
explanation:"Poser $x=e^{-t}$, $t\\to+\\infty$ : $e^{-t}\\cdot(-t)\\to 0$."},

{id:"INV-L-006",year:null,source:"Inédit",theme:"Limites",subtheme:"Formes indéterminées",level:4,type:"M",
context:"",
question:"Quand $x\\to+\\infty$, la quantité $\\sqrt{x^2+x}-x$ tend vers :",
choices:["$0$","$\\dfrac{1}{2}$","$1$","$+\\infty$","aucune limite"],
answer:"B",
explanation:"$\\frac{x}{\\sqrt{x^2+x}+x}\\sim\\frac{x}{2x}=\\frac{1}{2}$."},

{id:"INV-L-007",year:null,source:"Inédit",theme:"Limites",subtheme:"Développements limités",level:5,type:"M",
context:"",
question:"Quand $x\\to 0$, la quantité $\\dfrac{e^x - 1 - x}{x^2}$ tend vers :",
choices:["$0$","$\\dfrac{1}{2}$","$1$","$2$","aucune limite"],
answer:"B",
explanation:"$e^x=1+x+\\frac{x^2}{2}+o(x^2)$, donc $\\frac{e^x-1-x}{x^2}\\to\\frac{1}{2}$."},

{id:"INV-L-008",year:null,source:"Inédit",theme:"Limites",subtheme:"Développements limités",level:5,type:"L",
context:"",
question:"Donner la limite de $\\dfrac{\\ln(1+x)}{x}$ quand $x\\to 0$.",
answerValue:"1",answerDisplay:"$1$",
explanation:"$\\ln(1+x)\\sim x$ en $0$, donc limite $=1$."},

{id:"INV-L-009",year:null,source:"Inédit",theme:"Limites",subtheme:"Formes indéterminées",level:5,type:"M",
context:"",
question:"Quand $x\\to0$, la quantité $\\dfrac{e^x-e^{-x}}{\\sin(2x)}$ tend vers :",
choices:["$0$","$\\dfrac{1}{2}$","$1$","$2$","$+\\infty$"],
answer:"C",
explanation:"Num $\\approx 2x$, dén $\\approx 2x$ (car $\\sin(2x)\\approx 2x$). Rapport $\\to 1$."},

{id:"INV-L-010",year:null,source:"Inédit",theme:"Limites",subtheme:"Croissances comparées",level:4,type:"M",
context:"",
question:"Quand $x\\to+\\infty$, la quantité $\\dfrac{(\\ln x)^{2025}}{x}$ tend vers :",
choices:["$+\\infty$","$2025$","$1$","$0$","aucune limite"],
answer:"D",
explanation:"$x$ croît plus vite que tout $(\\ln x)^n$, donc $(\\ln x)^{2025}/x\\to 0$."}

];

if (typeof module !== 'undefined') module.exports = TESCIA_DB;
