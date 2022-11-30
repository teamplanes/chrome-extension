import React, { useEffect } from 'react';


import { Flex } from '@chakra-ui/react'
import { UserSelection } from '../Components/user-selection';

const Newtab = () => {
  const [user, setUser] = React.useState<{ id: string, email: string } | undefined>(undefined);

  useEffect(() => {
    chrome.identity.getProfileUserInfo({ accountStatus: 'ANY' as any }, function (info) {
      if (info.email) {
        setUser(info)
      }
    });
  }, []);
  // TODO add to theme!
  const popUpDimensions = 300;

  return (
    <Flex maxWidth={popUpDimensions} maxHeight={popUpDimensions} overflow="scroll">
      <Flex justify="center" direction="column" flex={1}>
        <Flex justify="center" direction="row">
          <Flex w={popUpDimensions} h={popUpDimensions} bg="red" justify="center">

            <Flex bg="white" flex={1} p={20}>

              <UserSelection email={user?.email} width={popUpDimensions * 0.8} userId={user?.id || 'logged-out-user'} />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Newtab;
