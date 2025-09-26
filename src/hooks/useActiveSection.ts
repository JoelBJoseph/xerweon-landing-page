import { useState, useEffect, useRef } from 'react';

/**
 * A hook to detect which section is currently active in the viewport using IntersectionObserver.
 * @param sectionIds - An array of section element IDs to observe.
 * @param rootMargin - The margin around the root. Can be used to trigger the intersection earlier or later.
 * @returns The ID of the active section.
 */
export function useActiveSection(sectionIds: string[], rootMargin = '-50% 0px -50% 0px'): string | null {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Disconnect previous observer if it exists
    if (observer.current) {
      observer.current.disconnect();
    }

    // Create a new IntersectionObserver
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin }
    );

    const { current: currentObserver } = observer;

    // Observe all sections
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        currentObserver.observe(element);
      }
    });

    // Cleanup observer on component unmount
    return () => {
      if (currentObserver) {
        currentObserver.disconnect();
      }
    };
  }, [sectionIds, rootMargin]);

  return activeSection;
}
