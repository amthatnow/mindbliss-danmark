import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Heart, Phone } from "lucide-react";

const CounsellingForStudentMentalHealth = () => {
  return (
    <div className="min-h-screen py-12" id="main-content">
      <div className="container mx-auto px-4">
        <Link to="/rad-til-teenagere-unge-voksne-og-studerende" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
          Tilbage til oversigt
        </Link>

        <header className="max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Rådgivning til studerende med mental sundhedsproblemer
          </h1>
        </header>

        <main className="max-w-4xl mx-auto space-y-8">
          <Card className="p-8">
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Mange uddannelsesinstitutioner i Danmark tilbyder gratis eller lavpris rådgivningstjenester til studerende, der kæmper med mentale sundhedsproblemer. Disse tjenester er designet specifikt til at møde de unikke behov hos studerende og kan være et værdifuldt sted at få støtte og hjælp. Rådgivningstjenester på uddannelsesinstitutioner er typisk let tilgængelige og kan være en god første ressource for studerende, der har brug for støtte.
              </p>
              <p>
                Rådgivningstjenester kan hjælpe med en bred vifte af problemer, herunder stress, angst, depression, relationer, studierelaterede bekymringer, selvværd, selvtillid, livsvalg og fremtidsplanlægning. Rådgivere er professionelle, der er trænet i at arbejde med unge mennesker og deres unikke udfordringer.
              </p>
              <p>
                Mange studerende finder det lettere at søge hjælp gennem deres uddannelsesinstitution, da tjenesterne er let tilgængelige, ofte gratis, og designet specifikt til studerende. Rådgivere på uddannelsesinstitutioner forstår typisk de specifikke udfordringer, som studerende står over for, såsom akademisk pres, eksamensangst, eller vanskeligheder med at balancere studie og privatliv.
              </p>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Hvordan får du adgang til rådgivning</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                For at få adgang til rådgivning skal du typisk kontakte din skoles eller universitets rådgivningstjeneste. Mange institutioner har online booking systemer, hvor du kan booke en aftale direkte. Nogle institutioner tilbyder også drop-in tjenester, hvor du kan komme uden aftale, hvis du har brug for akut støtte.
              </p>
              <p>
                Rådgivning er typisk gratis for studerende, hvilket gør det mere tilgængeligt end private rådgivere. Du kan ofte få en aftale inden for få dage eller uger, afhængigt af tjenestens kapacitet og din situation. Akutte tilfælde prioriteres typisk.
              </p>
              <p>
                Rådgivere er professionelle og er bundet af tavshedspligt, hvilket betyder, at det, du deler, forbliver privat, medmindre der er bekymringer om din sikkerhed eller andres sikkerhed. Dette kan give en følelse af tryghed og tillid, som er vigtig for effektiv rådgivning.
              </p>
            </div>
          </Card>

          <Card className="p-8 bg-muted/30">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Hvad kan rådgivning hjælpe med?</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Rådgivningstjenester kan hjælpe med mange forskellige problemer. Stress og pres er almindelige problemer for studerende, og rådgivere kan hjælpe med at udvikle strategier til at håndtere stress og finde balance i livet. Angst og bekymringer kan også være almindelige, især i forbindelse med eksamener eller akademisk pres.
              </p>
              <p>
                Depression og tristhed kan også være problemer, som mange studerende kæmper med. Rådgivere kan hjælpe med at identificere tegn på depression og udvikle strategier til at håndtere det. Relationer og sociale problemer kan også være udfordrende for studerende, især hvis de er nye på en institution eller har svært ved at finde venner.
              </p>
              <p>
                Studierelaterede bekymringer, såsom eksamensangst, prokrastinering eller vanskeligheder med at koncentrere sig, kan også være noget, som rådgivere kan hjælpe med. Selvværd og selvtillid kan også være områder, hvor rådgivning kan være nyttig, især hvis du kæmper med negative tanker om dig selv eller din præstation.
              </p>
              <p>
                Livsvalg og fremtidsplanlægning kan også være områder, hvor rådgivning kan være nyttig. Rådgivere kan hjælpe med at udforske forskellige muligheder, tage beslutninger og planlægge for fremtiden.
              </p>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Hvad kan du forvente?</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Når du kontakter en rådgivningstjeneste, vil du typisk først have en indledende samtale, hvor rådgiveren vurderer din situation og behov. Baseret på denne vurdering vil rådgiveren udvikle en plan for, hvordan de kan hjælpe dig.
              </p>
              <p>
                Rådgivning kan variere fra kortvarige sessioner til længerevarende forløb, afhængigt af dine behov. Nogle studerende har brug for kun få sessioner, mens andre kan have brug for længerevarende støtte. Rådgivere arbejder typisk med evidensbaserede metoder, såsom kognitiv adfærdsterapi eller løsningsfokuseret terapi.
              </p>
              <p>
                Det er vigtigt at huske, at rådgivning er en proces, og det kan tage tid at se forbedringer. Det er også vigtigt at være åben og ærlig med din rådgiver, så de bedst kan hjælpe dig. Husk, at rådgivere er der for at støtte dig, ikke for at dømme dig.
              </p>
            </div>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default CounsellingForStudentMentalHealth;

