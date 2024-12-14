import { Icon } from '@chakra-ui/react';
import { Switch } from "#components/ui/switch"
import useColorMode from "../../hooks/useColorMode";
import { FaMoon, FaSun } from 'react-icons/fa';

const DarkModeSwitcher = () => {
  const [colorMode, setColorMode] = useColorMode();

  return (

    <Switch
      colorPalette="blue"
      size="lg"
      checked={colorMode == 'dark'}
      onCheckedChange={(e) => setColorMode(e.checked ? 'dark' : 'light')}
      trackLabel={{
        on: (
          <Icon color="yellow.400">
            <FaSun />
          </Icon>
        ),
        off: (
          <Icon color="gray.400">
            <FaMoon />
          </Icon>
        ),
      }}
    />
  );
};

export default DarkModeSwitcher;
