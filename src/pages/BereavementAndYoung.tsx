import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Heart } from "lucide-react";

const BereavementAndYoung = () => {
  return (
    <div className="min-h-screen py-12" id="main-content">
      <div className="container mx-auto px-4">
        <Link to="/rad-til-teenagere-unge-voksne-og-studerende" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
          Tilbage til oversigt
        </Link>

        <header className="max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Sorg og unge
          </h1>
        </header>

        <main className="max-w-4xl mx-auto space-y-8">
          <Card className="p-8">
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                At miste nogen, man elsker, er en af de sværeste oplevelser i livet, og for unge mennesker kan sorg være særligt udfordrende. Unge mennesker er stadig i processen med at udvikle deres forståelse af døden, deres evne til at håndtere vanskelige følelser, og deres identitet - alt dette kan gøre sorg mere kompleks og udfordrende.
              </p>
              <p>
                Sorg er en normal og naturlig reaktion på tab, og der er ingen "rigtig" måde at sørge på. Hver person oplever sorg forskelligt, og det kan tage tid at komme sig. Nogle unge kan opleve intens sorg i starten, mens andre kan have en mere gradvis reaktion. Nogle kan udtrykke sorg gennem tristhed, mens andre kan udtrykke det gennem vrede, angst eller anden adfærd.
              </p>
              <p>
                Det er vigtigt at forstå, at sorg ikke er lineær - du kan have gode dage og dårlige dage, og det er helt normalt. Sorg kan også komme i bølger, hvor du kan føle dig bedre i en periode, og så pludselig blive overvældet af sorg igen. Dette er en normal del af sorgprocessen.
              </p>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Sorg hos unge mennesker</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Unge mennesker kan opleve sorg forskelligt end voksne. De kan have svært ved at udtrykke deres følelser verbalt og kan i stedet udtrykke sorg gennem adfærd, såsom aggression, tilbagetrækning eller risikoadfærd. De kan også have eksistentielle spørgsmål om livet og døden, som kan være svære at håndtere.
              </p>
              <p>
                Unge mennesker kan også have svært ved at forstå, hvorfor døden skete, og kan have skyldfølelse eller føle sig ansvarlige. De kan også være bekymrede for, om andre mennesker, de elsker, også vil dø, hvilket kan skabe ekstra angst og bekymring.
              </p>
              <p>
                Det er vigtigt at huske, at alle disse reaktioner er normale, og at der ikke er nogen "rigtig" måde at sørge på. Det vigtigste er at give dig selv tid og plads til at føle dine følelser og at søge støtte, når du har brug for det.
              </p>
            </div>
          </Card>

          <Card className="p-8 bg-muted/30">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Sådan kan du håndtere sorg</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Tillad dig selv at føle dine følelser - det er vigtigt at give dig selv tilladelse til at føle alle dine følelser, uanset om de er tristhed, vrede, skyld, eller noget andet. Alle følelser er valide, og det er vigtigt ikke at undertrykke dem. Prøv at acceptere dine følelser uden at dømme dem.
              </p>
              <p>
                Tal med nogen, du stoler på - det kan være venner, familie, en lærer, eller en anden voksen. At dele dine følelser kan hjælpe med at reducere følelser af isolation og give en følelse af støtte. Hvis du har svært ved at tale om det, kan det også hjælpe at skrive om det eller bruge andre kreative måder at udtrykke sig på.
              </p>
              <p>
                Sørg for at passe på dig selv - selvom det kan være svært, er det vigtigt at prøve at spise, sove og motionere. Din krop har brug for næring og hvile for at fungere, selv når du sørger. Prøv at opretholde så meget af din normale rutine som muligt, selvom det kan være svært.
              </p>
              <p>
                Giv dig selv tid - sorg tager tid, og der er ingen tidslinje for, hvornår du "burde" have det bedre. Vær tålmodig med dig selv og giv dig selv plads til at sørge på din egen måde og i dit eget tempo.
              </p>
              <p>
                Find måder at mindes den person, du har mistet - dette kan hjælpe med at bevare minder og føle, at personen ikke er helt væk. Dette kan inkludere at tale om personen, se billeder, lave noget, personen elskede, eller på anden måde mindes dem.
              </p>
              <p>
                Overvej at søge professionel hjælp, hvis du har svært ved at håndtere sorgen - hvis sorgen bliver overvældende eller påvirker din daglige funktion betydeligt, kan det være en god idé at søge professionel hjælp. En psykolog eller rådgiver, der er specialiseret i sorg, kan hjælpe dig med at bearbejde dine følelser på en sund måde.
              </p>
              <p>
                Husk, at det er okay at have det godt igen - nogle gange kan unge mennesker føle skyld over at have det godt igen efter at have mistet nogen. Det er vigtigt at huske, at det er okay at have gode dage, at grine, og at nyde livet igen. Dette betyder ikke, at du ikke elsker den person, du har mistet, eller at du har glemt dem.
              </p>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Hvornår skal du søge hjælp?</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Hvis din sorg påvirker din daglige funktion i længere tid (flere måneder), hvis du har selvmordstanker, eller hvis du har svært ved at håndtere sorgen, er det vigtigt at søge professionel hjælp. Tegn på, at du måske har brug for professionel hjælp, kan inkludere: vedvarende intens sorg, der ikke forbedres over tid, vanskeligheder med at fungere i dagligdagen (som at gå i skole eller arbejde), sociale isolation, selvmordstanker eller -adfærd, eller brug af alkohol eller stoffer for at håndtere sorgen.
              </p>
              <p>
                Der findes mange ressourcer og støttegrupper tilgængelige for unge, der sørger. Disse kan inkludere støttegrupper specifikt for unge, der sørger, online ressourcer, eller professionel rådgivning. Din læge, skolepsykolog eller lokale organisationer kan hjælpe med at finde relevante ressourcer.
              </p>
              <p>
                Det er vigtigt at huske, at det er okay at bede om hjælp, og at søge professionel hjælp ikke er et tegn på svaghed. Sorg kan være meget svær at håndtere alene, og professionel hjælp kan give dig værktøjer og støtte til at håndtere sorgen på en sund måde.
              </p>
            </div>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default BereavementAndYoung;

