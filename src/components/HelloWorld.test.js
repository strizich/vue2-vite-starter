import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import HelloWorld from './HelloWorld.vue'

describe('suite name', () => {
  it('foo', () => {
    const wrapper = mount(HelloWorld, {})
    expect(wrapper).to.exist
  })
})
