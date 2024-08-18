import React, { useState } from "react"
import { Cell } from "../components/Cell";
import { CellText } from "../types/CellText";
import { Box, Center, Flex, Heading, Spacer } from "@chakra-ui/react";
import { Board } from "../components/Board";

export const MainView = () => {
    return (
        <Box textAlign="center">
            <Heading>Tic-Tac-Toe</Heading>
            <Flex>
                <Spacer />
                <Board />
                <Spacer />
            </Flex>
        </Box>
    )
}