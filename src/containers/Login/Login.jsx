import React from "react";
import "./login.css";
import far from "../../assets/Image199.PNG";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { loginUser } from "../../actions/authactions";

const Login = (props) => {
  const { handleSubmit, register, errors, control } = useForm();
  const onSubmit = (values) => {
    let formData = new FormData();
    formData.append("username", values.inputEmail);
    formData.append("password", values.inputPassword);
    formData.append("client_id", "testapp");
    formData.append("grant_type", "password");
    let body = {
      username: values.inputEmail,
      password: values.inputPassword,
      client_id: "testapp",
      grant_type: "password",
    };
    const formBody = Object.keys(body)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(body[key])
      )
      .join("&");
    console.log(values);
    props.login(formBody, props.history);
  };
  return (
    <div className="body-login">
      <div className="d-flex align-items-center min-vh-100 py-3 py-md-0">
        <div className="container">
          <div className="card login-card">
            <div className="row no-gutters">
              <div className="col-md-5 left-card">
                <img src={far} alt="logo" className="logo" />
                <h4>Protatil Web</h4>
                <h3>Disvision Instruction</h3>
              </div>
              <div className="col-md-7">
                <div className="card-body">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-label-group">
                      <label htmlFor="inputEmail">Nom d'Utilisateur</label>
                      <input
                        name="inputEmail"
                        id="inputEmail"
                        className="form-control"
                        placeholder="Nom d'Utilisateur"
                        autoFocus
                        ref={register({
                          required: "Champ Obligatoire",
                        })}
                      ></input>

                      <div className="text-danger error-login">
                        {errors.inputEmail && errors.inputEmail.message}
                      </div>
                    </div>

                    <div className="form-label-group">
                      <label htmlFor="inputPassword">Mot de Passe</label>
                      <input
                        name="inputPassword"
                        type="password"
                        id="inputPassword"
                        className="form-control"
                        placeholder="Mot de Passe"
                        ref={register({
                          required: "Champ Obligatoire",
                        })}
                      ></input>

                      <div className="text-danger error-login">
                        {errors.inputPassword && errors.inputPassword.message}
                      </div>
                    </div>

                    <button
                      className="btn btn-lg btn-success btn-block btn-login text-uppercase font-weight-bold mt-5 mb-2"
                      type="submit"
                    >
                      Connexion
                    </button>
                    <div className="text-danger">
                      {props.error && props.error}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = ({ auth }) => ({
  loading: auth.loading,
  error: auth.error,
  isAuth: auth.isAuth,
});

const mapDispatchToProps = {
  login: loginUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
