import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

const CopingWithTeenager = () => {
  return (
    <div className="min-h-screen py-12" id="main-content">
      <div className="container mx-auto px-4">
        <Link to="/rad-til-foraeldre" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
          Tilbage til oversigt
        </Link>

        <header className="max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Håndtere din teenager
          </h1>
        </header>

        <main className="max-w-4xl mx-auto space-y-8">
          <Card className="p-8">
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                At være forælder til en teenager kan være en af de mest udfordrende, men også mest givende perioder i forældreskabet. Teenagere gennemgår store fysiske, emotionelle og sociale forandringer, da de udvikler deres identitet, søger uafhængighed og navigerer komplekse sociale dynamikker. Disse forandringer kan føre til konflikter, frustrationer og bekymringer for både teenagere og forældre.
              </p>
              <p>
                Det er vigtigt at huske, at de fleste teenagere kommer igennem denne periode og bliver sunde, velfungerende voksne. Teenageårene er en naturlig del af udviklingen, hvor unge prøver at finde deres plads i verden og etablere deres egen identitet. Mens dette kan være udfordrende, er det også en vigtig periode for vækst og udvikling.
              </p>
              <p>
                Det kan hjælpe at have strategier til at håndtere udfordringerne og at forstå, at meget af det, der sker, er normalt teenageadfærd. Det er også vigtigt at huske, at selvom det kan føles som om, at din teenager ikke har brug for dig længere, har de faktisk stadig brug for din støtte, vejledning og kærlighed - bare på en anden måde end før.
              </p>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Forstå teenageudvikling</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                For at håndtere din teenager effektivt, er det vigtigt at forstå, hvad der sker i deres liv. Teenagere gennemgår store fysiske forandringer gennem puberteten, hvilket kan påvirke deres humør og energi. De udvikler også deres egen identitet og prøver at finde ud af, hvem de er og hvor de passer ind.
              </p>
              <p>
                Teenagere søger også uafhængighed, hvilket kan føre til konflikter med forældre, da de prøver at etablere deres egen autonomi. De navigerer også komplekse sociale dynamikker, herunder venskaber, romantiske relationer og social accept. Alle disse faktorer kan skabe stress og frustration, som kan manifestere sig som irritabilitet, konflikter eller adfærdsproblemer.
              </p>
              <p>
                Det er vigtigt at huske, at meget af det, der kan virke som "problematisk" adfærd, faktisk er normal teenageudvikling. Det betyder ikke, at du skal acceptere alt, men det kan hjælpe med at forstå, hvorfor din teenager opfører sig, som de gør.
              </p>
            </div>
          </Card>

          <Card className="p-8 bg-muted/30">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Strategier til at håndtere din teenager</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Vær tålmodig og forstående - teenageårene kan være en vanskelig periode, og din teenager gennemgår store forandringer. Vær tålmodig med deres humørsvingninger, konflikter og udfordringer. Prøv at se situationen fra deres perspektiv og forstå, at de navigerer gennem komplekse udfordringer.
              </p>
              <p>
                Etabler klare grænser og forventninger - teenagere har stadig brug for grænser, selvom de søger uafhængighed. Klare, konsistente grænser giver teenagere en følelse af sikkerhed og strukturer. Forklar, hvorfor reglerne eksisterer, og involver din teenager i diskussioner om regler, når det er muligt. Dette kan hjælpe med at bygge respekt og forståelse.
              </p>
              <p>
                Kommuniker åbent og ærligt - oprethold åben kommunikation med din teenager, selv når det er svært. Lyt til deres bekymringer og følelser uden at dømme, og del dine egne følelser på en konstruktiv måde. Vær ærlig om dine bekymringer, men undgå at være kontrollerende eller indgribende.
              </p>
              <p>
                Vær konsistent i din opdragelse - konsistens er vigtig for teenagere, da det giver dem en følelse af forudsigelighed og sikkerhed. Vær konsistent i din håndhævelse af regler og konsekvenser, og sørg for, at begge forældre er enige om opdragelsesstrategier.
              </p>
              <p>
                Giv din teenager plads til at vokse og lave fejl - teenagere har brug for at lave fejl og lære af dem. Giv dem plads til at udforske og eksperimentere, mens du stadig er der til at støtte og vejlede. Dette kan hjælpe med at bygge selvtillid og uafhængighed.
              </p>
              <p>
                Sørg for, at din teenager ved, at du elsker dem uanset hvad - selv når der er konflikter eller udfordringer, er det vigtigt, at din teenager ved, at din kærlighed er uforbeholden. Dette kan give dem en følelse af sikkerhed og selvværd, som er vigtig for deres mentale sundhed.
              </p>
              <p>
                Pas på dig selv - at være forælder til en teenager kan være hårdt, og det er vigtigt, at du også passer på dig selv. Sørg for at få nok søvn, motion og tid til dig selv. Overvej at søge støtte fra venner, familie eller professionelle, hvis du har brug for det. Husk, at du ikke kan tage vare på din teenager, hvis du ikke tager vare på dig selv.
              </p>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Når det bliver svært</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Selvom de fleste teenagere kommer igennem teenageårene uden større problemer, kan nogle teenagere have alvorlige udfordringer, der kræver professionel hjælp. Hvis din teenager har alvorlige mentale sundhedsproblemer, misbrug, eller adfærd, der er skadelig for dem selv eller andre, er det vigtigt at søge professionel hjælp.
              </p>
              <p>
                Det er også vigtigt at huske, at det er okay at bede om hjælp som forælder. At være forælder til en teenager kan være udfordrende, og der er ingen skam i at søge støtte eller rådgivning. Mange forældre finder det nyttigt at tale med andre forældre, deltage i forældregrupper, eller søge professionel rådgivning.
              </p>
            </div>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default CopingWithTeenager;

