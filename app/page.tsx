import {
  Box,
  Button,
  Checkbox,
  ClientOnly,
  HStack,
  Heading,
  Progress,
  RadioGroup,
  Skeleton,
  VStack,
} from "@chakra-ui/react"
import Image from "next/image"
import { ColorModeToggle } from "../components/color-mode-toggle"
import LandingNav from '../components/Landing/Nav'
import { Hero } from '../components/Landing/Hero'
import { Trusted } from '../components/Landing/Trusted'
import { Features1 } from '../components/Landing/Features1'

export default async function Page() {
  return (
    <Box textAlign="center" fontSize="xl">
      <LandingNav />
      <Hero/>
      <Trusted/>
      <Features1/>
    </Box>
  )
}
