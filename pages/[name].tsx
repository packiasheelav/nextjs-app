import Servers from '../components/Servers';
import Storages from '../components/Storages';
import { getServers } from 'api/server';
import { getStorage } from 'api/storage';
import Error from './_error';
import { GetServerSideProps, GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { IData } from '../@types/upcloud';

const Home = ({ data, name, statusCode }: IData) => {
  if (statusCode || !data) {
    return <Error statusCode={statusCode} />;
  }

  return (
    <main>
      {name === 'servers' && <Servers data={data} name={name} />}
      {name === 'storages' && <Storages data={data} name={name} />}
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetStaticPropsContext<ParsedUrlQuery>,
) => {
  let response;
  try {
    if (context?.params?.name === 'servers') {
      response = await getServers();
    } else if (context?.params?.name === 'storages') {
      response = await getStorage();
    }
    const data = response?.data;
    return {
      props: { data, name: context?.params?.name },
    };
  } catch (error) {
    return {
      props: { statusCode: 404, name: context?.params?.name },
    };
  }
};
export default Home;
