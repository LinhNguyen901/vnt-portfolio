import React from 'react';
import usePageTitle from '../hooks/usePageTitle';
import Portfolio from '/src/components/Portfolio.jsx';
import ActivitySpinner from '/src/components/feedbacks/ActivitySpinner.jsx';
import { AnimatedCursor } from '/src/components/feedbacks/AnimatedCursor';
import Notifications from '/src/components/feedbacks/Notifications.jsx';
import ImageCache from '/src/components/generic/ImageCache.jsx';
import ConfirmationWindow from '/src/components/modals/ConfirmationWindow.jsx';
import GalleryModal from '/src/components/modals/GalleryModal.jsx';
import YoutubeModal from '/src/components/modals/YoutubeModal.jsx';
import { useData } from '/src/providers/DataProvider.jsx';
import { useFeedbacks } from '/src/providers/FeedbacksProvider.jsx';
import '/src/styles/app.scss';

function App() {
  const { listImagesForCache } = useData();

  const imageList = listImagesForCache();

  return (
    <div className={`app-wrapper`}>
      <AppFeedbacks />
      <ImageCache urls={imageList} />
      <Portfolio />
    </div>
  );
}

function AppFeedbacks() {
  const {
    listSpinnerActivities,
    isAnimatedCursorEnabled,
    isAnimatedCursorActive,
    isModalOpen,
    displayingNotification,
    killNotification,
    displayingYoutubeVideo,
    hideYoutubeVideo,
    displayingGallery,
    hideGallery,
    pendingConfirmation,
    hideConfirmationDialog,
  } = useFeedbacks();

  const spinnerActivities = listSpinnerActivities();
  const animatedCursorEnabled = isAnimatedCursorEnabled();
  const animatedCursorActive = isAnimatedCursorActive();
  const modalOpen = isModalOpen();

  const titles = {
    '#about': 'About me',
    '#skills': 'My Skills',
    '#experience': 'My Experience',
    '#education': 'My Educational / Certificate',
    '#portfolio': 'My Portfolio',
    '#image': 'My Gallery',
    '#cv': 'My CV',
    '#version': 'Version History',
  };

  usePageTitle(titles);

  return (
    <>
      {spinnerActivities && <ActivitySpinner activities={spinnerActivities} />}

      {isAnimatedCursorEnabled() && (
        <AnimatedCursor
          enabled={animatedCursorEnabled}
          active={animatedCursorActive}
          modalOpen={modalOpen}
        />
      )}

      {displayingNotification && (
        <Notifications
          displayingNotification={displayingNotification}
          killNotification={killNotification}
        />
      )}

      <YoutubeModal
        displayingYoutubeVideo={displayingYoutubeVideo}
        hideYoutubeVideo={hideYoutubeVideo}
      />

      <GalleryModal displayingGallery={displayingGallery} hideGallery={hideGallery} />

      <ConfirmationWindow
        pendingConfirmation={pendingConfirmation}
        hideConfirmationDialog={hideConfirmationDialog}
      />
    </>
  );
}

export default App;
