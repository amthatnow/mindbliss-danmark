import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

const DepressionInChildrenAndYoung = () => {
  return (
    <div className="min-h-screen py-12" id="main-content">
      <div className="container mx-auto px-4">
        <Link to="/rad-til-foraeldre" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
          Tilbage til oversigt
        </Link>

        <header className="max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Depression hos børn og unge
          </h1>
        </header>

        <main className="max-w-4xl mx-auto space-y-8">
          <Card className="p-8">
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Depression er en alvorlig mental sundhedstilstand, der kan påvirke børn og unge i alle aldre. Det er mere end bare at være trist eller have en dårlig dag - det er en vedvarende følelse af tristhed, håbløshed og mangel på interesse, der påvirker dagligdagen betydeligt. Depression er en af de mest almindelige psykiske lidelser hos børn og unge, og det anslås, at mellem 2-8% af børn og unge oplever depression.
              </p>
              <p>
                Depression hos børn og unge kan vise sig meget anderledes end hos voksne, hvilket kan gøre det svært at genkende. Mens voksne ofte oplever klassiske symptomer som dyb tristhed og håbløshed, kan børn i stedet være mere irritable, aggressive eller udvise adfærdsproblemer. Unge kan have vanskeligheder med at udtrykke deres følelser eller kan isolere sig fra familie og venner. Det er vigtigt at forstå, at depression ikke er noget, barnet eller den unge bare kan "snap out of" - det er en reel medicinsk tilstand, der kræver professionel behandling.
              </p>
              <p>
                Depression kan påvirke alle aspekter af et barns eller en unges liv, herunder skolegang, sociale relationer, familieforhold og generel livskvalitet. Ubehandlet depression kan have alvorlige konsekvenser, herunder øget risiko for selvmordstanker og -adfærd, misbrug af stoffer, akademiske problemer og vanskeligheder med at opretholde relationer. Det er derfor afgørende at genkende tegnene tidligt og søge professionel hjælp.
              </p>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Årsager og risikofaktorer</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Depression hos børn og unge kan skyldes en kombination af faktorer. Genetiske faktorer spiller en rolle - børn med en familiehistorie af depression har en øget risiko for selv at udvikle depression. Biologiske faktorer, såsom ubalance i hjernens kemikalier (neurotransmittere), kan også bidrage. Miljømæssige faktorer er ligeledes vigtige - stressende livsbegivenheder som skilsmisse, tab af en nærtstående, mobning, akademisk pres eller traumatiske oplevelser kan udløse eller forværre depression.
              </p>
              <p>
                Andre risikofaktorer kan inkludere kronisk sygdom, læringsvanskeligheder, sociale vanskeligheder, lavt selvværd, perfektionisme eller en historie med andre psykiske lidelser. Det er vigtigt at forstå, at ingen enkelt faktor forårsager depression - det er typisk en kombination af flere faktorer, der interagerer.
              </p>
            </div>
          </Card>

          <Card className="p-8 bg-muted/30">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Tegn og symptomer på depression</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Tegnene på depression kan variere afhængigt af barnets eller den unges alder, men der er nogle fælles symptomer, man skal være opmærksom på. Vedvarende tristhed eller irritabilitet er et vigtigt tegn - børn kan være mere irritable end triste, hvilket kan være forvirrende for forældre. Tab af interesse i aktiviteter, de plejede at nyde, er et andet vigtigt tegn. Dette kan inkludere hobbyer, sport, sociale aktiviteter eller endda tid med venner.
              </p>
              <p>
                Ændringer i appetit eller vægt kan også være tegn på depression - nogle børn spiser mindre og taber sig, mens andre kan spise mere og tage på. Søvnproblemer er almindelige - dette kan inkludere vanskeligheder med at falde i søvn, vågne tidligt, sove for meget eller have mareridt. Træthed eller mangel på energi er også almindeligt, selv når barnet har fået nok søvn.
              </p>
              <p>
                Vanskeligheder med koncentration kan påvirke skolepræstationer, og barnet kan have problemer med at huske ting eller tage beslutninger. Følelser af værdiløshed eller skyld kan være udtalte, og barnet kan have negative tanker om sig selv. I alvorlige tilfælde kan der være tanker om død eller selvmord, hvilket kræver øjeblikkelig professionel hjælp.
              </p>
              <p>
                Andre tegn kan inkludere fysiske klager som hovedpine eller mavepine uden tydelig fysisk årsag, social tilbagetrækning, adfærdsproblemer, selvmordstanker eller -adfærd, eller brug af alkohol eller stoffer (især hos unge). Det er vigtigt at huske, at ikke alle børn med depression vil have alle disse symptomer, og symptomerne kan variere over tid.
              </p>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Behandlingsmuligheder</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Depression kan behandles, og tidlig intervention kan gøre en stor forskel. Behandlingen afhænger typisk af alderen på barnet eller den unge, alvorligheden af depressionen og individuelle behov. Psykoterapi, især kognitiv adfærdsterapi (KAT), er ofte den første behandlingslinje. KAT hjælper børn og unge med at identificere og ændre negative tankemønstre og adfærd, der bidrager til depressionen.
              </p>
              <p>
                Interpersonel terapi (IPT) kan også være effektiv, især for unge, da den fokuserer på forbedring af relationer og sociale færdigheder. Familiebaseret terapi kan være vigtig, især for yngre børn, da det involverer hele familien i behandlingen. I nogle tilfælde kan medicinsk behandling (antidepressiva) være nødvendig, især for moderate til svære depressioner eller når terapi alene ikke er tilstrækkelig.
              </p>
              <p>
                Medicin bør altid gives under tæt opsyn af en læge eller psykiater, der er specialiseret i børn og unges mentale sundhed. Det er vigtigt at være opmærksom på potentielle bivirkninger og at medicinering typisk skal kombineres med terapi for bedste resultater. I alvorlige tilfælde kan indlæggelse på et hospital være nødvendig for at sikre barnets eller den unges sikkerhed.
              </p>
            </div>
          </Card>

          <Card className="p-8 bg-muted/30">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Hvad du skal gøre som forælder</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Hvis du tror, dit barn eller din unge har depression, er det vigtigt at søge professionel hjælp så hurtigt som muligt. Start med at kontakte din læge, som kan vurdere situationen og henvise til relevante tjenester. Din læge kan også udelukke eventuelle fysiske årsager til symptomerne. Det er vigtigt at være åben og ærlig med lægen om dine bekymringer.
              </p>
              <p>
                Mens du venter på professionel hjælp, er der ting, du kan gøre for at støtte dit barn. Vær støttende og forstående - anerkend barnets eller den unges følelser uden at bagatellisere dem. Lyt aktivt og undgå at give uopfordret rådgivning. Opfordre til sund livsstil, herunder regelmæssig motion, sund kost og nok søvn, da disse ting kan hjælpe med at forbedre humøret.
              </p>
              <p>
                Vær tålmodig - behandling af depression tager tid, og forbedringer kan være gradvise. Det er vigtigt ikke at give op eller blive frustreret, hvis der ikke er øjeblikkelige resultater. Hvis dit barn eller din unge har selvmordstanker, er det kritisk at søge akut hjælp med det samme - kontakt akuttelefonen (112) eller Livslinjen (70 201 201).
              </p>
              <p>
                Husk også at passe på dig selv - at støtte et barn eller en unge med depression kan være hårdt, og det er vigtigt, at du også får støtte. Overvej at søge rådgivning eller støtte for dig selv, så du bedre kan støtte dit barn.
              </p>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Forebyggelse og tidlig intervention</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Selvom det ikke altid er muligt at forhindre depression, er der ting, der kan gøres for at reducere risikoen. At opbygge stærke, støttende relationer i familien og med venner kan hjælpe. At lære børn og unge sunde måder at håndtere stress og udfordringer på kan også være vigtigt.
              </p>
              <p>
                At være opmærksom på tegnene og søge hjælp tidligt kan forhindre, at depressionen bliver værre. Tidlig intervention kan også reducere risikoen for langvarige konsekvenser og forbedre chancerne for en fuld genopretning. Det er vigtigt at normalisere søgning efter hjælp til mentale sundhedsproblemer og at lade børn og unge vide, at det er okay at have det svært og at bede om hjælp.
              </p>
            </div>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default DepressionInChildrenAndYoung;

