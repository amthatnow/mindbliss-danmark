import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { ArrowLeft, AlertCircle } from "lucide-react";

const WorriedAboutTeenager = () => {
  return (
    <div className="min-h-screen py-12" id="main-content">
      <div className="container mx-auto px-4">
        <Link to="/rad-til-foraeldre" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
          Tilbage til oversigt
        </Link>

        <header className="max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Bekymret for din teenager?
          </h1>
        </header>

        <main className="max-w-4xl mx-auto space-y-8">
          <Card className="p-8">
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Det er helt normalt at være bekymret som forælder til en teenager. Teenageårene kan være en vanskelig periode med mange forandringer, og det er naturligt at bekymre sig om din teenagers velvære. Men nogle gange kan bekymringerne være berettigede, og det er vigtigt at vide, hvornår man skal handle og hvornår bekymringer er normale.
              </p>
              <p>
                Det kan være svært at skelne mellem normal teenageadfærd og tegn på alvorlige problemer. Normal teenageadfærd kan inkludere humørsvingninger, periodisk irritabilitet, ønske om mere privatliv, eller konflikter om regler. Men hvis din teenager viser tegn på alvorlige mentale sundhedsproblemer, selvmordstanker, selvskade, misbrug eller anden bekymrende adfærd, er det vigtigt at søge hjælp med det samme.
              </p>
              <p>
                Det er bedre at være for forsigtig end at ignorere potentielle problemer. Hvis du er i tvivl om, hvorvidt din teenager har brug for hjælp, er det bedre at søge professionel rådgivning end at vente og se, om problemet forsvinder af sig selv.
              </p>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Tegn på bekymring</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Der er mange tegn, der kan indikere, at din teenager har brug for hjælp. Disse kan inkludere vedvarende tristhed eller irritabilitet, der varer i flere uger, tab af interesse i aktiviteter, de plejede at nyde, sociale tilbagetrækning eller isolation, vanskeligheder med at sove eller spise, faldende skolepræstationer, eller adfærdsændringer, der er bekymrende.
              </p>
              <p>
                Andre tegn kan inkludere brug af alkohol eller stoffer, risikoadfærd, aggression eller vold, eller konstante bekymringer eller angst. Det er vigtigt at huske, at ikke alle teenagere med problemer vil vise alle disse tegn, og at nogle tegn kan være mere subtile end andre.
              </p>
            </div>
          </Card>

          <Card className="p-8 bg-destructive/10 border-destructive/20">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" aria-hidden="true" />
              <div>
                <h2 className="text-xl font-bold mb-3 text-foreground">Tegn på, at du skal søge akut hjælp</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    Der er nogle tegn, der kræver øjeblikkelig professionel hjælp. Hvis din teenager har selvmordstanker eller -planer, er det kritisk at søge akut hjælp med det samme. Selvmordstanker skal altid tages alvorligt, og det er vigtigt at handle hurtigt.
                  </p>
                  <p>
                    Selvskade er også et alvorligt tegn, der kræver øjeblikkelig opmærksomhed. Selvskade kan inkludere at skære sig selv, brænde sig selv, eller andre former for bevidst selvpåført skade. Ekstrem aggression eller vold, især hvis den er rettet mod andre eller sig selv, kræver også akut hjælp.
                  </p>
                  <p>
                    Psykotiske symptomer, såsom hallucinationer, vrangforestillinger eller paranoia, kræver også akut professionel hjælp. Livstruende adfærd, såsom overdosis, selvmordsforsøg eller ekstrem risikoadfærd, kræver også øjeblikkelig intervention.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-muted/30">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Hvad du skal gøre</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Hvis du er bekymret for din teenager, er det vigtigt at handle. Start med at tale med din teenager om dine bekymringer på en støttende og ikke-dømmende måde. Vær ærlig om dine bekymringer, men undgå at være anklagende eller kontrollerende. Lyt til deres svar, og prøv at forstå deres perspektiv.
              </p>
              <p>
                Kontakt din læge eller en mental sundhedsprofessionel - din læge kan vurdere situationen og henvise til relevante tjenester. En mental sundhedsprofessionel kan også hjælpe med at vurdere situationen og udvikle en behandlingsplan. Mange kommuner tilbyder også gratis eller lavpris rådgivningstjenester til unge.
              </p>
              <p>
                I nødsituationer skal du kontakte akuttelefonen (112) med det samme. Hvis din teenager har selvmordstanker, er i fare for at skade sig selv eller andre, eller har taget en overdosis, skal du ringe 112 med det samme. Vent ikke - akut hjælp kan redde liv.
              </p>
              <p>
                Kontakt Livslinjen (70 201 201) for krisestøtte - Livslinjen er en gratis krisetelefon, der er tilgængelig 24/7. De kan give støtte og vejledning i krisesituationer. Børnetelefonen (116 111) er også en god ressource for unge, der har brug for at tale med nogen.
              </p>
              <p>
                Overvej at kontakte skolepsykologen eller skolens støtteteam - mange skoler har skolepsykologer eller støtteteams, der kan hjælpe. Disse kan være en god første ressource, og de kan også henvise til yderligere hjælp, hvis det er nødvendigt.
              </p>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Pas på dig selv</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                At være bekymret for din teenager kan være meget stressende og hårdt. Det er vigtigt, at du også passer på dig selv. Sørg for at få nok søvn, motion og tid til dig selv. Overvej at søge støtte for dig selv - det kan være venner, familie, forældregrupper eller professionel rådgivning.
              </p>
              <p>
                Husk, at du ikke er alene - mange forældre kæmper med bekymringer om deres teenagere, og der er hjælp at få. Det er ikke et tegn på svaghed at bede om hjælp - det er et tegn på styrke og omsorg for din teenager.
              </p>
            </div>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default WorriedAboutTeenager;

