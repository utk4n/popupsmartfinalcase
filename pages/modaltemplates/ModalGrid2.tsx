import React from 'react';
import styles from '../../styles/modaltemplates.module.scss';
import Link from 'next/link';
import AllModalTemplates from '../../components/AllModalTemplates';
import Pagination from '../../components/Pagination';
const ModalGrid2 = () => {
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
        <div className={styles.modal_templates}>{modalPageNumbers(12, 24)}</div>
      <Pagination />
      </div>
    </div>
  );
};

export default ModalGrid2;
