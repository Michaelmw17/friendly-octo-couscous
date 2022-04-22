import Image from 'next/image';
import { bgWrap } from '../styles.module.css';

const Background = () => (
  <div className={bgWrap}>
    <Image
      alt="Nature background"
      src="/pexels-pixmike-413195.jpg"
      layout="fill"
      objectFit="cover"
      quality={100}
    />
  </div>
);

export default Background;
