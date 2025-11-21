import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, GraduationCap, Heart, Phone, AlertCircle } from "lucide-react";

const AdviceForTeenagersYoungAdultsStudents = () => {
  return (
    <div className="min-h-screen py-12" id="main-content">
      <div className="container mx-auto px-4">
        {/* Overskrift */}
        <header className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Råd til teenagere, unge voksne og studerende
          </h1>
          <p className="text-xl text-muted-foreground">
            Råd og støtte til studerende og unge mennesker med mentale sundhedsproblemer
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
          
          {/* Emne grid */}
          <section aria-labelledby="topics-heading">
            <h2 id="topics-heading" className="text-3xl font-bold mb-8 text-foreground">
              Råd og information
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Link to="/rad-til-teenagere-unge-voksne-og-studerende/studerende-stress" className="block">
                  <div className="flex items-start gap-4">
                    <GraduationCap className="w-6 h-6 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3 text-foreground hover:text-primary">
                        Studerende stress
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Forstå og håndtere stress som studerende
                      </p>
                      <Button variant="outline" className="w-full">
                        Læs mere
                        <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                      </Button>
                    </div>
                  </div>
                </Link>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Link to="/rad-til-teenagere-unge-voksne-og-studerende/tips-til-forberedelse-til-eksamener" className="block">
                  <div className="flex items-start gap-4">
                    <BookOpen className="w-6 h-6 text-accent flex-shrink-0 mt-1" aria-hidden="true" />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3 text-foreground hover:text-primary">
                        Tips til forberedelse til eksamener
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Strategier til at forberede dig til eksamener og reducere stress
                      </p>
                      <Button variant="outline" className="w-full">
                        Læs mere
                        <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                      </Button>
                    </div>
                  </div>
                </Link>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Link to="/rad-til-teenagere-unge-voksne-og-studerende/raadgivning-til-studenter-med-mental-sundhedsproblemer" className="block">
                  <div className="flex items-start gap-4">
                    <Heart className="w-6 h-6 text-secondary-foreground flex-shrink-0 mt-1" aria-hidden="true" />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3 text-foreground hover:text-primary">
                        Rådgivning til studerende med mental sundhedsproblemer
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Find ud af om rådgivningstjenester tilgængelige for studerende
                      </p>
                      <Button variant="outline" className="w-full">
                        Læs mere
                        <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                      </Button>
                    </div>
                  </div>
                </Link>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Link to="/rad-til-teenagere-unge-voksne-og-studerende/sorg-og-unge" className="block">
                  <div className="flex items-start gap-4">
                    <Heart className="w-6 h-6 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3 text-foreground hover:text-primary">
                        Sorg og unge
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Håndter sorg og tab som ung person
                      </p>
                      <Button variant="outline" className="w-full">
                        Læs mere
                        <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                      </Button>
                    </div>
                  </div>
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
                  Der findes mange ressourcer og tjenester tilgængelige for teenagere, unge voksne og studerende, der kæmper med mentale sundhedsproblemer. Rådgivningstjenester på uddannelsesinstitutioner er ofte let tilgængelige og gratis for studerende. Disse tjenester er designet specifikt til at møde de unikke behov hos studerende og kan hjælpe med en bred vifte af problemer, fra studierelateret stress til mere alvorlige mentale sundhedsproblemer.
                </p>
                <p>
                  Online ressourcer kan også være en værdifuld ressource - der findes mange websites, apps og ressourcer, der kan give information, selvhjælp og støtte. Disse kan være særligt nyttige, hvis du ikke er klar til at tale med nogen endnu, eller hvis du har brug for information uden for normale åbningstider.
                </p>
                <p>
                  Støttegrupper kan også være nyttige - mange organisationer tilbyder støttegrupper for unge mennesker, der kæmper med lignende problemer. Disse kan give en følelse af fællesskab og forståelse, og kan hjælpe med at reducere følelser af isolation.
                </p>
                <p>
                  Professionel hjælp kan også være vigtig, især hvis dine problemer er mere alvorlige eller vedvarende. Dette kan inkludere børn og unges mental sundhedstjenester (BUMH), private psykologer eller andre specialiserede tjenester. Din læge kan hjælpe med at henvise til relevante tjenester.
                </p>
                <p>
                  Mange uddannelsesinstitutioner tilbyder gratis rådgivningstjenester til studerende. Kontakt din skole eller universitet for at finde ud af, hvilke tjenester der er tilgængelige. Disse tjenester er typisk let tilgængelige og kan være en god første ressource for studerende, der har brug for støtte.
                </p>
                <p>
                  Det er vigtigt at huske, at det er okay at bede om hjælp, og at der er hjælp at få. Du er ikke alene, og mange unge mennesker kæmper med mentale sundhedsproblemer. Med den rigtige støtte og behandling kan de fleste unge mennesker forbedre deres situation og leve sunde, produktive liv.
                </p>
              </div>
            </Card>
          </section>

        </main>
      </div>
    </div>
  );
};

export default AdviceForTeenagersYoungAdultsStudents;

