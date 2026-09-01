export const trackEvent = (eventName, params = {}) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, params);
  }
};

/* ---------------------------------
   PAGE VIEWS
----------------------------------- */

export const trackPageView = (url) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "page_view", {
      page_path: url,
      page_location: window.location.href,
      page_title: document.title,
    });
  }
};

/* ---------------------------------
   INTERACCIONES
----------------------------------- */

export const trackDownloadCV = () => {
  trackEvent("download_cv");
};

export const trackLinkedIn = () => {
  trackEvent("click_linkedin");
};

export const trackWhatsApp = () => {
  trackEvent("click_whatsapp");
};

export const trackInstagram = () => {
  trackEvent("click_instagram");
};

export const trackEmail = () => {
  trackEvent("click_email");
};

export const trackRoamStudio = () => {
  trackEvent("click_roam_studio");
};

export const trackProject = (projectName) => {
  trackEvent("view_project", {
    project_name: projectName,
  });
};