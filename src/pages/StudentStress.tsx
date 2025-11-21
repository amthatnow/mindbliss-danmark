import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

const StudentStress = () => {
  return (
    <div className="min-h-screen py-12" id="main-content">
      <div className="container mx-auto px-4">
        <Link to="/rad-til-teenagere-unge-voksne-og-studerende" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
          Tilbage til oversigt
        </Link>

        <header className="max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Studerende stress
          </h1>
        </header>

        <main className="max-w-4xl mx-auto space-y-8">
          <Card className="p-8">
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Stress er en almindelig og ofte uundgåelig del af studielivet. Mange studerende oplever stress i forbindelse med eksamener, deadlines, akademisk pres, økonomiske bekymringer, sociale relationer, fremtidsplanlægning og balancen mellem studie og privatliv. Mens lidt stress kan være motiverende og hjælpe med at holde fokus, kan for meget eller vedvarende stress have alvorlige konsekvenser for både mental og fysisk sundhed samt studieresultater.
              </p>
              <p>
                Stress kan manifestere sig på mange måder - fysisk (hovedpine, mavepine, træthed, søvnproblemer), mentalt (bekymring, koncentrationsbesvær, hukommelsesproblemer) og følelsesmæssigt (irritabilitet, angst, depression). Det er vigtigt at genkende tegnene på stress tidligt, så man kan tage skridt til at håndtere det, før det bliver overvældende.
              </p>
              <p>
                Langvarig stress kan føre til udbrændthed, depression, angst, fysiske sygdomme og dårlige studieresultater. Det er derfor afgørende at udvikle sunde strategier til at håndtere stress og at søge hjælp, hvis stressen bliver overvældende.
              </p>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Årsager til studiestress</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Der er mange faktorer, der kan bidrage til studiestress. Akademisk pres, herunder høje forventninger, tunge arbejdsbyrder, eksamensangst og bekymringer om karakterer, er en almindelig kilde til stress. Økonomiske bekymringer kan også være en stor kilde til stress for mange studerende, især hvis de skal arbejde ved siden af studiet eller bekymre sig om studielån.
              </p>
              <p>
                Sociale faktorer, såsom vanskeligheder med at finde venner, konflikter med roommates eller venner, eller følelser af isolation, kan også bidrage til stress. Fremtidsbekymringer, såsom bekymringer om jobmuligheder efter endt uddannelse eller usikkerhed om karrierevalg, kan også være stressende. Balancen mellem studie, arbejde, sociale aktiviteter og privatliv kan være udfordrende at håndtere.
              </p>
            </div>
          </Card>

          <Card className="p-8 bg-muted/30">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Sådan håndterer du stress</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Der er mange strategier, du kan bruge til at håndtere studiestress. Organiser din tid og lav en realistisk plan - brug en kalender eller planlægger til at holde styr på deadlines og forpligtelser. Prioriter opgaver og fokuser på det vigtigste først - ikke alt behøver at være perfekt, og det er okay at sige nej til nogle ting.
              </p>
              <p>
                Tag regelmæssige pauser - arbejd i blokke med korte pauser imellem for at holde fokus og undgå udbrændthed. Sørg for nok søvn - de fleste studerende har brug for 7-9 timers søvn om natten for at fungere optimalt. Motion kan også hjælpe med at reducere stress og forbedre humør - selv en kort gåtur kan gøre en forskel.
              </p>
              <p>
                Spis sundt og regelmæssigt - undgå at springe måltider over, og vælg sunde snacks fremfor sukkerholdige eller fede fødevarer. Undgå at prokrastinere - start med små skridt, hvis en opgave virker overvældende. Tal med nogen om din stress - det kan være venner, familie, studievejledere eller professionelle rådgivere.
              </p>
              <p>
                Lær afspændingsteknikker, såsom dyb vejrtrækning, meditation eller mindfulness. Disse teknikker kan hjælpe med at reducere stress i øjeblikket og forbedre din generelle velvære. Sæt realistiske forventninger til dig selv - du behøver ikke at være perfekt, og det er okay at lave fejl eller have dårlige dage.
              </p>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Når stress bliver overvældende</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Hvis stressen bliver overvældende eller påvirker din daglige funktion betydeligt, er det vigtigt at søge hjælp. Mange uddannelsesinstitutioner tilbyder gratis rådgivningstjenester til studerende, der kæmper med stress eller andre mentale sundhedsproblemer. Disse tjenester kan tilbyde individuel rådgivning, støttegrupper eller workshops om stresshåndtering.
              </p>
              <p>
                Din læge kan også være en god ressource, især hvis stressen påvirker din fysiske sundhed. Hvis du har selvmordstanker eller føler, at du ikke kan håndtere stressen, er det kritisk at søge akut hjælp - kontakt akuttelefonen (112) eller Livslinjen (70 201 201).
              </p>
              <p>
                Husk, at det er okay at have det svært, og at søge hjælp er et tegn på styrke, ikke svaghed. Du er ikke alene, og der er hjælp at få.
              </p>
            </div>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default StudentStress;

