import { Page, Text } from "@geist-ui/core";
import ToDoApp from "./components/ToDoApp";
function App() {
  return (
    <div className="App">
      <Page>
        <Page.Header center style={{ backgroundColor: "black", color: "white"  }}>
          <Text h1>ToDo App</Text>
        </Page.Header>
        <Page.Content>
          <ToDoApp />
        </Page.Content>
        <Page.Footer  style={{ backgroundColor: "black", color: "white" ,"textAlign":"center"}}>
          <Text h4>Footer</Text>
        </Page.Footer>
      </Page>
    </div>
  );
}

export default App;
