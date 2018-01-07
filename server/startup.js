Meteor.startup(function () {
    // bootstrap the admin user if they exist -- You'll be replacing the id later
    if (Meteor.users.findOne("HMnbcNFLMXfMY854y"))
        Roles.addUsersToRoles("HMnbcNFLMXfMY854y", ['admin']);

});
