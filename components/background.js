import Image from 'next/image';
import { bgWrap } from '../styles.module.css';

const Background = () => (
  <div className={bgWrap}>
    <Image
      alt="Nature background"
      src="/nature.webp"
      layout="fill"
      objectFit="cover"
      quality={100}
    />
  </div>
);

export default Background;
