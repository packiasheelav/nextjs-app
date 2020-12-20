const Error = ({ statusCode }: { statusCode: number }) => {
  return (
    <div style={{ textAlign: 'center', margin: '5rem auto' }}>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}
    </div>
  );
};

Error.getInitialProps = ({ res, err }: any) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
