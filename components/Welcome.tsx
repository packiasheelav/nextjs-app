import React from 'react';
import Card from '../components/Card/Card';
import CardContent from '../components//Card/CardContent';
import CardSection from '../components/Card/CardSection';

const Welcome = () => {
  const pageContent = (
    <Card>
      <CardSection>
        <CardContent>Welcome to home page</CardContent>
      </CardSection>
    </Card>
  );
  return <>{pageContent}</>;
};
export default Welcome;
