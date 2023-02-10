import { HTMLAttributes } from 'react';

import { Layout } from '@/layout';

type Props = HTMLAttributes<unknown>;

export const ErrorPage = ({ ...rest }: Props) => {
  return <Layout>ErrorPage</Layout>;
};
