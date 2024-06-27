import { backend_url } from "./constants";
import { setCookie } from "cookies-next";

export async function handleLogin(response, setSuccessMessages) {
  let response_json = await response.json();
  
  setCookie('token', response_json["token"])
  setCookie('token_expiration', response_json["token_expiration"])
  setSuccessMessages(prevSuccessMessages => [...prevSuccessMessages, "Login Successful! Redirecting.."])
}

export async function handleFailedLogin(response, setErrorMessages) {
  let response_json = await response.json();

  let error_messages = [];
  
  if ("non_field_errors" in response_json["errors"]) {
    error_messages.push(...response_json["errors"]["non_field_errors"]);
  }
  if ("email" in response_json["errors"]) {
    error_messages.push(...response_json["errors"]["email"]);
  }
  if ("password" in response_json["errors"]) {
    error_messages.push(...response_json["errors"]["password"]);
  }

  setErrorMessages(error_messages);
}