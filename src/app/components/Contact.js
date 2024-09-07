'use client'
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import customTheme from './theme';
import { Typography } from '@mui/material';
import ContactUs from './ContactUs';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  message: Yup.string().required('Required'),
});

const Contact = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const outerTheme = useTheme();

  const apiUrl = process.env.NEXT_PUBLIC_API_URL_Comments;

  let handleSubmit = async (formData, resetFormFields) => {
    setIsLoading(true);

    try {
      let response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const responseData = await response.json();
        if (responseData && responseData.data) {
          setIsSuccess(true);
          setIsError(false);
          resetFormFields();
        } else {
          throw new Error('Invalid response data');
        }
      } else {
        setIsSuccess(false);
        setIsError(true);
      }
    } catch (error) {
      console.error('Error saving data:', error);
      setIsSuccess(false);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const cardStyle = {
    backgroundColor: 'transparent',
    maxWidth: '90%',
    border: 'none',
    width: '80%',
  };

  const textStyle = {
    color: '#94a3b8',
  };

  return (
    <div data-aos="fade">
      <Box display="flex" justifyContent="center" alignItems="center" marginTop='50px' marginBottom='20px'>
        <Card variant="filled" sx={cardStyle}>
          <CardContent>
            <ContactUs />
            <Formik
              initialValues={{ name: '', email: '', message: '' }}
              validationSchema={SignupSchema}
              onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
            >
              {({ errors, touched, isValid }) => (
                <Form>
                  <ThemeProvider theme={customTheme(outerTheme)}>
                    <div>
                      <Field
                        name="name"
                        type="text"
                        as={TextField}
                        label="Name"
                        variant="filled"
                        margin="dense"
                        fullWidth
                        error={touched.name && !!errors.name}
                        sx={{ ...textStyle, color: '#94a3b8' }}
                        InputProps={{ sx: textStyle }}
                        InputLabelProps={{ sx: textStyle }}
                      />
                      <ErrorMessage name="name">
                        {msg => (
                          <div className="error" style={{ color: '#94a3b8', margin: '2px 0', left: '5px', fontFamily: "'Rubik', sans-serif" }}>
                            {msg}
                          </div>
                        )}
                      </ErrorMessage>
                    </div>
                    <div>
                      <Field
                        name="email"
                        type="text"
                        as={TextField}
                        label="Email"
                        variant="filled"
                        margin="dense"
                        fullWidth
                        error={touched.email && !!errors.email}
                        sx={{ ...textStyle, color: '#94a3b8' }}
                        InputProps={{ sx: textStyle }}
                        InputLabelProps={{ sx: textStyle }}
                      />
                      <ErrorMessage name="email">
                        {msg => (
                          <div className="error" style={{ color: '#94a3b8', margin: '2px 0', left: '5px', fontFamily: "'Rubik', sans-serif" }}>
                            {msg}
                          </div>
                        )}
                      </ErrorMessage>
                    </div>
                    <div>
                      <Field
                        name="message"
                        type="text"
                        as={TextField}
                        label="Message"
                        multiline
                        variant="filled"
                        margin="dense"
                        fullWidth
                        sx={{ ...textStyle, color: '#94a3b8' }}
                        InputProps={{ sx: textStyle }}
                        InputLabelProps={{ sx: textStyle }}
                      />
                      <ErrorMessage name="message">
                        {msg => (
                          <div className="error" style={{ color: '#94a3b8', margin: '2px 0', left: '5px', fontFamily: "'Rubik', sans-serif" }}>
                            {msg}
                          </div>
                        )}
                      </ErrorMessage>
                    </div>
                  </ThemeProvider>
                  <button
                    type="submit"
                    style={{
                      background: '#94a3b8',
                      color: 'black',
                      border: 'none',
                      padding: '10px 20px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      marginTop: '16px',
                      fontFamily: "'Rubik', sans-serif",
                      opacity: isValid ? 1 : 0.5,
                    }}
                    disabled={!isValid || isLoading}
                  >
                    {isLoading ? 'Loading...' : 'Submit'}
                  </button>

                  {isSuccess && (
                    <div style={{ color: 'green', marginTop: '10px', fontFamily: "'Rubik', sans-serif" }}>
                      Thanks for Contacting!
                    </div>
                  )}

                  {isError && (
                    <div style={{ color: 'red', marginTop: '10px', fontFamily: "'Rubik', sans-serif" }}>
                      There was an issue with your submission. Please try again later.
                    </div>
                  )}
                </Form>
              )}
            </Formik>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default Contact;
