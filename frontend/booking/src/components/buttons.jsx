import { Box, Text, useColorModeValue } from "@chakra-ui/react"

export const Buttons = ({padding,border,borderRadius,fontSize,textTransform,text,width,isActive}) => {
  return (
    <Box
            border={border || "1px solid #9AC6CF"}
            padding={padding || 5}
            bgColor={isActive && "green"}
            borderRadius={borderRadius || "10"}
            _hover={{
              bgColor: "#9AC6CF",
            }}
            width={width}
          >
            <Text
              color={useColorModeValue("black", "white")}
              fontSize={fontSize || "xl"}
              textAlign={"center"}
              textTransform={textTransform || "uppercase"}
            >
              {text}
            </Text>
          </Box>
  )
}