import styled from 'styled-components';
import { FcGoogle } from 'react-icons/fc';
import { FaUser, FaLock } from 'react-icons/fa';
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
  box-shadow: inset 0 2px 5px rgba(240, 238, 238, 0.1);
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
  color: ${Colors.white};
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

const ErrorMessage = styled.div`
  color: red;
  font-size: 0.9rem;
  text-align: center;
`;

export { Form, Field, Icon, Input, Button, Divider, GoogleButton, GoogleIcon, ErrorMessage };
