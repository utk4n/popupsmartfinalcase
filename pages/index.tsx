import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import ArrowDown from '../assets/images/Vector (15).svg';
import BrandLogo from '../assets/images/Vector (16).svg';
import Thick from '../assets/images/Vector (18).svg';
import CamperLogo from '../assets/images/Vector.png';
import CloseCard from '../assets/images/exit.png';
import CloseBody from '../assets/images/Ellipse.png';
import Lightning from '../assets/images/lightning.svg';
import Dolar from '../assets/images/dollar.svg';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <nav>
          <div className="header_left">
            <div className="brand_logo">
              <div className="logo">
                <BrandLogo />
              </div>
              <Link href={'/'}>
                <h6>modal.cards</h6>
              </Link>
            </div>
            <div className="navlinks">
              <div className="solution_menu">
                <Link href={''}>
                  <a>Solutions</a>
                </Link>
                <ArrowDown />
              </div>
              <Link href={''}>
                <a>Product Tour</a>
              </Link>
              <Link href={''}>
                <a>Showcase</a>
              </Link>
              <Link href={''}>
                <a>Pricing</a>
              </Link>
            </div>
          </div>
          <div className="auth_try">
            <Link href="google.com">
              <a>Sign in</a>
            </Link>
            <Link href="/modaltemplates">
              <a>Try for free</a>
            </Link>
          </div>
        </nav>
      </header>

      <main>
        <div className="content_header">
          <h1>Simple modal card creator</h1>
        </div>
        <div className="content_paragraph">
          <p>
            A utility-first CSS framework packed with classeslike flex, pt-4,
            text-center and rotate-90 that can becomposed to build any design,
            directly in your markup.
          </p>
        </div>
        <div className="try_it_btn">
          <Link href="/modaltemplates">
            <button>Try it out now</button>
          </Link>
        </div>
        <div className="mini_introduction">
          <p>
            <Thick />
            Free and paid plans
          </p>
          <p>
            <Thick />
            Setup in minutes
          </p>
          <p>
            <Thick />
            No credit card required*
          </p>
        </div>
      </main>
      <footer>
        <div className="footer_content">
          <div className="footer_card">
            <div className="card_left">
              <Image src={CamperLogo} height={30} width={100} alt="Camper" />
              <h2>Join the club</h2>
              <p className="discount_paragraph">
                Subscribe and Get an Extra{' '}
                <strong>
                  <u>25% Off</u>
                </strong>{' '}
                on your first purchase.
              </p>
              <input type="text" placeholder="Email Address" />
              <button>Subscribe</button>
              <p className="privacy_terms">
                By signing up, you agree to <u>Privacy Policy</u> and{' '}
                <u>Terms of Use</u>.
              </p>
            </div>
            <div className="card_right">
              <p>Mediterranean Sneakers®</p>
              <div className="close_card_cross">
                <div className="close_background">
                  <Image src={CloseBody} width={40} height={40} alt="x" />
                  <div className="cross">
                    <Image src={CloseCard} alt="x" width={13} height={13} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mini_popups">
            <div className="flex items-center">
              <Lightning />
              <p>Grow email list</p>
            </div>
            <div className="flex items-center">
              <Dolar />
              <p>Increase sales conversion</p>
            </div>
          </div>
          <div className="seems_overlay"></div>
          <div className="footer_infos">
            <div>
              <h1>3x</h1>
              <p>Increase Conversion Rate</p>
            </div>
            <div>
              <h1>118%</h1>
              <p>Email Subscribers</p>
            </div>
            <div>
              <h1>390%</h1>
              <p>More Customer Engagement</p>
            </div>
            <div>
              <p>Popupsmart meets all your business needs.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
