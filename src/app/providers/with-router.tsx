import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Loader } from 'shared/ui/loader/Loader';

export const withRouter = (component: any) => () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>{component()}</Suspense>
    </BrowserRouter>
  );
};
