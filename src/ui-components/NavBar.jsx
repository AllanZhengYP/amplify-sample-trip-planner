/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Button, Flex, Icon, Image, Text } from "@aws-amplify/ui-react";
export default function NavBar(props) {
  const { frame32129767076, overrides, ...rest } = props;
  const starOneOnClick = useNavigateAction({ type: "url", url: "" });
  return (
    <Flex
      gap="172px"
      width="1315px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="21.916667938232422px 29.22222328186035px 21.916667938232422px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "NavBar")}
    >
      <Flex
        gap="1.826388955116272px"
        width="fit-content"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Logo29767073")}
      >
        <Icon
          width="16.44px"
          height="16.44px"
          viewBox={{ minX: 0, minY: 0, width: 16.4375, height: 16.4375 }}
          paths={[
            {
              d: "M7.41741 1.46634C7.76372 0.832647 8.67378 0.832647 9.02009 1.46634L10.0088 3.27557C10.1965 3.61891 10.582 3.80457 10.9674 3.7372L12.9984 3.38218C13.7097 3.25783 14.2771 3.96935 13.9976 4.6352L13.1996 6.53625C13.0481 6.89703 13.1433 7.3142 13.4363 7.57353L14.9802 8.94005C15.5209 9.41869 15.3184 10.3059 14.6235 10.5026L12.6397 11.0639C12.2632 11.1704 11.9964 11.505 11.9763 11.8957L11.8705 13.9548C11.8334 14.676 11.0135 15.0708 10.4265 14.6501L8.75072 13.4491C8.4327 13.2212 8.0048 13.2212 7.68678 13.4491L6.01097 14.6501C5.42401 15.0708 4.60407 14.676 4.56701 13.9548L4.46119 11.8957C4.44111 11.505 4.17432 11.1704 3.79783 11.0639L1.81395 10.5026C1.11909 10.3059 0.916578 9.41869 1.45732 8.94005L3.00118 7.57353C3.29416 7.31419 3.38938 6.89703 3.23793 6.53625L2.43988 4.63521C2.16035 3.96935 2.72777 3.25783 3.43913 3.38218L5.4701 3.7372C5.85553 3.80457 6.24105 3.61891 6.42869 3.27557L7.41741 1.46634Z",
              fill: "rgba(20,155,252,1)",
              fillRule: "nonzero",
            },
          ]}
          shrink="0"
          position="relative"
          onClick={() => {
            starOneOnClick();
          }}
          {...getOverrideProps(overrides, "Star 1")}
        ></Icon>
        <Text
          fontFamily="Inter"
          fontSize="18.26388931274414px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          textTransform="capitalize"
          lineHeight="21.402996063232422px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Logo"
          {...getOverrideProps(overrides, "Logo29767075")}
        ></Text>
      </Flex>
      <Flex
        gap="29.22222328186035px"
        width="989px"
        height="28px"
        justifyContent="flex-end"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 71px"
        {...getOverrideProps(overrides, "Frame 321")}
      >
        <Button
          display="flex"
          gap="0"
          width="94px"
          height="22px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          border="1px SOLID rgba(174,179,183,1)"
          borderRadius="5px"
          padding="8px 16px 8px 16px"
          size="default"
          isDisabled={false}
          variation="default"
          children="Add a Trip"
          {...getOverrideProps(overrides, "Button")}
        ></Button>
        <Image
          width="41.09px"
          height="41.09px"
          shrink="0"
          position="relative"
          borderRadius="146.11111450195312px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "image")}
        ></Image>
      </Flex>
    </Flex>
  );
}
