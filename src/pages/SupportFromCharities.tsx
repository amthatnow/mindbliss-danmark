import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, Users, Phone, Globe } from "lucide-react";

const SupportFromCharities = () => {
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
            Få støtte fra mental sundhedsorganisationer
          </h1>
          <p className="text-xl text-muted-foreground">
            Nationale organisationer, der støtter børn og unge, forældre og omsorgspersoner
          </p>
        </header>

        {/* Hovedindhold */}
        <main className="max-w-4xl mx-auto space-y-8">
          <Card className="p-8">
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Der findes mange nationale organisationer og velgørenhedsorganisationer, der tilbyder støtte, rådgivning og ressourcer til børn og unge, der kæmper med deres mentale sundhed. Disse organisationer kan være et værdifuldt supplement til professionel behandling eller et første skridt i at få hjælp.
              </p>
              <p>
                Mange af disse organisationer tilbyder gratis eller lavpris tjenester, online ressourcer, telefonrådgivning og fællesskabsstøtte.
              </p>
            </div>
          </Card>

          <section aria-labelledby="organizations-heading">
            <h2 id="organizations-heading" className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
              Typer af organisationer
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Telefonrådgivning</h3>
                    <p className="text-muted-foreground">
                      Organisationer, der tilbyder telefonrådgivning og krisestøtte, så børn og unge kan tale med nogen, når de har brug for det.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <Globe className="w-6 h-6 text-accent flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Online ressourcer</h3>
                    <p className="text-muted-foreground">
                      Organisationer, der tilbyder online information, selvhjælpsressourcer og digitale støtteprogrammer.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <Users className="w-6 h-6 text-secondary-foreground flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Fællesskabsstøtte</h3>
                    <p className="text-muted-foreground">
                      Organisationer, der tilbyder fællesskabsgrupper, møder og støttenetværk for børn, unge og deres familier.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <Heart className="w-6 h-6 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Specialiserede tjenester</h3>
                    <p className="text-muted-foreground">
                      Organisationer, der fokuserer på specifikke mentale sundhedsproblemer eller målgrupper, såsom angst, depression eller spiseforstyrrelser.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Fordele ved organisationer</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Der er mange fordele ved at søge støtte fra mental sundhedsorganisationer. Mange organisationer tilbyder gratis eller lavpris tjenester, hvilket kan gøre støtte mere tilgængelig. De tilbyder også ofte fleksible tjenester, såsom online rådgivning eller telefonrådgivning, hvilket kan være mere praktisk end traditionelle face-to-face møder.
              </p>
              <p>
                Organisationer kan også tilbyde fællesskabsstøtte gennem støttegrupper eller online fællesskaber, hvor du kan møde andre, der har lignende erfaringer. Dette kan hjælpe med at reducere følelser af isolation og give en følelse af fællesskab og forståelse.
              </p>
            </div>
          </Card>

          <Card className="p-8 bg-muted/30">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Eksempler på organisationer</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I Danmark findes der flere organisationer, der tilbyder støtte til børn og unges mentale sundhed. Børnetelefonen (116 111) tilbyder gratis telefonrådgivning for børn og unge og er tilgængelig dagligt fra 11-23. De kan hjælpe med en bred vifte af problemer, fra daglige bekymringer til mere alvorlige kriser.
              </p>
              <p>
                Livslinjen (70 201 201) er en gratis krisetelefon, der er tilgængelig 24/7. De kan give støtte og vejledning i krisesituationer og er en vigtig ressource for dem, der har brug for akut hjælp.
              </p>
              <p>
                Der findes også mange mental sundhedsorganisationer, der fokuserer på specifikke problemer, såsom angst, depression, spiseforstyrrelser eller selvmordsforebyggelse. Disse organisationer kan tilbyde specialiseret viden og støtte, der er specifikt rettet mod dit problem.
              </p>
              <p>
                Lokale og regionale støttenetværk kan også være en værdifuld ressource. Disse kan inkludere støttegrupper, fællesskabscentre eller lokale organisationer, der tilbyder støtte og ressourcer. Det er vigtigt at undersøge, hvilke organisationer der er tilgængelige i dit område, da tilbud kan variere afhængigt af, hvor du bor.
              </p>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Sådan finder du organisationer</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Der er mange måder at finde organisationer på. Din læge, skolepsykolog eller kommunen kan have information om lokale organisationer. Du kan også søge online efter organisationer, der fokuserer på dit specifikke problem eller område.
              </p>
              <p>
                Mange organisationer har også websites med information om deres tjenester, hvordan man kontakter dem, og hvad man kan forvente. Nogle organisationer tilbyder også online ressourcer, såsom selvhjælpsguides, videoer eller artikler, der kan være nyttige, selvom du ikke deltager i deres tjenester.
              </p>
            </div>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default SupportFromCharities;

