import { useEffect, useState } from 'react';

const usePageTitle = (titles) => {
  const [currentHash, setCurrentHash] = useState(window.location.hash);
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    // Listen to hashchange event
    window.addEventListener('hashchange', handleHashChange);

    // Update title on initial load

    const title = titles[currentHash] || 'Trinh Vo';
    document.title = title;

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [titles]);
};

export default usePageTitle;
