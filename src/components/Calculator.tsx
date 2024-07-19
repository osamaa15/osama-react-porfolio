import { useState } from "react";
import { Group, Button, TextInput, Text, Stack, Switch } from "@mantine/core";

function Calculator() {
  // Hooks
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");
  const [isScientific, setIsScientific] = useState(false);
  // const [power, setPower] = useState("");
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
      setResult("Invalid expression");
    }
  };

  const handleClearClick = () => {
    setExpression("");
    setResult("");
  };
  const handleSinClick = () => {
    if (expression !== "") {
      setResult(Math.sin(parseFloat(expression)).toString());
      setExpression(`${expression} sin`);
    }
  };

  const handleCosClick = () => {
    if (expression !== "") {
      setResult(Math.cos(parseFloat(expression)).toString());
      setExpression(`${expression} cos`);
    }
  };

  const handleTanClick = () => {
    if (expression !== "") {
      setResult(Math.tan(parseFloat(expression)).toString());
      setExpression(`${expression} tan`);
    }
  };
  const handleSqrtClick = () => {
    if (expression !== "") {
      setResult(Math.sqrt(parseFloat(expression)).toString());
      setExpression(`√${expression}`);
    }
  };

  const handleLogClick = () => {
    if (expression !== "") {
      setResult(Math.log(parseFloat(expression)).toString());
      setExpression(`${expression} log`);
    }
  };

  // const handlePowClick = (power: any) => {
  //   if (expression !== "") {
  //     setResult(Math.pow(parseFloat(expression), power).toString());
  //     setExpression(`${expression} ^ ${power}`);
  //   }
  // };

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

        {isScientific && (
          <Group>
            <Button variant={"outline"} onClick={handleSinClick}>
              sin
            </Button>
            <Button variant={"outline"} onClick={handleCosClick}>
              cos
            </Button>
            <Button variant={"outline"} onClick={handleTanClick}>
              tan
            </Button>
          </Group>
        )}

        {isScientific && (
          <Group>
            <Button variant={"outline"} onClick={handleSqrtClick}>
              sqrt
            </Button>
            <Button variant={"outline"} onClick={handleLogClick}>
              log
            </Button>
            {/* <Button variant={"outline"} onClick={() => handlePowClick(power)}>
              x^
            </Button> */}
          </Group>
        )}
        <Switch
          checked={isScientific}
          onChange={(event) => setIsScientific(event.currentTarget.checked)}
          label="Scientific"
        />
        <Button onClick={handleClearClick}>Clear</Button>
      </Stack>
    </>
  );
}

export default Calculator;
