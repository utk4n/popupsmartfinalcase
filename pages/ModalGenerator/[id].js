import { useEffect, useState } from 'react';
import AllModalTemplates from '../../components/AllModalTemplates';
import { useRouter } from 'next/router';

export default function Post() {
  const router = useRouter();
  const [dynamicPage, setDynamicPage] = useState({});
  const { id } = router.query;
  console.log(id);
  const { allTemplates } = AllModalTemplates();

  useEffect(() => {
    const findID = allTemplates.find((temp) => temp.id === +id);
    setDynamicPage(findID);
  }, []);
  console.log('STATE', dynamicPage);

  return <div className='flex items-center justify-center'>{dynamicPage.url_path}</div>;
}
