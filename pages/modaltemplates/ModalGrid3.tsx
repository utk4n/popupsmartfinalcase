import styles from '../../styles/modaltemplates.module.scss';
import AllModalTemplates from '../../components/AllModalTemplates';
import Pagination from '../../components/Pagination';
import Link from 'next/link';
const ModalGrid3 = () => {
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
        <div className={styles.modal_templates}>{modalPageNumbers(24, 36)}</div>
        <Pagination />
      </div>
    </div>
  );
};

export default ModalGrid3;
