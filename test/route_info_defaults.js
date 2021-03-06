import 'babel-polyfill'
import assert from 'assert'

import Route from '../src/http'
import { isSymbol, } from '../src/http/helpers'
import { defaults, methods, } from '../src/http/configs'

describe('Route info defauls', () => {
  describe('checking default values for simple info methods', () => {
    const name = 'api'
    const address = 'http://localhost:3000/'
    const slicedAddress = 'http://localhost:3000'
    const api = new Route({
      name,
      address,
      routes: {},
    })
    it('Route.main should be symbol', () => {
      assert.equal(isSymbol(Route.main), true)
    })
    it('getAddress should return value of variable address', () => {
      assert.equal(api.getAddress(), slicedAddress)
    })
    it('getUrl should return slicedAddress', () => {
      assert.equal(api.getUrl(), slicedAddress)
    })
    it('getPath should return ""', () => {
      assert.equal(api.getPath(), defaults.path)
    })
    it('getFullPath should return same path', () => {
      assert.equal(api.getFullPath(), defaults.path)
    })
    it('getName should return Route name', () => {
      assert.equal(api.getName(), name)
    })
    it('getTimeout should return default timeout', () => {
      assert.equal(api.getTimeout(), defaults.timeout)
    })
    it('getMethod should return POST', () => {
      assert.equal(api.getMethod(), methods.POST)
    })
    it('getMessages should return messages default object', () => {
      assert.deepEqual(api.getMessages(), defaults.messages)
    })
    it('getHeaders should return headers default object', () => {
      assert.deepEqual(api.getHeaders(), defaults.headers)
    })
    it('getInfo should return all default info', () => {
      const info = {
        name: 'api',
        address: slicedAddress,
        path: defaults.path,
        method: methods.POST,
        timeout: defaults.timeout,
        url: slicedAddress,
        messages: defaults.messages,
        headers: defaults.headers,
      }
      assert.deepEqual(api.getInfo(), info)
    })
  })
})
