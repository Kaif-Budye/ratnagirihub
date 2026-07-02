import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FirebaseAuthProvider } from "@/auth/FirebaseAuthContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { RefreshProvider } from "@/contexts/RefreshContext";
import { RequireAuth } from "@/auth/RequireAuth";
import { CookieConsentBanner } from "@/components/consent/CookieConsentBanner";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { useAppLifecycle } from "@/hooks/useAppLifecycle";
import Index from "./pages/Index";
import { CategoryPage } from "./pages/CategoryPage";
import { ListingDetail } from "./pages/ListingDetail";
import { AddListing } from "./pages/AddListing";
import { EditListing } from "./pages/EditListing";
import { About } from "./pages/About";
import { Terms } from "./pages/Terms";
import { Privacy } from "./pages/Privacy";
import Refund from "./pages/Refund";
import { Contact } from "./pages/Contact";
import { Events } from "./pages/Events";
import { ReferAndEarn } from "./pages/ReferAndEarn";
import { Dashboard } from "./pages/Dashboard";
import { ExplorerDashboard } from "./pages/ExplorerDashboard";
import { Search } from "./pages/Search";
import { AuthPage } from "./auth/AuthPage";
import { Verification } from "./pages/Verification";
import { MapView } from "./pages/MapView";
import { SubscriptionPlans } from "./pages/SubscriptionPlans";
import { PaymentCallback } from "./pages/PaymentCallback";
import { Settings } from "./pages/Settings";
import { MyFavorites } from "./pages/MyFavorites";
import { MyFollowing } from "./pages/MyFollowing";
import { AdminPanel } from "./pages/AdminPanel";
import { UserProfile } from "./pages/UserProfile";
import { BusinessProfile } from "./pages/BusinessProfile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  // Initialize app lifecycle handlers for native platforms
  useAppLifecycle();
  
  return (
    <>
      <ScrollToTop />
      <FirebaseAuthProvider>
        <LanguageProvider>
          <RefreshProvider>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<AuthPage />} />
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/shops" element={<CategoryPage />} />
              <Route path="/vendors" element={<CategoryPage />} />
              <Route path="/hotels" element={<CategoryPage />} />
              <Route path="/restaurants" element={<CategoryPage />} />
              <Route path="/personal-services" element={<CategoryPage />} />
              <Route path="/health-services" element={<CategoryPage />} />
              <Route path="/maintenance-repair" element={<CategoryPage />} />
              <Route path="/event-services" element={<CategoryPage />} />
              <Route path="/automobile" element={<CategoryPage />} />
              <Route path="/rentals" element={<CategoryPage />} />
              <Route path="/logistics" element={<CategoryPage />} />
              <Route path="/travel" element={<CategoryPage />} />
              <Route path="/listing/:id" element={<ListingDetail />} />
              <Route path="/add-listing" element={<RequireAuth><AddListing /></RequireAuth>} />
              <Route path="/edit-listing/:id" element={<RequireAuth><EditListing /></RequireAuth>} />
              <Route path="/events" element={<Events />} />
              <Route path="/refer-and-earn" element={<ReferAndEarn />} />
              <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} />
              <Route path="/explorer" element={<ExplorerDashboard />} />
              <Route path="/profile" element={<RequireAuth><UserProfile /></RequireAuth>} />
              <Route path="/favorites" element={<MyFavorites />} />
              <Route path="/following" element={<RequireAuth><MyFollowing /></RequireAuth>} />
              <Route path="/search" element={<Search />} />
              <Route path="/about" element={<About />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/refund" element={<Refund />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/verification" element={<Verification />} />
              <Route path="/map" element={<MapView />} />
              <Route path="/subscription-plans" element={<SubscriptionPlans />} />
              <Route path="/payment-callback" element={<PaymentCallback />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/business/:id/profile" element={<BusinessProfile />} />
              <Route path="/admin" element={<RequireAuth><AdminPanel /></RequireAuth>} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <CookieConsentBanner />
          </RefreshProvider>
        </LanguageProvider>
      </FirebaseAuthProvider>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
      <TooltipProvider>
        <Toaster />
        <Sonner position="top-center" richColors />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
