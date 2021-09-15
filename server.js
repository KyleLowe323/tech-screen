const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = 4000;

const GITHUB_BASE = 'https://api.github.com/';
const HEADER_DEFAULT = {
    accept: 'application/vnd.github.v3+json',
    type: 'all',
}
const MAX_RECORDS = 100

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.get('/api/testFetch', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.send({message: 'Hello from express server'})
})

app.get('/api/fetchOrgs/:orgName', (req, res) => {
  const {orgName} = req.params;
  res.header('Access-Control-Allow-Origin', '*'); // CORS header to allow localhost to receive the data

  axios.get(`${GITHUB_BASE}orgs/${orgName}/repos?per_page=${MAX_RECORDS.toString()}&sort=updated`, {headers: {...HEADER_DEFAULT}})
      .then(({data}) => res.json(data))
      .catch((err) => res.send(err))
})

app.listen(PORT, () => {
  console.info(`Currently listening on port ${PORT}`);
})