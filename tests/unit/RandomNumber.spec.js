import RandomNumber from "@/components/RandomNumber.vue"
import { mount } from "@vue/test-utils"

describe('RandomNumber', () => {

    test('By default, random number data value should be 0', () => {
        const wrapper = mount(RandomNumber)
        expect(wrapper.html()).toContain('<span>0</span>')
    })

    test('By default, random number data value should be between 1 and 10', async () => {
        const wrapper = mount(RandomNumber)
        await wrapper.find('button').trigger('click')
        const randomNumber = parseInt(wrapper.find('span').text())
        expect(randomNumber).toBeGreaterThanOrEqual(1)
        expect(randomNumber).toBeLessThanOrEqual(10)
    })

    test('By default, random number data value should be between 200 and 300', async () => {
        const wrapper = mount(RandomNumber, {
            props: {
                min: 200,
                max: 300
            }
        })
        await wrapper.find('button').trigger('click')
        const randomNumber = parseInt(wrapper.find('span').text())
        expect(randomNumber).toBeGreaterThanOrEqual(200)
        expect(randomNumber).toBeLessThanOrEqual(300)
    })
})