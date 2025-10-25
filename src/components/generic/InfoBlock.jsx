import './InfoBlock.scss';
import { useUtils } from '/src/helpers/utils.js';

const utils = useUtils();

function InfoBlock({ img, faIcon, faIconColors, html }) {
  return (
    <div className={`info-block`}>
      <InfoBlockTextCol html={html} />
    </div>
  );
}

function InfoBlockTextCol({ html }) {
  return (
    <div className={`info-block-text-col`}>
      <span
        className={`text-4`}
        dangerouslySetInnerHTML={{
          __html: utils.parseJsonText(html),
        }}
      />
    </div>
  );
}

export default InfoBlock;
