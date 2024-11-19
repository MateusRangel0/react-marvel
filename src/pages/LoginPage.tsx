import React, { useState } from 'react';
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import Title from "../components/Title";
import FormContainer from "../components/FormContainer";

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  return (
    <FormContainer>
      <Title className="mb-6">React Marvel Login</Title>
      <form>
        <div className="space-y-4">
          <TextInput
            id="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <TextInput
            id="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <Button type="submit" className="mt-6">
          Login
        </Button>
      </form>
    </FormContainer>
  )
}