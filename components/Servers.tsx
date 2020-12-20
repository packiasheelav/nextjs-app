import React from 'react';
import Card from '../components/Card/Card';
import CardHeader from '../components/Card/CardHead';
import CardContent from '../components//Card/CardContent';
import CardSection from '../components/Card/CardSection';
import Button from '../components/Button/Button';
import { IServer } from 'upcloud';

const Servers = ({ data, name }: { data: IServer[]; name: string }) => {
  const pageContent = (
    <Card key={name}>
      <CardHeader key={name} title={name} />
      <hr />
      {data?.map((serverData: IServer, index: any) => {
        return (
          <CardSection key={index}>
            <CardContent>
              <div
                className="servers"
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <Button secondary={serverData.state === 'stopped'} />
                <div style={{ marginLeft: '1rem' }}>
                  <div>{serverData?.title}</div>
                  <div>{`HostName: ${serverData?.hostname}`}</div>
                </div>
              </div>
            </CardContent>
          </CardSection>
        );
      })}
    </Card>
  );
  return <>{pageContent}</>;
};
export default Servers;
