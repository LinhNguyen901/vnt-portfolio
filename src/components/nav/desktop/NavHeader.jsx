import './NavHeader.scss';
import React, { useState } from 'react';
import { useUtils } from '/src/helpers/utils.js';
import { useLanguage } from '/src/providers/LanguageProvider.jsx';
import { useData } from '/src/providers/DataProvider.jsx';
import ImageView from '/src/components/generic/ImageView.jsx';
import StatusBadge from '/src/components/generic/StatusBadge.jsx';
import { useEffect } from 'react';

function NavHeader({ shrink }) {
  const utils = useUtils();
  const { getTranslation } = useLanguage();
  const { getSettings } = useData();

  const settings = getSettings();

  const profile = settings.profile;
  const stylizedName = utils.parseJsonText(profile['stylizedName']);
  const role = utils.parseJsonText(getTranslation(profile['locales'], 'role'));
  const pfpUrl = utils.resolvePath(profile['profilePictureUrl']);
  const sayHiUrl = '/images/gif/sayhi.gif';
  const logoUrl = utils.resolvePath(profile['logoUrl']);

  const status = settings.status;
  const statusVisible = status['visible'];
  const statusAvailable = status['available'];
  const statusMessage = getTranslation(status['locales'], 'message');

  const [currentAvatar, setCurrentAvatar] = useState(pfpUrl);

  // useEffect(() => {
  //   const timeoutID = setTimeout(() => {
  //     setCurrentAvatar(pfpUrl);
  //   }, 6000);

  //   return () => clearTimeout(timeoutID);
  // }, [pfpUrl]);

  return (
    <header className={`nav-header ${shrink ? 'nav-header-shrink' : ''}`}>
      <ImageView src={currentAvatar} className={`img-view-avatar`} alt={name} />

      {statusVisible && (
        <StatusBadge available={statusAvailable} message={statusMessage} smallMode={shrink} />
      )}

      <div className={`info mt-3 text-center`}>
        <h5 className={`name`}>
          <span dangerouslySetInnerHTML={{ __html: stylizedName }} />
        </h5>

        <div className={`role`}>
          <span>{role}</span>
        </div>
      </div>
    </header>
  );
}

export default NavHeader;
