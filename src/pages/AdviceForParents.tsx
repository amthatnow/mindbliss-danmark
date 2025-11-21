import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, BookOpen, Phone, AlertCircle } from "lucide-react";

const AdviceForParents = () => {
  return (
    <div className="min-h-screen py-12" id="main-content">
      <div className="container mx-auto px-4">
        {/* Overskrift */}
        <header className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Råd til forældre
          </h1>
          <p className="text-xl text-muted-foreground">
            Find råd og støtte til forældre, der har børn eller teenagere med mentale sundhedsproblemer
          </p>
        </header>

        {/* Akut hjælp sektion */}
        <section aria-labelledby="urgent-help-heading" className="mb-12">
          <Card className="p-8 bg-destructive/10 border-destructive/20">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-8 h-8 text-destructive flex-shrink-0" aria-hidden="true" />
              <div>
                <h2 id="urgent-help-heading" className="text-2xl font-bold mb-4 text-foreground">
                  Få akut hjælp nu til mental sundhed
                </h2>
                <p className="text-muted-foreground mb-4">
                  Hvis du eller dit barn har brug for akut hjælp, er der hjælp at få.
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
          
          {/* Emne grid */}
          <section aria-labelledby="topics-heading">
            <h2 id="topics-heading" className="text-3xl font-bold mb-8 text-foreground">
              Råd og information
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Link to="/rad-til-foraeldre/born-og-sorg" className="block">
                  <h3 className="text-xl font-semibold mb-3 text-foreground hover:text-primary">
                    Børn og sorg
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Hjælp dit barn med at håndtere sorg og tab
                  </p>
                  <Button variant="outline" className="w-full">
                    Læs mere
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Button>
                </Link>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Link to="/rad-til-foraeldre/hjaelp-dit-barn-med-vrede" className="block">
                  <h3 className="text-xl font-semibold mb-3 text-foreground hover:text-primary">
                    Hjælp dit barn med vrede
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Strategier til at håndtere vrede og aggression hos børn
                  </p>
                  <Button variant="outline" className="w-full">
                    Læs mere
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Button>
                </Link>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Link to="/rad-til-foraeldre/angstlidelser-hos-born" className="block">
                  <h3 className="text-xl font-semibold mb-3 text-foreground hover:text-primary">
                    Angstlidelser hos børn
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Forstå og håndtere angstlidelser hos børn
                  </p>
                  <Button variant="outline" className="w-full">
                    Læs mere
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Button>
                </Link>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Link to="/rad-til-foraeldre/angst-hos-born" className="block">
                  <h3 className="text-xl font-semibold mb-3 text-foreground hover:text-primary">
                    Angst hos børn
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Information om angst hos børn og hvordan du kan hjælpe
                  </p>
                  <Button variant="outline" className="w-full">
                    Læs mere
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Button>
                </Link>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Link to="/rad-til-foraeldre/depression-hos-born-og-unge" className="block">
                  <h3 className="text-xl font-semibold mb-3 text-foreground hover:text-primary">
                    Depression hos børn og unge
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Genkend tegn på depression og find ud af, hvordan du kan støtte
                  </p>
                  <Button variant="outline" className="w-full">
                    Læs mere
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Button>
                </Link>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Link to="/rad-til-foraeldre/tale-med-dit-barn-om-folelser" className="block">
                  <h3 className="text-xl font-semibold mb-3 text-foreground hover:text-primary">
                    Tale med dit barn om følelser
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Tips til at åbne samtaler om følelser med dit barn
                  </p>
                  <Button variant="outline" className="w-full">
                    Læs mere
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Button>
                </Link>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Link to="/rad-til-foraeldre/teenager-aggression-og-skænderier" className="block">
                  <h3 className="text-xl font-semibold mb-3 text-foreground hover:text-primary">
                    Teenager aggression og skænderier
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Håndter aggression og konflikter med din teenager
                  </p>
                  <Button variant="outline" className="w-full">
                    Læs mere
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Button>
                </Link>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Link to="/rad-til-foraeldre/handtere-din-teenager" className="block">
                  <h3 className="text-xl font-semibold mb-3 text-foreground hover:text-primary">
                    Håndtere din teenager
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Strategier til at håndtere udfordringer med teenagere
                  </p>
                  <Button variant="outline" className="w-full">
                    Læs mere
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Button>
                </Link>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Link to="/rad-til-foraeldre/bekymret-for-din-teenager" className="block">
                  <h3 className="text-xl font-semibold mb-3 text-foreground hover:text-primary">
                    Bekymret for din teenager?
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Hvad du skal gøre, hvis du er bekymret for din teenagers mentale sundhed
                  </p>
                  <Button variant="outline" className="w-full">
                    Læs mere
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Button>
                </Link>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Link to="/rad-til-foraeldre/hjaelp-dit-barn-med-eksamensstress" className="block">
                  <h3 className="text-xl font-semibold mb-3 text-foreground hover:text-primary">
                    Hjælp dit barn med eksamensstress
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Støt dit barn gennem eksamensperioder og reducer stress
                  </p>
                  <Button variant="outline" className="w-full">
                    Læs mere
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Button>
                </Link>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Link to="/rad-til-foraeldre/tale-med-din-teenager" className="block">
                  <h3 className="text-xl font-semibold mb-3 text-foreground hover:text-primary">
                    Tale med din teenager
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Tips til at kommunikere effektivt med din teenager
                  </p>
                  <Button variant="outline" className="w-full">
                    Læs mere
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Button>
                </Link>
              </Card>
            </div>
          </section>

          {/* Yderligere støtte sektion */}
          <section aria-labelledby="further-support-heading">
            <Card className="p-8 bg-muted/30">
              <h2 id="further-support-heading" className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                Yderligere støtte og tjenester
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Der findes mange ressourcer og tjenester tilgængelige for forældre, der støtter børn og unge med mentale sundhedsproblemer. Støttegrupper for forældre kan være en værdifuld ressource, hvor du kan møde andre forældre, der har lignende erfaringer. Dette kan hjælpe med at reducere følelser af isolation og give praktiske tips og støtte.
                </p>
                <p>
                  Rådgivning for forældre kan også være nyttigt - mange forældre finder det nyttigt at søge rådgivning for sig selv, så de bedre kan støtte deres barn. Dette kan hjælpe med at håndtere stress, bekymringer og frustrationer, der kan opstå, når man støtter et barn med mentale sundhedsproblemer.
                </p>
                <p>
                  Online ressourcer og guides kan også være nyttige - der findes mange websites og ressourcer, der kan give information og vejledning om, hvordan man støtter et barn med mentale sundhedsproblemer. Disse kan være særligt nyttige, hvis du har brug for information uden for normale åbningstider eller hvis du foretrækker at læse op på egen hånd.
                </p>
                <p>
                  Professionel hjælp kan også være vigtig - hvis dit barn har alvorlige mentale sundhedsproblemer, kan det være nødvendigt at søge professionel hjælp. Dette kan inkludere børn og unges mental sundhedstjenester (BUMH), private psykologer eller andre specialiserede tjenester.
                </p>
                <p>
                  Det er vigtigt at huske, at du ikke er alene, og at der er hjælp at få både for dit barn og for dig som forælder. At støtte et barn med mentale sundhedsproblemer kan være hårdt, men der er mange ressourcer og støtte tilgængelige. Det er ikke et tegn på svaghed at bede om hjælp - det er et tegn på styrke og omsorg for dit barn.
                </p>
              </div>
            </Card>
          </section>

        </main>
      </div>
    </div>
  );
};

export default AdviceForParents;

