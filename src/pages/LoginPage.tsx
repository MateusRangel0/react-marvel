import { useContext } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import TextInput from "../components/forms/TextInput";
import Button from "../components/Button";
import Title from "../components/Title";
import FormContainer from "../components/forms/FormContainer";
import { regEmailValidate } from "../util/form.util";
import { AuthContext } from "../util/AuthContext";
import { useNavigate } from "react-router-dom";
import Label from "../components/Label";

export default function LoginPage() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleFormSubmit = async (data: FieldValues) => {
    // Simulate successful login by calling the login function from context
    try {
      const response = await login({ email: data.email, password: data.password });
      if (response) {
        navigate('/characters', { replace: true });
      }
    }
    catch (error) {
      console.error(error);
    }
  };

  return (
    <FormContainer>
      <Title className="mb-6">React Marvel Login</Title>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <TextInput
            id="email"
            name="email"
            placeholder="Insert Email"
            type="email"
            register={register("email", {
              required: 'Email is required',
              pattern: {
                value: regEmailValidate,
                message: 'Invalid email address'
              }
            })}
            errors={errors.email}
            className="mb-4"
          />
          <Label htmlFor="password">Password</Label>
          <TextInput
            id="password"
            placeholder="Insert Password"
            name="password"
            type="password"
            register={register("password", {
              required: 'Password is required'
            })}
            errors={errors.password}
          />

        </div>
        <Button type="submit" className="mt-6">
          Login
        </Button>
      </form>
    </FormContainer>
  );
}