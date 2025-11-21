import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, Users, Phone } from "lucide-react";

const ChildrenMentalHealthServices = () => {
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
            Børn og unges mental sundhedstjenester
          </h1>
          <p className="text-xl text-muted-foreground">
            Find ud af om tjenester, der støtter børn og unge til at håndtere deres mentale sundhed
          </p>
        </header>

        {/* Hovedindhold */}
        <main className="max-w-4xl mx-auto space-y-8">
          <Card className="p-8">
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Børn og unges mental sundhedstjenester (BUMH), også kendt som børne- og ungdomspsykiatrien, er specialiserede tjenester, der er designet til at hjælpe børn og unge med deres mentale sundhed. Disse tjenester tilbydes typisk gennem kommunen eller regionen og kan omfatte forskellige former for støtte, rådgivning og behandling. Tjenesterne er designet specifikt til at møde de unikke behov hos børn og unge og deres familier.
              </p>
              <p>
                Tjenesterne kan hjælpe med en bred vifte af mentale sundhedsproblemer, herunder angst, depression, spiseforstyrrelser, selvmordstanker, adfærdsproblemer, traumer, og andre psykiske vanskeligheder. Tjenesterne er typisk gratis eller lavpris og er tilgængelige for alle børn og unge, der har brug for dem.
              </p>
              <p>
                BUMH-tjenester opererer typisk med en "stepped care"-model, hvor man starter med de mindst indgribende interventioner og gradvist øger intensiteten, hvis det er nødvendigt. Dette kan inkludere selvhjælp, online ressourcer, gruppeterapi, individuel terapi, eller i nogle tilfælde medicinsk behandling eller indlæggelse.
              </p>
            </div>
          </Card>

          <section aria-labelledby="services-heading">
            <h2 id="services-heading" className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
              Typer af tjenester
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <Heart className="w-6 h-6 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Rådgivning og terapi</h3>
                    <p className="text-muted-foreground">
                      Individuel eller gruppeterapi med psykologer eller andre fagfolk, der er specialiserede i børn og unges mentale sundhed.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <Users className="w-6 h-6 text-accent flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Familiebaseret støtte</h3>
                    <p className="text-muted-foreground">
                      Støtte, der involverer hele familien for at hjælpe med at håndtere mentale sundhedsproblemer.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-secondary-foreground flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Krisestøtte</h3>
                    <p className="text-muted-foreground">
                      Akut støtte og kriseintervention for børn og unge, der har brug for øjeblikkelig hjælp.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <Heart className="w-6 h-6 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Forebyggende programmer</h3>
                    <p className="text-muted-foreground">
                      Programmer designet til at forbedre mental sundhed og forebygge problemer før de opstår.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Hvad kan du forvente?</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Når du kontakter BUMH-tjenester, vil du typisk først have en indledende vurdering, hvor en fagperson vurderer din situation og behov. Dette kan inkludere en samtale med dig, og muligvis også med dine forældre eller omsorgspersoner. Baseret på denne vurdering vil tjenesten udvikle en behandlingsplan, der er skræddersyet til dine specifikke behov.
              </p>
              <p>
                Behandlingen kan variere afhængigt af dine behov, men kan inkludere individuel terapi, gruppeterapi, familiebaseret terapi, eller i nogle tilfælde medicinsk behandling. Tjenesterne arbejder typisk med evidensbaserede behandlingsmetoder, såsom kognitiv adfærdsterapi, der er dokumenteret effektive for børn og unge.
              </p>
            </div>
          </Card>

          <Card className="p-8 bg-muted/30">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Hvordan får du adgang til tjenesterne?</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                For at få adgang til børn og unges mental sundhedstjenester skal du typisk henvende dig gennem din læge, skolepsykolog eller kommunen. Processen kan variere afhængigt af, hvor du bor, men typisk starter processen med en henvisning fra din læge eller skolepsykolog.
              </p>
              <p>
                Det første skridt er ofte at tale med en voksen, du stoler på - det kunne være en forælder, lærer eller skolepsykolog. De kan hjælpe dig med at finde de rigtige tjenester og støtte, og kan også hjælpe med at lave en henvisning, hvis det er nødvendigt.
              </p>
              <p>
                Nogle tjenester kan også have direkte henvisning, hvor du selv kan kontakte dem. Det er vigtigt at undersøge, hvilke tjenester der er tilgængelige i dit område og hvordan man får adgang til dem. Ventetider kan variere, men mange tjenester prioriterer akutte tilfælde.
              </p>
              <p>
                Det er vigtigt at huske, at det er okay at bede om hjælp, og at der ikke er noget at skamme sig over ved at søge støtte til din mentale sundhed. BUMH-tjenester er designet til at hjælpe, og fagfolkene er der for at støtte dig gennem processen.
              </p>
            </div>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default ChildrenMentalHealthServices;

