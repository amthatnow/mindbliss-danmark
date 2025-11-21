import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Heart } from "lucide-react";

const ChildrenAndBereavement = () => {
  return (
    <div className="min-h-screen py-12" id="main-content">
      <div className="container mx-auto px-4">
        <Link to="/rad-til-foraeldre" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
          Tilbage til oversigt
        </Link>

        <header className="max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Børn og sorg
          </h1>
        </header>

        <main className="max-w-4xl mx-auto space-y-8">
          <Card className="p-8">
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                At miste nogen, man elsker, er en af de sværeste oplevelser i livet, og det kan være særligt udfordrende for børn. Børn oplever sorg forskelligt end voksne, og deres forståelse af døden ændrer sig, efterhånden som de vokser. Det er vigtigt at forstå, hvordan børn i forskellige aldre oplever sorg, så man bedre kan støtte dem gennem denne vanskelige tid.
              </p>
              <p>
                Børn kan have svært ved at forstå dødens endelighed, især yngre børn, der måske tror, at den afdøde person kan komme tilbage. Børn kan reagere på mange forskellige måder på sorg - nogle bliver stille og tilbagetrukne, mens andre kan blive mere aggressive, have vanskeligheder med at sove eller spise, eller udvise regressiv adfærd (at opføre sig yngre end deres alder). Nogle børn kan også have fysiske symptomer som hovedpine eller mavepine.
              </p>
              <p>
                Det er vigtigt at være ærlig med børn om døden på en måde, der er passende for deres alder og udviklingsniveau. Børn har brug for klare, enkle forklaringer, og det er vigtigt at undgå eufemismer, der kan være forvirrende (som at sige, at personen "sover" eller "er gået væk"). Børn skal have mulighed for at stille spørgsmål og udtrykke deres følelser, og det er vigtigt at validere deres følelser og lade dem vide, at det er okay at være trist, vred eller forvirret.
              </p>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Sorg hos børn i forskellige aldre</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Børns forståelse af døden og deres måde at håndtere sorg på varierer betydeligt med alderen. Småbørn (2-5 år) forstår typisk ikke dødens endelighed og kan tro, at den afdøde person kan komme tilbage. De kan reagere med regressiv adfærd, søvnproblemer eller ændringer i appetit. Skolebørn (6-12 år) begynder at forstå, at døden er permanent, men kan stadig have vanskeligheder med at forstå det fuldt ud. De kan have mange spørgsmål og kan være bekymrede for, om andre mennesker, de elsker, også vil dø.
              </p>
              <p>
                Teenagere (13-18 år) forstår døden på samme måde som voksne, men kan have svært ved at udtrykke deres følelser eller kan isolere sig fra familie og venner. De kan også have eksistentielle spørgsmål om livet og døden. Det er vigtigt at tilpasse din tilgang til barnets alder og udviklingsniveau.
              </p>
            </div>
          </Card>

          <Card className="p-8 bg-muted/30">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Sådan kan du hjælpe dit barn</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Der er mange ting, du kan gøre for at støtte dit barn gennem sorgen. Vær ærlig og åben om døden på en alderspassende måde - brug klare, enkle ord og undgå forvirrende eufemismer. Giv dit barn mulighed for at stille spørgsmål og besvar dem så godt, du kan. Det er okay at sige "jeg ved det ikke" hvis du ikke kender svaret.
              </p>
              <p>
                Tillad dit barn at udtrykke deres følelser på deres egen måde - nogle børn vil græde, mens andre vil lege eller tegne. Alle måder at håndtere sorg på er gyldige. Oprethold rutiner så meget som muligt, da dette kan give barnet en følelse af sikkerhed og normalitet i en vanskelig tid.
              </p>
              <p>
                Sørg for, at dit barn ved, at det er okay at være trist, vred eller forvirret, og at alle disse følelser er normale. Tal om den afdøde person og mindes gode tider sammen - dette kan hjælpe barnet med at bevare minder og føle, at personen ikke er helt væk. Vær tålmodig - sorg tager tid, og børn kan have perioder, hvor de ser ud til at have det godt, efterfulgt af perioder med mere intens sorg.
              </p>
              <p>
                Hvis dit barn har svært ved at håndtere sorgen over længere tid, eller hvis sorgen påvirker deres daglige liv betydeligt, kan det være en god idé at søge professionel hjælp. En psykolog eller rådgiver, der er specialiseret i at arbejde med børn og sorg, kan hjælpe dit barn med at bearbejde deres følelser på en sund måde.
              </p>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Tegn på, at dit barn har brug for ekstra hjælp</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Mens sorg er en normal reaktion på tab, er der nogle tegn, der kan indikere, at dit barn har brug for ekstra støtte eller professionel hjælp. Disse kan inkludere vedvarende intens sorg, der ikke forbedres over tid, vanskeligheder med at fungere i dagligdagen (som at gå i skole eller deltage i aktiviteter), sociale isolation, selvmordstanker eller -adfærd, eller regressiv adfærd, der varer længe.
              </p>
              <p>
                Hvis du er bekymret for dit barns måde at håndtere sorg på, er det vigtigt at søge professionel hjælp. Der findes mange ressourcer og støttegrupper tilgængelige for børn, der sørger, og tidlig intervention kan hjælpe med at forhindre langvarige problemer.
              </p>
            </div>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default ChildrenAndBereavement;

