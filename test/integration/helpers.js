const supertest = require('supertest');
const chai = require('chai');
const app = require('../../src/app.js');

global.app = app;
global.servidor = supertest(app);
global.expect = chai.expect;