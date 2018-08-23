import Button from './Button';
import React from 'react';

export default () => {
  return (
    <div>
      <Button iconClass="ti-help" text="Info" />
      <Button iconClass="ti-search" text="Test" />
      <Button iconClass="ti-filter" text="Measures" />
      <Button iconClass="ti-filter" text="Clusters" />
      <Button iconClass="ti-zoom-in" text="Attributes" />
      <Button iconClass="ti-layout-grid3" text="Dates" />
      <Button iconClass="ti-printer" text="Size" />
      <Button iconClass="ti-export" text="Help" />
    </div>
  );
};
