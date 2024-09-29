$(document).ready(function() {
    $('#registrationForm').submit(function(event) {
        event.preventDefault();
        validateForm();
    });

    function validateForm() {
        const errors = {};

        $('#registrationForm input').each(function() {
            const input = $(this);
            const fieldName = input.attr('name');
            const value = input.val().trim();

            switch (fieldName) {
                case 'username':
                    if (!value) {
                        errors.username = 'Username is required';
                    }
                    break;
                case 'password':
                    if (!value) {
                        errors.password = 'Password is required';
                    }
                    break;
                case 'confirmPassword':
                    if (!value) {
                        errors.confirmPassword = 'Confirm Password is required';
                    } else if (value !== $('#password').val()) {
                        errors.confirmPassword = 'Passwords do not match';
                    }
                    break;
                case 'email':
                    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                    if (!value) {
                        errors.email = 'Email is required';
                    } else if (!emailRegex.test(value)) {
                        errors.email = 'Invalid email format';
                    }
                    break;
                case 'phone':
                    const phoneRegex = /^\d{11}$/;
                    if (!value) {
                        errors.phone = 'Phone number is required';
                    } else if (!phoneRegex.test(value)) {
                        errors.phone = 'Invalid phone number';
                    }
                    break;
                case 'date':
                    if (!value) {
                        errors.date = 'Date of birth is required';
                    }
                    break;
                case 'fullName':
                    if (!value) {
                        errors.fullName = 'Full name is required';
                    }
                    break;
                case 'faculty':
                    if (!value) {
                        errors.faculty = 'Faculty is required';
                    }
                    break;
                case 'department':
                    if (!value) {
                        errors.department = 'Department is required';
                    }
                    break;
                default:
                    break;
            }
        });

        highlightErrors(errors);

        if (Object.keys(errors).length === 0) {
            $('#registrationForm')[0].submit();
        }
    }

    function highlightErrors(errors) {
        $('#registrationForm input').removeClass('error').removeAttr('title');
        $.each(errors, function(fieldName, message) {
            $('[name="' + fieldName + '"]').addClass('error').attr('title', message);
        });
    }
});