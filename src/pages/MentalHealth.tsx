import { Card } from "@/components/ui/card";
import { CheckCircle, Brain, Shield, Smile } from "lucide-react";

function MentalHealth() {
  return (
    <div className="min-h-screen py-12" id="main-content">
      <div className="container mx-auto px-4">
        {/* Overskrift */}
        <header className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Mental Sundhed & Velvære
          </h1>
          <p className="text-xl text-muted-foreground">
            Lær mere om mental sundhed, hvad der fremmer den, og hvordan du kan passe på dig selv
          </p>
        </header>

        {/* Hovedindholdssektion */}
        <main className="max-w-4xl mx-auto space-y-12">
          
          {/* Hvad er mental sundhed */}
          <section aria-labelledby="what-is-heading">
            <Card className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 id="what-is-heading" className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                    Hvad er mental sundhed?
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Mental sundhed – eller psykisk sundhed – handler naturligvis om sindet, dvs. vores 
                      kognitive og følelsesmæssige trivsel. Det omfatter, hvordan vi tænker, føler og agerer 
                      i vores hverdag.
                    </p>
                    <p>
                      God mental sundhed betyder ikke blot fravær af psykisk sygdom. Det handler om at have 
                      overskud til at håndtere livets udfordringer, realisere sit potentiale, lære og arbejde 
                      produktivt samt bidrage til fællesskabet.
                    </p>
                    <p>
                      Mennesker, der over længere tid har lav grad af mental sundhed, har højere risiko for 
                      at udvikle både somatiske sygdomme (fx hjertekarsygdom) og psykiske sygdomme (fx depression 
                      og angst), og de dør generelt tidligere end mennesker, der trives godt mentalt.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          {/* Billedpause */}
          <figure className="rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="https://gamesure.com.au/wp-content/uploads/2021/09/mental-health.png" 
              alt="Person der laver yoga i en grøn park om morgenen, illustrerer mental sundhed og velvære gennem fysisk aktivitet" 
              className="w-full h-auto"
              loading="lazy"
            />
          </figure>

          {/* Hvad fremmer mental sundhed */}
          <section aria-labelledby="promotes-heading">
            <Card className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h2 id="promotes-heading" className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                    Hvad fremmer mental sundhed?
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Der findes en række beskyttende faktorer, der påvirker den mentale sundhed positivt. 
                    Disse faktorer kan opdeles i individuelle faktorer, sociale faktorer og samfundsmæssige forhold.
                  </p>
                  
                  <div className="space-y-6 mt-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">Individuelle faktorer</h3>
                      <ul className="space-y-3" role="list">
                        {[
                          "En positiv selvopfattelse og selvtillid",
                          "Evnen til at mestre udfordringer og håndtere stress",
                          "Optimisme og håb for fremtiden",
                          "Følelsesmæssig intelligens og selvindsigt",
                          "Sunde livsstilsvaner som motion, søvn og kost"
                        ].map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">Sociale faktorer</h3>
                      <ul className="space-y-3" role="list">
                        {[
                          "Stærke og støttende relationer til familie og venner",
                          "At føle sig som en del af et fællesskab",
                          "Gode arbejdsforhold og balance mellem arbejde og privatliv",
                          "Adgang til hjælp og støtte når man har brug for det",
                          "Mulighed for meningsfulde aktiviteter og engagement"
                        ].map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">Samfundsmæssige forhold</h3>
                      <ul className="space-y-3" role="list">
                        {[
                          "Adgang til uddannelse og beskæftigelse",
                          "Økonomisk tryghed og stabile boligforhold",
                          "Et inkluderende samfund uden diskrimination",
                          "Gode sundhedstilbud og let adgang til hjælp",
                          "Trygge og sikre omgivelser"
                        ].map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          {/* Mental sundhed blandt børn og unge */}
          <section aria-labelledby="youth-heading">
            <Card className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <Smile className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <h2 id="youth-heading" className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                    Mental sundhed blandt børn og unge
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      De fleste børn og unge trives godt, men en del oplever, at de er utilfredse med deres 
                      liv, føler sig forkerte og ensomme, er utilfredse med deres krop eller ikke selv stoler 
                      på, at de kan noget.
                    </p>
                    <p>
                      Lav grad af mental sundhed blandt børn og unge har både en kønsmæssig og en social slagside: 
                      Flere piger end drenge oplever lav grad af mental sundhed, og børn fra sårbare familier med 
                      fx alkoholmisbrug og psykisk sygdom har større risiko end andre for at opleve mistrivsel 
                      eller lav grad af mental sundhed.
                    </p>
                    <p>
                      Det er særligt vigtigt at sætte ind overfor lav grad af mental sundhed hos børn og unge, 
                      da lav grad af mental sundhed kan have langvarige konsekvenser, og nogle ellers er i risiko 
                      for at udvikle egentlige psykiske lidelser.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          {/* Tips og ressourcer */}
          <section aria-labelledby="tips-heading">
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <h2 id="tips-heading" className="text-2xl md:text-3xl font-bold mb-6 text-center text-foreground">
                Tips til at passe på din mentale sundhed
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg text-foreground">Daglige vaner</h3>
                  <ul className="space-y-2 text-muted-foreground" role="list">
                    <li>Få nok søvn (7-9 timer for unge)</li>
                    <li>Spis regelmæssigt og sundt</li>
                    <li>Bevæg dig dagligt</li>
                    <li>Tag pauser fra skærme</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg text-foreground">Sociale relationer</h3>
                  <ul className="space-y-2 text-muted-foreground" role="list">
                    <li>Plej dine venskaber</li>
                    <li>Tal om dine følelser</li>
                    <li>Søg støtte når du har brug for det</li>
                    <li>Vær en del af et fællesskab</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg text-foreground">Stresshåndtering</h3>
                  <ul className="space-y-2 text-muted-foreground" role="list">
                    <li>Lær at sige nej</li>
                    <li>Prioriter hvad der er vigtigt</li>
                    <li>Prøv afspændingsteknikker</li>
                    <li>Find balance i hverdagen</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg text-foreground">Personlig udvikling</h3>
                  <ul className="space-y-2 text-muted-foreground" role="list">
                    <li>Gør ting du nyder</li>
                    <li>Sæt realistiske mål</li>
                    <li>Vær venlig mod dig selv</li>
                    <li>Fejr dine succeser</li>
                  </ul>
                </div>
              </div>
            </Card>
          </section>

        </main>
      </div>
    </div>
  );
}

export default MentalHealth;
