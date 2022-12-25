import { useState } from "react";
import { Input, useInput, Grid } from "@nextui-org/react";
import React from "react";

export default function register() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const dataObj = Object.fromEntries(data);
    setLoading(true);

    const response = await fetch("/api/user/register", {
      method: "POST",
      body: JSON.stringify({
        name: dataObj.name,
        email: dataObj.email,
        password: dataObj.password,
        password2: dataObj.password2,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    if (result.error) {
      setLoading(false);
      setError(result.error);
    } else {
      setLoading(false);
      setData(result);
    }
  };
  const { value, reset, bindings } = useInput("");  
  
  const validateEmail = (value:any) => {
    return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
  };

  const helper = React.useMemo(() => {
    if (!value)
      return {
        text: "",
        color: "",
      };
    const isValid = validateEmail(value);
    return {
      text: isValid ? "Correct email" : "Enter a valid email",
      color: isValid ? "success" : "error",
    };
  }, [value]);
  return (
    <div>
      <h1>register</h1>
      <form onSubmit={handleSubmit} className="my-5 text-center">
        
      </form>
    </div>
  );
}
