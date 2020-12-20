import React from 'react';
import Card from '../components/Card/Card';
import CardHeader from '../components/Card/CardHead';
import CardContent from '../components//Card/CardContent';
import CardSection from '../components/Card/CardSection';
import { IStorage } from 'upcloud';

const Storages = ({ data, name }: { data: IStorage[]; name: string }) => {
  const pageContent = (
    <Card key={name}>
      <CardHeader key={name} title={name} />
      <hr />
      {data?.map((serverData: IStorage, index: any) => {
        return (
          <CardSection key={index}>
            <CardContent>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div>{`${serverData?.title}(${serverData?.size} GB)`}</div>
              </div>
            </CardContent>
          </CardSection>
        );
      })}
    </Card>
  );
  return <>{pageContent}</>;
};
export default Storages;
