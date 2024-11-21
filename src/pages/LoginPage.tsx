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
import toast from "react-hot-toast";

export default function LoginPage() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleFormSubmit = async (data: FieldValues) => {
    try {
      const response = await login({ email: data.email, password: data.password });
      if (response) {
        navigate('/characters', { replace: true });
      }
    }
    catch (error) {
      toast.error('Invalid email or password');
    }
  };

  return (
    <FormContainer>
      <Title className="mb-6 text-center">React Marvel</Title>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="mb-6">
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
            className="mt-2"
          />
        </div>
        <div>
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
            className="mt-2"
          />
        </div>

        <Button type="submit" className="mt-8 w-full">
          Login
        </Button>
      </form>
    </FormContainer>
  );
}
