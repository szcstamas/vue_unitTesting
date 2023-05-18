import LoginForm from "@/components/LoginForm.vue"
import { mount } from "@vue/test-utils"

describe('LoginForm', () => {
    it('emits an event with a user data payload', () => {
        const wrapper = mount(LoginForm);
        const input = wrapper.find('[data-test="name-input"]')

        input.setValue('Tamas Szucs')
        wrapper.trigger('submit')

        //does form submitting happens?
        const formSubmittedCalls = wrapper.emitted('formSubmitted')
        expect(formSubmittedCalls).toHaveLength(1)

        //does the expected payload matches with the value of input?
        const expectedPayload = { name: 'Tamas Szucs' }
        expect(wrapper.emitted('formSubmitted')[0][0]).toMatchObject(expectedPayload)
    })
})