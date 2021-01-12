import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

import { RootState } from './store';
import Search from './components/Search';
import Alert from './components/Alert';
import Weather from './components/Weather';
import { setAlert } from './store/actions/alertActions';
import { setError } from './store/actions/weatherActions';
import styled from 'styled-components';
import  image1  from './image/image.png';

const Head = styled.div`
  text-align: center;
  font-size: 40px;
  color: black
`;

const Image = styled.div`
  background-image: url(${image1});
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
`;


const App: FC = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state: RootState) => state.weather.data);
  const loading = useSelector((state: RootState) => state.weather.loading);
  const error = useSelector((state: RootState) => state.weather.error);
  const alertMsg = useSelector((state: RootState) => state.alert.message);

  return (
    <>
    <Image>
    <Head>
      <Search title="Enter city name and then press Search!" />
      {loading ? <Head >Loading...</Head> : weatherData && <Weather data={weatherData} />}
      {alertMsg && <Alert message={alertMsg} onClose={() => dispatch(setAlert(''))} />}
      {error && <Alert message={error} onClose={() => dispatch(setError())} />}
    </Head>
    
    </Image>
    </>
  );
}

export default App;