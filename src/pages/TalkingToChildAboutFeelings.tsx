import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

const TalkingToChildAboutFeelings = () => {
  return (
    <div className="min-h-screen py-12" id="main-content">
      <div className="container mx-auto px-4">
        <Link to="/rad-til-foraeldre" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
          Tilbage til oversigt
        </Link>

        <header className="max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Tale med dit barn om følelser
          </h1>
        </header>

        <main className="max-w-4xl mx-auto space-y-8">
          <Card className="p-8">
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                At tale med dit barn om følelser er en af de vigtigste ting, du kan gøre for at støtte deres mentale sundhed og emotionelle udvikling. Når børn lærer at forstå, navngive og udtrykke deres følelser, er de bedre i stand til at håndtere udfordringer, bygge sunde relationer og udvikle emotionel intelligens. Følelsesmæssig intelligens er en vigtig færdighed, der hjælper børn med at navigere gennem livet og bygge stærke relationer med andre.
              </p>
              <p>
                Det kan være svært at vide, hvordan man starter samtaler om følelser, især hvis dit barn er tilbageholdende, har svært ved at udtrykke sig, eller hvis du selv ikke er vant til at tale om følelser. Det er vigtigt at huske, at det er okay at lave fejl og at det tager tid at bygge en åben kommunikation om følelser. Det vigtigste er at starte og at være konsekvent.
              </p>
              <p>
                Børn i forskellige aldre har forskellige behov og evner, når det kommer til at tale om følelser. Småbørn kan have svært ved at navngive følelser, men kan udtrykke dem gennem leg, tegning eller adfærd. Skolebørn begynder at forstå mere komplekse følelser og kan bedre udtrykke sig verbalt. Teenagere kan have svært ved at åbne op, men har brug for at vide, at deres følelser er valide og vigtige.
              </p>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Hvorfor er det vigtigt at tale om følelser?</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                At tale om følelser med dit barn har mange fordele. Det hjælper børn med at forstå, at følelser er normale og acceptable, hvilket kan reducere skam og angst omkring følelser. Det hjælper også børn med at udvikle emotionel intelligens - evnen til at genkende, forstå og håndtere egne og andres følelser.
              </p>
              <p>
                Når børn lærer at udtrykke deres følelser, er de bedre i stand til at håndtere konflikter, bygge sunde relationer og søge hjælp, når de har brug for det. Det kan også hjælpe med at forhindre, at følelser bliver undertrykt eller udtrykt på skadelige måder. Børn, der er gode til at udtrykke deres følelser, har typisk bedre mentale sundhed og er bedre i stand til at håndtere stress og udfordringer.
              </p>
            </div>
          </Card>

          <Card className="p-8 bg-muted/30">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Tips til at tale om følelser</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Vær til stede og lyt aktivt - når dit barn taler om deres følelser, giv dem din fulde opmærksomhed. Lyt uden at afbryde, og vis, at du hører dem ved at nikke, stille opfølgende spørgsmål eller opsummere, hvad de har sagt. Aktiv lytning viser dit barn, at deres følelser er vigtige og at du oprigtigt interesserer dig for dem.
              </p>
              <p>
                Brug alderspassende sprog - tilpas dit sprog til barnets alder og udviklingsniveau. Småbørn har brug for simple ord og konkrete eksempler, mens ældre børn kan forstå mere komplekse følelser og abstrakte begreber. Brug følelsesord, der er passende for barnets alder, og forklar nye ord, hvis det er nødvendigt.
              </p>
              <p>
                Normaliser følelser - fortæl dit barn, at alle har følelser, og at det er helt normalt at føle sig trist, vred, bange eller glad. Forklar, at følelser kommer og går, og at det er okay at have forskellige følelser. Undgå at minimere eller afvise dit barns følelser - selvom en situation måske ikke virker vigtig for dig, er den vigtig for dit barn, og deres følelser er valide.
              </p>
              <p>
                Vær patient og giv dit barn tid til at udtrykke sig - nogle børn har brug for tid til at tænke over deres følelser før de kan udtrykke dem. Undgå at presse eller tvinge dit barn til at tale, hvis de ikke er klar. I stedet kan du opfordre dem til at tegne, skrive eller bruge andre måder at udtrykke sig på.
              </p>
              <p>
                Brug bøger, film eller aktiviteter som udgangspunkt for samtaler - nogle gange er det lettere at tale om følelser, når man taler om karakterer i en bog eller film. Spørg dit barn, hvordan karaktererne føler sig, og om de nogensinde har følt sig på samme måde. Dette kan hjælpe med at åbne op for samtaler om dit barns egne følelser.
              </p>
              <p>
                Vær et forbillede ved at dele dine egne følelser på en sund måde - når du deler dine egne følelser på en konstruktiv måde, lærer dit barn, at det er okay at have og udtrykke følelser. Forklar, hvordan du håndterer dine følelser, og vis, at selv voksne har følelser og må finde måder at håndtere dem på.
              </p>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Praktiske strategier</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Der er mange praktiske strategier, du kan bruge til at hjælpe dit barn med at udtrykke deres følelser. Brug "følelsesord" i hverdagen - når du ser dit barn udtrykke en følelse, navngiv den: "Jeg kan se, at du er glad" eller "Det ser ud til, at du er frustreret." Dette hjælper dit barn med at lære følelsesord og genkende følelser.
              </p>
              <p>
                Opret rutiner til at tale om følelser - måske ved måltider eller før sengetid. Spørg dit barn, hvordan deres dag var, eller hvad der gjorde dem glade eller triste. Brug åbne spørgsmål frem for lukkede spørgsmål - i stedet for "Var du glad i dag?" spørg "Hvordan havde du det i dag?" Dette giver dit barn mulighed for at dele mere.
              </p>
              <p>
                Hvis dit barn har svært ved at udtrykke sig verbalt, kan du bruge andre metoder. Tegning, skrivning eller leg kan være gode måder for børn at udtrykke deres følelser på. Nogle børn finder det lettere at tale om følelser, når de er i bevægelse eller laver noget aktivt.
              </p>
            </div>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default TalkingToChildAboutFeelings;

