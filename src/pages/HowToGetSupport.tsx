import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, Phone, Users, Heart } from "lucide-react";

const HowToGetSupport = () => {
  return (
    <div className="min-h-screen py-12" id="main-content">
      <div className="container mx-auto px-4">
        <Link to="/mental-sundhedsstotte-til-born-og-unge" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
          Tilbage til oversigt
        </Link>

        {/* Overskrift */}
        <header className="max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Hvordan får du støtte
          </h1>
          <p className="text-xl text-muted-foreground">
            Find ud af om de forskellige trin, der er involveret i at få mental sundhedsstøtte til børn og unge
          </p>
        </header>

        {/* Hovedindhold */}
        <main className="max-w-4xl mx-auto space-y-8">
          <Card className="p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
              Trin til at få støtte
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Tal med nogen, du stoler på</h3>
                  <p className="text-muted-foreground">
                    Det første skridt er ofte at tale med en voksen, du stoler på. Det kunne være en forælder, lærer, skolepsykolog eller en anden voksen. Det er okay at bede om hjælp, og det er et tegn på styrke at søge støtte.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Kontakt din læge</h3>
                  <p className="text-muted-foreground">
                    Din læge kan være et godt sted at starte. De kan vurdere din situation og henvise dig til relevante tjenester eller specialister, hvis det er nødvendigt.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Undersøg lokale tjenester</h3>
                  <p className="text-muted-foreground">
                    Der findes mange forskellige tjenester og ressourcer tilgængelige. Din skole, kommunen eller lokale organisationer kan have information om tilgængelige tjenester i dit område.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Få en henvisning</h3>
                  <p className="text-muted-foreground">
                    Afhængigt af din situation kan du have brug for en henvisning fra din læge eller en anden fagperson for at få adgang til visse tjenester. Din læge eller skolepsykolog kan hjælpe med dette.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-bold">5</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Deltag i behandling eller støtte</h3>
                  <p className="text-muted-foreground">
                    Når du har fået adgang til en tjeneste, vil du typisk møde en fagperson, der kan hjælpe dig. Det kan tage tid at finde den rigtige type støtte, så vær tålmodig og åben om dine behov.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Hvad sker der efter henvisning?</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Efter at have fået en henvisning vil du typisk blive kontaktet af tjenesten for at arrangere en indledende vurdering. Denne vurdering hjælper tjenesten med at forstå dine behov og udvikle en behandlingsplan. Det kan tage nogle uger fra henvisning til første aftale, afhængigt af tjenestens kapacitet og din situation.
              </p>
              <p>
                Under behandlingen vil du typisk møde en fagperson regelmæssigt - dette kan være en psykolog, socialrådgiver eller anden fagperson, der er specialiseret i børn og unges mentale sundhed. Behandlingen er typisk konfidentiel, hvilket betyder, at det, du deler, forbliver privat, medmindre der er bekymringer om din sikkerhed eller andres sikkerhed.
              </p>
            </div>
          </Card>

          <Card className="p-8 bg-muted/30">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Vigtige ting at huske</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Det er okay at bede om hjælp - det er et tegn på styrke, ikke svaghed. At erkende, at man har brug for hjælp, kræver mod og selvindsigt. Du er ikke alene - mange børn og unge kæmper med mentale sundhedsproblemer, og det er helt normalt at have det svært nogle gange.
              </p>
              <p>
                Der findes hjælp - der er mange forskellige typer af støtte tilgængelig, fra selvhjælp og online ressourcer til professionel rådgivning og behandling. Det kan tage tid at finde den rigtige støtte - ikke alle tjenester eller fagfolk vil være det rigtige match for dig, og det er okay at prøve forskellige ting, indtil du finder det, der virker for dig.
              </p>
              <p>
                Du fortjener støtte - alle har ret til at få hjælp til deres mentale sundhed, og du fortjener at have det godt. Mental sundhed er lige så vigtig som fysisk sundhed, og det er vigtigt at tage sig af begge dele.
              </p>
              <p>
                Vær tålmodig - behandling og støtte kan tage tid, og forbedringer kan være gradvise. Det er vigtigt ikke at give op, selvom det kan føles svært nogle gange. Husk, at selv små forbedringer er fremskridt.
              </p>
            </div>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default HowToGetSupport;

