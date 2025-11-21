import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

const TeenAggressionAndArguments = () => {
  return (
    <div className="min-h-screen py-12" id="main-content">
      <div className="container mx-auto px-4">
        <Link to="/rad-til-foraeldre" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
          Tilbage til oversigt
        </Link>

        <header className="max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Teenager aggression og skænderier
          </h1>
        </header>

        <main className="max-w-4xl mx-auto space-y-8">
          <Card className="p-8">
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Aggression og skænderier er almindelige i teenageårene, da unge gennemgår store fysiske, emotionelle og sociale forandringer. Teenagere oplever hormonelle forandringer, udvikler deres identitet, søger uafhængighed og navigerer komplekse sociale dynamikker - alt dette kan skabe frustration og konflikter. Det er normalt, at teenagere har konflikter med forældre, da de prøver at etablere deres egen identitet og uafhængighed.
              </p>
              <p>
                Det er vigtigt at skelne mellem normal teenageadfærd og aggression, der kræver professionel hjælp. Normal teenageadfærd kan inkludere periodisk irritabilitet, argumenter om regler og forventninger, eller ønske om mere uafhængighed. Problematisk aggression er ekstrem, hyppig, varer længe, eller fører til skadelig adfærd som vold, trusler eller ødelæggelse af ejendom.
              </p>
              <p>
                Aggression hos teenagere kan have mange årsager - frustration over manglende kontrol, følelser af uretfærdighed, stress, angst, depression, eller vanskeligheder med at håndtere følelser. Det er vigtigt at forstå, at aggression ofte er et symptom på et underliggende problem, snarere end problemet i sig selv.
              </p>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Forstå teenageaggression</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Teenageaggression kan manifestere sig på mange måder - verbalt (skænderier, råben, trusler), fysisk (slag, spark, ødelæggelse), eller passivt (tilbagetrækning, ignorering). Nogle teenagere udtrykker aggression direkte, mens andre kan være mere passivt-aggressive. Det er vigtigt at forstå, at aggression ofte er et forsøg på at kommunikere en behov eller følelse, som teenageren har svært ved at udtrykke på andre måder.
              </p>
              <p>
                Aggression kan også være et tegn på underliggende problemer, såsom depression, angst, traumer, misbrug, eller læringsvanskeligheder. Hvis aggressionen er ekstrem, hyppig eller vedvarende, eller hvis den påvirker teenagerens daglige liv betydeligt, kan det være tegn på, at professionel hjælp er nødvendig.
              </p>
            </div>
          </Card>

          <Card className="p-8 bg-muted/30">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Sådan håndterer du aggression</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Forbliv rolig og undgå at eskalere situationen - når din teenager er aggressiv, er det vigtigt at forblive rolig og ikke reagere med aggression. Dette kan være svært, men det er afgørende for at deeskalere situationen. Tag et dybt åndedrag, tæl til ti, eller tag en pause, hvis det er nødvendigt. Husk, at din teenagers aggression ofte ikke er personligt rettet mod dig, selvom det kan føles sådan.
              </p>
              <p>
                Etabler klare grænser og konsekvenser - teenagere har brug for klare grænser og konsekvenser for uacceptabel adfærd. Disse skal være konsistente og forudsigelige. Forklar tydeligt, hvad der er acceptabelt og hvad der ikke er, og hvilke konsekvenser der følger af uacceptabel adfærd. Vær konsistent i din håndhævelse af reglerne.
              </p>
              <p>
                Lyt til din teenagers bekymringer og følelser - selvom adfærden ikke er acceptabel, er følelserne bagved ofte valide. Prøv at forstå, hvad der trigger aggressionen, og lyt til din teenagers bekymringer uden at dømme. Dette kan hjælpe med at identificere underliggende problemer og finde konstruktive løsninger.
              </p>
              <p>
                Undgå at tage det personligt - det kan være svært, men husk, at din teenagers aggression ofte handler om deres egne følelser og udfordringer, ikke om dig. Prøv at se situationen fra deres perspektiv og forstå, at de gennemgår en vanskelig periode.
              </p>
              <p>
                Sæt tid af til at tale, når begge parter er rolige - forsøg ikke at løse konflikter, når din teenager er midt i et vredesudbrud. Vent til begge parter er rolige, og sæt derefter tid af til at tale om situationen. Brug "jeg"-udsagn frem for "du"-udsagn, og fokuser på at finde løsninger frem for at finde skyld.
              </p>
              <p>
                Hvis aggressionen er ekstrem, hyppig eller vedvarende, eller hvis den fører til skadelig adfærd, er det vigtigt at søge professionel hjælp. En psykolog eller rådgiver kan hjælpe med at identificere årsagerne til aggressionen og udvikle strategier til at håndtere den.
              </p>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Forebyggelse af aggression</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Der er ting, du kan gøre for at forhindre eller reducere aggression. Sørg for, at din teenager får nok søvn, motion og sund kost, da træthed og sult kan gøre teenagere mere irritable. Etabler rutiner og forudsigelighed, da dette kan reducere stress og frustration.
              </p>
              <p>
                Opfordre til sunde måder at udtrykke frustration på, såsom motion, kreative aktiviteter eller at tale om følelser. Lær din teenager afspændingsteknikker og problemløsningsfærdigheder. Vær et roligt forbillede - hvis du selv håndterer frustration konstruktivt, lærer din teenager at gøre det samme.
              </p>
              <p>
                Vær opmærksom på triggers - hvis du ved, hvad der typisk trigger din teenagers aggression, kan du være bedre forberedt eller undgå visse situationer. Vær støttende og forstående - nogle gange har teenagere brug for at vide, at deres følelser er valide, selvom deres adfærd ikke er acceptabel.
              </p>
            </div>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default TeenAggressionAndArguments;

