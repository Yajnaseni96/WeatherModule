import React, { FC, useState, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setAlert } from '../store/actions/alertActions';
import { getWeather, setLoading } from '../store/actions/weatherActions';

interface SearchProps {
  title: string;
}

const Header = styled.h1`
    font-size: 40px;
    font-family:  'sans-serif';
    padding-top: 30px;
  `;

const Input = styled.input`
    font-size: 18px;
    padding: 10px;
    margin: 10px;
    background: #b4e6df;
    border: none;
    border-radius: 3px;
    ::placeholder {
      color: black;
      
    }
  `;

const Button = styled.button`
    background-color: #10e2f1;
    font-size: 20px;
    color: white;
    margin: 1em;
    border: 3px;
    padding: 0.25em 6em;
    
  `;

const Search: FC<SearchProps> = ({ title }) => {
  console.log(title);
  const dispatch = useDispatch();
  const [city, setCity] = useState('');
  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value);
  }

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(city.trim() === '') {
      return dispatch(setAlert('City is required!'));
    }

    dispatch(setLoading());
    dispatch(getWeather(city));
    setCity('');
  }
   
  
  return(
    <>
      <Header >{title}
        <form  onSubmit={submitHandler}>
          <Input 
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={changeHandler}
          />
          <br/>
          <Button >Search</Button>
        </form>
      </Header>
    </>
  );  
}

export default Search;