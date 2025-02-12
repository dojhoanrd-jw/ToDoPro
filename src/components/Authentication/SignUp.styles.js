import styled from 'styled-components';
import { FcGoogle } from 'react-icons/fc';
import { Colors } from '../../Utils/colors';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Field = styled.div`
  display: flex;
  align-items: center;
  background: ${Colors.mistGray};
  padding: 0.8rem 1rem;
  border-radius: 10px;
`;

const Icon = styled.div`
  color: ${Colors.darkBlue};
  margin-right: 0.5rem;
`;

const Input = styled.input`
  flex: 1;
  border: none;
  background: none;
  font-size: 1rem;
  color: ${Colors.charcoal};

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${Colors.mutedGray};
  }

  &:-webkit-autofill {
    box-shadow: 0 0 0px 1000px ${Colors.mistGray} inset;
    -webkit-text-fill-color: ${Colors.charcoal};
    transition: background-color 5000s ease-in-out 0s;
  }
`;

const Button = styled.button`
  background: ${Colors.darkBlue};
  color: ${Colors.lightBackground};
  padding: 0.8rem;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: ${Colors.darkBlueHover};
  }
`;

const Divider = styled.div`
  position: relative;
  text-align: center;
  color: ${Colors.mutedGray};
  font-size: 0.9rem;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 40%;
    height: 1px;
    background: ${Colors.mutedGray};
    top: 50%;
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
  }
`;

const GoogleButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${Colors.white};
  color: ${Colors.charcoal};
  border: 1px solid ${Colors.mutedGray};

  &:hover {
    background: ${Colors.mistGray};
  }
`;

const GoogleIcon = styled(FcGoogle)`
  font-size: 1.5rem;
  margin-right: 0.5rem;
`;

export { Form, Field, Icon, Input, Button, Divider, GoogleButton, GoogleIcon };
