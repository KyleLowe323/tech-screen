import axios from 'axios';

const fetchOrganizationData = async ({orgName}) => {
  const {data} = await axios.get(`/api/fetchOrgs/${orgName}`);
  return data;
}
const testFetch = () => axios.get('/api/testFetch');

export { fetchOrganizationData, testFetch };