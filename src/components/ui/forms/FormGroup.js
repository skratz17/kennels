import React from 'react';

export const FormGroup = props => (
  <fieldset>
    <div className="form-group">
      {props.children}
    </div>
  </fieldset>
);