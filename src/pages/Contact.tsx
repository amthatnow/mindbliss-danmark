import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, AlertCircle } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

// Kontaktformular validering schema
const contactSchema = z.object({
  name: z.string()
    .trim()
    .min(1, { message: "Navn er påkrævet" })
    .max(100, { message: "Navn må maksimalt være 100 tegn" }),
  email: z.string()
    .trim()
    .email({ message: "Ugyldig e-mailadresse" })
    .max(255, { message: "E-mail må maksimalt være 255 tegn" }),
  phone: z.string()
    .trim()
    .max(20, { message: "Telefonnummer må maksimalt være 20 tegn" })
    .optional(),
  subject: z.string()
    .trim()
    .min(1, { message: "Emne er påkrævet" })
    .max(200, { message: "Emne må maksimalt være 200 tegn" }),
  message: z.string()
    .trim()
    .min(1, { message: "Besked er påkrævet" })
    .max(2000, { message: "Besked må maksimalt være 2000 tegn" })
});


function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  function validateField(name, value) {
    try {
      const fieldSchema = contactSchema.shape[name];
      fieldSchema.parse(value);
      setErrors(prev => {
        const newErrors = {...prev};
        delete newErrors[name];
        return newErrors;
      });
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors(prev => {
          const newErrors = {...prev};
          newErrors[name] = error.errors[0].message;
          return newErrors;
        });
      }
      return false;
    }
  }

  function handleChange(e) {
    const { id, value } = e.target;
    const newData = {...formData};
    newData[id] = value;
    setFormData(newData);
    
    if (touched[id]) {
      validateField(id, value);
    }
  }

  function handleBlur(e) {
    const { id, value } = e.target;
    setTouched(prev => ({ ...prev, [id]: true }));
    validateField(id, value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    // Marker alle felter som berørt
    setTouched({
      name: true,
      email: true,
      phone: true,
      subject: true,
      message: true
    });

    // Valider alle felter
    try {
      contactSchema.parse(formData);
      // Formular er gyldig - dette er en demo, så vis kun alert
      alert("Tak for din besked! Dette er en demo-formular og vil ikke sende data.");
      
      // Nulstil formular
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      setErrors({});
      setTouched({});
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors = {};
        error.errors.forEach(err => {
          if (err.path[0]) {
            fieldErrors[err.path[0]] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
    }
  };

  function getInputAriaProps(fieldName) {
    return {
      "aria-invalid": !!errors[fieldName],
      "aria-describedby": errors[fieldName] ? `${fieldName}-error` : undefined
    };
  }

  return (
    <div className="min-h-screen py-12" id="main-content">
      <div className="container mx-auto px-4">
        {/* Overskrift */}
        <header className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Kontakt os
          </h1>
          <p className="text-xl text-muted-foreground">
            Har du spørgsmål eller brug for støtte? Vi er her for at hjælpe dig
          </p>
        </header>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Kontaktinformation */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                  Kontaktinformation
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Vi er her for at lytte og hjælpe. Uanset om du har spørgsmål om mental sundhed, 
                  har brug for støtte, eller bare vil vide mere om vores tilbud, er du velkommen til 
                  at kontakte os.
                </p>
              </div>

              <Card className="p-6 hover:shadow-lg transition-shadow focus-within:ring-2 focus-within:ring-ring">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">E-mail</h3>
                    <a 
                      href="mailto:kontakt@mindbliss.dk" 
                      className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-ring rounded"
                    >
                      kontakt@mindbliss.dk
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow focus-within:ring-2 focus-within:ring-ring">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Telefon</h3>
                    <a 
                      href="tel:+4512345678" 
                      className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-ring rounded"
                    >
                      +45 12 34 56 78
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Hverdage 9:00 - 17:00
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <MapPin className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Adresse</h3>
                    <address className="text-muted-foreground not-italic">
                      Sundhedsvej 42<br />
                      2100 København Ø<br />
                      Danmark
                    </address>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                <h3 className="font-semibold text-lg mb-3 text-foreground">Har du brug for akut hjælp?</h3>
                <p className="text-muted-foreground mb-4">
                  Hvis du er i krise eller har selvmordstanker, kontakt venligst:
                </p>
                <div className="space-y-2 text-sm">
                  <p className="text-foreground">
                    <strong>Livslinien:</strong>{" "}
                    <a 
                      href="tel:70201201" 
                      className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-ring rounded"
                    >
                      70 20 12 01
                    </a>
                  </p>
                  <p className="text-foreground">
                    <strong>Alarmtelefonen:</strong>{" "}
                    <a 
                      href="tel:112" 
                      className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-ring rounded"
                    >
                      112
                    </a>
                  </p>
                </div>
              </Card>
            </div>

            {/* Kontaktformular */}
            <div>
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-foreground">
                  Send os en besked
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="space-y-2">
                    <Label htmlFor="name">
                      Dit navn <span className="text-destructive" aria-label="påkrævet">*</span>
                    </Label>
                    <Input 
                      id="name" 
                      placeholder="Indtast dit navn" 
                      required
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      {...getInputAriaProps("name")}
                      className={errors.name && touched.name ? "border-destructive" : ""}
                    />
                    {errors.name && touched.name && (
                      <div 
                        id="name-error" 
                        className="flex items-center gap-2 text-sm text-destructive"
                        role="alert"
                        aria-live="polite"
                      >
                        <AlertCircle className="w-4 h-4" aria-hidden="true" />
                        <span>{errors.name}</span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">
                      Din e-mail <span className="text-destructive" aria-label="påkrævet">*</span>
                    </Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="din@email.dk" 
                      required
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      {...getInputAriaProps("email")}
                      className={errors.email && touched.email ? "border-destructive" : ""}
                    />
                    {errors.email && touched.email && (
                      <div 
                        id="email-error" 
                        className="flex items-center gap-2 text-sm text-destructive"
                        role="alert"
                        aria-live="polite"
                      >
                        <AlertCircle className="w-4 h-4" aria-hidden="true" />
                        <span>{errors.email}</span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefonnummer</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="+45 12 34 56 78"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      {...getInputAriaProps("phone")}
                      className={errors.phone && touched.phone ? "border-destructive" : ""}
                    />
                    {errors.phone && touched.phone && (
                      <div 
                        id="phone-error" 
                        className="flex items-center gap-2 text-sm text-destructive"
                        role="alert"
                        aria-live="polite"
                      >
                        <AlertCircle className="w-4 h-4" aria-hidden="true" />
                        <span>{errors.phone}</span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">
                      Emne <span className="text-destructive" aria-label="påkrævet">*</span>
                    </Label>
                    <Input 
                      id="subject" 
                      placeholder="Hvad handler din henvendelse om?" 
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      {...getInputAriaProps("subject")}
                      className={errors.subject && touched.subject ? "border-destructive" : ""}
                    />
                    {errors.subject && touched.subject && (
                      <div 
                        id="subject-error" 
                        className="flex items-center gap-2 text-sm text-destructive"
                        role="alert"
                        aria-live="polite"
                      >
                        <AlertCircle className="w-4 h-4" aria-hidden="true" />
                        <span>{errors.subject}</span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">
                      Din besked <span className="text-destructive" aria-label="påkrævet">*</span>
                    </Label>
                    <Textarea 
                      id="message" 
                      placeholder="Skriv din besked her..." 
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      {...getInputAriaProps("message")}
                      className={errors.message && touched.message ? "border-destructive" : ""}
                    />
                    {errors.message && touched.message && (
                      <div 
                        id="message-error" 
                        className="flex items-center gap-2 text-sm text-destructive"
                        role="alert"
                        aria-live="polite"
                      >
                        <AlertCircle className="w-4 h-4" aria-hidden="true" />
                        <span>{errors.message}</span>
                      </div>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full focus:ring-2 focus:ring-ring focus:ring-offset-2" 
                    size="lg"
                  >
                    Send besked
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    <span className="text-destructive" aria-hidden="true">*</span> Obligatoriske felter
                  </p>
                </form>
              </Card>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
