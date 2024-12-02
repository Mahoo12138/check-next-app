import { Button, Spacer, Grid, GridItem, Heading, Text, Flex } from '@chakra-ui/react';
import React from 'react';
import { MdAndroid } from 'react-icons/md';


export const Trusted = () => {
   return (
      <>
         <Flex
            direction={'column'}
            align={'center'}
            css={{
               'pt': '$20',
               'px': '$6',
               '@md': {
                  px: '$64',
               },
            }}
         >
            <Heading as="h2" size="4xl" css={{ textAlign: 'center' }} >
               Trusted by over 10000+ customers
            </Heading>
            <Text
               css={{
                  color: '$accents8',
                  maxWidth: '800px',
                  textAlign: 'center',
               }}
               fontWeight="normal"
               textStyle='lg'
            >
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
               eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <Grid
               gap={6}
               templateRows="repeat(2, 1fr)"
               templateColumns="repeat(4, 1fr)"
               // alignItems="center"

               css={{
                  // 'width': '100%',
                  // '&  span': {
                  //    whiteSpace: 'pre',
                  // },
               }}
               sm={{
                  width: '100%',
               }}
            >
               {Array(8).fill(0).map(() => {
                  return <GridItem colSpan={1}>
                     <Flex align={'center'} justifyContent={'center'}>
                        <MdAndroid />
                        <Text fontWeight={'semibold'} as="span" fontSize={'lg'}>
                           Company 1
                        </Text>
                     </Flex>
                  </GridItem>
               })}
            </Grid>
         </Flex>

         <Spacer
            css={{ position: 'absolute', inset: '0p', left: '0', mt: '$5' }}
         />
      </>
   );
};
