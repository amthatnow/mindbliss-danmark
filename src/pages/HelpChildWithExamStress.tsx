import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

const HelpChildWithExamStress = () => {
  return (
    <div className="min-h-screen py-12" id="main-content">
      <div className="container mx-auto px-4">
        <Link to="/rad-til-foraeldre" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
          Tilbage til oversigt
        </Link>

        <header className="max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Hjælp dit barn med eksamensstress
          </h1>
        </header>

        <main className="max-w-4xl mx-auto space-y-8">
          <Card className="p-8">
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Eksamener kan være en af de mest stressende perioder i et barns eller en unges liv. Presset fra at skulle præstere, bekymringer om karakterer, og frygten for at fejle kan skabe betydelig stress og angst. Det er vigtigt at hjælpe dit barn med at håndtere denne stress på en sund måde og at støtte dem gennem eksamensperioden, så de kan præstere deres bedste uden at blive overvældet.
              </p>
              <p>
                For meget stress kan have alvorlige konsekvenser for både mental og fysisk sundhed. Det kan påvirke søvn, appetit, koncentration, hukommelse og generel velvære. Det kan også forværre eksisterende mentale sundhedsproblemer eller udløse nye. Det er derfor afgørende at finde en balance mellem at forberede sig til eksamener og at passe på sig selv.
              </p>
              <p>
                Som forælder spiller du en vigtig rolle i at hjælpe dit barn med at håndtere eksamensstress. Din støtte, forståelse og vejledning kan gøre en stor forskel for, hvordan dit barn oplever og håndterer eksamensperioden.
              </p>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Tegn på eksamensstress</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Det er vigtigt at kunne genkende tegn på eksamensstress, så du kan hjælpe dit barn i tide. Fysiske tegn kan inkludere hovedpine, mavepine, træthed, søvnproblemer eller ændringer i appetit. Mentale tegn kan inkludere bekymring, koncentrationsbesvær, hukommelsesproblemer eller negative tanker. Følelsesmæssige tegn kan inkludere irritabilitet, angst, depression eller følelser af overvældelse.
              </p>
              <p>
                Adfærdsmæssige tegn kan inkludere undgåelse af studie, prokrastinering, perfektionisme, eller sociale tilbagetrækning. Hvis du bemærker disse tegn, er det vigtigt at handle og hjælpe dit barn med at håndtere stressen.
              </p>
            </div>
          </Card>

          <Card className="p-8 bg-muted/30">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Sådan kan du hjælpe dit barn</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Hjælp dit barn med at lave en realistisk studieplan - en god studieplan kan reducere stress ved at give en følelse af kontrol og struktur. Hjælp dit barn med at opdele stoffet i håndterbare dele og sætte realistiske mål. Sørg for, at planen inkluderer pauser, måltider og søvn, ikke kun studie.
              </p>
              <p>
                Sørg for, at dit barn får nok søvn og motion - søvn er afgørende for hukommelse, koncentration og generel velvære. Sørg for, at dit barn får mindst 8-9 timers søvn om natten, især i eksamensperioden. Motion kan også hjælpe med at reducere stress og forbedre humør - selv en kort gåtur kan gøre en forskel.
              </p>
              <p>
                Opfordre til pauser og afslapning - dit barns hjerne kan ikke koncentrere sig effektivt i timevis. Opfordre til regelmæssige pauser, hvor dit barn kan slappe af, lave noget andet eller bare hvile. Dette kan hjælpe med at forhindre udbrændthed og forbedre fokus.
              </p>
              <p>
                Vær støttende og positiv - dit barns selvtillid og selvværd er vigtige faktorer i deres præstation. Vær støttende og positiv, og hjælp dit barn med at se deres styrker og fremskridt. Undgå at fokusere kun på karakterer eller resultater - fokuser også på indsatsen og læringen.
              </p>
              <p>
                Undgå at lægge for meget pres på - mens det er vigtigt at opfordre dit barn til at gøre deres bedste, kan for meget pres faktisk forringe præstationen og øge stress. Undgå at sammenligne dit barn med andre eller at sætte urealistiske forventninger. Husk, at dit barns værdi ikke er defineret af deres eksamensresultater.
              </p>
              <p>
                Hjælp dit barn med at håndtere nervøsitet - hvis dit barn er meget nervøst, kan afspændingsteknikker som dyb vejrtrækning, meditation eller progressive muskelafspænding hjælpe. Lær dit barn disse teknikker, og øv dem sammen. Dette kan hjælpe dit barn med at håndtere nervøsitet både før og under eksamen.
              </p>
              <p>
                Sørg for, at dit barn ved, at eksamener ikke definerer deres værdi - det er vigtigt, at dit barn forstår, at eksamener er en måde at vurdere viden på, men de definerer ikke deres værdi som person. Dit barn er meget mere end deres eksamensresultater, og det er vigtigt, at de ved dette.
              </p>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Praktiske tips</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Der er mange praktiske ting, du kan gøre for at støtte dit barn gennem eksamensperioden. Sørg for, at dit barn har et godt studieområde, der er stille, godt oplyst og fri for distraktioner. Sørg for, at dit barn har alt, hvad de har brug for - bøger, noter, papir, penne, etc.
              </p>
              <p>
                Sørg for, at dit barn spiser sundt og regelmæssigt - undgå at springe måltider over, og vælg sunde snacks fremfor sukkerholdige eller fede fødevarer. Drik nok vand - dehydrering kan påvirke koncentration og hukommelse.
              </p>
              <p>
                Vær til stede og tilgængelig - dit barn har måske brug for at tale om deres bekymringer eller få støtte. Vær til stede og lyt, når dit barn har brug for det. Undgå at være kontrollerende eller indgribende - giv dit barn plads til at arbejde selvstændigt, mens du stadig er der til støtte.
              </p>
            </div>
          </Card>

          <Card className="p-8 bg-muted/30">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Når stress bliver overvældende</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Hvis din barns stress bliver overvældende eller påvirker deres daglige funktion betydeligt, er det vigtigt at søge hjælp. Dette kan inkludere at kontakte skolepsykologen, din læge eller en mental sundhedsprofessionel. Mange skoler tilbyder også støtte og ressourcer til studerende, der kæmper med eksamensstress.
              </p>
              <p>
                Hvis dit barn har selvmordstanker eller er i fare for at skade sig selv, er det kritisk at søge akut hjælp med det samme - kontakt akuttelefonen (112) eller Livslinjen (70 201 201).
              </p>
            </div>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default HelpChildWithExamStress;

