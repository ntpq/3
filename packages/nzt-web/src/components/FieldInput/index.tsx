import {
  Button,
  Input,
  Box,
  HStack,
  FormLabel,
  FormControl,
  Link as LinkC,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { useWeb3React } from '@web3-react/core'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { useStore } from '../../store/index'
import { Formik, Form, Field } from 'formik'

export const FieldInput = observer(() => {
  const { isOpen: isMobileNavOpen, onToggle } = useDisclosure()
  const { error } = useWeb3React()
  const { lang } = useStore()
  return (
    <div className='mb-10'>
      <Formik
        initialValues={{ name: '', latitude: '', longtitude: '' }}
        onSubmit={(values, actions) => {
          console.log('values', values)
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            actions.setSubmitting(false)
          }, 1000)
        }}
      >
        {(props) => (
          <Form>
            <Box>
              <Text mt="20px" fontSize="3xl">
                Add field
              </Text>
              <FormControl>
                <Field name="name">
                  {({ field, form }) => (
                    <>
                      <FormLabel htmlFor="name">Name</FormLabel>
                      <Input {...field} id="name" placeholder="name" />
                    </>
                  )}
                </Field>
                <HStack spacing="24px" mt="20px">
                  <Field name="latitude">
                    {({ field, form }) => (
                      <Box w="50%">
                        <FormLabel htmlFor="number">Latitude</FormLabel>
                        <Input {...field} id="latitude" placeholder="latitude" type="number" />
                      </Box>
                    )}
                  </Field>
                  <Field name="longtitude">
                    {({ field, form }) => (
                      <Box w="50%">
                        <FormLabel htmlFor="number">Longtitude</FormLabel>
                        <Input {...field} id="longtitude" placeholder="longtitude" type="number" />
                      </Box>
                    )}
                  </Field>
                </HStack>
              </FormControl>
              <Button mt={4} colorScheme="teal" isLoading={props.isSubmitting} type="submit">
                Submit
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </div>
  )
})

export default FieldInput
