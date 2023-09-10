describe('Filling out Form using Mocha',()=>{
    it('should be filled successfully',(client) =>{
        client.url('https://www.ultimateqa.com/filling-out-forms').pause()
           // .waitForElementVisible('body') //Waits a given time in milliseconds for an 
                                                //element to be visible in the page before performing any other commands or assertions.
                                                .assert.titleEquals('Filling Out Forms - Ultimate QA')
                                                .waitForElementVisible('#et_pb_contact_name_0')
                                                .setValue('#et_pb_contact_name_0', 'hello')
                                                .setValue('#et_pb_contact_message_0', 'this is  paragraph')
                                                .click('.et_pb_contact_submit')
                                                .waitForElementVisible('#et_pb_contact_form_0')
                                                .expect.element('#et_pb_contact_form_0').text.to.equal('Form filled out successfully');
                                        });
                                
                                        after((client, done) => {
                                            client.end(() => {
                                                done();
                                            });
    })
})