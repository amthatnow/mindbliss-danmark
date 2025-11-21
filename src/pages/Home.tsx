import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Users, BookOpen, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-mental-health.jpg";

function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero sektion */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden" aria-labelledby="hero-heading">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
          role="img"
          aria-label="Person mediterer ved en rolig sø ved solopgang"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 id="hero-heading" className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Velkommen til MindBliss
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-foreground/90 max-w-2xl mx-auto">
            Din rejse mod bedre mental sundhed og trivsel starter her
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/mental-sundhed">
              <Button size="lg" className="text-lg focus:ring-2 focus:ring-ring focus:ring-offset-2">
                Lær mere om mental sundhed
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Button>
            </Link>
            <Link to="/kontakt">
              <Button size="lg" variant="secondary" className="text-lg focus:ring-2 focus:ring-ring focus:ring-offset-2">
                Kontakt os
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Intro sektion */}
      <section className="py-16 bg-muted/30" aria-labelledby="intro-heading" id="main-content">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 id="intro-heading" className="text-3xl md:text-4xl font-bold text-foreground">
              Hvad er mental sundhed?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Mental sundhed handler om vores følelsesmæssige, psykologiske og sociale trivsel. 
              Det påvirker, hvordan vi tænker, føler og handler. Mental sundhed er vigtig i alle 
              faser af livet, fra barndommen gennem ungdommen og videre til voksenlivet.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Danmarks Sundhedsstyrelse definerer mental sundhed som: "En tilstand af trivsel, 
              hvor individet kan udfolde sine evner, kan håndtere dagligdags udfordringer og stress, 
              samt indgå i fællesskaber med andre mennesker."
            </p>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="py-16" aria-labelledby="features-heading">
        <div className="container mx-auto px-4">
          <h2 id="features-heading" className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Hvorfor er mental sundhed vigtig?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow focus-within:ring-2 focus-within:ring-ring">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4" aria-hidden="true">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Personlig trivsel</h3>
              <p className="text-muted-foreground">
                God mental sundhed giver dig mulighed for at håndtere livets udfordringer, 
                udvikle meningsfulde relationer og nå dine mål.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow focus-within:ring-2 focus-within:ring-ring">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4" aria-hidden="true">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Sociale relationer</h3>
              <p className="text-muted-foreground">
                Mental sundhed påvirker vores evne til at opbygge og vedligeholde sunde relationer 
                med familie, venner og kolleger.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow focus-within:ring-2 focus-within:ring-ring">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4" aria-hidden="true">
                <BookOpen className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Fysisk sundhed</h3>
              <p className="text-muted-foreground">
                Der er en stærk sammenhæng mellem mental og fysisk sundhed. God mental sundhed 
                understøtter et sundt liv.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Community sektion */}
      <section className="py-16 bg-muted/30" aria-labelledby="community-heading">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://plus.unsplash.com/premium_photo-1663099908294-e235675ca558?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGFwcHklMjB5b3VuZyUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D" 
                alt="Gruppe af glade unge mennesker der griner sammen i naturen, illustrerer fællesskab og støtte" 
                className="rounded-2xl shadow-xl w-full h-auto"
                loading="lazy"
              />
            </div>
            <div className="space-y-6">
              <h2 id="community-heading" className="text-3xl md:text-4xl font-bold text-foreground">
                Du er ikke alene
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Mange unge oplever perioder med lav grad af mental sundhed. Det er vigtigt at 
                vide, at det er okay at have det svært, og at der findes hjælp.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Mellem 70.000 og 130.000 unge under 30 år er hverken i uddannelse eller i arbejde, 
                og mange af dem kæmper med mental sundhed. Du er ikke alene i dine udfordringer.
              </p>
              <Link to="/mental-sundhed">
                <Button className="mt-4 focus:ring-2 focus:ring-ring focus:ring-offset-2">
                  Læs mere om, hvordan du kan støtte dig selv
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA sektion */}
      <section className="py-16" aria-labelledby="cta-heading">
        <div className="container mx-auto px-4">
          <Card className="p-12 text-center bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Har du brug for at tale med nogen?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Vi er her for at hjælpe. Kontakt os, hvis du har spørgsmål eller brug for støtte 
              omkring mental sundhed og trivsel.
            </p>
            <Link to="/kontakt">
              <Button size="lg" className="text-lg focus:ring-2 focus:ring-ring focus:ring-offset-2">
                Kontakt os i dag
              </Button>
            </Link>
          </Card>
        </div>
      </section>
    </div>
  );
}

export default Home;
