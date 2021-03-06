import React from 'react';
import Button from './Button';

export default () => (
  <div className="row">
    <div className="col-md-12 col-xl-12">
      <Button iconClass="ti-help" text="Help" />
      <Button iconClass="ti-search" text="Find" />
      <Button iconClass="icofont icofont-user-alt-3" text="Sort" />
      <Button iconClass="ti-filter" text="Filter" />
      <Button iconClass="ti-zoom-in" text="Zoom" />
      <Button iconClass="ti-layout-grid3" text="Display" />
      <Button iconClass="ti-printer" text="Print" />
      <Button iconClass="ti-export" text="Export" />
      <Button iconClass="ti-save" text="Save View" />
    </div>
  </div>
);
