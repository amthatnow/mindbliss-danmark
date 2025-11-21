import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MentalHealth from "./pages/MentalHealth";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Kategori 1: Mental sundhedsstøtte til børn og unge
import MentalHealthSupportChildren from "./pages/MentalHealthSupportChildren";
import ChildrenMentalHealthServices from "./pages/ChildrenMentalHealthServices";
import HowToGetSupport from "./pages/HowToGetSupport";
import SupportFromCharities from "./pages/SupportFromCharities";
import SupportingChildOrYoung from "./pages/SupportingChildOrYoung";

// Kategori 2: Råd til forældre
import AdviceForParents from "./pages/AdviceForParents";
import ChildrenAndBereavement from "./pages/ChildrenAndBereavement";
import HelpChildWithAnger from "./pages/HelpChildWithAnger";
import AnxietyDisordersInChildren from "./pages/AnxietyDisordersInChildren";
import AnxietyInChildren from "./pages/AnxietyInChildren";
import DepressionInChildrenAndYoung from "./pages/DepressionInChildrenAndYoung";
import TalkingToChildAboutFeelings from "./pages/TalkingToChildAboutFeelings";
import TeenAggressionAndArguments from "./pages/TeenAggressionAndArguments";
import CopingWithTeenager from "./pages/CopingWithTeenager";
import WorriedAboutTeenager from "./pages/WorriedAboutTeenager";
import HelpChildWithExamStress from "./pages/HelpChildWithExamStress";
import TalkingToTeenager from "./pages/TalkingToTeenager";

// Kategori 3: Råd til teenagere, unge voksne og studerende
import AdviceForTeenagersYoungAdultsStudents from "./pages/AdviceForTeenagersYoungAdultsStudents";
import StudentStress from "./pages/StudentStress";
import TipsPreparingForExams from "./pages/TipsPreparingForExams";
import CounsellingForStudentMentalHealth from "./pages/CounsellingForStudentMentalHealth";
import BereavementAndYoung from "./pages/BereavementAndYoung";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen" lang="da">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mental-sundhed" element={<MentalHealth />} />
            <Route path="/kontakt" element={<Contact />} />
            
            {/* Kategori 1: Mental sundhedsstøtte til børn og unge */}
            <Route path="/mental-sundhedsstotte-til-born-og-unge" element={<MentalHealthSupportChildren />} />
            <Route path="/mental-sundhedsstotte-til-born-og-unge/born-og-unge-mental-sundhedstjenester" element={<ChildrenMentalHealthServices />} />
            <Route path="/mental-sundhedsstotte-til-born-og-unge/hvordan-far-du-stotte" element={<HowToGetSupport />} />
            <Route path="/mental-sundhedsstotte-til-born-og-unge/stotte-fra-mental-sundhedsorganisationer" element={<SupportFromCharities />} />
            <Route path="/mental-sundhedsstotte-til-born-og-unge/stotte-til-barn-eller-ung" element={<SupportingChildOrYoung />} />
            
            {/* Kategori 2: Råd til forældre */}
            <Route path="/rad-til-foraeldre" element={<AdviceForParents />} />
            <Route path="/rad-til-foraeldre/born-og-sorg" element={<ChildrenAndBereavement />} />
            <Route path="/rad-til-foraeldre/hjaelp-dit-barn-med-vrede" element={<HelpChildWithAnger />} />
            <Route path="/rad-til-foraeldre/angstlidelser-hos-born" element={<AnxietyDisordersInChildren />} />
            <Route path="/rad-til-foraeldre/angst-hos-born" element={<AnxietyInChildren />} />
            <Route path="/rad-til-foraeldre/depression-hos-born-og-unge" element={<DepressionInChildrenAndYoung />} />
            <Route path="/rad-til-foraeldre/tale-med-dit-barn-om-folelser" element={<TalkingToChildAboutFeelings />} />
            <Route path="/rad-til-foraeldre/teenager-aggression-og-skænderier" element={<TeenAggressionAndArguments />} />
            <Route path="/rad-til-foraeldre/handtere-din-teenager" element={<CopingWithTeenager />} />
            <Route path="/rad-til-foraeldre/bekymret-for-din-teenager" element={<WorriedAboutTeenager />} />
            <Route path="/rad-til-foraeldre/hjaelp-dit-barn-med-eksamensstress" element={<HelpChildWithExamStress />} />
            <Route path="/rad-til-foraeldre/tale-med-din-teenager" element={<TalkingToTeenager />} />
            
            {/* Kategori 3: Råd til teenagere, unge voksne og studerende */}
            <Route path="/rad-til-teenagere-unge-voksne-og-studerende" element={<AdviceForTeenagersYoungAdultsStudents />} />
            <Route path="/rad-til-teenagere-unge-voksne-og-studerende/studerende-stress" element={<StudentStress />} />
            <Route path="/rad-til-teenagere-unge-voksne-og-studerende/tips-til-forberedelse-til-eksamener" element={<TipsPreparingForExams />} />
            <Route path="/rad-til-teenagere-unge-voksne-og-studerende/raadgivning-til-studenter-med-mental-sundhedsproblemer" element={<CounsellingForStudentMentalHealth />} />
            <Route path="/rad-til-teenagere-unge-voksne-og-studerende/sorg-og-unge" element={<BereavementAndYoung />} />
            
            {/* TILFØJ ALLE TILPASSEDE ROUTES OVER DEN ALLE-FANGENDE "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
