import styles from '../styles/modaltemplates.module.scss';
import Link from 'next/link';
import AllModalTemplates from '../components/AllModalTemplates';
import Pagination from '../components/Pagination';
import Templates1 from '../components/Templates1';
const ModaTemplates = () => {

  const { modalPageNumbers } = AllModalTemplates();

  return (
    <div className={styles.modal_container}>
      <div className={styles.modal_header}>
        <h1>Modal Card Generator</h1>
        <p>
          Measure your return on email marketing efforts easier and faster by
          using thebest online tools. Popupsmart is ready to help you build an
          efficient email list!
        </p>
      </div>
      <div className={styles.modal_content}>
        <div className={styles.select_template_title}>
          <p>1</p>
          <p>Choose your template</p>
        </div>
        <div className={styles.modal_templates}>{modalPageNumbers(0, 12)}</div>
        <Pagination />
      </div>
    </div>
  );
};

export default ModaTemplates;
