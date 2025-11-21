import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, BookOpen, Phone } from "lucide-react";

const MentalHealthSupportChildren = () => {
  return (
    <div className="min-h-screen py-12" id="main-content">
      <div className="container mx-auto px-4">
        {/* Overskrift */}
        <header className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Mental sundhedsstøtte til børn og unge
          </h1>
          <p className="text-xl text-muted-foreground">
            Find ud af, hvilken hjælp du kan få, hvis du er et barn eller en ung person, der har brug for støtte til din mentale sundhed
          </p>
        </header>

        {/* Akut hjælp sektion */}
        <section aria-labelledby="urgent-help-heading" className="mb-12">
          <Card className="p-8 bg-destructive/10 border-destructive/20">
            <div className="flex items-start gap-4">
              <Phone className="w-8 h-8 text-destructive flex-shrink-0" aria-hidden="true" />
              <div>
                <h2 id="urgent-help-heading" className="text-2xl font-bold mb-4 text-foreground">
                  Få akut hjælp til din mentale sundhed
                </h2>
                <p className="text-muted-foreground mb-4">
                  Hvis du har brug for akut hjælp, er der hjælp at få. Du er ikke alene.
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Livslinjen:</strong> 70 201 201 (gratis, 24/7)</p>
                  <p><strong>Børnetelefonen:</strong> 116 111 (gratis, dagligt 11-23)</p>
                  <p><strong>Akuttelefonen:</strong> 112 (ved livstruende situationer)</p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Hovedindholdssektioner */}
        <main className="max-w-4xl mx-auto space-y-12">
          
          {/* Top opgaver */}
          <section aria-labelledby="top-tasks-heading">
            <h2 id="top-tasks-heading" className="text-3xl font-bold mb-8 text-foreground">
              Vigtige opgaver i Mental sundhedsstøtte til børn og unge
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <Heart className="w-6 h-6 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      Børn og unges mental sundhedstjenester
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Find ud af om tjenester, der støtter børn og unge til at håndtere deres mentale sundhed
                    </p>
                    <Link to="/mental-sundhedsstotte-til-born-og-unge/born-og-unge-mental-sundhedstjenester">
                      <Button variant="outline" className="w-full">
                        Læs mere
                        <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <Users className="w-6 h-6 text-accent flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      Hvordan får du støtte
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Find ud af om de forskellige trin, der er involveret i at få mental sundhedsstøtte til børn og unge
                    </p>
                    <Link to="/mental-sundhedsstotte-til-born-og-unge/hvordan-far-du-stotte">
                      <Button variant="outline" className="w-full">
                        Læs mere
                        <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <BookOpen className="w-6 h-6 text-secondary-foreground flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      Få støtte fra mental sundhedsorganisationer
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Nationale organisationer, der støtter børn og unge, forældre og omsorgspersoner
                    </p>
                    <Link to="/mental-sundhedsstotte-til-born-og-unge/stotte-fra-mental-sundhedsorganisationer">
                      <Button variant="outline" className="w-full">
                        Læs mere
                        <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <Heart className="w-6 h-6 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      Støtte til et barn eller en ung
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Information til forældre og omsorgspersoner til en ung person, der har brug for hjælp til deres mentale sundhed
                    </p>
                    <Link to="/mental-sundhedsstotte-til-born-og-unge/stotte-til-barn-eller-ung">
                      <Button variant="outline" className="w-full">
                        Læs mere
                        <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* Informationssektion */}
          <section aria-labelledby="info-heading">
            <Card className="p-8">
              <h2 id="info-heading" className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                Om mental sundhedsstøtte til børn og unge
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Mental sundhed er lige så vigtigt for børn og unge som fysisk sundhed. God mental sundhed giver børn og unge mulighed for at udvikle deres fulde potentiale, håndtere livets udfordringer, opbygge sunde relationer og trives i deres daglige liv. Mental sundhed påvirker alle aspekter af et barns eller en unges liv, herunder skolegang, sociale relationer, familieforhold og generel livskvalitet.
                </p>
                <p>
                  Hvis du er et barn eller en ung person, der kæmper med din mentale sundhed, er det vigtigt at vide, at der er hjælp at få. Du er ikke alene - mange børn og unge kæmper med mentale sundhedsproblemer, og det er helt normalt at have det svært nogle gange. Det er også vigtigt at huske, at det er okay at bede om hjælp, og at søge støtte er et tegn på styrke, ikke svaghed.
                </p>
                <p>
                  Der findes mange forskellige typer af støtte og tjenester tilgængelige, fra selvhjælp og online ressourcer til professionel rådgivning og behandling. Det første skridt er ofte at tale med nogen, du stoler på - det kunne være en forælder, lærer, skolepsykolog eller en anden voksen. Disse mennesker kan hjælpe dig med at finde de rigtige tjenester og støtte, og de kan også give dig støtte og forståelse.
                </p>
                <p>
                  Det er vigtigt at huske, at mental sundhedsproblemer kan behandles, og at der er håb. Med den rigtige støtte og behandling kan de fleste børn og unge med mentale sundhedsproblemer forbedre deres situation og leve sunde, produktive liv. Tidlig intervention er ofte nøglen til succes, så det er vigtigt ikke at vente for længe med at søge hjælp.
                </p>
              </div>
            </Card>
          </section>

          <section aria-labelledby="types-of-support-heading">
            <Card className="p-8 bg-muted/30">
              <h2 id="types-of-support-heading" className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                Typer af støtte
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Der findes mange forskellige typer af støtte tilgængelige for børn og unge. Selvhjælp og online ressourcer kan være et godt første skridt - der findes mange websites, apps og ressourcer, der kan give information og støtte. Disse kan være særligt nyttige, hvis du ikke er klar til at tale med nogen endnu, eller hvis du har brug for information uden for normale åbningstider.
                </p>
                <p>
                  Telefonrådgivning, såsom Børnetelefonen eller Livslinjen, kan også være en værdifuld ressource. Disse tjenester er typisk gratis, konfidentielle og tilgængelige, når du har brug for dem. De kan give støtte og vejledning i krisesituationer eller når du bare har brug for at tale med nogen.
                </p>
                <p>
                  Professionel rådgivning og behandling kan også være vigtigt, især hvis dine problemer er mere alvorlige eller vedvarende. Dette kan inkludere individuel terapi, gruppeterapi, familiebaseret terapi, eller i nogle tilfælde medicinsk behandling. Disse tjenester tilbydes typisk gennem børn og unges mental sundhedstjenester (BUMH) eller gennem private praksisser.
                </p>
              </div>
            </Card>
          </section>

        </main>
      </div>
    </div>
  );
};

export default MentalHealthSupportChildren;

