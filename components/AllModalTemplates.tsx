import { ReactElement } from 'react';
import Link from 'next/link';
import Template1 from '../assets/images/templates/01.svg';
import Template2 from '../assets/images/templates/02.svg';
import Template3 from '../assets/images/templates/03.svg';
import Template4 from '../assets/images/templates/04.svg';
import Template5 from '../assets/images/templates/05.svg';
import Template6 from '../assets/images/templates/06.svg';
import Template7 from '../assets/images/templates/07.svg';
import Template8 from '../assets/images/templates/08.svg';
import Template9 from '../assets/images/templates/09.svg';
import Template10 from '../assets/images/templates/10.svg';
import Template11 from '../assets/images/templates/11.svg';
import Template12 from '../assets/images/templates/12.svg';
import Template13 from '../assets/images/templates/13.svg';
import Template14 from '../assets/images/templates/14.svg';
import Template15 from '../assets/images/templates/15.svg';
import Template16 from '../assets/images/templates/16.svg';
import Template17 from '../assets/images/templates/17.svg';
import Template18 from '../assets/images/templates/18.svg';
import Template19 from '../assets/images/templates/19.svg';
import Template20 from '../assets/images/templates/20.svg';
import Template21 from '../assets/images/templates/21.svg';
import Template22 from '../assets/images/templates/22.svg';
import Template23 from '../assets/images/templates/23.svg';
import Template24 from '../assets/images/templates/24.svg';
import Template25 from '../assets/images/templates/25.svg';
import Template26 from '../assets/images/templates/26.svg';
import Template27 from '../assets/images/templates/27.svg';
import Template28 from '../assets/images/templates/28.svg';
import Template29 from '../assets/images/templates/29.svg';
import Template30 from '../assets/images/templates/30.svg';
import Template31 from '../assets/images/templates/31.svg';
import Template32 from '../assets/images/templates/32.svg';
import Template33 from '../assets/images/templates/33.svg';
import Template34 from '../assets/images/templates/34.svg';
import Template35 from '../assets/images/templates/35.svg';
import Template36 from '../assets/images/templates/36.svg';

interface IModalTemplates {
  id: number;
  url_path: ReactElement;
}

const AllModalTemplates = () => {
  const allTemplates: IModalTemplates[] = [
    { id: 1, url_path: <Template1 /> },
    { id: 2, url_path: <Template2 /> },
    { id: 3, url_path: <Template3 /> },
    { id: 4, url_path: <Template4 /> },
    { id: 5, url_path: <Template5 /> },
    { id: 6, url_path: <Template6 /> },
    { id: 7, url_path: <Template7 /> },
    { id: 8, url_path: <Template8 /> },
    { id: 9, url_path: <Template9 /> },
    { id: 10, url_path: <Template10 /> },
    { id: 11, url_path: <Template11 /> },
    { id: 12, url_path: <Template12 /> },
    { id: 13, url_path: <Template13 /> },
    { id: 14, url_path: <Template14 /> },
    { id: 15, url_path: <Template15 /> },
    { id: 16, url_path: <Template16 /> },
    { id: 17, url_path: <Template17 /> },
    { id: 18, url_path: <Template18 /> },
    { id: 19, url_path: <Template19 /> },
    { id: 20, url_path: <Template20 /> },
    { id: 21, url_path: <Template21 /> },
    { id: 22, url_path: <Template22 /> },
    { id: 23, url_path: <Template23 /> },
    { id: 24, url_path: <Template24 /> },
    { id: 25, url_path: <Template25 /> },
    { id: 26, url_path: <Template26 /> },
    { id: 27, url_path: <Template27 /> },
    { id: 28, url_path: <Template28 /> },
    { id: 29, url_path: <Template29 /> },
    { id: 30, url_path: <Template30 /> },
    { id: 31, url_path: <Template31 /> },
    { id: 32, url_path: <Template32 /> },
    { id: 33, url_path: <Template33 /> },
    { id: 34, url_path: <Template34 /> },
    { id: 35, url_path: <Template35 /> },
    { id: 36, url_path: <Template36 /> },
  ];

  const modalPageNumbers = (a: number, b: number) => {
    return allTemplates.slice(a, b).map((temp) => (
      <div key={temp.id} className="template_card_container">
        {temp.url_path}
        <Link href={`/ModalGenerator/${temp.id}`}>
          <div className="template_card_wrapper_hover">
            <a className="select_template_btn">Select template</a>
          </div>
        </Link>
      </div>
    ));
  };

  return { modalPageNumbers,allTemplates };
};

export default AllModalTemplates;
