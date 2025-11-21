import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  function isActive(path) {
    if (location.pathname === path) {
      return true;
    }
    return false;
  }
  
  function isCategoryActive(paths) {
    for (let i = 0; i < paths.length; i++) {
      if (location.pathname.startsWith(paths[i])) {
        return true;
      }
    }
    return false;
  }

  const navLinks = [
    { path: "/mental-sundhed", label: "Mental Sundhed" },
  ];

  const categoryMenus = [
    {
      label: "Mental sundhedsstøtte til børn og unge",
      path: "/mental-sundhedsstotte-til-born-og-unge",
      subpages: [
        { path: "/mental-sundhedsstotte-til-born-og-unge", label: "Oversigt" },
        { path: "/mental-sundhedsstotte-til-born-og-unge/born-og-unge-mental-sundhedstjenester", label: "Børn og unges mental sundhedstjenester" },
        { path: "/mental-sundhedsstotte-til-born-og-unge/hvordan-far-du-stotte", label: "Hvordan får du støtte" },
        { path: "/mental-sundhedsstotte-til-born-og-unge/stotte-fra-mental-sundhedsorganisationer", label: "Få støtte fra mental sundhedsorganisationer" },
        { path: "/mental-sundhedsstotte-til-born-og-unge/stotte-til-barn-eller-ung", label: "Støtte til et barn eller en ung" },
      ],
    },
    {
      label: "Råd til forældre",
      path: "/rad-til-foraeldre",
      subpages: [
        { path: "/rad-til-foraeldre", label: "Oversigt" },
        { path: "/rad-til-foraeldre/born-og-sorg", label: "Børn og sorg" },
        { path: "/rad-til-foraeldre/hjaelp-dit-barn-med-vrede", label: "Hjælp dit barn med vrede" },
        { path: "/rad-til-foraeldre/angstlidelser-hos-born", label: "Angstlidelser hos børn" },
        { path: "/rad-til-foraeldre/angst-hos-born", label: "Angst hos børn" },
        { path: "/rad-til-foraeldre/depression-hos-born-og-unge", label: "Depression hos børn og unge" },
        { path: "/rad-til-foraeldre/tale-med-dit-barn-om-folelser", label: "Tale med dit barn om følelser" },
        { path: "/rad-til-foraeldre/teenager-aggression-og-skænderier", label: "Teenager aggression og skænderier" },
        { path: "/rad-til-foraeldre/handtere-din-teenager", label: "Håndtere din teenager" },
        { path: "/rad-til-foraeldre/bekymret-for-din-teenager", label: "Bekymret for din teenager?" },
        { path: "/rad-til-foraeldre/hjaelp-dit-barn-med-eksamensstress", label: "Hjælp dit barn med eksamensstress" },
        { path: "/rad-til-foraeldre/tale-med-din-teenager", label: "Tale med din teenager" },
      ],
    },
    {
      label: "Råd til teenagere, unge voksne og studerende",
      path: "/rad-til-teenagere-unge-voksne-og-studerende",
      subpages: [
        { path: "/rad-til-teenagere-unge-voksne-og-studerende", label: "Oversigt" },
        { path: "/rad-til-teenagere-unge-voksne-og-studerende/studerende-stress", label: "Studerende stress" },
        { path: "/rad-til-teenagere-unge-voksne-og-studerende/tips-til-forberedelse-til-eksamener", label: "Tips til forberedelse til eksamener" },
        { path: "/rad-til-teenagere-unge-voksne-og-studerende/raadgivning-til-studenter-med-mental-sundhedsproblemer", label: "Rådgivning til studerende med mental sundhedsproblemer" },
        { path: "/rad-til-teenagere-unge-voksne-og-studerende/sorg-og-unge", label: "Sorg og unge" },
      ],
    },
  ];

  // Luk mobil menu ved ruteændring
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Forhindre body scroll når mobil menu er åben
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Spring til hovedindhold link til tastaturbrugere */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
      >
        Spring til hovedindhold
      </a>
      
      <nav className="bg-card/80 backdrop-blur-md border-b border-border sticky top-0 z-50" aria-label="Hovednavigation">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
          <Link 
            to="/" 
            className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded"
            aria-label="MindBliss - Gå til forsiden"
          >
            MindBliss
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-8 items-center" role="list">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`text-base font-medium transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded px-2 py-1 ${
                    isActive(link.path) ? "text-primary" : "text-foreground/70"
                  }`}
                  aria-current={isActive(link.path) ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            {categoryMenus.map((category) => (
              <li key={category.path}>
                <DropdownMenu>
                  <DropdownMenuTrigger
                    className={`text-base font-medium transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded px-2 py-1 flex items-center gap-1 ${
                      isCategoryActive([category.path]) ? "text-primary" : "text-foreground/70"
                    }`}
                  >
                    {category.label}
                    <ChevronDown className="h-4 w-4" aria-hidden="true" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="min-w-[280px]">
                    {category.subpages.map((subpage) => (
                      <DropdownMenuItem key={subpage.path} asChild>
                        <Link
                          to={subpage.path}
                          className={`w-full cursor-pointer ${
                            isActive(subpage.path) ? "bg-accent" : ""
                          }`}
                        >
                          {subpage.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
            ))}
            <li>
              <Link
                to="/kontakt"
                className={`text-base font-medium transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded px-2 py-1 ${
                  isActive("/kontakt") ? "text-primary" : "text-foreground/70"
                }`}
                aria-current={isActive("/kontakt") ? "page" : undefined}
              >
                Kontakt
              </Link>
            </li>
          </ul>

          {/* Mobil Menu Knap */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
            aria-label={isOpen ? "Luk menu" : "Åbn menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>

        {/* Mobil Navigation */}
        {isOpen && (
          <div 
            id="mobile-menu" 
            className="md:hidden py-4 border-t border-border"
            role="navigation"
            aria-label="Mobil navigation"
          >
            <ul role="list">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block py-3 text-base font-medium transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded px-2 ${
                      isActive(link.path) ? "text-primary" : "text-foreground/70"
                    }`}
                    aria-current={isActive(link.path) ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {categoryMenus.map((category) => (
                <li key={category.path} className="border-t border-border mt-2 pt-2">
                  <div className="px-2 py-2 font-semibold text-foreground">
                    {category.label}
                  </div>
                  <ul role="list" className="pl-4">
                    {category.subpages.map((subpage) => (
                      <li key={subpage.path}>
                        <Link
                          to={subpage.path}
                          onClick={() => setIsOpen(false)}
                          className={`block py-2 text-sm transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded px-2 ${
                            isActive(subpage.path) ? "text-primary font-medium" : "text-foreground/70"
                          }`}
                          aria-current={isActive(subpage.path) ? "page" : undefined}
                        >
                          {subpage.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
              <li className="border-t border-border mt-2 pt-2">
                <Link
                  to="/kontakt"
                  onClick={() => setIsOpen(false)}
                  className={`block py-3 text-base font-medium transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded px-2 ${
                    isActive("/kontakt") ? "text-primary" : "text-foreground/70"
                  }`}
                  aria-current={isActive("/kontakt") ? "page" : undefined}
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
    </>
  );
}

export default Navbar;
