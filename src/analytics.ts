import ReactGA from "react-ga4";


export function trackEvent(
    action: string,
    category: string,
    label?: string
) {

    ReactGA.event({
        category,
        action,
        label
    });

}

export function initAnalytics() {

    const measurementId = import.meta.env.VITE_GA_ID;


    if (!measurementId) {
        console.warn("Analytics ID missing");
        return;
    }


    ReactGA.initialize(measurementId);

}