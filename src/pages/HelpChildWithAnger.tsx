import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { ArrowLeft, AlertCircle } from "lucide-react";

const HelpChildWithAnger = () => {
  return (
    <div className="min-h-screen py-12" id="main-content">
      <div className="container mx-auto px-4">
        <Link to="/rad-til-foraeldre" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
          Tilbage til oversigt
        </Link>

        <header className="max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Hjælp dit barn med vrede
          </h1>
        </header>

        <main className="max-w-4xl mx-auto space-y-8">
          <Card className="p-8">
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Vrede er en normal og sund følelse, som alle børn oplever. Det er en naturlig reaktion på frustration, uretfærdighed eller skuffelse. Det er vigtigt at hjælpe børn med at lære at genkende, forstå og håndtere deres vrede på konstruktive måder, så den ikke bliver skadelig for dem selv eller andre.
              </p>
              <p>
                Børn kan udtrykke vrede på mange forskellige måder - gennem vredesudbrud, aggression, tilbagetrækning, passiv-aggressiv adfærd eller fysiske symptomer som hovedpine eller mavepine. Det er vigtigt at forstå, hvad der trigger din barns vrede, da dette kan hjælpe med at forhindre eller håndtere vredesudbrud mere effektivt. Nogle børn bliver vrede, når de føler sig uretfærdigt behandlet, mens andre kan blive vrede, når de føler sig overvældede, frustrerede eller magtesløse.
              </p>
              <p>
                Det er vigtigt at huske, at vrede ofte er en sekundær følelse, der skjuler underliggende følelser som sårhed, skam, frygt eller skuffelse. Ved at hjælpe dit barn med at identificere og udtrykke de underliggende følelser, kan du hjælpe dem med at håndtere vrede mere effektivt.
              </p>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Forstå vrede hos børn</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Vrede hos børn kan manifestere sig forskelligt afhængigt af barnets alder og udviklingsniveau. Småbørn kan have vredesudbrud, når de ikke får deres vilje eller føler sig frustrerede, da de endnu ikke har udviklet sproglige færdigheder til at udtrykke deres følelser. Skolebørn kan udtrykke vrede gennem fysisk aggression, skænderier eller adfærdsproblemer. Teenagere kan udtrykke vrede gennem mundtlig aggression, tilbagetrækning eller risikoadfærd.
              </p>
              <p>
                Det er vigtigt at skelne mellem normal vrede og problematisk vrede. Normal vrede er situationel og forsvinder, når situationen er løst. Problematisk vrede er intens, hyppig, varer længe eller fører til skadelig adfærd. Hvis din barns vrede er ekstrem, hyppig eller påvirker deres daglige liv betydeligt, kan det være tegn på et større problem, der kræver professionel hjælp.
              </p>
            </div>
          </Card>

          <Card className="p-8 bg-muted/30">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Strategier til at håndtere vrede</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Der er mange strategier, du kan bruge til at hjælpe dit barn med at håndtere deres vrede. Hjælp dit barn med at genkende deres vrede tidligt - lær dem at identificere fysiske tegn på vrede (som varmt ansigt, knyttede næver eller hurtig puls), så de kan handle, før vreden eskalerer. Dette kan hjælpe med at forhindre vredesudbrud.
              </p>
              <p>
                Lær dit barn afspændingsteknikker, såsom dyb vejrtrækning, tælle til ti, eller bruge en "time-out" til at køle ned. Disse teknikker kan hjælpe barnet med at håndtere vrede i øjeblikket. Etabler klare grænser og konsekvenser - børn har brug for at vide, hvad der er acceptabelt og hvad der ikke er, og konsekvenserne for uacceptabel adfærd.
              </p>
              <p>
                Vær et roligt forbillede - børn lærer meget af at observere, hvordan voksne håndterer vrede. Hvis du selv håndterer vrede konstruktivt, lærer dit barn at gøre det samme. Hjælp dit barn med at finde sunde måder at udtrykke vrede på, såsom at tale om deres følelser, tegne, skrive eller fysisk aktivitet. Undgå at straffe dit barn for at føle vrede - i stedet hjælp dem med at lære sunde måder at håndtere det på.
              </p>
              <p>
                Hvis din barns vrede er ekstrem, hyppig eller varig, eller hvis den fører til skadelig adfærd, kan det være nødvendigt at søge professionel hjælp. En psykolog eller rådgiver kan hjælpe dit barn med at identificere årsagerne til deres vrede og udvikle sunde strategier til at håndtere den.
              </p>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Forebyggelse af vredesudbrud</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Der er ting, du kan gøre for at forhindre vredesudbrud. Sørg for, at dit barn får nok søvn, motion og sund kost, da træthed og sult kan gøre børn mere irritable. Etabler rutiner og forudsigelighed, da dette kan reducere frustration og stress. Lær dit barn problemløsningsfærdigheder, så de bedre kan håndtere udfordringer uden at blive vrede.
              </p>
              <p>
                Vær opmærksom på triggers - hvis du ved, hvad der typisk trigger din barns vrede, kan du være bedre forberedt eller undgå visse situationer. Vær støttende og forstående - nogle gange har børn brug for at vide, at deres følelser er valide, selvom deres adfærd ikke er acceptabel.
              </p>
            </div>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default HelpChildWithAnger;

