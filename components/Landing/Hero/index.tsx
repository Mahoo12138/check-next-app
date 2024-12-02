import { Button, Box, Input, Text, Flex, Spacer } from "@chakra-ui/react";
import React from 'react';
import { MdAndroid } from 'react-icons/md';


export const Hero = () => {
   return (
      <>
         <Flex
            css={{
               'gap': '$3',
               'px': '$6',
               'flexDirection': 'column',
               'alignContent': 'center',
               'justifyContent': 'center',
               'alignItems': 'center',
               'width': '100%',

            }}
            justify={'center'}
            sm={{
               flexDirection: 'row',
               mt: '$20',
            }}
         >
            <Box
               css={{
                  pt: '$13',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '$5',
               }}
            >
               <Box
                  css={{
                     maxWidth: '600px',
                  }}
               >
                  <Text
                     css={{
                        display: 'inline',
                     }}
                     textStyle="5xl"
                  >
                     The modern landing page{' '}
                  </Text>
                  <Text
                     textStyle="5xl"

                     css={{
                        display: 'inline',
                     }}
                  >
                     for{' '}
                  </Text>
                  <Text
                     textStyle="5xl"
                     css={{
                        display: 'inline',
                     }}
                     color="primary"
                  >
                     React developers
                  </Text>
               </Box>

               <Text
                  css={{
                     color: '$accents8',
                     maxWidth: '400px',
                  }}
                  textStyle="lg"
               >
                  The easiest way to build React Landing page in seconds. Save
                  time and focus on your project.
               </Text>

               <Flex
                  css={{
                     gap: '8px',
                     pt: '4px',
                     alignItems: "center",
                  }}
               >
                  <Input css={{mr: "10px"}} placeholder="Enter your email address" size="lg" />
                  <Button>Start Free Trial</Button>
               </Flex>

               <Flex
                  wrap={'wrap'}
                  css={{
                     'gap': '8px',
                     'py': '7px'
                  }}
                  sm={{
                     py: '4px',
                  }}
               >
                  <Flex
                     css={{
                        color: '$accents7',
                        alignItems: 'center',
                     }}
                  >
                     <MdAndroid /> No credit card required.
                  </Flex>
                  <Flex
                     css={{
                        color: '$accents7',
                        alignItems: 'center',
                     }}
                  >
                     <MdAndroid /> 14-day free trial.
                  </Flex>
                  <Flex
                     css={{
                        color: '$accents7',
                        alignItems: 'center',
                     }}
                  >
                     <MdAndroid /> Cancel anytime.
                  </Flex>
               </Flex>
            </Box>
            <Box
               css={{
                  '& img': {
                     width: '775px',
                     objectFit: 'contain',
                  },
               }}
            >
               <img src="mock.png" />
            </Box>
         </Flex>
         <Spacer
            css={{ position: 'absolute', inset: '0p', left: '0', mt: '10px' }}
         />
      </>
   );
};
