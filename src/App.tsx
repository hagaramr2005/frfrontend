import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { MainLayout } from "./layouts/MainLayout";
import { PageTransition } from "./components/ui/PageTransition";
import { Loader } from "./components/ui/Loader";
import { ToastProvider } from "./components/ui/Toast";
import { RouteErrorBoundary } from "./app/RouteErrorBoundary";

const LandingPage = lazy(() => import("./pages/LandingPage"));
const ApplyPage = lazy(() => import("./pages/ApplyPage"));
const ApplySuccessPage = lazy(() => import("./pages/ApplySuccessPage"));
const LegalPage = lazy(() => import("./pages/LegalPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <LandingPage />
            </PageTransition>
          }
        />
        <Route
          path="/apply"
          element={
            <PageTransition>
              <ApplyPage />
            </PageTransition>
          }
        />
        <Route
          path="/apply/success"
          element={
            <PageTransition>
              <ApplySuccessPage />
            </PageTransition>
          }
        />
        <Route
          path="/privacy"
          element={
            <PageTransition>
              <LegalPage title="Privacy Policy" />
            </PageTransition>
          }
        />
        <Route
          path="/terms"
          element={
            <PageTransition>
              <LegalPage title="Terms of Service" />
            </PageTransition>
          }
        />
        <Route
          path="*"
          element={
            <PageTransition>
              <NotFoundPage />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ToastProvider>
        <RouteErrorBoundary>
          <MainLayout>
            <Suspense fallback={<div className="pt-40"><Loader label="Loading Phronesis" /></div>}>
              <AnimatedRoutes />
            </Suspense>
          </MainLayout>
        </RouteErrorBoundary>
      </ToastProvider>
    </BrowserRouter>
  );
}
