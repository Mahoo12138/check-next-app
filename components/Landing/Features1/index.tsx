import React from 'react';
import { Spacer, Grid, Text, Flex, Heading } from '@chakra-ui/react';
// import { MdAccountBox } from '../icons/MdAccountBox';
import { FeatureIcon } from '../FeatureIcon';
import { MdAccountBox } from 'react-icons/md';

export const Features1 = () => {
   return (
      <>
         <Flex
            direction={'column'}
            css={{
               'gap': '1rem',
               'pt': '20px',
               'justifyContent': 'center',
               'alignItems': 'center',
               'px': '6px',

            }}
            sm={{
               justifyContent: 'space-around',
               px: '32px',
               flexDirection: 'row',
            }}
            md={{
               px: '64px',
            }}
         >
            <Flex direction="column">
               <Text as="span" css={{ color: '$blue600' }}>
                  Awesome Feature
               </Text>
               <Text as="h3" fontSize={'2xl'}>Your title here</Text>
               <Text
                  as="span"
                  css={{
                     maxWidth: '400px',
                     color: '$accents8',
                  }}
               >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  condimentum, nisl ut aliquam lacinia, nisl nisl aliquet nisl,
                  nec tincidunt nisl lorem eu nunc. Sed euismod, nisl ut aliquam
                  lacinia,
               </Text>

               <Flex
                  css={{
                     py: '$10',
                     gap: '$5',
                  }}
               >
                  <MdAccountBox />
                  <Flex direction={'column'}>
                     <Heading as="h4" fontWeight={'medium'}>
                        Your title here
                     </Heading>
                     <Text
                        as="span"

                        css={{
                           maxWidth: '400px',
                           color: '$accents8',
                        }}
                     >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed condimentum, nisl ut aliquam lacinia, nisl nisl
                        aliquet nisl,
                     </Text>
                  </Flex>
               </Flex>
               <Flex
                  css={{
                     py: '$10',
                     gap: '$5',
                  }}
               >
                  <MdAccountBox />
                  <Flex direction={'column'}>
                     <Heading as="h4" fontWeight={'medium'}>
                        Your title here
                     </Heading>
                     <Text
                        as="span"
                        css={{
                           maxWidth: '400px',
                           color: '$accents8',
                        }}
                     >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed condimentum, nisl ut aliquam lacinia, nisl nisl
                        aliquet nisl,
                     </Text>
                  </Flex>
               </Flex>
               <Flex
                  css={{
                     py: '$10',
                     gap: '$5',
                  }}
               >
                  <MdAccountBox />
                  <Flex direction={'column'}>
                     <Heading as="h4" fontWeight={'medium'}>
                        Your title here
                     </Heading >
                     <Text
                        as="span"

                        css={{
                           maxWidth: '400px',
                           color: '$accents8',
                        }}
                     >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed condimentum, nisl ut aliquam lacinia, nisl nisl
                        aliquet nisl,
                     </Text>
                  </Flex>
               </Flex>
            </Flex>
            <Flex align={'center'}>
               <FeatureIcon />
            </Flex>
         </Flex>
         <Spacer
            css={{ position: 'absolute', inset: '0p', left: '0', mt: '$5' }}
         />
      </>
   );
};
