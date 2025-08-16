import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import HomepageFashionDiscoveryPlatform from './pages/homepage-fashion-discovery-platform';
import StyleCommunityPage from './pages/style-community-user-generated-content';
import StyleEducationHub from './pages/style-education-hub-fashion-knowledge';
import PersonalStylingToolsAIStyleAssistant from './pages/personal-styling-tools-ai-style-assistant';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        <Route path="/" element={<HomepageFashionDiscoveryPlatform />} />
        <Route path="/homepage-fashion-discovery-platform" element={<HomepageFashionDiscoveryPlatform />} />
        <Route path="/style-community-user-generated-content" element={<StyleCommunityPage />} />
        <Route path="/style-education-hub-fashion-knowledge" element={<StyleEducationHub />} />
        <Route path="/personal-styling-tools-ai-style-assistant" element={<PersonalStylingToolsAIStyleAssistant />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
