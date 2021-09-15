import {useEffect, useState} from 'react';
import { fetchOrganizationData } from './api';
import Layout from './components/Layout'
import Table from './components/Table'

const App = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [OrgRepoData, setOrgRepoData] = useState(null);
  const [orgName, setOrgName] = useState('Netflix');

  useEffect(() => {
    try {
      setIsFetching(true)
      fetchOrganizationData({orgName})
        .then((data) => {
          console.log('repo data', data)
          const sortedData = data.sort((a,b) => {
            if (a['watchers_count'] < b['watchers_count']) return 1
            if (a['watchers_count'] > b['watchers_count']) return -1
            return 0;
          });
          setOrgRepoData(sortedData);
          setIsFetching(false)
        })
    }
    catch{
      console.info('received an error')
    }
  },[orgName])

  return (
    <Layout {...{orgName}}>
      <>
        <button onClick={() => setOrgName('Netflix')} title={'click to see Netflix repos'} disabled={orgName === 'Netflix'}>Netflix</button>
        <button onClick={() => setOrgName('Twitter')} title={'click to see Twitter repos'} disabled={orgName === 'Twitter'}>Twitter</button>
        <button onClick={() => setOrgName('Microsoft')} title={'click to see Microsoft repos'} disabled={orgName === 'Microsoft'}>Microsoft</button>
        <button onClick={() => setOrgName('Google')} title={'click to see Google repos'} disabled={orgName === 'Google'}>Google</button>
      </>
      {!isFetching && <Table data={OrgRepoData} />}
      {isFetching && <h3>Fetching data</h3>}
    </Layout>
  );
}

export default App;
