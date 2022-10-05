import React from 'react';
import { useRouter } from 'next/router';
const GenerateRoute = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  return <div>GenerateRoute </div>;
};

export default GenerateRoute;
