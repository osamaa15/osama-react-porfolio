import { useState } from "react";
import { Group, Button, TextInput, Text, Stack } from "@mantine/core";

function Calculator() {
  // Hooks
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  //  Handle Functions
  const handleNumberClick = (number: string) => {
    setExpression(expression + number);
  };

  const handleOperatorClick = (operator: string) => {
    setExpression(expression + operator);
  };

  const handleEqualsClick = () => {
    try {
      const result = eval(expression);
      setResult(result);
    } catch (error) {
      setResult("Invlaid expression");
    }
  };

  const handleClearClick = () => {
    setExpression("");
    setResult("");
  };

  return (
    <>
      <Stack gap={"sm"}>
        <TextInput
          variant="filled"
          value={expression}
          onChange={(e) => setExpression(e.target.value)}
          placeholder="Enter expression"
        />
        <Text ta={"center"} size="xl">
          {result}
        </Text>
      </Stack>
      <Stack align="center" mt={"md"}>
        <Group>
          <Button variant={"outline"} onClick={() => handleNumberClick("7")}>
            7
          </Button>
          <Button variant={"outline"} onClick={() => handleNumberClick("8")}>
            8
          </Button>
          <Button variant={"outline"} onClick={() => handleNumberClick("9")}>
            9
          </Button>
          <Button variant={"outline"} onClick={() => handleOperatorClick("/")}>
            /
          </Button>
        </Group>
        <Group>
          <Button variant={"outline"} onClick={() => handleNumberClick("4")}>
            4
          </Button>
          <Button variant={"outline"} onClick={() => handleNumberClick("5")}>
            5
          </Button>
          <Button variant={"outline"} onClick={() => handleNumberClick("6")}>
            6
          </Button>
          <Button variant={"outline"} onClick={() => handleOperatorClick("*")}>
            *
          </Button>
        </Group>
        <Group>
          <Button variant={"outline"} onClick={() => handleNumberClick("1")}>
            1
          </Button>
          <Button variant={"outline"} onClick={() => handleNumberClick("2")}>
            2
          </Button>
          <Button variant={"outline"} onClick={() => handleNumberClick("3")}>
            3
          </Button>
          <Button variant={"outline"} onClick={() => handleOperatorClick("-")}>
            -
          </Button>
        </Group>
        <Group>
          <Button variant={"outline"} onClick={() => handleNumberClick("0")}>
            0
          </Button>
          <Button variant={"outline"} onClick={() => handleNumberClick(".")}>
            .
          </Button>
          <Button variant={"outline"} onClick={handleEqualsClick}>
            =
          </Button>
          <Button variant={"outline"} onClick={() => handleOperatorClick("+")}>
            +
          </Button>
        </Group>

        <Button onClick={handleClearClick}>Clear</Button>
      </Stack>
    </>
  );
}

export default Calculator;
