import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, Users, CheckCircle, Phone } from "lucide-react";

const SupportingChildOrYoung = () => {
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
            Støtte til et barn eller en ung
          </h1>
          <p className="text-xl text-muted-foreground">
            Information til forældre og omsorgspersoner til en ung person, der har brug for hjælp til deres mentale sundhed
          </p>
        </header>

        {/* Hovedindhold */}
        <main className="max-w-4xl mx-auto space-y-8">
          <Card className="p-8">
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Hvis du er forælder eller omsorgsperson til et barn eller en ung person, der kæmper med deres mentale sundhed, kan det være en udfordrende og bekymrende tid. Det er vigtigt at vide, at der er hjælp og støtte tilgængelig både for den unge person og for dig som omsorgsperson.
              </p>
              <p>
                At støtte en ung person med mentale sundhedsproblemer kræver tålmodighed, forståelse og ofte professionel hjælp. Det er vigtigt at huske, at du ikke er alene i dette.
              </p>
            </div>
          </Card>

          <section aria-labelledby="signs-heading">
            <h2 id="signs-heading" className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
              Tegn på, at et barn eller en ung har brug for støtte
            </h2>
            <Card className="p-6">
              <ul className="space-y-3" role="list">
                {[
                  "Væsentlige ændringer i adfærd eller humør",
                  "Tilbagetrækning fra venner, familie eller aktiviteter, de plejede at nyde",
                  "Problemer med søvn eller appetit",
                  "Faldende skolepræstationer",
                  "Selvskade eller taler om at skade sig selv",
                  "Taler om selvmord eller dødsønsker",
                  "Angst eller bekymring, der påvirker hverdagen",
                  "Vrede eller aggression, der er ukarakteristisk"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </section>

          <section aria-labelledby="how-to-help-heading">
            <h2 id="how-to-help-heading" className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
              Sådan kan du hjælpe
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <Heart className="w-6 h-6 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Vær til stede og lyt</h3>
                    <p className="text-muted-foreground">
                      Nogle gange er det vigtigste, du kan gøre, at være til stede og lytte uden at dømme. Lad den unge person vide, at du er der for dem.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <Users className="w-6 h-6 text-accent flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Søg professionel hjælp</h3>
                    <p className="text-muted-foreground">
                      Hvis du er bekymret, er det vigtigt at søge professionel hjælp. Start med at kontakte din læge eller skolepsykolog.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-secondary-foreground flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Få støtte til dig selv</h3>
                    <p className="text-muted-foreground">
                      Det er også vigtigt, at du får støtte. At støtte en ung person med mentale sundhedsproblemer kan være hårdt, og du fortjener også hjælp.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <Heart className="w-6 h-6 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Vær tålmodig</h3>
                    <p className="text-muted-foreground">
                      Mental sundhedsproblemer kan tage tid at håndtere. Vær tålmodig og forstående, og husk at forbedringer kan tage tid.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Søg professionel hjælp</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Hvis du er bekymret for dit barn eller din unge, er det vigtigt at søge professionel hjælp. Start med at kontakte din læge, som kan vurdere situationen og henvise til relevante tjenester. Din læge kan også udelukke eventuelle fysiske årsager til symptomerne.
              </p>
              <p>
                Skolepsykologen kan også være en god ressource - mange skoler har skolepsykologer eller støtteteams, der kan hjælpe. Disse kan være en god første ressource, og de kan også henvise til yderligere hjælp, hvis det er nødvendigt.
              </p>
              <p>
                Børn og unges mental sundhedstjenester (BUMH) kan også være en vigtig ressource. Disse tjenester er specialiserede i at arbejde med børn og unge og kan tilbyde en bred vifte af støtte og behandling. For at få adgang til disse tjenester skal du typisk have en henvisning fra din læge eller skolepsykolog.
              </p>
            </div>
          </Card>

          <Card className="p-8 bg-muted/30">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Vigtige ressourcer</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Der findes mange ressourcer tilgængelige for forældre og omsorgspersoner, der støtter unge med mentale sundhedsproblemer. Støttegrupper for forældre kan være en værdifuld ressource, hvor du kan møde andre forældre, der har lignende erfaringer. Dette kan hjælpe med at reducere følelser af isolation og give praktiske tips og støtte.
              </p>
              <p>
                Information og vejledning fra organisationer kan også være nyttigt - mange organisationer tilbyder guides, artikler og ressourcer specifikt rettet mod forældre. Rådgivning for familier kan også være en vigtig ressource, især hvis hele familien er påvirket af den unge persons problemer.
              </p>
              <p>
                Online ressourcer og guides kan også være nyttige - der findes mange websites og ressourcer, der kan give information og vejledning om, hvordan man støtter en ung person med mentale sundhedsproblemer. Disse kan være særligt nyttige, hvis du har brug for information uden for normale åbningstider eller hvis du foretrækker at læse op på egen hånd.
              </p>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Pas på dig selv</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                At støtte en ung person med mentale sundhedsproblemer kan være meget hårdt og stressende. Det er vigtigt, at du også passer på dig selv. Sørg for at få nok søvn, motion og tid til dig selv. Overvej at søge støtte for dig selv - det kan være venner, familie, forældregrupper eller professionel rådgivning.
              </p>
              <p>
                Husk, at du ikke kan tage vare på en ung person, hvis du ikke tager vare på dig selv. Det er ikke egoistisk at passe på dig selv - det er nødvendigt for at du kan være der for den unge person. Mange forældre finder det nyttigt at søge rådgivning eller støtte for sig selv, så de bedre kan støtte deres barn eller unge.
              </p>
            </div>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default SupportingChildOrYoung;

