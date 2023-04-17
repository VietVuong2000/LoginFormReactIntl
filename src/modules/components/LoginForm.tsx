import React from "react";

import { ValidLogin,ValidateLogin } from "./check";
import { ILoginParameter,ILoginValidaTion } from "../../models/auth";
import { FormattedMessage} from "react-intl";
import {IntlProvider, useIntl } from 'react-intl';




interface FullValueLogin {
    onLogin(value:ILoginParameter) : void;
    loading: boolean;
    errorMessage: string;
}

const LoginForm = (FullValueLogin: FullValueLogin) =>{
    const [formValues,setFormValues]= React.useState<ILoginParameter>({email:'',password:'',rememberMe:false});
    const [validate,setValidate]= React.useState<ILoginValidaTion>();

    const {onLogin, loading, errorMessage} = FullValueLogin; 

    const onSubmit = React.useCallback(()=> {
        const validate = ValidateLogin(formValues)

        setValidate(validate);

        if (!ValidLogin(validate)) {
          return;
        }
    
        onLogin(formValues);
        
    },[formValues, onLogin]);






    return (
      
        <form
          style={{ maxWidth: '560px', width: '100%' }}
          noValidate
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
          className="row g-3 needs-validation"
        >

          {!!errorMessage && (
            <div className="alert alert-danger" role="alert" style={{ width: '100%' }}>
              {errorMessage}
            </div>
          )}
    
          <div className="col-md-12">
            <label htmlFor="inputEmail" className="form-label">
              <FormattedMessage id="email"  />
            </label>
            <input
              type="text"
              className="form-control"
              id="inputEmail"
              value={formValues.email}
              onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
            />
    
            {!!validate?.email && (
              <small className="text-danger">
                <FormattedMessage id={validate?.email}  />
              </small>
            )}
          </div>
    
          <div className="col-md-12">
            <label htmlFor="inputPassword" className="form-label">
              <FormattedMessage id="password" />
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              value={formValues.password}
              onChange={(e) => setFormValues({ ...formValues, password: e.target.value })}
            />
    
            {!!validate?.password && (
              <small className="text-danger">
                <FormattedMessage id={validate?.password} />
              </small>
            )}
          </div>
    
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="invalidCheck"
                value=""
                checked={formValues.rememberMe}
                onChange={(e) => setFormValues({ ...formValues, rememberMe: !!e.target.checked })}
              />
              <label className="form-check-label" htmlFor="invalidCheck">
                <FormattedMessage id="rememberMe" />
              </label>
            </div>
          </div>
    
          <div className="row justify-content-md-center" style={{ margin: '16px 0' }}>
            <div className="col-md-auto">
              <button
                className="btn btn-primary"
                type="submit"
                style={{ minWidth: '160px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                disabled={loading}
                
              >
                {loading && <div className="spinner-border spinner-border-sm text-light mr-2" role="status" />}
                <FormattedMessage id="register" />
              </button>
            </div>
          </div>
          
              
      
        </form>
      );

};

export default LoginForm;


