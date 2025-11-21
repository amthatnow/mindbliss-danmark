import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

const AnxietyInChildren = () => {
  return (
    <div className="min-h-screen py-12" id="main-content">
      <div className="container mx-auto px-4">
        <Link to="/rad-til-foraeldre" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
          Tilbage til oversigt
        </Link>

        <header className="max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Angst hos børn
          </h1>
        </header>

        <main className="max-w-4xl mx-auto space-y-8">
          <Card className="p-8">
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Angst er en normal del af barndommen, og det er almindeligt for børn at opleve bekymring eller frygt i visse situationer. I faktisk er angst en vigtig overlevelsesmekanisme, der hjælper os med at reagere på fare. Men når angst bliver intens, vedvarende eller påvirker et barns evne til at fungere normalt i dagligdagen, kan det være et tegn på et angstproblem, der kræver opmærksomhed og muligvis professionel hjælp.
              </p>
              <p>
                Det er vigtigt at skelne mellem normal bekymring og angst, der kræver professionel hjælp. Normal bekymring er situationel og forsvinder, når situationen er løst - for eksempel kan et barn være nervøst før en prøve, men føle sig bedre efter. Problematisk angst er vedvarende, intens og påvirker barnets daglige liv, skolegang eller relationer. Hvis dit barns angst påvirker deres evne til at deltage i normale aktiviteter, sove, spise eller fungere socialt, kan det være tid til at søge hjælp.
              </p>
              <p>
                Angst hos børn kan manifestere sig forskelligt afhængigt af barnets alder. Småbørn kan udvise separationsangst eller frygt for specifikke ting som mørke eller dyr. Skolebørn kan bekymre sig om skole, venner eller familieproblemer. Teenagere kan bekymre sig om deres fremtid, sociale accept eller præstationer. Det er vigtigt at forstå, at angst er en normal del af udviklingen, men at det kan blive problematisk, hvis det bliver overvældende.
              </p>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Tegn og symptomer på angst hos børn</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Der er mange tegn og symptomer, der kan indikere, at et barn kæmper med angst. Overdreven bekymring eller frygt er et vigtigt tegn - barnet kan bekymre sig konstant om ting, der normalt ikke ville bekymre et barn i deres alder. Fysiske symptomer er også almindelige - børn med angst kan ofte klage over hovedpine, mavesmerter, kvalme, hjertebanken eller svedtendens uden tydelig fysisk årsag.
              </p>
              <p>
                Undgåelse af visse situationer eller aktiviteter er et andet vigtigt tegn - barnet kan undgå sociale situationer, skole, aktiviteter eller steder, der trigger deres angst. Søvnproblemer er også almindelige - barnet kan have vanskeligheder med at falde i søvn, vågne om natten, have mareridt eller være bange for at sove alene.
              </p>
              <p>
                Irritabilitet eller vrede kan også være tegn på angst - nogle børn udtrykker angst gennem irritabilitet frem for bekymring. Vanskeligheder med koncentration kan påvirke skolepræstationer, da barnet kan have svært ved at fokusere på grund af konstante bekymringer. Andre tegn kan inkludere klæbende adfærd, regressiv adfærd (at opføre sig yngre end deres alder), eller fysiske klager uden tydelig årsag.
              </p>
            </div>
          </Card>

          <Card className="p-8 bg-muted/30">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Sådan kan du hjælpe dit barn</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Der er mange ting, du kan gøre for at hjælpe dit barn med angst. Vær støttende og forstående - anerkend barnets følelser uden at bagatellisere dem. Fortæl dit barn, at angst er en normal følelse, som alle oplever nogle gange, og at det er okay at være bange eller bekymret.
              </p>
              <p>
                Hjælp dit barn med at forstå deres angst ved at tale om det på en alderspassende måde. Lær dit barn afspændingsteknikker, såsom dyb vejrtrækning eller progressive muskelafspænding. Disse teknikker kan hjælpe barnet med at håndtere angst i øjeblikket.
              </p>
              <p>
                Opfordre gradvist eksponering for frygtede situationer - start med små skridt og byg gradvist op, mens du støtter og roser barnet for deres mod. Etabler rutiner og forudsigelighed, da dette kan give barnet en følelse af sikkerhed. Vær tålmodig - det kan tage tid at håndtere angst, og forbedringer kan være gradvise.
              </p>
              <p>
                Hvis din barns angst er alvorlig, vedvarende eller påvirker deres daglige liv betydeligt, er det vigtigt at søge professionel hjælp. Din læge kan henvise til specialiserede tjenester, hvor der tilbydes behandlinger som kognitiv adfærdsterapi, der er meget effektiv til at hjælpe børn med angst.
              </p>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Når skal du søge professionel hjælp</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Det er vigtigt at søge professionel hjælp, hvis din barns angst er alvorlig, vedvarende eller påvirker deres daglige liv betydeligt. Tegn på, at professionel hjælp kan være nødvendig, inkluderer: angst, der varer i flere uger eller måneder, angst, der forhindrer barnet i at deltage i normale aktiviteter, angst, der påvirker skolepræstationer eller sociale relationer, eller angst, der forårsager betydelig nød eller stress for barnet eller familien.
              </p>
              <p>
                Tidlig intervention er vigtig - jo tidligere man får hjælp, jo bedre er chancerne for en positiv udkomst. Professionel hjælp kan inkludere terapi, såsom kognitiv adfærdsterapi, der er meget effektiv til at hjælpe børn med angst. I nogle tilfælde kan medicin også være nødvendig, men dette bør altid gives under tæt opsyn af en læge.
              </p>
            </div>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default AnxietyInChildren;

