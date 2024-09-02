import { useState } from 'react';
import { fetchIPData } from '../services/ipAddressService';
import { Container, Title, Input, Button, ResultsContainer } from '../components_styles/IPAddressFinderStyle';

const IPAddressFinder = () => {
  const [ip, setIp] = useState('');
  const [ipData, setIpData] = useState(null);
  const [error, setError] = useState(null);

  const findIP = async () => {
    try {
      setError(null);
      const data = await fetchIPData(ip);
      setIpData(data);
    } catch (error) {
      setError("Failed to fetch IP address data. Please check the IP address and try again.");
    }
  };

  return (
    <Container>
      <Title>IP Address Finder</Title>
      <Input
        type="text"
        value={ip}
        onChange={(e) => setIp(e.target.value)}
        placeholder="Enter IP address"
      />
      <Button onClick={findIP}>Find IP</Button>
      {error && (
        <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>
      )}
      {ipData && (
        <ResultsContainer>
          <p><strong>IP:</strong> {ipData.ip}</p>
          <p><strong>Location:</strong> {ipData.city}, {ipData.region}, {ipData.country}</p>
          <p><strong>ISP:</strong> {ipData.org}</p>
        </ResultsContainer>
      )}
    </Container>
  );
};

export default IPAddressFinder;
